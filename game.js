// Javascript Document
// Exercise : Lab Angry Pig
// Author   : Gene Leppala
// Date     : 2021-04-10

/* eslint-env browser */
/* global boxbox */

// Global variables
var canvasElem;
var world;
var score = 0;
// Establish variable for sound
// var mySound;

window.onload = initAll;




function initAll() {
    //console.log("initAll has started");

    canvasElem = document.getElementById("game");
    world = boxbox.createWorld(canvasElem, {
        gravity: {
            x: 0,
            y: 10
        },
        scale: 15,
        collisionOutlines: false
    });

    world.createEntity({
        name: "player",
        shape: "circle", 
        image: "favicon.ico",
        radius: 1,
        density: 4,
        x: 6,
        onKeyDown: kick
    });

    var ground = {
        name: "ground",
        shape: "square",
        type: "static",
        color: "rgb(0, 100, 0)",
        width: 18,
        height: 0.5,
        y: 12
    };

    var block = {
        name: "block",
        shape: "square",
        color: "brown",
        width: 0.5,
        height: 4,
        onImpact: impact
    };

    var wideblock = {
        name: "wideblock",
        shape: "square",
        color: "blue",
        width: 1,
        height: 4,
        onImpact: impact
    };

    var crateConfig = {
        shape: "square",
        color: "yellow",
        width: 2,
        height: 3,
        y: 10
    };
    var crate1 = world.createEntity(crateConfig, {
        x: 31
    });
    var crate2 = world.createEntity(crateConfig, {
        x: 25
    });
    var crate3 = world.createEntity(crateConfig, {
        x: 28,
        y: 5
    });
    var crate4 = world.createEntity(crateConfig, {
        x: 13,
        y: 18
    });
    
    world.createEntity(ground);
    world.createEntity(ground, {
        width: 15,
        x: 28,
        y: 20
    });
    world.createEntity(ground, {
        width: 0.5,
        height: 20,
        x: 39,
        y: 15
    });
    world.createEntity(ground, {
        width: 0.5,
        height: 10,
        x: 1,
        y: 24
    });
    world.createEntity(ground, {
        width: 50,
        y: 30
    });

    world.createEntity(block, {
        x: 12
    });
    world.createEntity(block, {
        x: 14
    });
    world.createEntity(block, {
        x: 13,
        y: 1,
        width: 4,
        height: 0.5
    });
    world.createEntity(block, {
        y: 20,
        height: 5
    });
    world.createEntity(block, {
        x: 16,    
        y: 20,
        height: 5
    });
    world.createEntity(block, {
        x: 13,
        y: 12,
        width: 8,
        height: 0.5
    });
    world.createEntity(block, {
        x: 18,
        y: 8,
        image:"greyblock30x30.png",
        width: 1.5,
        height: 1.5
    });

    world.createEntity(wideblock, {
        x: 26,
        y: 24,
        rotation: 0
    });
    world.createEntity(wideblock, {
        x: 30,
        y: 24,
        rotation: 0
    });
    world.createEntity(wideblock, {
        x: 28,
        y: 22,
        height: 10,
        rotation: 90
    });
    world.createEntity(wideblock, {
        x: 16,
        y: -1.5,
        rotation: 0
    });
    world.createEntity(wideblock, {
        x: 3.2,
        y: 16,
        rotation: 135
    });
    
    world.createEntity(crate1, {
        x: 31,
    });
    world.createEntity(crate2, {
        x: 25
    });
    world.createEntity(crate3, {
        x: 28,
        y: 10    
    });
    world.createEntity(crate4, {
        x: 13,
        y: 13    
    });

}

function kick() {
    // Impulse of 300 to 600 would be good.
    // Degree angle of 75 to 85 would be good.
    var impulse;
    var degree;

    impulse = (Math.random() * 300) + 300;
    degree = (Math.random() * 10) + 75;

    this.applyImpulse(impulse, degree);
}

function impact(entity) {
    if (entity.name() == "player") {
        this.color("black");
        this.destroy();
        score = score + 1690;
        document.getElementById("txtScore").innerHTML = "Score: " + score;
        // Possible sound code on impact
        // mySound = new sound("soundName.mp3");
        // mySound.play();
    }
}


// End of Javascript
