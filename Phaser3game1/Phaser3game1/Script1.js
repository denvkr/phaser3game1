// JavaScript source code
import { banana } from './consts.js';
import Carrot from './carrots.js'
import MyConf from './myconf.js';
//import { Phaser } from './dist/phaser.js';
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
        collectStar: collectStar,
        key: 'scene1'
    }
};

var sceneConfig = {
        preload: preload,
        create: create,
        update: update,
        collectStar: collectStar,
        key: 'scene2'
}

var vMyConf = new MyConf();

var SceneConfig = {
    width: 800,
    height: 600,
    zoom: 1,
    active: true,
    visible:true
}
var game = new Phaser.Game(config);
//var SceneManager = new Phaser.Scenes.SceneManager('scene2',SceneConfig,false);
console.log('game',game);
//console.log('SceneManager',SceneManager);
//console.log('SceneManager.getScenes',SceneManager.getScenes());
//const myArc = new Phaser.GameObjects.Arc(game, 200, 300, 50, 0, 360, false, 0xff0145, 1);
//var player;
var score = 0;
var scoreText = null;
var cursorKeys;

console.log('vMyConf',vMyConf);

function preload() {
    console.log('before setBaseURL');
    this.load.setBaseURL('assets');

    this.load.image('sky', 'skies/space3.png');
    this.load.image('logo', 'sprites/phaser3-logo.png');
    this.load.image('red', 'particles/red.png');
    this.load.image('platform', 'sprites/isleinsky1.png');
    this.load.image('platformground', 'sprites/isleinskyground.png');
    this.load.image('slime', 'particles/slime.png');
    //this.load.image('ferraritestarossa', 'sprites/ferrari-testarossa-1985.png');

    this.load.image('ferraritestarossafrontwheel', 'sprites/ferrari-testarossa-1985_frontwheel.png');
    this.load.image('ferraritestarossarearwheel', 'sprites/ferrari-testarossa-1985_rearwheel.png');
    this.load.image('ferraritestarossa2', 'sprites/ferrari-testarossa-1985wowheels.png');


    this.load.spritesheet('bunny-stand', 'sprites/pks1.png', { frameWidth: 26, frameHeight: 26 });

}

