 let app = {};

 (function ($){
    'use strict';

    let $window = $(window),
        $document = $(document),
        listPlayers, indexMax,
        chooseWinner;

    app.displayWinner = function() {
        listPlayers = [
            "Damien",
            "Jordan",
            "Véronique",
            "Sam",
            "Thomas",
            "Louis",
            "Victor",
            "Léa",
            "Chloé"
        ];

        
        indexMax = listPlayers.length - 1;
        chooseWinner = setInterval(app.displayName, 300);

    };

    app.counter = function() {
        let finalDate = new Date();
        finalDate.setSeconds(finalDate.getSeconds() + 6);

        let time = setInterval(function() {

            let starterDate = new Date();
            let timeDiffInMinutes = finalDate - starterDate; 

            let days = Math.floor(timeDiffInMinutes / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (timeDiffInMinutes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor(
                (timeDiffInMinutes % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor(
                (timeDiffInMinutes % (1000 * 60)) / 1000);

            
            $("#counter").html(days + "j" + hours + "h" + minutes + "m" + seconds + "s");
            if (timeDiffInMinutes < 0) {
                clearInterval(time);
                $("#counter").html("Notre grand vainqueur :");
                clearInterval(chooseWinner);
                $("#panel").slideDown("slow");
                $("#name").hide();

            }

        }, 1000);
        
    };

    app.displayName = function() {
        let indexPlayer = Math.floor(Math.random() * indexMax);
        $("#name").html('the winner is : <br>' + listPlayers[indexPlayer]);
        $("#panel").html(listPlayers[indexPlayer]);
        
    };
    $document.ready(function() {
        app.displayWinner();
        app.counter();
    });

 })(jQuery);