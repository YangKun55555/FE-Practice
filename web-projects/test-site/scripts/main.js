let myImage = document.querySelector("img");
myImage.onclick = function changeImage(){
  currentyImage = myImage.getAttribute("src");
  if(currentyImage==="images/firefox.jpeg"){
    myImage.setAttribute("src","images/smile.jpeg");
  }else{
    myImage.setAttribute("src","images/firefox.jpeg");
  }
}

function setHeading(name){
  let h1Element = document.querySelector("h1");
  h1Element.textContent='Mozilla 酷毙了，' + name + '！';
}

function setCurrentUserName(){
  let name =prompt("输入用户名");
  localStorage.setItem("name",name);
  setHeading(name);
}

let storageName = localStorage.getItem("name");
if(!storageName){
  setCurrentUserName();
}else{
  setHeading(storageName);
}

let myButton = document.querySelector("button");
myButton.onclick = setCurrentUserName;