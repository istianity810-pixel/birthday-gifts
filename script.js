const questionScreen = document.getElementById("questionScreen");
const passwordScreen = document.getElementById("passwordScreen");
const mainScreen = document.getElementById("mainScreen");
const firstYes =  document.getElementById("firstYes");
const firstNo = document.getElementById("firstNo");
const firstHint = document.getElementById("firstHint");
const passwordInput =  document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const passwordHint =  document.getElementById("passwordHint");
const messageBox = document.getElementById("messageBox");
const memoryMessage = document.getElementById("memoryMessage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const secondYes = document.getElementById("secondYes");
const secondNo = document.getElementById("secondNo");
const secondHint = document.getElementById("secondHint");
const finalMessage = document.getElementById("finalMessage");


let firstYesSize = 16;
let secondYesSize = 16;

let firstNoCount = 0;
let secondNoCount = 0;


const password = "12272005";


const firstNoMessages = [
    "Sure kaba? 👀",
    "Talaga bang NO? 😭",
    "Sayang naman HAHAHA 💛",
    "Baka gusto mo lang magpanggap na NO 😭",
    "Last chance... sure ka? 👀",
    "Hindi talaga interested? 😭",
    "Sige ka, lalaki pa si YES HAHAHA",
    "Okay final answer mo na yan? 😭"
];


const secondNoMessages = [
    "Sure kaba talaga? 👀",
    "Parang hindi ako naniniwala 😭",
    "Talaga bang hindi? HAHAHA",
    "Baka nahihiya ka lang sabihin 😭💛",
    "Ang tapang naman ng NO mo 😭",
    "Sure na sure ka? 👀",
    "Okayyy... gusto mo talaga akong tanggihan? 😭",
    "Final answer na yan? HAHAHA"
];


const memoryMessages = {

    1: {
        title: "A Little Moment Of You 💛",
        text:
            "Some moments may be simple, but somehow they become the ones you remember. I still appreciate this little moment and the smile behind it."
    },

    2: {
        title: "My Fav Girl ✨",
        text:
            "Okay, this picture deserves a spot here because this is my fav girl HAHAHA oa. But No matter how things changed, I will always appreciate the person you are. Keep being you, keep smiling, and never forget how special you are. ✨"
    },

    3: {
        title: "Keep Smiling 🌻",
        text:
            "One thing I genuinely wish for you is that you keep that smile. I hope life gives you more reasons to smile, laugh, and enjoy your days. 🌻💛"
    }

};


firstNo.addEventListener("click", function() {

    firstNoCount++;

    firstYesSize += 8;

    firstYes.style.fontSize =
        firstYesSize + "px";

    firstYes.style.padding =
        (14 + firstYesSize / 4) +
        "px " +
        (25 + firstYesSize / 2) +
        "px";

    let messageIndex =
        Math.min(
            firstNoCount - 1,
            firstNoMessages.length - 1
        );

    firstHint.innerHTML =
        firstNoMessages[messageIndex];

});


firstYes.addEventListener("click", function() {

    questionScreen.classList.add("hidden");

    passwordScreen.classList.remove("hidden");

    passwordInput.focus();

    showConfetti();

});


passwordButton.addEventListener("click", function() {

    checkPassword();

});


passwordInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        checkPassword();
    }

});


function checkPassword() {

    if (passwordInput.value === password) {

        passwordHint.innerHTML =
            "Correct! You remembered it!";

        setTimeout(function() {

            passwordScreen.classList.add("hidden");

            mainScreen.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            showConfetti();

        }, 700);

    } else {

        passwordHint.innerHTML =
            "Hmmmm... wrong password 😭 Try again.";

        passwordInput.value = "";

        passwordInput.focus();
    }

}


function openMessage() {

    messageBox.classList.remove("hidden");

    const button =
        document.getElementById("openButton");

    button.innerHTML =
        "Birthday Message Opened 💛";

    button.disabled = true;

    showConfetti();

    messageBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function showMemory(number) {

    const cards =
        document.querySelectorAll(".photo-card");

    cards.forEach(function(card) {
        card.classList.remove("active");
    });

    cards[number - 1].classList.add("active");

    memoryTitle.innerHTML =
        memoryMessages[number].title;

    memoryText.innerHTML =
        memoryMessages[number].text;

    memoryMessage.classList.remove("hidden");

    showMiniHearts();

    memoryMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


secondNo.addEventListener("click", function() {

    secondNoCount++;

    secondYesSize += 9;

    secondYes.style.fontSize =
        secondYesSize + "px";

    secondYes.style.padding =
        (14 + secondYesSize / 4) +
        "px " +
        (25 + secondYesSize / 2) +
        "px";

    let messageIndex =
        Math.min(
            secondNoCount - 1,
            secondNoMessages.length - 1
        );

    secondHint.innerHTML =
        secondNoMessages[messageIndex];

});


secondYes.addEventListener("click", function() {

    finalMessage.classList.remove("hidden");

    secondHint.innerHTML = "";

    secondYes.innerHTML =
        "I KNEW IT 😭💛";

    secondYes.disabled = true;

    secondNo.style.display = "none";

    showConfetti();

    finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


function showMiniHearts() {

    for (let i = 0; i < 10; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            Math.random() > 0.5
                ? "💛"
                : "✨";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "10px";

        heart.style.fontSize =
            18 + Math.random() * 12 + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const animation =
            heart.animate(
                [
                    {
                        transform:
                            "translateY(0) scale(1)",
                        opacity: 1
                    },
                    {
                        transform:
                            "translateY(-100vh) scale(1.5)",
                        opacity: 0
                    }
                ],
                {
                    duration:
                        1800 + Math.random() * 1200,
                    easing: "ease-out"
                }
            );

        animation.onfinish = function() {
            heart.remove();
        };

    }

}


function showConfetti() {

    for (let i = 0; i < 25; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            Math.random() > 0.5
                ? "💛"
                : "✨";

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
            18 + Math.random() * 15 + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const animation =
            confetti.animate(
                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform:
                            "translateY(100vh) rotate(360deg)",
                        opacity: 0
                    }
                ],
                {
                    duration:
                        1800 + Math.random() * 2200,
                    easing: "linear"
                }
            );

        animation.onfinish = function() {
            confetti.remove();
        };

    }

}
