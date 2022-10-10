
//callback function checks if jQuery is loaded
$(document).ready(function () {


    //adding style to element
    $("h1").css("color", "red");

    $("button").css("background-color", "green");

    //adding class to element
    $("h1").addClass("big-title margin-50");

    //removing class from element
    $("h1").removeClass("big-title");

    //Checking class in element
    $("h1").hasClass("margin-50");

    //Manipulating text of element
    $("h1").text("bye");

    //Manipulating innerHtml of element
    $("h1").html("<em>Hey</em>")

    //Getting attribute of element
    $("img").attr("src");

    //Setting attribute of element
    $("a").attr("href", "https://bing.com");

    //Getting all the classess applied to element
    $("h1").attr("class");

    //Adding an event listener "clickEvent"
    $("h1").click(function () {
        $("h1").css("color", "red");
    });

    $("button").click(function () {
        $("h1").css("color", "red");
    });

    //Adding an event listener "keyPressEvent"
    $("input").keydown(function (event) {
        console.log(event.key);
    });

    $(document).keydown(function (event) {
        $("h1").text(event.key);
    });

    //Adding an event listener "mouseOver/Hover"
    $("h1").on("mouseover", function () {
        $("h1").css("color", "green");
    });

    //Adding elements on runtime outside the specified element.
    $("h1").before("<button>New</button>");

    $("h1").after("<button>New</button>");

    //Adding elements on runtime inside the specified element.
    $("h1").prepend("<button>New</button>");

    $("h1").append("<button>New</button>");

    //Removing an element
    $("button").remove();



    //Animations with jQuery
    $("h1").hide();
    $("h1").show();
    $("h1").toggle();
    $("h1").fadeOut();
    $("h1").fadeIn();
    $("h1").fadeToggle();
    $("h1").slideUp();
    $("h1").slideDown();
    $("h1").slideToggle();
    //Animate Only those properties that have numeric value
    $("h1").animate({ opacity: 0.5 });
    //Example of multiple Animations
    $("button").click(function () {
        $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
    });



})
