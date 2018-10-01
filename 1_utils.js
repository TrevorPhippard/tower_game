/** --------------------------------
 * 
 * @name UTILS
 * 
 * --------------------------------*/

var dist = (x1, y1, x2, y2) => Math.floor(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)))
var sortByDistance = (a, b) => (a.d > b.d) ? 1 : ((b.d > a.d) ? -1 : 0);
var towards = (x1, x2, s) => Math.floor((x1 - x2) / s);

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function createImage(src) {
    var img = new Image();
    img.src = "imgs/" + src + ".png";
    return img
}

function isOn(obj, mx, my) {
    return mx > (obj.x) &&
        mx < (obj.x + 50) &&
        my > (obj.y) &&
        my < (obj.y + 50)
}

