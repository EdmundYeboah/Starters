let gameManager = {
    setGamestart : function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer : function(classType){
        switch(classType){
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Rogue":
                player = new Player(classType, 100, 0, 150, 200, 200);
                break;
            case "Mage":
                player = new Player(classType, 150, 200, 0, 100, 50);
                break;
            case "Hunter":
                player = new Player(classType, 200, 100, 150, 0, 50);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = `<img src="images/players/${classType.toLowerCase()}.png" class= "img-avatar"><div><h3>${classType}</h3><p class="health-player">Health: ${player.health}</p><p>Mana: ${player.mana}</p><p>Speed: ${player.speed}</p><p>Agility: ${player.agility}</p><p>Strength: ${player.strength}</p></div>`;
    },
    setPreFight : function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = `<p>Task: Find and Enemy!</p>`;
        getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search For An Enemy</a>`;
        getArena.style.visibilty = `visible`;    

    },
    setFight : function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //create enemy
        let enemy00 = new Enemy("Goblin", 200, 0 , 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 50 , 70, 70, 100);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch(chooseRandomEnemy){
            case 0: 
                enemy = enemy00;
                    break;
            case 1:
                enemy = enemy01;
                    break;
        }
        getHeader.innerHTML = `<p>Task: Choose Your Move!</p>`;
        getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>`;

        // remember it's enemy.enemyType because unlike the classType it was was defined as a parameter from the HTML so it's basically a straight object constructor of it

        getEnemy.innerHTML = `<img src="images/enemies/${enemy.enemyType.toLowerCase()}.png" class= "img-avatar"><div><h3>${enemy.enemyType}</h3><p class="health-enemy">Health: ${enemy.health}</p><p>Mana: ${enemy.mana}</p><p>Speed: ${enemy.speed}</p><p>Agility: ${enemy.agility}</p><p>Strength: ${enemy.strength}</p></div>`;
    }
    

}

