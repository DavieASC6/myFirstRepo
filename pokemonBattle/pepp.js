let pikachuHpBar = 130 
let raichuHpBar = 130
let pikachuAttacks = ['Thunderbolt', 'Quick Attack', 'Iron Tail', 'Run'];
let raichuAttacks = ['Thunder Shock', 'Thunder Punch', 'Iron Tail', 'Quick Attack'];
let runStart = false;

function setup(){
    createCanvas(600,575);
    background(0, 184, 46);
}

function draw() {
    noStroke()
    fill(255, 255, 255);
    //Bottom bar
    rect(15, 425, 570, 140, 20);
    //Raichu's bar 
    rect(50,70,250,70,20,0,20,0);
    //Raichu's hp bar 
    fill(163,163,163);
    rect(117,100,150,20,20,20,20,20);
    //Raichu's hp 
    fill(58,237,38);
    rect(135,103,raichuHpBar,15,20,20,20,20);
    //Raichu's Name
    textSize(22);
    fill(0,0,0);
    text('Raichu',80,90);
    //Raichu's Lv
    text(20);
    fill(0,0,0);
    text('Lv: 10',200,90)
    //Pikachu's bar
    fill(255,255,255);
    rect(300,300,250,100,20,0,20,0);
    //Pikachu's hp bar
    fill(163,163,163)
    rect(377,355,150,20,20,20,20,20);
    //Pikachu's hp 
    fill(58,237,38);
    rect(395,358,pikachuHpBar,15,20,20,20,20);
    //Pikachu's Name
    textSize(25);
    fill(0,0,0);
    text('Pikachu',340,330);
    //Pikachu's Name
    text(25);
    fill(0,0,0);
    text('Lv: 10',450,330);
    //Raichu
    fill(255, 153, 0)
    ellipse(450,150,100)
    //Pikachu
    fill(255, 255, 0)
    ellipse(100,350,100)
    //these two within the bottom bar
    fill(255, 255, 205)
    rect(20, 430, 276, 130, 20)
    fill(255, 255, 205)
    rect(305, 430, 276, 130, 20)
    textSize(20)
    fill(0, 0, 0)
    text("PP", 310, 475)
    
    textSize(20)
    fill(0, 0, 0)
    text("32/35", 410, 475)
    
    textSize(30)
    fill(0, 0, 0)
    text("Type: Lightning", 310, 520)
    //these are within whats above
    fill(255, 0, 0)
    rect(30, 440, 123, 50, 20)
    textSize(20)
    fill(0, 0, 255)
    text("Iron Tail", 55, 470)
    fill(255, 0, 0)
    rect(163, 440, 123, 50, 20)
    textSize(20)
    fill(0, 0, 255)
    text("Thunderbolt", 170, 470)
    fill(255, 0, 0)
    rect(30, 500, 123, 50, 20)
    textSize(20)
    fill(0, 0, 255)
    text("Quick Attack", 35, 530)
    fill(255, 0, 0)
    rect(163, 500, 123, 50, 20) // bottom right box
    textSize(20)
    fill(0, 0, 255)
    text("Run", 205, 530)
    //run screen
    noStroke();
    runColor();
    rect(0, 0, 600, 575); 
}

function mouseClicked() {
    if (mouseX > 30 && mouseX < 153 && mouseY > 440 && mouseY < 490) {
      if (raichuHpBar > 0) {
        raichuHpBar -= 32.5;
      } else {
        raichuHpBar = 0;
      }
      if (raichuAttacks[Math.floor(Math.random()*raichuAttacks.length)] == 'Iron Tail') {
          
      }
    } else if (mouseX > 163 && mouseX < 286 && mouseY > 440 && mouseY < 490) {
        if (raichuHpBar > 0) {
            raichuHpBar -= 32.5;
          } else {
            raichuHpBar = 0;
          }
    } else if (mouseX > 30 && mouseX < 153 && mouseY > 500 && mouseY < 550) {
        if (raichuHpBar > 0) {
            raichuHpBar -= 32.5;
          } else {
            raichuHpBar = 0;
          }
    } else if (mouseX > 163 && mouseX < 286 && mouseY > 500 && mouseY < 550) {
        runStart = true;
        runScreen();
    }
}


function runScreen() {
    return "Game Over";
}

function runColor() {
    if (runStart == true) {
        return fill(0, 0, 0);
    } else {
        return noFill();
    }
}