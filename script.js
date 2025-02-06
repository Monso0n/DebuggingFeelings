document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const startBtn = document.getElementById('start-btn');
    const textSequenceDiv = document.getElementById('text-sequence');
    const question = document.getElementById('question');
    const gifContainer = document.getElementById('gif-container');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    // Background music
    const backgroundMusic = new Audio('SEEYOUAGAIN.mp3');
    backgroundMusic.loop = true;

    const textArray = [
        "Hi Kristen👋",
        "I didn't make this website for school like I said I did🤭",
        "Actually, I made this as a little side project for you😏😁",
        "You see, ever since I met you😳...",
        "You caught my eye with your beauty😍",
        "The sun🌞 has some competition because your smile lights up my world more😎",
        "I keep thinking about the times we hung out together🤯",
        "and rewatching that video of us ice skating together⛸️😉",
        "You're really goofy, light hearted, and fun🤪",
        "You sent me brainrot while you were across the world hehe🌏😹",
        "You have great taste in food and know all the best spots🍡🍝🍲",
        "The fact that you're great at singing and playing instruments is so cool to me",
        "When you showed me that video of you singing 'Husn' I was actually blown away and rizzed up",
        "Cupid hit me with precision because I think I caught feelings for you💘...",
        "I want to hang out and learn more about you😁",
        "and make more happy memories😊",
        "I know it's kinda crazy, but I was thinking🫢..."
    ];

    const noTexts = [
        "Are you sure?",
        "Really sure?",
        "Come on, say yes!",
        "I’m waiting...",
        "Just press YES already!"
    ];

    let currentIndex = 0;
    let noClickCount = 0;
    let yesButtonScale = 1; // Track the current scale of the Yes button

    const showTextSequence = () => {
        if (currentIndex < textArray.length) {
            textSequenceDiv.textContent = textArray[currentIndex];
            textSequenceDiv.style.opacity = 1;
            setTimeout(() => {
                textSequenceDiv.style.opacity = 0;
                currentIndex++;
                setTimeout(showTextSequence, 1500);
            }, 2000);
        } else {
            textSequenceDiv.style.display = 'none';
            question.classList.remove('hidden');
            question.style.opacity = 1;
        }
    };

    const jiggleYesButton = () => {
        yesBtn.style.transform = `scale(${yesButtonScale}) translateX(0)`;
        yesBtn.classList.add('jiggle');
        setTimeout(() => {
            yesBtn.classList.remove('jiggle');
        }, 400);
    };

    startBtn.addEventListener('click', () => {
        backgroundMusic.currentTime = 3; 
        backgroundMusic.play().catch((err) => {
            console.error("Audio playback failed:", err);
        });
        startScreen.style.display = 'none';
        showTextSequence();
    });

    yesBtn.addEventListener('click', () => {
        jiggleYesButton();
        question.style.opacity = 0;
        setTimeout(() => {
            question.classList.add('hidden');
            gifContainer.classList.add('visible'); // Add 'visible' class to show the GIF
        }, 1000);
    });

    noBtn.addEventListener('click', () => {
        if (noClickCount < noTexts.length) {
            noBtn.textContent = noTexts[noClickCount];
        } else {
            noBtn.textContent = "Okay, I give up!";
        }
        noClickCount++;
        yesButtonScale = Math.min(yesButtonScale + 0.2, 2.5); // Cap growth
        yesBtn.style.transform = `scale(${yesButtonScale})`; // Apply new size
        jiggleYesButton();
    });
});
