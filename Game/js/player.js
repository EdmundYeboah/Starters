let player;

function Player(classType, health, mana, speed, agility, strength){
    this.classType = classType;
    this.health = health;
    this.mana  = mana;
    this.speed = speed;
    this.agility = agility;
    this.strength = strength;
}

let PlayerMoves = {
    calcAttack : function() {
        //who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        //player attacks
        let playerAttack = function(){
            // run if statement for whether player has mana (set calcbasedamage based on mana)
            let calcBaseDamage;
            if(player.mana > 0){
                calcBaseDamage= player.strength * player.mana / 1000;
            }else{
                calcBaseDamage= player.strength * player.agility / 1000;
            }
            //vary number of times for attack
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //calcOutputDamage  will be the power of the attack and it's going to be a random number
            
            
            //create number of hits(this will be based on agility)
            let numberOfHits =  Math.floor(Math.random() * Math.floor(player.agility/10) / 2) + 1;
            //divide by 2 to reduce chance of getting a number too high and add 1 to reduce chance of getting 0

            //return power of attack and number of times player attacks. so basically put both numbers in an array
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
         //copy and paste same for enemy attacks
         let enemyAttack = function(){
            let calcBaseDamage;
            if(enemy.mana > 0){
                calcBaseDamage= enemy.strength * enemy.mana / 1000;
            }else{
                calcBaseDamage= enemy.strength * enemy.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;   
            let numberOfHits =  Math.floor(Math.random() * Math.floor(enemy.agility/10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        //get player/enemy health to change later
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        //initate attacks 
        if(getPlayerSpeed >= getEnemySpeed){
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert(`You hit ${playerAttackValues[0]} damage ${playerAttackValues[1]} times`);
            if(enemy.health <= 0){
                alert("You WON! Refresh browser to start again");
                getPlayerHealth.innerHTML = `Health: ${player.health}`;
                getEnemyHealth.innerHTML = `Health: 0`;
            }else{
                getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                //enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert(`Enemy hit ${enemyAttackValues[0]} damage ${enemyAttackValues[1]} times`);
            if(player.health <= 0){
                alert("Enemy WON! Refresh browser to start again");
                getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                getPlayerHealth.innerHTML = `Health: 0`;
            } else{
                getPlayerHealth.innerHTML = `Health: ${player.health}`;
            }
                

            }
        } else if(getEnemySpeed >= getPlayerSpeed){
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
               player.health = player.health - totalDamage;
                alert(`Enemy hit ${enemyAttackValues[0]} damage ${enemyAttackValues[1]} times`);
                if(player.health <= 0){
                    alert("Enemy WON! Refresh browser to start again");
                    getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                    getPlayerHealth.innerHTML = `Health: 0`;
                }else{
                    getPlayerHealth.innerHTML = `Health: ${player.health}`;
                    //player attacks
                    let playerAttackValues = playerAttack();
                    let totalDamage =playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert(`You hit ${playerAttackValues[0]} damage ${playerAttackValues[1]} times`);
                if(enemy.health <= 0){
                    alert("You WON! Refresh browser to start again");
                    getPlayerHealth.innerHTML = `Health: ${player.health}`;
                    getEnemyHealth.innerHTML = `Health: 0`;
                } else{
                    getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                }
                

            }
        }
    }
}
