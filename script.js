const totalBlocks = 20;
let screen = document.querySelectorAll('.screen');

function random_01(){
    let num = Math.round(Math.random());
    return num;
}

function change_color(e){
    let color = random_01();
    if(color = 0){
        e.target.style.backgroundColor = "white";
    }else{
        e.target.style.backgroundColor = "black";
    }
}

function create_random_grid(){
    let bodyCell;
    let bodyCell2;
    for(let i = 0; i < totalBlocks; i++){
        bodyCell = document.createElement('div');
        bodyCell2 = document.createElement('div');
        bodyCell.className = 'cell';
        bodyCell2.className = 'cell';
        document.getElementById('screen1').appendChild(bodyCell);
        document.getElementById('screen3').appendChild(bodyCell2);
    }
    document.getElementById('screen2').style.gridTemplate= `repeat(${totalBlocks}, 1fr) / repeat(${totalBlocks}, 1fr)`;
    document.querySelectorAll('.cell').forEach(e =>{
        let color = random_01();
        if(color == 0){
            e.style.backgroundColor = "white";
        }else{
            e.style.backgroundColor = "black";        }
    })
}

setInterval(create_random_grid, 100);