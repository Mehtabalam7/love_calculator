
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function generateRandomNumber1() {
    return Math.floor(Math.random() * 10) + 0;
}

let btn = document.querySelector("#btn");

let loader = document.querySelector(".heart")
let loading = document.querySelector(".heart-holder p")

let msg = document.querySelector(".msg")
let msg1 = document.querySelector(".msg1")


let loveArray = ["I love you and I like you.", "I hope it's okay if I love you forever.","For small creatures such as we, the vastness is bearable only through love.","Nobody has ever measured, not even poets, how much the heart can hold.","Love me—that's all I ask of you.","If you were in an accident, I wouldn't stop for red lights.","Love is a friendship set to music.","Who, being loved, is poor?", "True love is inexhaustible. The more you give, the more you have.","To me you are perfect.","It doesn't make you weak to love someone."]

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let name1 = document.querySelector(".person1 input");
    let name2 = document.querySelector(".person2 input");

    let name = name1.value
    let partnerName = name2.value

    loader.classList.add("class", "heart1");
    loading.innerText = "Loading";


    setTimeout(() => {
        // msg.innerHTML = `<p>The love between ${name} and ${partnerName} is ${generateRandomNumber() + "%"}</p>`;

        if (name === "navaid" && partnerName === "rifat") {
            msg.innerHTML = `Bhai uska shaadi hone wala hai to sapne dekhna band karr`;
        }

        
        
        else {
            msg.innerHTML = `<p>The love between ${name} and ${partnerName} is ${generateRandomNumber()}%</p>`;


            msg1.classList.add("class","msg","msgg")

            msg1.innerHTML = loveArray[generateRandomNumber1()]
        }

        loader.classList.remove("class", "heart1");
        loading.innerText = "";

    }, 5000);

});
