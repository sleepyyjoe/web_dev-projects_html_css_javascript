let savedRecord = JSON.parse(localStorage.getItem('record'));

let record = savedRecord || {
    draw: 0,
    win: 0,
    loss: 0
};

// Re-add the display method since JSON.parse does not keep functions
record.display = function() {
    alert(`draw = ${this.draw} win = ${this.win} loss = ${this.loss}`);
};
function X(Player_select){
    let player_choice = Player_select;
    if(player_choice=='Reset'){
        record.draw=0;
        record.win=0;
        record.loss=0;
        localStorage.setItem('record',JSON.stringify(record));
    }
    else{
        let randomNumber = Math.random() * 3;
        let compchoice = '';
        if(randomNumber >= 0 && randomNumber <=1){
            compchoice = 'Bat';
        }
        else if(randomNumber > 1 && randomNumber <=2){
            compchoice = 'Ball';
        }
        else{
            compchoice = 'Stump';
        }

        if(compchoice===player_choice){
            record.draw++;
            document.querySelector('.result').innerText = 'DRAW';
            record.display();
            localStorage.setItem('record',JSON.stringify(record));
        }
        else if((compchoice=='Ball' && player_choice=='Bat') || (compchoice=='Bat' && player_choice=='Stump') || (compchoice=='Stump' && player_choice=='Ball')){
            record.win++;
            document.querySelector('.result').innerText = ' YOU WIN';
            record.display();
            localStorage.setItem('record',JSON.stringify(record));
        }
        else{
            record.loss++;
            document.querySelector('.result').innerText = 'YOU LOSS';
            record.display();
            localStorage.setItem('record',JSON.stringify(record));
        }
    }
}