let selectedIndex = 0;
//监听菜单hover
const menuRefreshLockMap = new Map();

// 加载头部下拉
fetchData("initHeaderDetail").then(dataList => initHeaderDetail("header-detail-div", dataList));
// 加载轮播左边导航
fetchData("initMenuLi").then(dataList => initMenuLi("menu-ul", dataList));

// 加载轮播图片
fetchData("initCarouselImg").then(dataList => {
    let carouselImgElems = document.querySelectorAll(".carousel .carousel-img");
    carouselImgElems.forEach((carouselImgElem, index) => carouselImgElem.src = dataList[index].src);
})
// 加载横幅左边icon
addFourthIcon();

// 加载横幅图片
fetchData("initFourthImg").then(dataList => {
    document.querySelectorAll(".fourth .right img").forEach((elem, index) => {
        elem.src = dataList[index].src;
        elem.parentNode.href = dataList[index].href;
    });
})

fetchData("initSixbox").then(dataList => initSixbox("six-box", dataList));

//监听轮播点击事件
document.querySelector(".carousel .dot-list").addEventListener("click", e => {
    if (!e.target.classList.contains("dot-selected")) {
        selectedIndex = parseInt(e.target.dataset.index);
        switchDot(selectedIndex);
        switchImg(selectedIndex);
    }
});

document.querySelectorAll(".carousel [class*='carousel_btn_']")
    .forEach(elem => elem.addEventListener("click", e => {
        let direction = parseInt(e.target.dataset.direction);
        if ([1, -1].includes(direction)) {
            selectedIndex = ((selectedIndex > 0 ? selectedIndex : selectedIndex + 4) + direction) % 4;
            switchDot(selectedIndex);
            switchImg(selectedIndex);
        }
    }));

document.querySelector(".menu").addEventListener("mouseover", e => {

    let target = e.target;
    let pick;
    let parentNode;
    if (target.classList.contains("menu-item")) {
        parentNode = target.parentNode.querySelector(".menu-item-page");
        pick = target.dataset.pick;
    } else if (target.parentNode.classList.contains("menu-item")) {//点到菜单里的图标了
        parentNode = target.parentNode.parentNode.querySelector(".menu-item-page");
        pick = target.parentNode.dataset.pick;
    } else {
        //点到右边展示页面去了
        return;
    }
    initMenuPageBoxProxy(parentNode, pick);
});

function addFourthIcon() {
    fetchData("addIconFourth").then(iconList => {
        document.querySelectorAll(".fourth div.left div.iconfont").forEach((elem, index) => {
            elem.classList.add(iconList[index].class);
            elem.textContent = iconList[index].name;
            elem.parentNode.href = iconList[index].href;
        });
    });
}

function initHeaderDetail(templateId, dataList) {
    let parentNode = document.querySelector(".header .detail div");
    let templateInnerHTML = document.getElementById(templateId).textContent;
    dataList.forEach(({href, name, price, src}) => {
        let createdElement = document.createElement("div");
        createdElement.innerHTML = eval("`" + templateInnerHTML + "`");
        parentNode.appendChild(createdElement.firstElementChild)
    });
}

function initMenuLi(templateId, dataList) {
    let parentNode = document.querySelector(".menu ul");
    let templateInnerHTML = document.getElementById(templateId).textContent;
    dataList.forEach(({pick, name}) => {
        let createdElement = document.createElement("ul");
        createdElement.innerHTML = eval("`" + templateInnerHTML + "`");
        parentNode.appendChild(createdElement.firstElementChild)

    });
}

function repeatSix(sixNode) {
    let createdElement = document.createElement("div");
    createdElement.classList.add("six");
    createdElement.classList.add("clear-after");
    createdElement.innerHTML = sixNode.innerHTML;
    sixNode.parentNode.appendChild(createdElement)
}

function initSixbox(templateId, dataList) {
    let parentNode = document.querySelector(".six");
    let templateInnerHTML = document.getElementById(templateId).textContent;
    dataList.forEach(({href = "javascript:void(0)", src, name, description, price, noPrice = ""}) => {
        if (noPrice) {
            noPrice = "<del>" + noPrice + "</del>";
        }
        let createdElement = document.createElement("div");
        createdElement.innerHTML = eval("`" + templateInnerHTML + "`");
        parentNode.appendChild(createdElement.firstElementChild)

    });
    for (let i = 0; i < 2; i++) {
        repeatSix(parentNode);
    }
}


function switchDot(selectedIndex) {
    const dotSelected = "dot-selected";
    let dotList = document.querySelectorAll(".carousel .dot-list .dot");
    dotList.forEach(dotElem => dotElem.classList.remove(dotSelected));
    dotList.item(selectedIndex).classList.add(dotSelected);
}

function switchImg(selectedIndex) {
    //切换图片
    let imgNodes = document.querySelectorAll("img.carousel-img");
    imgNodes.forEach((node) => node.classList.remove("opacity1"));
    imgNodes.item(selectedIndex).classList.add("opacity1");//放外面为了先淡出在进入
}

