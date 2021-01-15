Splitting();
gsap.registerPlugin(CSSRulePlugin);

//////////////////////////////////////////////////
let mainTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#mainVisual",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: true
    }
});

mainTL.to("#mainVisual .title", {
        duration: 1.25,
        y: 100,
        opacity: 0,
    })
    .to("#mainVisual .prince", {
        y: -300,
        opacity: 0,
    }, 0);


introTL = gsap.timeline();
introTL.from("#mainVisual .title .char", {
        opacity: 0,
        duration: 1.25,
        delay: 0.5,
        stagger: {
            each: 0.05,
        }
    })
    .from("#mainVisual .prince", {
        y: 100,
        opacity: 0,
    }, "-=0.2");

//////////////////////////////////////////////////
let introduceTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#introduce",
        start: "top center",
        end: "bottom top",
    }
});
introduceTL.from("#introduce .char", {
    opacity: 0,
    y: -100,
    ease: "bounce",
    duration: 1.25,
    stagger: {
        each: 0.02,
        from: "random"
    }
});

//////////////////////////////////////////////////
let portfolioTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#works",
        start: "top center",
        end: "bottom top",
    }
});
portfolioTL.from("#works .char", {
    opacity: 0,
    y: -100,
    ease: "bounce",
    duration: 1.25,
    stagger: {
        each: 0.02,
        from: "random"
    }
});


//////////////////////////////////////////////////




$("body").imagesLoaded()
    .always(function (instance) {
        /*
        $("#works .info li").each(function(item,i){
            let h = $(this).height();
            let w = $(this).width();
            if(h>700){
                console.log("111111111");
                gsap.set($(this),{
                    top:-(Math.random()*300+100),
                })
            }
            gsap.set($(this),{
                width:w+Math.random()*100+50
            })
        })
        */
        gsap.fromTo("#works .info li", {
            top: -1000,
            opacity: 0,
            width:function(i,item){
                let w = $(item).width();
                return w+Math.random() *100;
            }
        }, {
            top: function (i,item) {
                let h = $(item).height();
                if(h>700) {
                    return -(Math.random() * 300 + 100);
                } else {
                    return 0;
                }
            },
            opacity: 1,
            ease: "bounce",
            duration: 2,
            stagger: {
                each: 0.1
            },
            onComplete: () => {
                const portfolioSlider = new Swiper("#works .info", {
                    slidesPerView: "auto",
                    loop: true,
                });
            }
        })

    });