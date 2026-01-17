let a=document.createElement('h1');
a.style.color='green';
a.innerText='网站建设中';
document.body.appendChild(a);
setInterval(function(v){
      if(v.innerText=='网站建设中......'){
              v.innerText='网站建设中';
      } else {
              v.innerText+='.';
      }
},233,a);
      }
      }
})