function initMenuPageBoxProxy(parentNode, pick) {
    if (menuRefreshLockMap.get(pick)) {
        return;//已经有过了，节流
    }
    fetchData("initMenuPageBoxProxy").then(dataList => {
        initMenuPageBox(parentNode, dataList);
        menuRefreshLockMap.set(pick, dataList.length);
        setTimeout(() => menuRefreshLockMap.delete(pick), 1000 * 10);//节流
    });
}

function initMenuPageBox(parentNode, dataList) {
    const pageWidthVarName = "--pageWidth";
    const oneColWidth = 248;
    // console.log(getComputedStyle(menu_item_page).getPropertyValue(pageWidthVarName));
    let colNum = Math.floor((dataList.length - 1) / 6) + 1;
    // colNum = colNum > 0 ? colNum : 1; //min-width
    parentNode.style.setProperty(pageWidthVarName, colNum * oneColWidth + "px");
    parentNode.innerHTML = "";//delete all node

    const MenuPageBoxTemplateInnerHTML = document.getElementById("menu-li-page-box").textContent;
    dataList.forEach(({src, name, href}) => {
        let createdElement = document.createElement("div");
        createdElement.innerHTML = eval("`" + MenuPageBoxTemplateInnerHTML + "`");
        parentNode.appendChild(createdElement.firstElementChild);
    });
}

//mock数据接口
async function fetchData(url) {
    switch (url) {
        case "initSixbox": {
            let dataList = [
                {
                    // href: "",
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281411_fc68b941c011a8bbf67db570d0985d7a.png?thumb=1&w=200&h=200&f=webp&q=90",
                    name: "小米电视S系列",
                    description: "144HZ超高刷 3+32G 多色温色彩还原技术",
                    price: "1999元",
                    noPrice: "2999元",
                },
            ]
            dataList = new Array(8).fill(dataList[0]);
            return dataList;
        }
        case "initFourthImg": {
            return [
                {
                    href: "#",
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b67117bc92924fb2ff0e7ad2be86084.png?w=632&h=340"
                },
                {
                    href: "#",
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8dede2520f8dfff9c9b690af498cafe8.jpg?w=632&h=340"
                },
                {
                    href: "#",
                    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ac77590368ff636d0b4f6a988133f55.png?w=632&h=340"
                },
            ]
        }
        case "addIconFourth": {
            return [
                {
                    href: "#",
                    name: "保障服务",
                    class: "i-clock",
                }, {
                    href: "#",
                    name: "企业团购",
                    class: "i-building",
                }, {
                    href: "#",
                    name: "F码通道",
                    class: "i-F",
                }, {
                    href: "#",
                    name: "米粉卡",
                    class: "i-sim",
                }, {
                    href: "#",
                    name: "以旧换新",
                    class: "i-chongzhi",
                }, {
                    href: "#",
                    name: "话费充值",
                    class: "i-paid",
                },
            ];
        }
        case "initHeaderDetail": {
            const detailData = {
                href: "#",
                name: "小米手机红米手机",
                price: "1888元",
                src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4846501f1e9be04d6d2e859deb0d80e.png?thumb=1&w=160&h=110&f=webp&q=90"
            };
            return new Array(6).fill(detailData);
        }
        case "initCarouselImg": {
            const imgSrc1 = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34bf4e726f493dc212757b6c3436cf7d.png?w=2452&h=920";
            const imgSrc2 = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/397f2569b126d8fba446b6bbf57ef771.jpg?thumb=1&w=1226&h=460&f=webp&q=90";
            const imgSrc3 = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01a422c2d04a7668e6d1d4748aeadf61.jpg?thumb=1&w=1226&h=460&f=webp&q=90";
            const imgSrc4 = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69d476acc0af86cce9521b97ea29214f.jpg?thumb=1&w=1226&h=460&f=webp&q=90";
            return [
                {
                    href: "javascript:void(0)",
                    src: imgSrc1,
                }, {
                    href: "javascript:void(0)",
                    src: imgSrc2,
                }, {
                    href: "javascript:void(0)",
                    src: imgSrc3,
                }, {
                    href: "javascript:void(0)",
                    src: imgSrc4,
                }
            ];
        }
        case "initMenuPageBoxProxy": {
            const boxItem = {
                href: "#",
                name: "小米智能电视",
                src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2e3fdbf6fe7a13c06644f16c8dc8877.png?thumb=1&w=40&h=40&f=webp&q=90"
            };
            return new Array(getRandom(1, 24)).fill(boxItem);
        }
        case "initMenuLi": {
            return [
                {
                    pick: "mobile",
                    name: "手机"
                }, {
                    pick: "tv",
                    name: "电视"
                }, {
                    pick: "appliances",
                    name: "家电"
                }, {
                    pick: "desktop",
                    name: "笔记本 平板"
                }, {
                    pick: "outdoor",
                    name: "出行 穿戴"
                }, {
                    pick: "player",
                    name: "耳机 音响"
                }, {
                    pick: "health",
                    name: "健康 儿童"
                }, {
                    pick: "life",
                    name: "生活 箱包"
                }, {
                    pick: "wifi",
                    name: "智能 路由器"
                }, {
                    pick: "power",
                    name: "电源 配件"
                }
            ];
        }
        default:
            throw new Error("数据请求失败");
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}