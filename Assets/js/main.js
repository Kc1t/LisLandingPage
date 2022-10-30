$(window).on("load",function(){
    $(".entrd").fadeOut("slow");
});

function executar(){
    var meuVideo = document.getElementById("meuVideo");
    if(meuVideo.pause)
    {
        meuVideo.play();
    }
    else{
        meuVideo.pause();
    }


    
}

function execut(){
    var Comp = document.getElementById("Comp");
    
    if(Comp.pause)
    {
        Comp.play();
    }
    else{
        Comp.pause();
    }

}





