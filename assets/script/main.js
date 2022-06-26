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
        name: 'No',
        url: '/assets/image/',
        link: 'null',
        git: 'null'
    },
    {
        name: 'File manager',
        url: '/assets/image/filemanager.png',
        link: 'https://github.com/luongic/FileExplorer-Using-Lucene',
        git: 'https://github.com/luongic/FileExplorer-Using-Lucene'
    },
    {
        name: 'Game 3D',
        url: '/assets/image/homecoming.jpg',
        link: 'https://www.youtube.com/watch?v=Pan-ITOx_Gs',
        git: 'https://github.com/luongic/What-s-Next-Sample'
    },
    {
        name: 'Clone UI Shopee',
        url: '/assets/image/shopeeUI.png',
        link: 'https://luongic.github.io/shopeeClone/',
        git: 'https://github.com/luongic/shopeeClone'
    },
    {
        name: 'Clone UI Instagram',
        url: '/assets/image/instagramUI.png',
        link: 'https://luongic.github.io/instagramUI/',
        git: 'https://github.com/luongic/instagramUI'
    },
    {
        name: 'Mini Music Player',
        url: '/assets/image/musicplayer.png',
        link: 'https://luongic.github.io/m2p/',
        git: 'https://github.com/luongic/m2p'
    },
    {
        name: 'No',
        url: '/assets/image/',
        link: 'null',
        git: 'null'
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
                    
                    <span>${projects[url2].name}</span>
                </div>
                <div class="item next-item" data-index="${url3}" onclick = rightClick(this) style="background-image: url(.${projects[url3].url});"></div>
            </div>
            `
    listPro.innerHTML = htmls
}


const start = function() {
    render(5, 1, 2)
}
start()

const leftClick = function(){
    const prev = $('.prev-item')
    const prevItem = prev.dataset.index
    
    if (prevItem == 0){
        render(5, 0, 1)
    }
    else if(prevItem == 1){
        render(5, 1, 2)
    }
    else if(prevItem == 2){
        render(1, 2, 3)
    }
    else if(prevItem == 3){
        render(2, 3, 4)
    }
    else if(prevItem == 4){
        render(3, 4, 5)
    }
    else{
        render(4, 5, 1)
    }
    
}

const rightClick = function(e){
    const next = $('.next-item')
    const nextItem = next.dataset.index
    
    if (nextItem == 1){
        render(5, 1, 2)
    }
    else if(nextItem == 2){
        render(1, 2, 3)
    }
    else if(nextItem == 3){
        render(2, 3, 4)
    }
    else if(nextItem == 4){
        render(3, 4, 5)
    }
    else if(nextItem == 5){
        render(4, 5, 1)
    }
    else{
        render(5, 1, 2)
    }
}

