const fruitList = ['poma', 'plàtan', 'tomàquet'];

const list = document.getElementById("list");

fruitList.forEach((e) => {
    let li = document.createElement("li");
    li.innerHTML = e;

    list.appendChild(li);
})