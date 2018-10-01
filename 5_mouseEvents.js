/** --------------------------------
 * 
 * @name MOUSE-EVENTS
 * 
 * @requires isOn(1_utils.js)
 * @requires createObj_(4_constructors.js)
 * 
 * --------------------------------*/


var unitSelected = null;

// handle mousedown events
function mouseDown(e) {

    // console.log("mouseDown");

    e.preventDefault();
    e.stopPropagation();

    var mx = parseInt(e.clientX);
    var my = parseInt(e.clientY);

    enviroment.clickOn(mx, my);

    if (isOn(gold_icon, mx, my)) {
        unitSelected = mine;
    } else if (isOn(tower_icon, mx, my)) {
        unitSelected = tower;
    } else if (isOn(mage_icon, mx, my)) {
        unitSelected = mage;
    } else if (isOn(knight_icon, mx, my)) {
        unitSelected = knight;
    } else {
        unitSelected = null
    }
};

function mouseUp(e) {

    // console.log("mouseUp");

    e.preventDefault();
    e.stopPropagation();

    enviroment.collection.forEach(obj => {
        obj.isDragging = false;
    })

    var mx = parseInt(e.clientX) - 50;
    var my = parseInt(e.clientY) - 50;
    var meetsCriteria = my < 500 && gold > 50 && unitSelected !== null;

    if (meetsCriteria) {
        createObj(unitSelected, mx, my);
    } else {
        console.log("click");
    }
};

function mouseMove(e) {
    e.preventDefault();
    e.stopPropagation();
};