function create() {

    this.cameras.main.setSize(800, 600);
    this.sceneWidth = this.scene.get('scene1').game.canvas.width;
    this.sceneHeight = this.scene.get('scene1').game.canvas.height;
    /*
    this.scene.get('scene1').update = function (time, delta){
        this.time = time;
        this.delta = delta;
    }
     */
    //this.scene.get('scene1').update(5,10);
    const sky = this.add.image(400, 300, 'sky').setScale(1.8).setScrollFactor(1, 0);
    const ferraritestarossa2 = this.physics.add.sprite(100,216,'ferraritestarossa2').setScale(0.2);
    const ferraritestarossafrontwheel = this.physics.add.sprite(62,216,'ferraritestarossafrontwheel').setScale(0.2);
    const ferraritestarossarearwheel = this.physics.add.sprite(230,216,'ferraritestarossafrontwheel').setScale(0.2);
    this.ferraritestarossafrontwheel = ferraritestarossafrontwheel;
    this.ferraritestarossarearwheel = ferraritestarossarearwheel;
    this.ferraritestarossa2 = ferraritestarossa2;
    this.sky = sky;
    const layer_car = this.add.layer();
    //const layer_platforms = this.add.layer();
    ferraritestarossa2.setCollideWorldBounds(true);
    ferraritestarossafrontwheel.setCollideWorldBounds(true);
    ferraritestarossarearwheel.setCollideWorldBounds(true);

    layer_car.add([ this.ferraritestarossa2, this.ferraritestarossafrontwheel, this.ferraritestarossarearwheel,sky ]);
    console.log(layer_car.getChildren());
    // create the group
    /** @type {Phaser.Physics.Arcade.Sprite} */
    /** @type {Phaser.Physics.Arcade.StaticBody} */

    /*
    const platforms = this.physics.add.staticGroup();
    var rect1 = new Array();
    // then create 5 platforms from the group
    for (let i = 1; i <= 4; ++i) {
        const x = Phaser.Math.Between(0, 600);
        const y = 100 * i;

        const platform = platforms.create(x, y, 'platform');
        platform.scale = 0.7;

        rect1.push(new Phaser.Geom.Rectangle(x, y, 100, 50));

        const body = platform.body;
        body.updateFromGameObject();
    }
    */
    //layer_platforms.add([ body ]);
/*
    this.carrots = this.physics.add.group({
        classType: Carrot
    });

//this.carrots.setCollideWorldBounds(true);
   for (let i = 1; i <= 8; ++i) {
       const x = Phaser.Math.Between(0, 800);
       const y = 100 * i;
   this.carrots.get(x, y, 'slime');
   }
*/
	//this.carrots.setCollideWorldBounds(true);
    //const carrot = new Carrot(this, 240, 320, 'slime');
    //this.add.existing(carrot);
    //console.log(rect1);
    //console.log('rect1',Phaser.Geom.Rectangle.Area(rect1[0]));

    /*
    this.physics.add.group({
        classType: myArc
    });
     */

    var vector = new Phaser.Math.Vector2();
    var vector2 = new Phaser.Math.Vector2();
    const x = 10;
    const y = 10;
    const x1 = 20;
    const y1 = 20;
    vector.set(x, y);
    vector2.set(x1, y1);
    //this.physics.add.arc(myArc);
    //console.log(vector.distance(vector2), vector.length(), vector2.length());

    //const platform = platforms.create(0, 550, 'platformground').setScale(2, 1);
    //const body = platform.body;
    //body.updateFromGameObject();
    var particles = this.add.particles('red');
/*
    var emitter = particles.createEmitter({
        speed: 150,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });
*/
    //var logo = this.physics.add.image(100, 300, 'logo');

    //logo.setVelocity(50, 100);
    //logo.setBounce(1,0);
    //logo.setCollideWorldBounds(true);
    //this.scale.setGameSize(400, 300);
    //var player = this.physics.add.sprite(240, 320, 'bunny-stand'); //this.physics
    //var Player_circle = new Phaser.Geom.Circle(240, 320, 16);
    //var car = this.physics.add.sprite(240, 320, 'ferraritestarossa2').setScale(0.2); //this.physics

    //emitter.startFollow(player);
    //player.setScale(1);
    //player.setBounce(0.2);
    //player.setBounceY(1);
    //player.setBounceX(0.1);
    //player.setCollideWorldBounds(true);
    //s.anchor.setTo(0.5, 0.5);
    //this.player.scale.setTo(2, 2);
    //this.physics.add.collider(platforms, logo);
    //this.physics.add.collider(player, platforms, null, processPlayerOverlapping, this);
    //this.physics.add.collider(this.carrots, platforms, null, processPlayerOverlapping, this);
    //this.physics.add.collider(ferraritestarossa2, platforms, null, processPlayerOverlapping, this);
    //this.physics.add.collider(ferraritestarossafrontwheel, platforms, null, processPlayerOverlapping, this);
    //this.physics.add.collider(ferraritestarossarearwheel, platforms, null, processPlayerOverlapping, this);
    //this.physics.add.collider(logo, player);

    //this.physics.add.overlap(player, platform, collectStar, isInside, this); //logo,

    //player.body.checkCollision.up = true;
    //player.body.checkCollision.left = true;
    //player.body.checkCollision.right = true;

    //this.player = player;
    //this.platforms = platforms;
    //this.platform = platform;
    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#256' }).setScrollFactor(1, 0);
    //this.Player_circle = Player_circle;
    //this.physics.add(logo,vector);
    //this.cameras.main.startFollow(this.player);
    const myArc = new Phaser.GameObjects.Arc(this, 200, 300, 50, 0, 360, false, 0xff0145, 1);

    //myArc.setX(300);
    //myArc.setY(200);
    myArc.setVisible(true);
    //this.scene.get('scene1').displayList()
    const myDisplayList = new Phaser.GameObjects.DisplayList(this);
    myDisplayList.add(myArc);
    this.scene.DisplayList = myDisplayList;//.add(myArc);
    //console.log(myDisplayList,myDisplayList.getChildren());
    console.log(this.scene.DisplayList);
    var fadded_to_scene_myArc = function(evt){
        console.log(evt);
    }
    myArc.addListener('ADDED_TO_SCENE', fadded_to_scene_myArc, this);
    console.log(myArc);
    //this.scene.setVisible(true,this.scene.get('scene1'));
    //const logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: myArc,
        y: 450,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1
    });
    //this.scene.add(myDisplayList);
    //this.scene.launch(this.scene.get('scene1'));
    //this.scene.stop(this.scene.get('scene1'));
    //this.add.Arc(this.scene.get('scene1'), 300, 200, 50, 0, 360, true, 0xff0145, 1);
    //this.add.scene(this.scene.get('scene1'));
    // set the horizontal dead zone to 1.5x game width
    //this.cameras.main.setDeadzone(this.scale.width * 1.5);
    this.horizontalWrap = function horizontalWrap(sprite)
    {
        const halfWidth = sprite.displayWidth * 0.5;
        const gameWidth = this.scale.width;
        if (sprite.x < halfWidth)
        {
            sprite.x = gameWidth + halfWidth;
        }
        else if (sprite.x > gameWidth + halfWidth)
        {
            sprite.x = halfWidth;
        }
    }
   
    //this.horizontalWrap(this.player);

