'use strict';
let score=10;
let win=15;
let lose=5;
const zero=0;
const number=Math.trunc(Math.random()*20)+1;
document.querySelector('.random').textcontent=number;
document.querySelector('.check').addEventListener('click',function(){
const guess=Number(document.querySelector('.numsearch').value);
console.log(guess,number)
if(guess===number){
    document.querySelector('.message').textContent='Correct No';

score++;
document.querySelector('.score').textContent=score;}
if(score===win){
    document.querySelector('.message').textContent='you Won';
    document.querySelector('.highscore').textContent=score;
    document.querySelector('.score').textContent=zero;
    return
}
else if(guess>number){
    document.querySelector('.message').textContent='guess is greater';
    score--;
    document.querySelector('.score').textContent=score;
}
    if(score===lose){
        document.querySelector('.message').textContent='you lose';
    document.querySelector('.highscore').textContent=score;
    document.querySelector('.score').textContent=zero;
  return
    }

else if(guess<number){
    document.querySelector('.message').textContent='guess is lower';
    score--;
    document.querySelector('.score').textContent=score;
}
    if(score===lose){
        document.querySelector('.message').textContent='you lose';
    document.querySelector('.highscore').textContent=score;
    document.querySelector('.score').textContent=zero;
   return
}

if(!guess){
    
    document.querySelector('.message').textContent='no number to check';
    document.querySelector('.score').textContent=score;
}


});

document.querySelector('.res').addEventListener('click',function(){
    document.querySelector('.score').textContent=0;
    document.querySelector('.highscore').textContent=0;
    document.querySelector('.message').textContent="Start Guessing";

});
