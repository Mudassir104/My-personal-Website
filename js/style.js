$(function(){
    $("#contact-form").submit(function(){
    })
    $("#contact-form").submit(function(){
        var nameinput = $("#name-input").val();
        var emailinput = $("#email-input").val();
        var subjectinput = $("#subject-input").val();
        var messageinput = $("#message-input").val();
        alert("Hello " +nameinput +" " + emailinput +" "  + subjectinput +" "  + messageinput +".")
    })
    // $(".carousel").carousel({
    //     wrap : false,
    //     interval : 500,
    // })
})
