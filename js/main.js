var menuItem = document.getElementById("menu").getElementsByTagName("li");
var headLine=document.getElementById("text");
var btn=document.getElementById("zar");
var myMenu=document.getElementById("menu");
var counter=1;

//for(i = 0; i < menuItem.length; i++ ){
   // menuItem[i].addEventListener("click", selectItem);}
 myMenu.addEventListener("click" , selectItem);

function selectItem(n){
    if(n.target.nodeName == "LI"){
       headLine.innerHTML = n.target.innerHTML;
    for(i = 0; i < menuItem.length; i++ ){
    menuItem[i].classList.remove("selected");
}
    n.target.classList.add("selected"); 
    }
}

btn.addEventListener("click", newItem );
function newItem(){
    myMenu.innerHTML +="<li> سطر جديد تم اضافته للقائمه  " + counter +"</li>";
    counter++; 
}