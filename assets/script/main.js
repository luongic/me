const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



// Tab view 1 control
const about = $(".about");  
const btns = $$(".tab-btn");  
const articles = $$(".content");  

about.addEventListener("click", function (e) {  
    const id = e.target.dataset.id;  
    if (id) {  
        // remove selected from other buttons  
        btns.forEach(function (btn) {  
        btn.classList.remove("active");  
    });  
    e.target.classList.add("active");  
        // hide other articles  
        articles.forEach(function (article) {  
        article.classList.remove("active");  
    });  
    const element = document.getElementById(id);  
    element.classList.add("active");  
    }  
});  



// panel view 3 control



// get browser name

                 
let userAgent = navigator.userAgent;
let browserName;
const linkicon = $$('.linkto__icon')

if(userAgent.match(/chrome|chromium|crios/i)){
    browserName = "chrome";
    linkicon.forEach((icon) =>{
        icon.innerHTML= `<i class="fa-brands fa-${browserName}"></i>`
    })
}else if(userAgent.match(/firefox|fxios/i)){
    browserName = "firefox";
    linkicon.forEach((icon) =>{
        icon.innerHTML= `<i class="fa-brands fa-${browserName}"></i>`
    })
}  else if(userAgent.match(/safari/i)){
    browserName = "safari";
    linkicon.forEach((icon) =>{
        icon.innerHTML= `<i class="fa-brands fa-${browserName}"></i>`
    })
}else if(userAgent.match(/opr\//i)){
    browserName = "opera";
    linkicon.forEach((icon) =>{
        icon.innerHTML= `<i class="fa-brands fa-${browserName}"></i>`
    })
} else if(userAgent.match(/edg/i)){
    browserName = "edge";
    linkicon.forEach((icon) =>{
        icon.innerHTML= `<i class="fa-brands fa-${browserName}"></i>`
    })
}else{
    browserName="browser";
}



const listPro = $('.view3__content')


const projects = [
    {
        name: 'File manager ',
        url: '/assets/image/filemanager.png',
        link: 'https://github.com/luongic/FileExplorer-Using-Lucene',
        git: 'https://github.com/luongic/FileExplorer-Using-Lucene'
    },
    {
        name: 'Game 3D ',
        url: '/assets/image/homecoming.jpg',
        link: 'https://www.youtube.com/watch?v=Pan-ITOx_Gs',
        git: 'https://github.com/luongic/What-s-Next-Sample'
    },
    {
        name: 'Clone UI Shopee ',
        url: '/assets/image/shopeeUI.png',
        link: 'https://luongic.github.io/shopeeClone/',
        git: 'https://github.com/luongic/shopeeClone'
    },
    {
        name: 'Clone UI Instagram ',
        url: '/assets/image/instagramUI.png',
        link: 'https://luongic.github.io/instagramUI/',
        git: 'https://github.com/luongic/instagramUI'
    },
    {
        name: 'Mini Music Player ',
        url: '/assets/image/musicplayer.png',
        link: 'https://luongic.github.io/m2p/',
        git: 'https://github.com/luongic/m2p'
    }
]

const render = function(url1, url2, url3){
    const htmls = `
            <div class="item-container">
                <div class="item prev-item" data-index="${url1}" onclick = leftClick(this) style="background-image: url(.${projects[url1].url});"></div>
                <div class="item curr-item" data-index="${url2}" style="background-image: url(.${projects[url2].url});">
                    <div class="curr-link">
                        <a href="${projects[url2].link}" class="" target="_blank">
                            <i class="fa-brands fa-safari"></i>
                        </a>
                        <a href="${projects[url2].git}" class="" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>    
                    
                    <span>${projects[url2].name} </span>
                </div>
                <div class="item next-item" data-index="${url3}" onclick = rightClick(this) style="background-image: url(.${projects[url3].url});"></div>
            </div>
            `
    listPro.innerHTML = htmls

    const backgroundEle = $('.view3_oder')
    backgroundEle.style.backgroundImage = `url(.${projects[url2].url})`
}


const start = function() {
    render(projects.length - 1, 0, 1)
}

start()


const leftClick = function(){
    const prev = $('.prev-item')
    const endItem = projects.length - 1
    let currItem = Number(prev.dataset.index) + 1
    let prev_Item = currItem - 1

    if (currItem >= projects.length){
        currItem = 0
        prev_Item = endItem
    }

    render((prev_Item - 1 ) >= 0 ? prev_Item - 1 : endItem, prev_Item, currItem) 
}

const rightClick = function(){
    const next = $('.next-item')
    const endItem = projects.length - 1

    let currItem = Number(next.dataset.index) - 1
    let next_Item = currItem + 1

    if (currItem < 0){
        currItem = endItem
        next_Item = 0
    }

    render( currItem, next_Item, (next_Item + 1 ) >= endItem + 1 ?  0 : next_Item + 1)
}

