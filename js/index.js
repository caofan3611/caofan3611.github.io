let main_h1=document.createElement('h1');
let header=document.createElement('div');
document.body.appendChild(header);
header.style.width='auto';
header.style.height='123px';
header.style.border='2px solid skyblue'
header.style.borderRadius='8px 8px 8px 8px'
header.style.backgroundColor='skyblue';
let tmp=document.createElement('h1');
tmp.innerText='caofan的没用东西';
tmp.style.fontSize='25px'
tmp.style.textAlign='center';
header.appendChild(tmp);
tmp=document.createElement('a');
tmp.href='badgames/count-of-number';
tmp.innerText='没用的看数字有几个的游戏(我知道这边的css很简陋，但是我来不及了，明天再写吧)';
document.body.appendChild(tmp);