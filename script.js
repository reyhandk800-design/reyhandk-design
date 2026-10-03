const opening =
    document.getElementById("opening");

const website =
    document.getElementById("website");

const openButton =
    document.getElementById("openButton");

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");


/* ==================================================
   OPEN LETTER + START MUSIC
================================================== */

openButton.addEventListener("click", async () => {

    /*
        Browser biasanya mengizinkan audio
        karena user baru saja melakukan klik.
    */

    opening.style.opacity = "0";

    opening.style.transition =
        "opacity 0.7s ease";


    setTimeout(() => {

        opening.style.display = "none";

        website.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);


    /*
        Mulai lagu.
    */

    try {

        music.volume = 0.35;

        await music.play();

        musicButton.textContent = "❚❚";

    } catch (error) {

        /*
            Jika browser tetap menolak,
            user masih bisa menekan tombol
            musik secara manual.
        */

        musicButton.textContent = "▶";

        console.log(
            "Audio belum dapat dimainkan:",
            error
        );

    }

});


/* ==================================================
   MUSIC BUTTON
================================================== */

musicButton.addEventListener("click", async () => {

    if (music.paused) {

        try {

            await music.play();

            musicButton.textContent = "❚❚";

        } catch (error) {

            console.log(
                "Audio tidak dapat dimainkan:",
                error
            );

        }

    } else {

        music.pause();

        musicButton.textContent = "▶";

    }

});


/* ==================================================
   WHEN SONG ENDS
================================================== */

music.addEventListener("ended", () => {

    musicButton.textContent = "▶";

});

/* =========================================
   FALLING DECORATIONS
========================================= */

const fallingContainer =
    document.getElementById("falling-elements");

const fallingItems = [
    "♡",
    "♡",
    "✦",
    "✧",
    "☁",
    "·"
];


function createFallingElement() {

    const element =
        document.createElement("span");

    element.classList.add("falling-item");

    element.textContent =
        fallingItems[
            Math.floor(
                Math.random() *
                fallingItems.length
            )
        ];

    element.style.left =
        Math.random() * 100 + "vw";

    const size =
        Math.random() * 12 + 10;

    element.style.fontSize =
        size + "px";

    const duration =
        Math.random() * 5 + 6;

    element.style.animationDuration =
        duration + "s";

    element.style.animationDelay =
        Math.random() * 2 + "s";

    fallingContainer.appendChild(element);

    setTimeout(() => {

        element.remove();

    }, (duration + 2) * 1000);
}


setInterval(
    createFallingElement,
    500
);