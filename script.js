const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", () => {
    question.innerHTML = "aku juga mencintai kamuuu!!!";
    gif.src =
       "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
});

noBtn.addEventListener("mouseover", () =>{
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;

      const randomX = Math.floor(math.random() * maxX);
      const randomY = Math.floor(math.random() * maxY);

      noBtn.Style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
      gif.src=
        "https://media2.giphy.com/media/XHFzB9t4wDlKqrfQ58/giphy.gif";
});
