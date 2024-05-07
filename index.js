var crsr = document.querySelector("#cursor")
var blr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove" ,function(dets){
    crsr.style.left =dets.x+"px",
    crsr.style.top = dets.y+"px"
    blr.style.left =dets.x -150 +"px",
    blr.style.top = dets.y -150 +"px"
   
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
       crsr.style.scale = 4
       crsr.style.border = "1px solid #fff"
       crsr.style.backgroundColor = "transparent"
    }) 
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
     }) 
})



gsap.to("#nav",{
backgroundColor:"#000",
duration:0.5,
height:"110px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    
    start:"top -10%",
    end:"top -11%",
    scrub:1 

}



})

gsap.to("#main",{
backgroundColor:"#000",
scrollTrigger:{
    trigger:"main",
    scroller:"body",
   
    start:"top 70%",
    end:"top 65%",
    scrub:1
}

})
gsap.from("#about-us img,#aboutus-in",{
    y:90,
    opacity:0,
    duration:1,
    
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from(".card",{

    scale:0.8,
    //opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        
        start:"top 55%",
        end:"top 45",
        scrub:4
    }

})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }

})
gsap.from("#page4 h1",{
    y:70,
    
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        
        start:"top 95%",
        end:"top 70%",
        scrub:3
    }


})