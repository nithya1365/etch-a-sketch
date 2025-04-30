//pallete
const pal = document.querySelector(".pallete");
let cols = ["#824d5c", "#567c8d", "#3b0a0a", "#48182f"];
let clr=cols[0];

for(let i =0; i<4; i++)
{
    const cb = document.createElement("div");
    cb.classList.add("colbox");
    cb.style.backgroundColor = cols[i];
    if(i==0)
        cb.classList.add('selected');

    cb.addEventListener('click', ()=>
    {
        document.querySelectorAll('.colbox').forEach(box=> {
            box.classList.remove('selected');

        })
        cb.classList.add('selected');
        clr = cols[i];
    })

    pal.appendChild(cb);
}

const gr = document.querySelector(".grd");
gr.addEventListener('click', ()=>{
    document.querySelectorAll('.box').forEach(box=>{
        box.classList.toggle('showgrid');
    })
})

//penmodes
document.querySelector('.pen').style.border = "2px solid white";
const mode = document.querySelectorAll('.modes button');
mode.forEach(ele => {
    
    ele.addEventListener('click', ()=>
    {
        // ele.style.backgroundColor = "red";
        mode.forEach(bt=>{
            bt.style.border = "2px solid black";
        })
        ele.style.border = "2px solid white";
        
    })

    
});






//enter pixel size
const cont = document.querySelector(".container");
let num;
do{
num = +prompt("enter pixel size");
}
while(num>100);

//make grid canvas
function makeGrid()
{
    for(let i=1; i<=num; i++)
    {
        const row = document.createElement("div");
        row.classList.add("row")
        for(let j=1; j<=num; j++)
        {
            const box = document.createElement("div");
    box.classList.add('box');
            row.appendChild(box);
        }
        cont.appendChild(row);
    }
   
}
makeGrid();



const col = document.querySelector(".color");
let c = "blue";
col.addEventListener('click', ()=>{
    c = prompt("enter color")
    clr = c.toLowerCase();
    console.log(c);
    pal.querySelectorAll('.colbox').forEach(x=>{
        x.classList.remove('selected');
    })


})

const reset = document.querySelector(".reset");
let boxes = [];







//resetting
boxes = document.querySelectorAll(".box");

reset.addEventListener('click', ()=>{
    boxes.forEach(box=>{
        box.style.backgroundColor = "#f4e1e0";
    })
})


//color canvas
function colorBox()
{
    cont.addEventListener('mouseover', (e)=>
    {
        if (e.target.classList.contains("box")) {
            e.target.style.backgroundColor = c;
        }
    }
     )
}

let pen = false;

function handleHover(e)
{
    if (e.target.classList.contains("box")) {
        e.target.style.backgroundColor = clr;
        console.log(e.target.style.backgroundColor);
    }


}

const stat = document.querySelector(".status");


function enable()
{
    cont.addEventListener('click', ()=>
    {
        pen = !pen;
        if(pen)
        {
        cont.addEventListener("mouseover", handleHover);
        stat.style.color = "green";
        stat.textContent = "ENABLED";
        cont.style.cursor = "grabbing";
        }
        else
        {
            cont.removeEventListener("mouseover", handleHover);
            stat.style.color = "red";
            stat.textContent = "DISABLED";
            cont.style.cursor = "grab";

        }

            
            


    })

}

enable();


//here add logic for pencil: increase opacity by 10% every time we hover over a pixel



//here add blackboard logic: canvas- black, pen color- white+ opacity logic