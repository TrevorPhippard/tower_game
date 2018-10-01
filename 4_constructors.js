/** --------------------------------
 * 
 * @name CONSTRUCTORS
 * 
 * @requires createImage_(1_utils.js)
 * @requires makeid_(1_utils.js)
 * @requires towards_(1_utils.js)
 * @requires dist_(1_utils.js)
 * 
 * --------------------------------*/

function createBox(o) {
    this.x = o.x;
    this.y = o.y;
    this.src = createImage(o.src);
    this.id = o.id;
    this.name = makeid();
    this.size = o.size;
    this.range = 200;
    this.hp = o.hp;
    this.target = o.target || undefined;
    this.dir = undefined;
    this.group = o.group;
    this.speed = o.speed;
    this.isDragging = o.drag;
};

createBox.prototype.closeGap = function(v) {
    this.x += towards(this.target.x, this.x, v * this.speed);
    this.y += towards(this.target.y, this.y, v * this.speed);
};

/**
 * --------------------------------
 * @name CREATEGUY-CLASS
 * --------------------------------
 */

var createGuy = function(o) {
    createBox.call(this, o)
    enviroment.add(this);
};

createGuy.prototype = Object.create(createBox.prototype);

createGuy.prototype.update = function(arr) {
    this.y -= 1;
    if (this.hp < 1) {
        enviroment.remove(this.name)
    }
};

/**
 * --------------------------------
 * @name CREATEALLIANCEUNIT-CLASS
 * --------------------------------
 */

var createAllianceUnit = function(o) {
    createBox.call(this, o)
    enviroment.add(this);

    setInterval(() => {
        this.attack();
    }, 100);
};

createAllianceUnit.prototype = Object.create(createBox.prototype);

createAllianceUnit.prototype.update = function() {
    this.findTarget(enviroment.collection);
};

createAllianceUnit.prototype.attack = function() {
    if (this.target !== undefined) {

        var v = dist(this.x, this.y, this.target.x, this.target.y);

        if (v < this.range) {
            var temp = new createFireball({
                target: this.target,
                x: this.x + (this.size / 2),
                y: this.y,
                size: (this.size / 2),
                speed: .1,
                id: "projectile",
                src: "fire",
                hp: 1,
                drag: false

            })
            enviroment.add(temp);
        }
        this.target = undefined
    }
};

createAllianceUnit.prototype.findTarget = function() {
    var self = this;
    if (enviroment.collection.length > 0) {
        enviroment.nearestNeighbour(self)
    }
};

/**
 * --------------------------------
 * @name CREATEFIREBALL-CLASS
 * --------------------------------
 */

var createFireball = function(o) {
    createBox.call(this, o)
};

createFireball.prototype = Object.create(createBox.prototype);

createFireball.prototype.update = function(arr) {
    if (this.target !== undefined) {
        var v = dist(this.x, this.y, this.target.x, this.target.y);
        if (v > 20) {
            this.closeGap(v);
        } else {
            this.target.hp -= 1;
            this.hp = 0;
            enviroment.remove(this.name)
        }
    }
};


function createObj(obj, mx, my) {
    obj.x = mx;
    obj.y = my;
    new createAllianceUnit(obj);
    gold -= obj.cost;
};