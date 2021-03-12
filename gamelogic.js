
// GET ALL THE FIELD INPUT ONTO THE BATTLEPAGE

GameStart.onclick = function(){
    
document.getElementById("p1RaceDisplay").innerHTML = document.getElementById("heroracelist").value;
document.getElementById("p2RaceDisplay").innerHTML =  document.getElementById("enemyracelist").value;
document.getElementById("p1ItemDisplay").innerHTML = document.getElementById("heropowerlist").value;
document.getElementById("p2ItemDisplay").innerHTML = document.getElementById("enemypowerlist").value;

player1 = new Person(document.getElementById("myText").value,document.getElementById("heroracelist").value,document.getElementById("heropowerlist").value)
player2 = new Person(document.getElementById("myText2").value,document.getElementById("enemyracelist").value,document.getElementById("enemypowerlist").value)
document.getElementById("moves").innerText = player1.displayChar() 
document.getElementById("moves2").innerText = player2.displayChar()

if (player1.race == "Orc") {document.getElementById("p1HP").innerText = 140};
if (player2.race == "Orc") {document.getElementById("p2HP").innerText = 140};

};

// BUTTONS

document.getElementById("p1Attack").onclick = function(){ 
  
    player1.attack(player2);
  
    document.getElementById("p2HP").innerText = Math.floor(player2.currentHealth);
    disableButtons(p1Attack,p1Heal,p1Yield,p2Attack,p2Heal,p2Yield);

    vampireBonus1 ()

};


document.getElementById("p2Attack").onclick = function(){ 
    player2.attack(player1);
  
    document.getElementById("p1HP").innerText = Math.floor(player1.currentHealth);
    disableButtons2 (p1Attack,p1Heal,p1Yield,p2Attack,p2Heal,p2Yield)
    vampireBonus2 () 
   
 
};

    
document.getElementById("p1Heal").onclick = function(){ 
    player1.heal(player1);
    disableButtons(p1Attack,p1Heal,p1Yield,p2Attack,p2Heal,p2Yield);
    document.getElementById("p1HP").innerText = Math.floor(player1.currentHealth);
    
};

        
document.getElementById("p2Heal").onclick = function(){ 
    player2.heal(player2);
    
    document.getElementById("p2HP").innerText = Math.floor(player2.currentHealth);
    disableButtons2 (p1Attack,p1Heal,p1Yield,p2Attack,p2Heal,p2Yield)
};

document.getElementById("p1Yield").onclick = function(){ 
    moves.innerHTML= "Player 1 surrenders!"
    disableButtons(p1Attack,p1Heal,p1Yield,p2Attack,p2Heal,p2Yield);
};

document.getElementById("p2Yield").onclick = function(){ 
    moves.innerHTML= "Player 2 surrenders!"
    disableButtons2 (p1Attack,p1Heal,p1Yield,p2Attack,p2Heal,p2Yield)
};

//ROUND TURNING THREW BUTTONS
function disableButtons (p1Attack,p1Heal,p1Yield,p2Attack,p2Heal,p2Yield){

    p1Attack.disabled = true;
    p1Heal.disabled = true;
    p1Yield.disabled = true;

    p2Attack.disabled = false;
    p2Heal.disabled = false;
    p2Yield.disabled =false;
    

}
function disableButtons2 (p1Attack,p1Heal,p1Yield,p2Attack,p2Heal,p2Yield){

    p1Attack.disabled = false;
    p1Heal.disabled = false;
    p1Yield.disabled = false;

    p2Attack.disabled =true;
    p2Heal.disabled = true;
    p2Yield.disabled =true;

}

function disableButtons3 (p1Attack,p1Heal,p1Yield,p2Attack,p2Heal,p2Yield){

    if (moves.innerText = "Game Over!")
    p1Attack.disabled = true;
    p1Heal.disabled = true;
    p1Yield.disabled = true;

    p2Attack.disabled =true;
    p2Heal.disabled = true;
    p2Yield.disabled =true;

}

// ATTEMPT TO VAMPBONUS
function vampireBonus1 () {

    if (player1.race =="Vampire"){
        let lifeSteal = Math.floor((player2.currentHealth / 100) * 10);
      
        document.getElementById("p1HP").innerText = (Math.floor((player1.currentHealth)) + lifeSteal);
        document.getElementById("p2HP").innerText = (Math.floor((player1.currentHealth)) - lifeSteal);
        if (document.getElementById("p1HP").innerText > 100) {
            document.getElementById("p1HP").innerText = 100};
        if(document.getElementById("p1HP").innerText < 0)
        { document.getElementById("p1HP").innerText = 0}
        moves2.innerHTML= "Vampire Life Steal";
    }
    else  moves2.innerHTML= " ";
   
     
}


function vampireBonus2 () {

    if (player2.race =="Vampire"){
        let lifeSteal = Math.floor((player1.currentHealth / 100) * 10);
      
        document.getElementById("p2HP").innerText = (Math.floor((player2.currentHealth)) + lifeSteal);
        if (document.getElementById("p2HP").innerText > 100) {
            document.getElementById("p2HP").innerText = 100};
        if(document.getElementById("p2HP").innerText < 0)
        { document.getElementById("p2HP").innerText = 0}   
        document.getElementById("p1HP").innerText = (Math.floor((player1.currentHealth)) - lifeSteal);
        
        moves2.innerHTML= "Vampire Life Steal";
    }
    else  moves2.innerHTML= " ";
   
}

