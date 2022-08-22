// Scrollspy Js
$(document).ready(function(){
    $("body").scrollspy({
        target : "#my-navbar",
        offset : 100
    })
})


// Carousel Js start

// $(function(){
//     $("#btn-1").click(function(){
//         $("#testimonial-carousel").carousel(0)
//     })
//     $("#btn-2").click(function(){
//         $("#testimonial-carousel").carousel(1)
//     })
//     $("#btn-3").click(function(){
//         $("#testimonial-carousel").carousel(2)
//     })
// })

    // Next Carousel Js
    $(function(){
        $("#next-control-btn-1").click(function(){
            $("#next-carousel-control").click();
        })
        $("#next-control-btn-2").click(function(){
            $("#next-carousel-control").click();
        })
        $("#next-control-btn-3").click(function(){
            $("#next-carousel-control").click();
        })
    })

    // Previous Carousel Js
    $(function(){
        $("#prev-control-btn-1").click(function(){
            $("#prev-carousel-control").click();
        })
        $("#prev-control-btn-2").click(function(){
            $("#prev-carousel-control").click();
        })
        $("#prev-control-btn-3").click(function(){
            $("#prev-carousel-control").click();
        })
    })

// Carousel Js end


// Loader js
$(function(){
    setTimeout (function(){
        $(".loader_bg").fadeToggle()
    },1500)
})

// Loader Js end


// Contact Form Js

$(document).ready(function(){
    $("#contact-form").submit(function(){
        var nameinput = $("#text-name").val();
        var phoneinput = $("#text-phone").val();
        var emailinput = $("#text-email").val();
        var messageinput = $("#text-message").val();
        alert (`Hello :${nameinput} ${phoneinput} ${emailinput} ${messageinput}`)
    })
})

// Contact Form Js end