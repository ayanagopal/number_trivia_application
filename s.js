

let a = document.getElementById("get-fact-btn");
let b = document.getElementById("facts");
let c = document.querySelector(".fact");
let url = "http://numbersapi.com/";

let d = (num) => {
    let e = url + num;
    fetch(e)
    .then((resp) => resp.text())
    .then((data) => { 
        c.style.display = "block";
        c.innerHTML = `<h2>${num}</h2>
        <p>${data}</p>`;
        document.querySelector(".container").append(c);
     });
};

let f = () => {
    let num = document.getElementById("num").value;
    if(num){
        if(num >= 0 && num <= 300){
            d(num);
        } else {
            c.style.display = "block";
            c.innerHTML = `<p class="msg">Please enter a number between 0 to 300</p>`;
        }
    } else {
        c.style.display = "block";
        c.innerHTML = `<p class="msg">The input field cannot be empty</p>`;
    }
};

// Fixing the typo in the event listener
a.addEventListener("click", f);
