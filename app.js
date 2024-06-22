let soundOn = true;
/*-Fragments------------------------------------------*/
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<header class="d-flex justify-content-between align-items-center">
                <nav class="navbar navbar-expand-lg container justify-content-end">
                    <div class="container-fluid">
                        <a class="logo-navbar" href="../index.html"><img class="icon" src="../images/logocarcassonne.png"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav menu ms-auto g-1">
                                <li class="nav-item">
                                    <a class="nav-link option-menu" href="../pages/officialrules.html">Official Rules</a>
                                </li>
                                <li class="nav-item menu-opcion">
                                    <a class="nav-link option-menu" href="../pages/tilescounter.html">Tiles Counter</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link option-menu" href="../pages/carcassonnetimer.html">Timers</a>
                                </li>
                                <li class="nav-item option-tournament">
                                    <a class="nav-link option-menu" href="../pages/createTournament.html">Tournament</a>
                                    <div class="cooming-soon">¡Coming soon!</div>
                                </li>
                                <li>
                                    <a class="nav-item logo-count" href=""><img class="icon" src="../images/meeple20.png"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>`
    }
}
customElements.define('special-header', SpecialHeader);
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<footer class="d-flex flex-column flex-wrap justify-content-start">
        <section class="footer-section footer-section-1">
            <a href="../index.html"><img class="img-section-1" src="../images/carcassonne.png"></a>
        </section>
        <section class="footer-section footer-section-2 d-flex flex-md-row flex-column">
            <div class="footer-div21 d-flex flex-column">
                <h4>About Me</h4>
                <p>I'm Matías Carrizo. I have been a programmer since June 2022. From April 2022 to December 2023, I was
                    a programming teacher at Egg Education. I am proficient in the following technologies:
                </p>
            </div>
            <div class="footer-div22 d-flex flex-column">
                <h4>Contact Me</h4>
                <form method="post">
                    <div class="footer-div221 d-flex justify-content-between">
                        <input type="text" id="name" placeholder="Name" required>
                        <input type="email" id="email" placeholder="Email Address" required>
                        <input type="text" id="subject" placeholder="Subject" required>
                    </div>
                    <div class="footer-div222">
                        <textarea class="mailbody" id="message" rows="10" cols="50" placeholder="Message"
                            required></textarea>
                    </div>
                    <div class="footer-div223 d-flex flex-row justify-content-between">
                        <div class="footer-div2231">
                            <button id="sent-btn" class="mailbutton"><i class="bi bi-send-fill"></i></button>
                        </div>
                        <div class="footer-div2232">
                            <a href="https://github.com/maticarrizoc" target="_blank"><i class="bi bi-github"></i></a>
                            <a href="https://www.linkedin.com/in/matias-alejandro-carrizo-conti-300a8a168/"
                                target="_blank"><i class="bi bi-linkedin"></i></a>
                            <a href="https://chat.whatsapp.com/JS0vwUiRjIiE3TeXPeU67F" target="_blank"><i
                                    class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <section class="footer-section footer-section-3 d-flex flex-wrap align-items-center">
            <h4>Credits</h4>
            <a href="http://www.onlinewebfonts.com/fonts" target="_blank">Web Fonts</a>
            <a href="https://www.zedge.net/ringtones" target="_blank">Sounds</a>
            <a href="https://coolors.co/palettes" target="_blank">Colors</a>
        </section>
        <section class="footer-section footer-section-4 d-flex flex-wrap align-items-center">
            <h4>Community</h4>
            <a href="https://chat.whatsapp.com/JS0vwUiRjIiE3TeXPeU67F" target="_blank"><img
                    src="../images/argentinaflag.png"></a>
            <a href="https://www.carcassonnebrasil.com/" target="_blank"><img src="../images/brazilflag.png"></a>
            <a href="https://carcassonnebelgium.weebly.com/" target="_blank"><img src="../images/belgiumflag.png"></a>
            <a href="https://www.carcassonne.cat/" target="_blank"><img src="../images/cataloniaflag.png"></a>
            <a href="http://carcassonnecolombia.com/?i=1" target="_blank"><img src="../images/colombiaflag.png"></a>
            <a href="https://carcassonnefrance.wordpress.com/" target="_blank"><img src="../images/franceflag.png"></a>
            <a href="https://sites.google.com/view/carcassonne-hong-kong/home" target="_blank"><img
                    src="../images/hongkongflag.png"></a>
            <a href="https://www.carcassonne.hu/" target="_blank"><img src="../images/hungaryflag.png"></a>
            <a href="https://carcassonne.jyoukamachi.com/" target="_blank"><img src="../images/japanflag.png"></a>
            <a href="https://carcassonnemex.zyrosite.com/" target="_blank"><img src="../images/mexicoflag.png"></a>
            <a href="https://carcassonnespain.es/" target="_blank"><img src="../images/spainflag.png"></a>
            <a href="https://carcassonne.com.ua/" target="_blank"><img src="../images/ukraineflag.png"></a>
            <a href="https://www.carcassonnecentral.com/community/" target="_blank">Carcassonne Central</a>
            <a href="https://elcarterodecarcassonne.com/" target="_blank">El Cartero de Carcassonne</a>
            <a href="https://carcassonne.gg/" target="_blank">Carcassonne Champions League</a>
            </div>
        </section>
        <section class="footer-section footer-section-5 d-flex justify-content-end">
            <span>Created and Designed by Matías Carrizo &copy; 2024 - Carcassone Tiles</span>
        </section>
    </footer>`
    }
}
customElements.define('special-footer', SpecialFooter);
/*-Email-Footer---------------------------------------*/
let script = document.createElement('script');
script.src = 'https://smtpjs.com/v3/smtp.js';
document.body.appendChild(script);

