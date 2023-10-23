"use strict";
//rock--1 paper--2 scissor--3
let hscore=0;
let cscore=0;
const hScore=document.querySelector(".humanScore");
const cScore=document.querySelector(".compScore");
const rock=document.querySelector(".rock-btn")
const paper=document.querySelector(".paper-btn");
const scissor=document.querySelector(".scissors-btn");
// const result=document.querySelector(".computer");
const reset=document.querySelector(".reset-btn");
const humanopt=document.querySelector(".humanopt");
const result=document.querySelector(".result");
const compopt=document.querySelector(".compopt");
const button=document.querySelector(".start button");
let name=document.querySelector(".start input");


button.addEventListener("click",function(){
    const name=document.querySelector(".start input").value;
    if(!name)
    {
        alert("Enter name!");
    }
    else{
       
        const namedis=document.querySelector(".human h2").innerHTML=`${name} 🙍‍♂️`;
        const start=document.querySelector(".backblur").style.display = "none";
    }
    

});
hScore.textContent=`Score : ${hscore}`;
    cScore.textContent=`score : ${cscore}`;
rock.addEventListener('click',function(){
    let computer=Math.trunc(Math.random()*3)+1;
    humanopt.textContent="Rock";
    if(computer==1){
        result.textContent=" Draw";
        compopt.textContent="Rock";
    }
    else if(computer==2)
    {
        result.textContent=" Lost";
        compopt.textContent="Paper";
        cscore+=1;
    }
    else{
        result.textContent=" won"
        compopt.textContent="scissor";
        hscore+=1;
    }
    hScore.textContent=`Score : ${hscore}`;
    cScore.textContent=`score : ${cscore}`;

});
paper.addEventListener('click',function(){
    let computer=Math.trunc(Math.random()*3)+1;
    humanopt.textContent="Paper"
    if(computer==1){
        result.textContent=" won";
        compopt.textContent="Rock";
        hscore+=1;
    }
    else if(computer==2)
    {
        result.textContent="  Draw";
        compopt.textContent="Paper";
        
    }
    else{
        result.textContent=" Lost";
        compopt.textContent="scissor";
        cscore+=1;
    }
    hScore.textContent=`Score : ${hscore}`;
    cScore.textContent=`score : ${cscore}`;

});
scissor.addEventListener('click',function(){
    let computer=Math.trunc(Math.random()*3)+1;
   
    if(computer==1){
        result.textContent=" Lost";
        compopt.textContent="Rock";
        cscore+=1;
    }
    else if(computer==2)
    {
        result.textContent=" won";
        compopt.textContent="Paper";
        hscore+=1;
    }
    else{
        result.textContent=" Draw";
        compopt.textContent="Scissor";
        
    }
    hScore.textContent=`Score : ${hscore}`;
    cScore.textContent=`score : ${cscore}`;

});

reset.addEventListener('click',function(){
    hscore=0;
    cscore=0;
    hScore.textContent=`Score : ${hscore}`;
    cScore.textContent=`score : ${cscore}`;
});
