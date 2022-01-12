function makeRed(){
    document.body.style.backgroundColor='red';
}

const greenButton = document.getElementById('green');

greenButton.onclick = makeGreen;

function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

const blueButton =document.getElementById('blue');
blueButton.onclick = function (){
    document.body.style.backgroundColor = 'blue';
}

const goldenButton = document.getElementById('goldenRoad');
goldenButton.addEventListener('click', makeGoldenRoad)


function makeGoldenRoad() {
    document.body.style.backgroundColor ='goldenrod';
    
}

const hotpinkButton = document.getElementById('hotpink');
hotpinkButton.addEventListener('click', function makeHotPink (){
    document.body.style.backgroundColor = 'hotpink';
})


document.getElementById('Brown').addEventListener('click',function (){
    document.body.style.backgroundColor ='Brown';
})