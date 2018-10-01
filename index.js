    /**
     * @fileoverview Silly Game
     * @author Trevor Phippard: <tphippard@eyereturn.com>: (Creative Production)
     * @version 1.0
     */

    "use strict";

    /**
     * *-------------------------------
     * @name onload_event
     * *-------------------------------
     */

    function gameClock() {

        setInterval(() => { gold++ }, 50);

        setInterval(() => {
            new createGuy({
                x: Math.floor(Math.random() * 250) + 1,
                y: ( 600),
                size: 40,
                speed: 20,
                id: "mage",
                src: "mage",
                hp: 10,
                group: "hoard",
                drag: false
            });
        }, 3000);

    };

    window.addEventListener("load", function() {

        var vW = 300;
        var vH = 600;

        createCanvas(vW, vH);
        gameClock();

    }, false);