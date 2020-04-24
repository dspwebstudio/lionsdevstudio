$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 500) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        $(".nav-link").css("color", "#000"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        $(".fas,.fab,.fa").css("color", "blue"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
       
    } else {
        $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        $(".nav-link").css("color", "#fff"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        $(".fas,.fab,.fa").css("color", "fff"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    }
    });
    $(".navbar-toggler").click(function(){
        $("navbar").addClass("navbar-bg");
      });
});