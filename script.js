const cont = document.querySelector(".container");
let num;
num = +prompt("enter num of squaraes");
function makeBox()
{
    const box = document.createElement("div");
    box.classList.add('box');
}

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

function colorBox()
{
    cont.addEventListener('mouseover', (e)=>
    {
        if (e.target.classList.contains("box")) {
            e.target.style.backgroundColor = "blue";
        }
    }
     )
}

let cnt=1;



let pen = false;

function handleHover(e)
{
    if (e.target.classList.contains("box")) {
        e.target.style.backgroundColor = "blue";
    }


}


function enable()
{
    cont.addEventListener('click', ()=>
    {
        pen = !pen;
        if(pen)
        {
        cont.addEventListener("mouseover", handleHover);
        alert("enabled");
        }
        else
        {
            cont.removeEventListener("mouseover", handleHover);
            alert("disabled");

        }

            
            


    })

}

enable();