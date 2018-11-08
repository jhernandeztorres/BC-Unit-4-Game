$(document).ready(function(){
        // Variables
        var baseAttack = 0;
        var player;
        var defender;
        var charArray= [];
        var warriorSelected = false;
        var enemySelected = false;

        // Constructor
        function Character(name, hp, ap, counter, pic){
                this.name = name;
                this.hp = hp;
                this.ap = ap;
                this.counter;
                this.pic = pic;
        }

        // Initialize the Characters
        function initCharacters(){
                var luke = new Character("Luke Skywalker", 140, 15, 22, "../images/Luke Skywalker.png");
                var rey = new Character("Rey", 180, 25, 20, "../images/Rey.png");
                var obi = new Character("ObiWan Kenobi", 160, 20, 25, "../images/ObiWan Kenobi.png");
                var darth = new Character("Darth Vader", 200, 40, 30, "../images/Darth Vader.png");
                var kylo = new Character("Kylo Ren", 120, 35, 7, "../images/Kylo Ren.png");
                var trooper = new Character("StormTrooper", 60, 10, 5, "../images/Storm Trooper.png");
                charArray.push(luke, rey, obi, darth, kylo, trooper);
        }

        // Character Cards
        function characterCards(divID){
                $(divID).children().remove;
                for (var i = 0; i < charArray.length; i++){
                        $(divID).append("<div />");
                        
                }
        }
})



