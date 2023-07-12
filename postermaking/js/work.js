const contactContainer = document.querySelector(".contact-container");
const contactButton = document.querySelector(".contact-form button");
const contactTextbox = document.querySelector(".contact-form input[type='text']");
const onClickButton = document.querySelector(".contact-container .onclickbutton");

console.log(contactContainer);
console.log(contactButton);
console.log(contactTextbox);
console.log(onClickButton);



contactButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (contactTextbox.value) {
        const ans = contactTextbox.value.split(' ');
        const Firstname = ans[0];
        console.log(Firstname);

        onClickButton.style.display = "block";
        onClickButton.style.display = "flex";
        onClickButton.style.flexDirection = "column";
        onClickButton.style.justifyContent = "center";
        onClickButton.style.alignItems = "center";
        onClickButton.style.textAlign = "center";
        onClickButton.innerHTML = `Thank You ${Firstname} <br> Your Response Has Been Recorded <br> We Will Contact You Shortly <br> <i class="fa-solid fa-face-grin-beam"></i>`;
        onClickButton.style.fontSize = "2.3rem";
        onClickButton.style.fontWeight = "600";
        onClickButton.style.padding = "0 3rem"
    }
})


const topicBtn1 = document.querySelector(".topic-btn-1");
const topicBtn2 = document.querySelector(".topic-btn-2");
const topicBtn3 = document.querySelector(".topic-btn-3");

topicBtn1.addEventListener("click", () => {
    const loc = "https://en.wikipedia.org/wiki/Digital_marketing";
    window.open(loc, "_blank");
})
topicBtn2.addEventListener("click", () => {
    const loc = "https://en.wikipedia.org/wiki/E-learning_(theory)";
    window.open(loc, "_blank");
})
topicBtn3.addEventListener("click", () => {
    const loc = "https://en.wikipedia.org/wiki/Environmental_footprint_of_electric_cars";
    window.open(loc, "_blank");
})



const galleryBtn = document.querySelectorAll(".gallery-btn");

for (let button of galleryBtn) {
    button.addEventListener("click", () => {
        const loc = "https://www.gbu.ac.in/";
        window.open(loc, "_blank");
    })
}

const cardImg = document.querySelector("cardImg");
const icons = document.querySelector(".icons");
img.onclick = function () {
    this.classList.toggle("active");
    icons.classList.toggle("active");
}



