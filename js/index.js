window.onload=function(){
   
    // console.log(top);
    $(window).scroll( function() {
        var top= $("html").scrollTop();
        if(top>=1000){
            $(".headroom").css({
                position: "fixed",
                left:"160px"
            });
            
        }else{
            $(".headroom").css({
                position: "absolute",
                left:"0",
                top:"0",
            });
        }
    } );
}