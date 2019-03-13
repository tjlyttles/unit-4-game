$(document).ready(function() {  
    var wins = 0
    var loses = 0
    var currentAmount = ''
    var crystalNum = ''
    var diamondNum = ''
    var topazNum = ''
    var amethystNum = ''           

    function newGame() {
        $('#total, #current').empty()
        currentAmount = 0
        crystalNum = Math.floor((Math.random() * 12) + 1)
        diamondNum = Math.floor((Math.random() * 12) + 1)
        topazNum = Math.floor((Math.random() * 12) + 1)
        amethystNum = Math.floor((Math.random() * 12) + 1)       
        targetAmount = Math.floor((Math.random() * 100) + 19)
        $('#total').text(targetAmount)
    }            

    $("#crystal").on("click", function() {        
        currentAmount += crystalNum
        $('#current').text(currentAmount)
        setTimeout(function(){
            checkWinLose()
        },400)      
    });

    $("#diamond").on("click", function() {        
        currentAmount += diamondNum
        $('#current').text(currentAmount)        
        setTimeout(function(){
            checkWinLose()
        },400)                
    });

    $("#topaz").on("click", function() {        
        currentAmount += topazNum
        $('#current').text(currentAmount)
        setTimeout(function(){
            checkWinLose()
        },400)        
    });

    $("#amethyst").on("click", function() {        
        currentAmount += amethystNum
        $('#current').text(currentAmount)
        setTimeout(function(){
            checkWinLose()
        },400)        
    });
    
    function checkWinLose() {        
        if (currentAmount > targetAmount) {
            loses++
            $('#loseElement').text(loses)
            alert('You have exceeded the required amount. Game over.')
            var playAgain = confirm('Would you like to play again?')
            if (playAgain === true) {                
                newGame()
            } else {
                alert('Until next time.')
                window.close()
            }
        } else if (currentAmount === targetAmount) {
            wins++
            $('#winElement').text(wins)
            alert('Great job! You collected the exact amount of crystals required!')
            var playAgain = confirm('Would you like to play again?')
            if (playAgain === true) {                
                newGame()
            } else {
                alert('Until next time.')
                window.close()
            }
        }
    }     
    newGame()          
});