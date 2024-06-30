(() => {

    let fid = document.getElementById("fid");

    let map = new Map();
    map.set("wyy", "https://music.163.com/#/song?id=2130796760");
    map.set("ryf", "https://www.ruanyifeng.com/blog/");
    map.set("git", "https://learngitbranching.js.org/?locale=zh_CN");
    map.set("dy", "https://www.douyin.com/");

    //节流
    let timer
    function flowD(action) {
        if (!timer) {
            fid.src = map.get(action);
            timer = setTimeout(() => {
                timer = null;
            }, 2000);
        }
    }

    document.querySelectorAll(":where(.nav, .header)")
        .forEach(elem => elem.addEventListener("click", (e) => {
            if (e.target.dataset.action) {
                flowD(e.target.dataset.action);
            }
        }));
})();