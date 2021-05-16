'use strict';
let flowers=[];
function Flower(name,img,season){
    this.name=name;
    this.img='./img/${img}.jpeg';
    this.season=season;
    flowers.push(this);
}

let formEl=document.getElementById('form');
formEl.addEventListener('submit',addFlower);

function addFlower(event){
event.preventDefault();
let flowerName=event.target.flowername.value;
let flowerImg=event.target.flowerimg.value;
let flowerSeason=event.target.season.value;

// console.log(flowerName,flowerImg,flowerSeason);

new Flower(flowerName,flowerImg,flowerSeason);
saveLs();
renderTable();
}
let tableEl=document.getElementById('flowertable');
function renderTable(){
tableEl.innerHTML='';
let header=document.createElement('tr');
tableEl.appendChild(header);
let th1=document.createElement('th');
header.appendChild(th1);
tableEl.innerHTML='# img';
let th2=document.createElement('th');
header.appendChild(th2);
tableEl.innerHTML='Name';
let th3=document.createElement('th');
header.appendChild(th3);
tableEl.innerHTML='Season';

for (let i=0;i<flowers.length;i++){
    let rowEl=document.createElement('tr');
    tableEl.appendChild(rowEl);
    let td1=document.createElement('td');
    rowEl.appendChild(td1);
    // td1.innerHTML='<span onclick="deleteRow(${i})">x</span>
    // <img src="${flowers[i].img}">';
    let td2=document.createElement('td');
     rowEl.appendChild(td2);
     td2.innerHTML=flowers[i].name;
     let td3=document.createElement('td');
     rowEl.appendChild(td3);
     td3.innerHTML=flowers[i].season;
     getLs();
renderTable();
}
}

function saveLs(){
    let data=JSON.stringify(flowers);
    localStorage.setItem('Flowers',data);
}

function getLs(){
    let dta=localStorage.getItem('Flowers');
    if(data){
        flowers=JSON.parse(data);
    }
}
