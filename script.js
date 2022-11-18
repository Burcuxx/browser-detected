
//** Ios select option hiding
function browserDetect(){
    
    let chromeAgent = navigator.userAgent.indexOf("Chrome") > -1;
    let safariAgent = navigator.userAgent.indexOf("Safari") > -1;
    //let platformAgent = navigator.platform.indexOf("/iPhone|iPod|iPad/") > -1;
    var newStyle = document.createElement('style');
    
    if ((chromeAgent) && (safariAgent)) 
        safariAgent = false;
                 
    if (safariAgent && window.matchMedia('only screen and (max-width: 640px)').matches) 
    {
        newStyle.innerHTML = `
            .m-input___option__cotnainer {
                display: none;
            }`;
    }
    else {
        newStyle.innerHTML = `
          .m-input___option__cotnainer {
            display: block;
          }`;
    }
    document.head.appendChild(newStyle);
    
}
browserDetect();
