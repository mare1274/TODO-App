function add() {
    let input = document.getElementById("inputItem").value;

    if (input !== "") {

        let li = document.createElement("li");
        
        li.textContent = input;

        document.getElementById("item-list").appendChild(li);

        document.getElementById("inputItem").value = "";
    }
}