// *****************ATTACHING VIDEO******************

let myVideo = document.querySelector(".my-video");

function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        document.querySelector(".pause__btn").style.backgroundImage = "none";
    } else {
        myVideo.pause();
        document.querySelector(".pause__btn").style.backgroundImage =
            "url(img/play.png)";
    }
}


// **********************MODAL***********************

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');
const f11 = document.querySelector('.features-11');
const f6 = document.querySelector('.features-6');
const testinomials = document.querySelector('.testinomials');
const footer = document.querySelector('.footer');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    f11.classList.add('hidden');
    f6.classList.add('hidden');
    testinomials.classList.add('hidden');
    footer.classList.add('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    f11.classList.remove('hidden');
    f6.classList.remove('hidden');
    testinomials.classList.remove('hidden');
    footer.classList.remove('hidden');
};

btnsOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);



// *********************************CAROUSEL***************************


let lcolour = document.getElementById('lightArrow')
let rcolour = document.getElementById('RightArrow')

var left = 1;
var right = 3;

function show() {
    for (i = left; i <= right; i++) {
        document.getElementById("c" + i).style.display = "inline-block";
    }
}


var c = 1;

function moveLeft() {
    if (c >= 4 && c <= 6) {
        for (i = 4; i <= 6; i++) {
            document.getElementById("c" + i).style.display = "none";
            c -= 1;
        }

        for (i = 1; i <= 3; i++) {
            document.getElementById("c" + i).style.display = "inline-block";
        }
        // console.log(c);

    } else {
        return;
    }
}

function moveRight() {
    if (c >= 1 && c <= 3) {
        for (i = 1; i <= 3; i++) {
            document.getElementById("c" + i).style.display = "none";
            c += 1;
        }

        for (i = 4; i <= 6; i++) {
            document.getElementById("c" + i).style.display = "inline-block";
        }

        console.log(c);

    } else {
        return;
    }
}