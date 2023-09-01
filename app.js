const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let circle =  document.querySelector("#minicircle")



function firtpageanimation(){
    var tl = gsap.timeline();


  tl.from("#nav", {
    y:"-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
   .to(".boundingelem", {
    y: 0,
    duration: 2,
    delay: -1,
    ease: Expo.easeInOut,
    stagger: .2
  })
  .from("#herofooter", {
    y: -10,
    opacity: 0,
    duation: 2,
    delay: -.5,
    ease: Expo.easeInOut
  })


}



let timeout;

function circleskew (){
  //define default scale value . 
  let xscale = 1
  let yscale = 1

  let xprev = 0;
  let yprev = 0;

    window.addEventListener("mousemove", function(dets){
       clearTimeout(timeout)
  

        xscale = gsap.utils.clamp(.7, 1.3, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.7, 1.3, dets.clientY - yprev)

           xprev = dets.clientX
           yprev = dets.clientY
     

           cursorfollower(xscale, yscale)
        timeout = setTimeout( circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`, 100)
    })
}



function cursorfollower(xscale, yscale){
  window.addEventListener("mousemove", function(dets){
   circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

//   console.log(dets)
  })
}

cursorfollower()
firtpageanimation()
circleskew()


let elem = document.querySelectorAll(".elem")

elem.forEach(function(elem){
    let rotate = 0;
    let diff = 0;

    elem.addEventListener("mouseleave", function(dets){
     
           gsap.to(elem.querySelector("img"), {
               opacity: 0,
               ease: Power3,
           })
     })

  elem.addEventListener("mousemove", function(dets){
       let vertical =   dets.clientY - (elem.getBoundingClientRect().top + 150) 
      console.log(vertical)
      diff = dets.clientX - rotate
      rotate = dets.clientX

   
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: vertical,
            left: dets.clientX,
            rotate:  gsap.utils.clamp(-20, 20, diff*0.2)
        })
  })
})
 