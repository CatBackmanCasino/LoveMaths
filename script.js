document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("you clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
            }


        })

        }

    
})
  


function runGame(){

}

function rightAnswer(){

}

function calculateCorrectAnswer (){

}

function incramentScore(){

}

function incramentWrongAnswer(){

}

function displayAdditionQustion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}


