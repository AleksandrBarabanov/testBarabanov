let listBlock = document.getElementsByClassName("block");
let bun = document.getElementById("bun");

function changeBg(){
    for(let i=0; i<listBlock.length;i++){
        listBlock[i].classList.toggle("blue");// toggle - проверяет туда обратно add - только в одну сторону меняет
    }
}
bun.onclick = changeBg;