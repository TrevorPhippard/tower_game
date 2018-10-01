/** --------------------------------
 * 
 * @name UNITS
 * 
 * @requires createImage_(1_utils.js)
 * 
 * --------------------------------*/


var gold = 0;

var mine = {
    x: 0,
    y: 0,
    size: 75,
    speed: 1,
    id: 'gold',
    src: 'gold',
    hp: 10,
    group: 'alliance',
    drag: true,
    cost: 50
}
var tower = {
    x: 0,
    y: 0,
    size: 100,
    speed: 1,
    id: 'tower',
    src: 'tower',
    hp: 10,
    group: 'alliance',
    drag: true,
    cost: 50
}
var mage = {
    x: 0,
    y: 0,
    size: 40,
    speed: 1,
    id: 'mage',
    src: 'mage',
    hp: 10,
    group: 'alliance',
    drag: true,
    cost: 50
}
var knight = {
    x: 0,
    y: 0,
    size: 40,
    speed: 1,
    id: 'knight',
    src: 'knight',
    hp: 10,
    group: 'alliance',
    drag: true,
    cost: 50
}

var gold_icon = {
    src: createImage('gold_icon'),
    x: 0,
    y: 550,
    w: 50,
    h: 50
}

var tower_icon = {
    src: createImage('tower_icon'),
    x: 50,
    y: 550,
    w: 50,
    h: 50
}

var mage_icon = {
    src: createImage('mage_icon'),
    x: 100,
    y: 550,
    w: 50,
    h: 50
}

var knight_icon = {
    src: createImage('knight_icon'),
    x: 150,
    y: 550,
    w: 50,
    h: 50
}

var bg = {
    src: createImage('ground'),
    x: 0,
    y: 0,
    w: 300,
    h: 550
}