let emailBtn = document.getElementById("sent-btn");
emailBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
    Email.send({
        Host: "smtp25.elasticemail.com",
        Username: "maticarrizo1998@gmail.com",
        Password: "YOUR PASSWORD",
        To: 'maticarrizo1998@gmail.com',
        From: "maticarrizo1998@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => {
            alert('Your message has been sent.');
            window.location.reload(); // Reload page after send mail
        }
    );
})
/*-Counters-------------------------------------------*/
function updateCounter(id, increment, limiteMaximo) {
    const element = document.getElementById(id);
    const value = element.querySelector(".value");
    const contador = parseInt(value.innerHTML, 10);
    if (contador + increment >= 0 && contador + increment <= limiteMaximo) {
        if (increment == 1) {
            const audio = document.getElementById("plus");
            audio.pause();
            audio.currentTime = 0;
            if (soundOn) {
                audio.volume = 0.2;
            } else {
                audio.volume = 0;
            }
            audio.play();
        } else {
            const audio = document.getElementById("subtract");
            audio.pause();
            audio.currentTime = 0;
            if (soundOn) {
                audio.volume = 0.2;
            } else {
                audio.volume = 0;
            }
            audio.play();
        }
        value.innerHTML = contador + increment;
        updateTotalCounters();
    }
}
function resetCounter(id) {
    const audio = document.getElementById("reset");
    const element = document.getElementById(id);
    const value = element.querySelector(".value");
    audio.pause();
    audio.currentTime = 0;
    if (soundOn) {
        audio.volume = 0.2;
    } else {
        audio.volume = 0;
    }
    audio.play();
    value.innerHTML = "0";
    updateTotalCounters();
}
function updateTotalCounters(audio) {
    const contadorTotalElement = document.getElementById("total");
    const contadores = document.querySelectorAll(".value");
    let total = 0;
    contadores.forEach(function (contador) {
        total += parseInt(contador.innerHTML, 10);
    });
    contadorTotalElement.innerHTML = total;
    if (total === 7) {
        audio.play();
    }
}
function resetAllCounters() {
    const contadores = document.querySelectorAll(".value");
    const audio = document.getElementById("resetall");
    audio.pause();
    audio.currentTime = 0;
    if (soundOn) {
        audio.volume = 0.3;
    } else {
        audio.volume = 0;
    }
    audio.play();
    contadores.forEach(function (contador) {
        contador.innerHTML = "0";
    });
    updateTotalCounters();
}
function updateTotalCounters() {
    const contadorTotalElement = document.getElementById("total");
    const contadores = document.querySelectorAll(".value");
    let total = 0;
    contadores.forEach(function (contador) {
        total += parseInt(contador.innerHTML, 10);
    });
    contadorTotalElement.innerHTML = total;
}
/*-Enable/Disable sound---------------------------*/
function toggleSound() {
    soundOn = !soundOn;
    const btnSound = document.getElementById('btnSound');
    const imgElement = btnSound.querySelector('img');
    if (soundOn) {
        imgElement.src = '/imagenes/soundon.png';
    } else {
        imgElement.src = '/imagenes/soundoff.png';
    }
}
/*-Timers------------------------------------------*/
const gameTime = document.getElementById('game-time');

