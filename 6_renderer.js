/** --------------------------------
 * 
 * @name RENDERER
 * 
 * @requires isOn(1_utils.js)
 * @requires createObj_(4_constructors.js)
 * 
 * --------------------------------*/

    function createCanvas(vW, vH) {

        var canvas = document.querySelector("canvas");
        var ctx = canvas.getContext("2d");

        canvas.width = vW;
        canvas.height = vH;
        canvas.onmousedown = mouseDown;
        canvas.onmouseup = mouseUp;
        canvas.onmousemove = mouseMove;

        window.requestAnimFrame = (function() {

            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||

                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();


        function loop() {
            clear();
            update();
            queue();
        }

        function clear() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function update() {
            enviroment.update(ctx)
            enviroment.collection.forEach(draw);
        }

        function draw(obj) {
            ctx.drawImage(obj.src, obj.x, obj.y, obj.size, obj.size);
        }

        function queue() {
            window.requestAnimationFrame(loop);
        }

        loop();
    };
