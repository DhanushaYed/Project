l=[]

function add(){
    const t = document.getElementById("task").value;
    l.push(t);
    display();
}

function display(){
    const tl = document.getElementById("list");
    tl.innerHTML="";
    l.forEach((task,index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="delet(${index})">delete</button>`;
        tl.appendChild(li);
    });
}

function delet(index){
    l.splice(index,1);
    display();
}