let pauseTimers = false;

document.getElementById('timers').style.display = 'none';

document.getElementById('timer-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('timer-form').style.display = 'none';// Hide the form
    document.getElementById('header-timer').style.display = 'none';// Hide the header
    document.getElementById('footer-timer').style.display = 'none';// Hide the footer
    document.getElementById('timers').style.display = 'block';// Show the timers
    if (gameTime.value < 10) {
        document.getElementById('stopwatch1').textContent = '0' + gameTime.value + ':00';
        document.getElementById('stopwatch2').textContent = '0' + gameTime.value + ':00';
    } else {
        document.getElementById('stopwatch1').textContent = gameTime.value + ':00';
        document.getElementById('stopwatch2').textContent = gameTime.value + ':00';
    }
});
/*-----Colors-Timers----------------------------------*/
function applyStyles(timerElement, color) {
    timerElement.style.backgroundColor = color;
    timerElement.style.color = '#fafdf6';
    timerElement.style.textShadow = '3px 3px 1px #231F1D';
    timerElement.style.fontFamily = 'Chakra Petch Regular';
}

function handleColorChange(colourPlayer, timerElement) {
    colourPlayer.addEventListener('change', function () {
        const selectedColor = colourPlayer.value;

        switch (selectedColor) {
            case 'black':
                applyStyles(timerElement, '#231F1D');
                break;
            case 'blue':
                applyStyles(timerElement, '#004A84');
                break;
            case 'green':
                applyStyles(timerElement, '#2B8400');
                break;
            case 'red':
                applyStyles(timerElement, '#d00000');
                break;
            case 'yellow':
                applyStyles(timerElement, '#ffd60a');
                break;
            default:
                break;
        }
    });
}
const colourPlayer1 = document.getElementById('colour-player1');
const timerElement1 = document.querySelector('.timer1');
handleColorChange(colourPlayer1, timerElement1);

const colourPlayer2 = document.getElementById('colour-player2');
const timerElement2 = document.querySelector('.timer2');
handleColorChange(colourPlayer2, timerElement2);

const stopwatch1 = document.getElementById('stopwatch1');
const playPauseButton1 = document.getElementById('play-pause1');

const stopwatch2 = document.getElementById('stopwatch2');
const playPauseButton2 = document.getElementById('play-pause2');

let stopwatchInterval1;
let stopwatchInterval2;
let runningTime1 = 0;
let runningTime2 = 0;

const tilesPlayedPlayer1 = document.getElementById('tilesPlayedPlayer1');
const tilesPlayedPlayer2 = document.getElementById('tilesPlayedPlayer2');
let tilesPlayed1 = 0;
let tilesPlayed2 = -1;

const playPauseTimers = () => {
    const isPaused = !playPauseButton1.classList.contains('running');
    const imgElement = document.getElementById('btnPlayPause').querySelector('i');

    if (isPaused) {
        pauseTimers = false;
        playPauseButton1.classList.add('running');
        start1();
        playPauseButton2.classList.remove('running');
        clearInterval(stopwatchInterval2); // Pausa
        tilesPlayed2 += 1;
        tilesPlayedPlayer2.innerHTML = "Tiles played: " + tilesPlayed2;
    } else {
        pauseTimers = false;
        playPauseButton1.classList.remove('running');
        clearInterval(stopwatchInterval1); // Pausa
        playPauseButton2.classList.add('running');
        start2();
        tilesPlayed1 += 1;
        tilesPlayedPlayer1.innerHTML = "Tiles played: " + tilesPlayed1;
    }
}

const start1 = () => {
    let startTime = Date.now() - runningTime1;
    stopwatchInterval1 = setInterval(() => {
        runningTime1 = Date.now() - startTime;
        stopwatch1.textContent = calculateTime1(runningTime1);
    }, 1000);
    const iconElement = btnPlayPause.querySelector('i');
    iconElement.classList.remove('bi-play-fill');
    iconElement.classList.add('bi-pause-fill');
}

