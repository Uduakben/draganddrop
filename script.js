let rightBox = document.getElementById("rightbox");
let leftBox = document.getElementById("leftbox");
let contents = document.getElementsByClassName("cont");


for (let content of contents) {

    content.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        })
    })
    
}