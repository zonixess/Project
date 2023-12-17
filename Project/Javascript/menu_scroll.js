window.addEventListener("scroll",function(){
    var menu = document.querySelector("#menu-bg");
    var menu1 =document.querySelector("#menu");
    var menu_r =this.document.querySelector(".menu-right");
    var menu_l =this.document.querySelector("#menu-left");
    var c_menu = this.document.querySelector(".container-menu");
    if(scrollY > 250){
        menu.style.background ="white";
        menu.style.bottom ="-122px";
        menu1.style.background ="none";
        // c_menu.style.position="26px";
        menu_r.style.padding = "25px 20px";
        menu_l.style.padding = "25px 0";
        
    }else{
        menu.style.background ="unset";
        menu.style.bottom ="-30px";
        menu1.style.background ="white";
        menu_r.style.padding = "25px 60px";
        menu_l.style.padding = "25px 30px";
    }
})