const start2 = () => {
    let startTime = Date.now() - runningTime2;
    stopwatchInterval2 = setInterval(() => {
        runningTime2 = Date.now() - startTime;
        stopwatch2.textContent = calculateTime2(runningTime2);
    }, 1000);
}

const calculateTime1 = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const gameTimeMinutes = parseInt(gameTime.value);

    if (total_minutes >= gameTimeMinutes) {
        const over_seconds = (total_seconds % 60).toString().padStart(2, "0");
        const over_minutes = (total_minutes - gameTimeMinutes).toString().padStart(2, "0");
        return `-${over_minutes}:${over_seconds}`;
    } else {
        const remaining_seconds = (59 - (total_seconds % 60)).toString().padStart(2, "0");
        const remaining_minutes = (gameTimeMinutes - 1 - total_minutes).toString().padStart(2, "0");
        return `${remaining_minutes}:${remaining_seconds}`;
    }
}

const calculateTime2 = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const gameTimeMinutes = parseInt(gameTime.value);

    if (total_minutes >= gameTimeMinutes) {
        const over_seconds = (total_seconds % 60).toString().padStart(2, "0");
        const over_minutes = (total_minutes - gameTimeMinutes).toString().padStart(2, "0");
        return `-${over_minutes}:${over_seconds}`;
    } else {
        const remaining_seconds = (59 - (total_seconds % 60)).toString().padStart(2, "0");
        const remaining_minutes = (gameTimeMinutes - 1 - total_minutes).toString().padStart(2, "0");
        return `${remaining_minutes}:${remaining_seconds}`;
    }
}

const pausePlayBothTimers = () => {
    pauseTimers = !pauseTimers;
    const btnPlayPause = document.getElementById('btnPlayPause');
    const iconElement = btnPlayPause.querySelector('i');

    if (pauseTimers) {
        iconElement.classList.remove('bi-pause-fill');
        iconElement.classList.add('bi-play-fill');
        playPauseButton1.classList.remove('running');
        clearInterval(stopwatchInterval1);
        playPauseButton2.classList.remove('running');
        clearInterval(stopwatchInterval2);
        document.getElementById("play-pause1").removeAttribute('onclick');
        document.getElementById("play-pause2").removeAttribute('onclick');
    } else {
        iconElement.classList.remove('bi-play-fill');
        iconElement.classList.add('bi-pause-fill');
        document.getElementById("play-pause1").setAttribute('onclick', 'playPauseTimers()');
        document.getElementById("play-pause2").setAttribute('onclick', 'playPauseTimers()');
        if (tilesPlayed2 < tilesPlayed1 && tilesPlayed1 != 0) {
            playPauseButton2.classList.add('running');
            start2();
        } else {
            playPauseButton1.classList.add('running');
            start1();
        }
    }
}

function resetTimers() {
    if (pauseTimers) {
        const audio = document.getElementById("resetall");
        audio.pause();
        audio.currentTime = 0;
        if (soundOn) {
            audio.volume = 0.3;
        } else {
            audio.volume = 0;
        }
        audio.play();
        if (gameTime.value < 10) {
            document.getElementById('stopwatch1').textContent = '0' + gameTime.value + ':00';
            document.getElementById('stopwatch2').textContent = '0' + gameTime.value + ':00';
        } else {
            document.getElementById('stopwatch1').textContent = gameTime.value + ':00';
            document.getElementById('stopwatch2').textContent = gameTime.value + ':00';
        }
        runningTime1 = 0;
        runningTime2 = 0;
        tilesPlayed1 = 0;
        tilesPlayed2 = 0;
        document.getElementById("tilesPlayedPlayer1").innerHTML = "Tiles played: " + tilesPlayed1;
        document.getElementById("tilesPlayedPlayer2").innerHTML = "Tiles played: " + tilesPlayed2;

    } else {
        alert('First, you need to pause the timers to restart them.');
    }

}
document.getElementById('navbar-timers').style.display = 'none';
function openMenu(){
    document.getElementById('navbar-timers').style.display = 'block';
    pausePlayBothTimers();
}
function closeMenu() {
    document.getElementById('navbar-timers').style.display = 'none';
}