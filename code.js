var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(200,200,10,10);
var wall1=createSprite(100,50,50,5)
var wall2=createSprite(50,100,100,5)
var wall3=createSprite(250,20,5,250)
var wall4=createSprite(160,310,5,250)
var wall5=createSprite(50,200,80,5)
var wall6=createSprite(260,180,140,5)
var wall7=createSprite(160,20,140,5)
var wall8=createSprite(230,210,5,40)
var wall9=createSprite(260,280,140,5)
var wall10=createSprite(60,85,5,40)
var wall11=createSprite(70,30,5,15)
var wall12=createSprite(10,40,80,5)
var wall13=createSprite(210,70,90,5)
var wall14=createSprite(140,130,80,5)
var wall15=createSprite(160,106,5,60)
var wall16=createSprite(50,160,5,80)
var wall17=createSprite(90,175,5,50)
var wall18=createSprite(50,330,140,5)
var wall19=createSprite(120,370,5,50)
var wall20=createSprite(10,380,140,5)
var wall21=createSprite(60,300,5,60)
var wall22=createSprite(260,180,140,5)
var wall23=createSprite(20,260,140,5)
var wall24=createSprite(120,290,5,80)
var wall25=createSprite(120,225,80,5)
var wall26=createSprite(300,145,140,5)
var wall27=createSprite(260,180,140,5)
var wall28=createSprite(190,355,5,60)
var wall29=createSprite(240,320,5,40)
var wall30=createSprite(390,290,40,5)
var wall31=createSprite(390,220,120,5)
var wall32=createSprite(360,260,40,5)
var wall33=createSprite(306,339,80,5)
var wall34=createSprite(260,180,140,5)
var wall35=createSprite(345,305,140,5)
var wall36=createSprite(260,380,5,50)
var wall37=createSprite(280,250,5,40)
var wall38=createSprite(357,72,40,5)
var target=createSprite(360,391,60,80)







ball.velocityY = 2;
ball.velocityX = 3;
ball.shapeColor="black"
wall1.shapeColor="orange"
wall2.shapeColor="orange"
wall3.shapeColor="orange"
wall4.shapeColor="orange"
wall5.shapeColor="orange"
wall6.shapeColor="orange"
wall7.shapeColor="orange"
wall8.shapeColor="orange"
wall9.shapeColor="orange"
wall10.shapeColor="orange"
wall11.shapeColor="orange"
wall12.shapeColor="orange"
wall13.shapeColor="orange"
wall14.shapeColor="orange"
wall15.shapeColor="orange"
wall16.shapeColor="orange"
wall17.shapeColor="orange"
wall18.shapeColor="orange"
wall19.shapeColor="orange"
wall20.shapeColor="orange"
wall21.shapeColor="orange"
wall22.shapeColor="orange"
wall23.shapeColor="orange"
wall24.shapeColor="orange"
wall25.shapeColor="orange"
wall26.shapeColor="orange"
wall27.shapeColor="orange"
wall28.shapeColor="orange"
wall29.shapeColor="orange"
wall30.shapeColor="orange"
wall31.shapeColor="orange"
wall32.shapeColor="orange"
wall33.shapeColor="orange"
wall34.shapeColor="orange"
wall35.shapeColor="orange"
wall36.shapeColor="orange"
wall37.shapeColor="orange"
wall38.shapeColor="orange"











function draw() {
  background("cyan");
  createEdgeSprites();
  ball.bounceOff(edges);
  
  if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -2;
  }
  if(keyDown(RIGHT_ARROW)){
    ball.velocityX=2
    ball.velocityY=0
  }
  if(keyDown(LEFT_ARROW)){
    ball.velocityX=-2
    ball.velocityY=0
  }
  if(keyDown(DOWN_ARROW)){
    ball.velocityY=2
    ball.velocityX=0
  }
  if(ball.isTouching(wall1)||ball.isTouching(wall2)||ball.isTouching(wall3)||ball.isTouching(wall4)||ball.isTouching(wall5)||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)||ball.isTouching(wall9)||ball.isTouching(wall10)||ball.isTouching(wall11)||ball.isTouching(wall12)||ball.isTouching(wall13)||ball.isTouching(wall14)||ball.isTouching(wall15)||ball.isTouching(wall16)||ball.isTouching(wall17)||ball.isTouching(wall18)||ball.isTouching(wall19)||ball.isTouching(wall20)||ball.isTouching(wall21)||ball.isTouching(wall22)||ball.isTouching(wall23)||ball.isTouching(wall24)||ball.isTouching(wall25)||ball.isTouching(wall26)||ball.isTouching(wall27)||ball.isTouching(wall28)||ball.isTouching(wall29)||ball.isTouching(wall30)||ball.isTouching(wall31)||ball.isTouching(wall32)||ball.isTouching(wall33)||ball.isTouching(wall34)||ball.isTouching(wall35)||ball.isTouching(wall36)||ball.isTouching(wall37)||ball.isTouching(wall38)){
    ball.x=10
    ball.y=10
  }
  
  
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
