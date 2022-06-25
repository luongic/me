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


const app = {
    
    projects: [
        {
            name: 'File manager',
            url: '/assets/image/',
            link: ' ',
            no: 0
        },
        {
            name: 'File manager',
            url: '/assets/image/filemanager.png',
            link: ' ',
            no: 1
        },
        {
            name: 'Game 3D',
            url: '/assets/image/homecoming.jpg',
            link: ' ',
            no: 2
        },
        {
            name: 'Clone UI Shopee',
            url: '/assets/image/shopeeUI.png',
            link: ' ',
            no: 3
        },
        {
            name: ' ',
            url: '/assets/image/instagramUI.png',
            link: ' ',
            no: 4
        },
        {
            name: ' ',
            url: '/assets/image/musicplayer.png',
            link: ' ',
            no: 5
        },
        {
            name: ' ',
            url: '/assets/image/',
            link: ' ',
            no: 6
        }
    ],
    render: function(url1, url2, url3){
    
        const htmls = `
            <div class="item-container">
                <div class="item prev-item" data-index="${url1}" onclick = leftClick() style="background-image: url(${this.projects[url1].url})"></div>
                <div class="item curr-item" data-index="${url2}" style="background-image: url(${this.projects[url2].url})"></div>
                <div class="item next-item" data-index="${url3}" onclick = rightClick() style="background-image: url(${this.projects[url3].url})"></div>
            </div>
            `
        listPro.innerHTML = htmls
    },

    start: function() {
        this.render(5, 1, 2)
    }
}

app.start()

const leftClick = function(){
    const prev = $('.prev-item')
    const prevItem = prev.dataset.index
    console.log(prevItem)
    prev.onclick = function(){
        if (prevItem == 0){
            app.render(5, 0, 1)
        }
        else if(prevItem == 1){
            app.render(5, 1, 2)
        }
        else if(prevItem == 2){
            app.render(1, 2, 3)
        }
        else if(prevItem == 3){
            app.render(2, 3, 4)
        }
        else if(prevItem == 4){
            app.render(3, 4, 5)
        }
        else{
            app.render(4, 5, 1)
        }
    }
}

const rightClick = function(){
    const next = $('.next-item')
    const nextItem = next.dataset.index
    next.onclick = function(){
        if (nextItem == 1){
            app.render(5, 1, 2)
        }
        else if(nextItem == 2){
            app.render(1, 2, 3)
        }
        else if(nextItem == 3){
            app.render(2, 3, 4)
        }
        else if(nextItem == 4){
            app.render(3, 4, 5)
        }
        else if(nextItem == 5){
            app.render(4, 5, 1)
        }
        else{

        }
    }
}