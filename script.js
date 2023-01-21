const totalBlocks = 40;
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
    for(let i = 0; i < totalBlocks; i++){
        bodyCell = document.createElement('div');
        bodyCell.className = 'cell';
        document.getElementById('screen').appendChild(bodyCell);
    }
    document.querySelectorAll('.cell').forEach(e =>{
        let color = random_01();
        if(color == 0){
            e.style.backgroundColor = "white";
        }else{
            e.style.backgroundColor = "black";        }
    })
    }

setInterval(create_random_grid, 100);