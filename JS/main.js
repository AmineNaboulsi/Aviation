window.onscroll = () =>{
    const actionbar = document.getElementById("action_bar");
    let scrollPosition = window.scrollY;
    if(scrollPosition==0){
        actionbar.style.backdropFilter = 'blur(0px)' ;
        actionbar.style.borderBottom = 'none' ;

        console.log("0 position");
    }
    else{
        actionbar.style.backdropFilter = 'blur(10px)' ;
        actionbar.style.borderBottom = '1px solid #C4C4C4' ;
        console.log("bzaf position");
    }
}
