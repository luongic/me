
// Tab view 1 control
const about = document.querySelector(".about");  
 const btns = document.querySelectorAll(".tab-btn");  
 const articles = document.querySelectorAll(".content");  
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
const linkicon = document.querySelectorAll('.linkto__icon')

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

