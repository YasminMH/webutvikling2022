const menu = document.getElementById('main-menu');
const burger = document.getElementById("ham-icon")
const hamMenu = () =>{
   if(menu.style.display == 'block'){
    menu.style.display = 'none';
    burger.innerHTML = '<i class="fa-solid fa-bars"></i>'
   } 
   else{
    menu.style.display = 'block';
    burger.innerHTML = '<i class="fa-solid fa-xmark"></i>'
   }
   return false;
}