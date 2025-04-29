const cont = document.querySelector(".container");
let num;
num = +prompt("enter num of squaraes");
function makeBox()
{
    const box = document.createElement("div");
    box.classList.add('box');
}

const col = document.querySelector(".color");
let c = "blue";
col.addEventListener('click', ()=>{
    c = prompt("enter color")
    c = c.toLowerCase();
    console.log(c);


})

const reset = document.querySelector(".reset");
let boxes = [];




// 20


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
    // box.innerText = "hello"
            row.appendChild(box);
        }
        cont.appendChild(row);
    }
   
}

makeGrid();
boxes = document.querySelectorAll(".box");

reset.addEventListener('click', ()=>{
    boxes.forEach(box=>{
        box.style.backgroundColor = "white";
    })
})

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

let cnt=1;



let pen = false;

function handleHover(e)
{
    if (e.target.classList.contains("box")) {
        e.target.style.backgroundColor = c;
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
        }
        else
        {
            cont.removeEventListener("mouseover", handleHover);
            stat.style.color = "red";
            stat.textContent = "DISABLED";

        }

            
            


    })

}

enable();