this.addCarrotAbove = function addCarrotAbove(sprite)
 {
   const y = sprite.y - sprite.displayHeight;

   /** @type {Phaser.Physics.Arcade.Sprite} */
   const carrot = this.carrots.get(sprite.x, y, 'slime');

   this.add.existing(carrot);

   // update the physics body size
   carrot.body.setSize(carrot.width, carrot.height);

   return carrot;
}

    console.log(this.scene.get('scene1'),this.scene.get('scene1').game.canvas.width,this.sceneHeight);//this.scene.get('scene1').canvas.width,this.scene.get('scene1').canvas.height
}
function update() {

    cursorKeys = this.input.keyboard.createCursorKeys();
    //var player = this.player;
    var Player_circle = this.Player_circle;
    var ferraritestarossafrontwheel = this.ferraritestarossafrontwheel;
    var ferraritestarossarearwheel = this.ferraritestarossarearwheel;
    var ferraritestarossa2 = this.ferraritestarossa2;
    //this.player = this.physics.add.sprite(240, 320, 'bunny-stand').setScale(1.2);
    ///** @type {Phaser.Physics.Arcade.Sprite} */
    /*
    this.platforms.children.iterate(child => {
        const platform = child;


        const scrollX = this.cameras.main.scrollX;

        if ( platform.x <= scrollX + 960 )//+800
            {
                platform.x = scrollX + Phaser.Math.Between(50, 100);
                platform.body.updateFromGameObject();
                //this.addCarrotAbove(platform);
            }

        //console.log(platform.x,(scrollX +960));
        });
*/
    /*
    this.platform.children.iterate(child => {
        const platform = child;
        if ( platform.x <= scrollX + 960 )//+800
        const scrollX = this.cameras.main.scrollX;

    });
     */
    if (cursorKeys.left.isDown) {
        //player.x -= 4;
        //Player_circle.x = player.x;
        //player.setVelocityX(-24);
        ferraritestarossafrontwheel.x -= 4;
        ferraritestarossarearwheel.x -= 4;
        ferraritestarossa2.x -= 4;

    }
    else if (cursorKeys.right.isDown) {
        //player.x += 4;
        //Player_circle = player.x;
        //player.setVelocityX(+24);
        ferraritestarossafrontwheel.x += 4;
        ferraritestarossarearwheel.x += 4;
        ferraritestarossa2.x += 4;

    }

    if (cursorKeys.up.isDown) {
        //player.y -= 4;
        //Player_circle = player.y;
        //player.setVelocityY(-24);
    }
    else if (cursorKeys.down.isDown) {
        //player.y += 4;
        //Player_circle = player.y;
        //player.setVelocityY(+24);
    }
    //console.log(Player_circle);
    //if (player.x >= (this.sceneWidth-2)){
        //console.log('Width limit reached');
    //}
    //if (player.y < 11){
        //console.log('Height limit reached');
    //}
    /*
    if (player.y < 240){
        console.log(player.y,(this.sceneHeight-86));
    }
    if (player.y == 0){
        console.log(0);
    }
    */
//console.log(player.y,(this.sceneHeight-86));
    var myrand;
    do {
        myrand = Math.random();
    } while ( Math.random() == 0 );
    //console.log(3.14/myrand);

    this.ferraritestarossafrontwheel.setRotation(3.14/myrand);
    this.ferraritestarossarearwheel.setRotation(3.14/myrand);
}
function collectStar(player, star) {
    //star.disableBody(true, true);
    //console.log('platform touching');
    score += 10;
    this.scoreText.setText('Score: ' + score);
}
function processPlayerOverlapping(obj1, obj2) {
    //console.log(obj1, obj2);
}
function isInside(obj1, obj2) {
    if (((obj1.x +70) > obj2.x) && (cursorKeys.right.isDown)) {
        obj1.x -= 4;
    }
    if ((obj2.x + 75) > obj1.x && (cursorKeys.left.isDown)) {
        obj1.x += 4;
    }
    //console.log(obj1, obj2);
    //console.log(obj1.x, obj1.y, obj2.x, obj2.y);
}
