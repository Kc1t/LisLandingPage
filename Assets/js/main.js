$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

function executar(){
    var meuVideo = document.getElementById("meuVideo");
    
    if(meuVideo.pause)
    {
        meuVideo.play();
    }
    else if(meuVideo.play){
        meuVideo.pause();
    }

}

function execut(){
    var meuVideo = document.getElementById("Comp");
    
    if(Comp.pause)
    {
        Comp.play();
    }
    else{
        Comp.pause();
    }

}