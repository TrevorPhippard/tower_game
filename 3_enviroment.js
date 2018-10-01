/** --------------------------------
 *
 * @name ENVIROMENT
 * 
 * @requires isOn_(1_utils.js)
 * @requires dist_(1_utils.js)
 * 
 * --------------------------------*/

var enviroment = {

    collection: [],

    add: function(param) {
        this.collection.push(param);
    },

    remove: function(name) {
        this.collection.forEach((element, i, array) => {
            if (element.name === name) {
                array.splice(i, 1);
            };
        });
    },

    update: function(ctx) {        this.collection.forEach((x, i, arr) => {
        x.update(arr)
    });
        ctx.drawImage(bg.src, bg.x, bg.y, bg.w, bg.h);
        ctx.drawImage(gold_icon.src, gold_icon.x, gold_icon.y, gold_icon.w, gold_icon.h);
        ctx.drawImage(tower_icon.src, tower_icon.x, tower_icon.y, tower_icon.w, tower_icon.h);
        ctx.drawImage(mage_icon.src, mage_icon.x, mage_icon.y, mage_icon.w, mage_icon.h);
        ctx.drawImage(knight_icon.src, knight_icon.x, knight_icon.y, knight_icon.w, knight_icon.h);
        ctx.font = "20px Arial";
        ctx.fillStyle = "gold";
        ctx.fillText("Gold: " + gold, 210, 580);

    },

    clickOn: function(mx, my) {
        this.collection.forEach(obj => {
            if (isOn(obj, mx, my)) {
                imBeingDragged = true;
            }
        })
    },

    nearestNeighbour: function(self) {
        var considerations = [];
        this.collection.forEach(element => {
            console.log(element.group)
            if (self !== element && element.id !== "projectile" && element.group !== "alliance") {
                considerations.push({
                    name: element,
                    d: dist(self.x, self.y, element.x, element.y)
                })
            }
            considerations.sort(sortByDistance);
            if (considerations.length > 0) {
                self.target = considerations[0].name;
            }
        })
    }
};