let items = [];

    document.getElementById('answer').addEventListener('change', function() {
        const textElement = document.getElementById('text');
        const selectedColor = this.value;
        textElement.style.color = selectedColor;
    });

    function add() {
        let input = document.getElementById("inputItem").value;
        let selectedColor = document.getElementById("answer").value;

        if (input !== "") {
            let priority;
            switch (selectedColor) {
                case 'red':
                    priority = 1;
                    break;
                case 'yellow':
                    priority = 2;
                    break;
                case 'green':
                    priority = 3;
                    break;
            }

            let item = {
                text: input,
                color: selectedColor,
                priority: priority
            };

            items.push(item);
            items.sort((a, b) => a.priority - b.priority);

            updateList();
            document.getElementById("inputItem").value = "";
        }
    }

    function updateList() {
        const list = document.getElementById("item-list");
        list.innerHTML = '';

        items.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item.text;
            li.style.color = item.color;
            list.appendChild(li);
        });
    }