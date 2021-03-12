//Use this script to generate your character
function Person(name,race,item) {
    this.name = name;
    this.race = race;
    this.item = item;
   
   


    this.currentHealth = 100;
    if (this.race =="Orc"){ this.currentHealth = 140;}
   
    this.maxHealth = 100;
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;
    this.armor = 0;
    this.dodge = 1;  //defMod ability to dodge an attack
    this.hitPerc = 100; 
   
  
    //HEALING

    this.heal = function (enemy){
        damage = this.damage()
        enemy.currentHealth += damage;

        if(this.item ==='Staff'){
            damage = damage  +Math.floor(damage *0.2);
            moves.innerText = damage+" Extra Staff Healing"
        }
        
        else  moves.innerText = "Healing";

         if(enemy.currentHealth > 100){ enemy.currentHealth = 100}
        
    };

    //ATTACKING

    this.attack = function(enemy) {

        hitPerc= (this.hitPerc - enemy.dodge) /100;
        if (enemy.item =="Boots" || enemy.race =="Elf"){ this.hitPerc = 70;}
          
        
        if (Math.random() < hitPerc){
            damage = this.damage();
           console.log(damage);
          
           if (enemy.race ==='Human') {
                enemy.armor += .2
            
                    }

            damage -= enemy.armor;
           
            enemy.currentHealth -= Math.floor(damage);
            if( enemy.currentHealth <0) {damage =0;
                ;}       
            
            if(damage  < 0) {Math.floor(damage);
                }


            moves.innerText = Math.floor(damage)+" damagepoints"
           
            if (this.item ==="Sword") {
                
                damage = damage + Math.floor(damage *0.3);
             }

            if (enemy.currentHealth <= 0) {
                moves.innerText = "Game Over!"
                    enemy.currentHealth = 0;
                   
            }


            if (this.item ==="Bow") {
                if (Math.random() < 0.3 ){
                damage = (damage *2)
                moves.innerText = damage+" Double Attack"
                enemy.currentHealth -= damage/2;
                    if (enemy.currentHealth <= 0) {
                        moves.innerText = "Game Over!"
                            enemy.currentHealth = 0;
                           
                      }
            }}
           
                
        
    }
    else {moves.innerText = "Attack Dodged ";
         if (enemy.race ==='Elf') {
            this.hitPerc = 70;
             damage = Math.floor(damage/2); 
             this.currentHealth -= Math.floor(damage); 
             moves.innerText = " The Elf dodged your attack!"}}
    
}; 

    

  

    this.damage = function() {
        var damagePoints = Math.floor(Math.random() * (this.maxDamage - this.min) + this.min);
        return damagePoints;
    };
  
   


    this.displayChar = function(){
    
       return (`I am ${this.name} I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.currentHealth}`)

    }
  
   

};
 

// TEST PERSONS
/*
var test = new Person("Dino","Orc","Boots");
var test2 = new Person("Sandra","Elf","Bow");
let test3 = new Person("Dickie","Humans", "Sword");
var test4 = new Person("Dixie","Vampire", "Staff");

console.log(test, test2,test3,test4);

*/



// screen appearing and disappearing 


document.getElementById("GameStart").addEventListener("click",()=>{
    document.getElementById("infopage").style.display = "none";
    document.getElementById("battlepage").style.display ="block";


});

document.getElementById("battlepage").style.display ="none";

document.getElementById("return").addEventListener("click",()=>{
    document.getElementById("battlepage").style.display = "none";
    document.getElementById("infopage").style.display ="initial";
    document.getElementById("p1Buttons").style.display = "block";
    document.getElementById("p2Buttons").style.display = "block";
   refreshPage();
});
function refreshPage(){
    window.location.reload();
} 


// dispalying name on battlepage

function my(){
let nameP1 = document.getElementById("myText").value;
console.log(nameP1);

document.getElementById("p1NameDisplay").innerHTML = nameP1;

}


function my2(){
    let nameP2 = document.getElementById("myText2").value;
    console.log(nameP2);
    
    document.getElementById("p2NameDisplay").innerHTML = nameP2;
    
    }


