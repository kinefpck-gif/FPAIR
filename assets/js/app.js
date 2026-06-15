/* ==========================
   FPAIR 2.0 PREMIUM APP
========================== */

document.addEventListener("DOMContentLoaded", () => {

    activateSidebar();
    smoothReveal();
    smoothButtons();

});

/* ==========================
   ACTIVE SIDEBAR
========================== */

function activateSidebar(){

    const sections =
    document.querySelectorAll("section[id]");

    const navLinks =
    document.querySelectorAll(".sidebar-nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
            section.offsetTop - 180;

            const sectionHeight =
            section.clientHeight;

            if(
                pageYOffset >= sectionTop &&
                pageYOffset <
                sectionTop + sectionHeight
            ){
                current =
                section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if(
                link.getAttribute("href")
                === `#${current}`
            ){
                link.classList.add("active");
            }

        });

    });

}

/* ==========================
   REVEAL ANIMATION
========================== */

function smoothReveal(){

    const elements =
    document.querySelectorAll(
        ".hero, .action-card, .exam-card, .check-item, .section-header"
    );

    const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });

    elements.forEach(el => {

        el.classList.add("hidden");
        observer.observe(el);

    });

}

/* ==========================
   BUTTON INTERACTIONS
========================== */

function smoothButtons(){

    const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .top-btn"
    );

    buttons.forEach(button => {

        button.addEventListener(
        "mouseenter", () => {

            button.style.transform =
            "translateY(-3px) scale(1.02)";

        });

        button.addEventListener(
        "mouseleave", () => {

            button.style.transform =
            "translateY(0) scale(1)";

        });

    });

}
// =====================================
// FPAIR SPIROMETRY STEPPER
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const steps = [

        {
            title: "Inspiración máxima",
            description:
                "Inspira profundamente hasta llenar completamente tus pulmones.",

            tip:
                "Imagina que debes llenar completamente el pecho antes de comenzar.",

            error:
                "Inspirar poco aire antes del soplido."
        },

        {
            title: "Sellar boquilla",
            description:
                "Coloca la boquilla firmemente entre tus labios sin dejar fugas.",

            tip:
                "Aprieta suavemente los labios alrededor de la boquilla.",

            error:
                "Fuga de aire alrededor de la boquilla."
        },

        {
            title: "Soplido explosivo",
            description:
                "Sopla lo más fuerte y rápido posible inmediatamente.",

            tip:
                "Piensa en soplar como apagar muchas velas al mismo tiempo.",

            error:
                "Inicio lento o poco explosivo."
        },

        {
            title: "Seguir soplando",
            description:
                "Continúa expulsando aire hasta que el profesional lo indique.",

            tip:
                "Aunque parezca que no queda aire, sigue soplando.",

            error:
                "Finalizar el examen demasiado pronto."
        },

        {
            title: "Inspiración final",
            description:
                "Inspira rápidamente al terminar para completar la curva.",

            tip:
                "Haz una inspiración rápida y fuerte.",

            error:
                "No realizar inspiración final."
        },

        {
            title: "Repetir maniobra",
            description:
                "El examen suele repetirse varias veces para asegurar calidad.",

            tip:
                "No te preocupes si debes repetirla varias veces.",

            error:
                "Cansarse demasiado rápido o rendirse."
        }

    ];

    let currentStep = 0;

    const stepTitle =
        document.getElementById("stepTitle");

    const stepDescription =
        document.getElementById("stepDescription");

    const stepTip =
        document.getElementById("stepTip");

    const stepError =
        document.getElementById("stepError");

    const stepCounter =
        document.getElementById("stepCounter");

    const prevButton =
        document.getElementById("prevStep");

    const nextButton =
        document.getElementById("nextStep");

    if (
        !stepTitle ||
        !stepDescription ||
        !stepTip ||
        !stepError
    ) return;

    function updateStep() {

        const step =
            steps[currentStep];

        stepTitle.textContent =
            step.title;

        stepDescription.textContent =
            step.description;

        stepTip.textContent =
            step.tip;

        stepError.textContent =
            step.error;

        stepCounter.textContent =
            `Paso ${currentStep + 1} de ${steps.length}`;

        prevButton.disabled =
            currentStep === 0;

        nextButton.textContent =
            currentStep === steps.length - 1
                ? "Finalizado ✓"
                : "Siguiente →";
    }

    prevButton.addEventListener(
        "click",
        () => {

            if (currentStep > 0) {
                currentStep--;
                updateStep();
            }

        }
    );

    nextButton.addEventListener(
        "click",
        () => {

            if (
                currentStep <
                steps.length - 1
            ) {
                currentStep++;
                updateStep();
            }

        }
    );

    updateStep();

});
// =====================================
// PREMIUM ACCORDION
// =====================================

document
.querySelectorAll(
".accordion-header"
)
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const item =
                button.parentElement;

            item.classList.toggle(
                "active"
            );

        }
    );

});

// =====================================
// FPAIR SIMULATOR V2
// PACIENTE / PROFESIONAL
// =====================================

window.addEventListener(
"load",
() => {

const startBtn =
document.getElementById(
"startSimulator"
);

if(!startBtn) return;

const patientBtn =
document.getElementById(
"patientMode"
);

const professionalBtn =
document.getElementById(
"professionalMode"
);

const phase =
document.getElementById(
"simulatorPhase"
);

const timer =
document.getElementById(
"simulatorTimer"
);

const instruction =
document.getElementById(
"simulatorInstruction"
);

const breathBar =
document.getElementById(
"breathBar"
);

const circle =
document.querySelector(
".simulator-circle"
);

let running = false;

let mode =
"patient";

// =====================================
// MODE SWITCH
// =====================================

// =====================================
// MODE SWITCH FIX
// =====================================

function activateMode(selected){

mode = selected;

document
.querySelectorAll(".mode-btn")
.forEach(btn => {

btn.classList.remove(
"active"
);

});

if(selected === "patient"){

patientBtn.classList.add(
"active"
);

console.log(
"Modo paciente"
);

}else{

professionalBtn.classList.add(
"active"
);

console.log(
"Modo profesional"
);

}

}

patientBtn.addEventListener(
"click",
() => activateMode(
"patient"
)
);

professionalBtn.addEventListener(
"click",
() => activateMode(
"professional"
)
);
// =====================================
// START
// =====================================

startBtn.onclick =
async function(){

if(running) return;

running = true;

startBtn.disabled =
true;

startBtn.innerHTML =
"Entrenando...";

resetSimulator();

await inhale();
await explosive();
await exhale();
await finalInhale();
await finish();

running = false;

startBtn.disabled =
false;

startBtn.innerHTML =
`
<i class="fa-solid fa-rotate-right"></i>
Repetir práctica
`;

};

// =====================================
// PHASES
// =====================================

async function inhale(){

setCircleState("inhale");

phase.textContent =
mode === "patient"
? "Inspiración máxima"
: "Preparación inspiratoria";

instruction.innerHTML =
mode === "patient"
? "INSPIRE<br>PROFUNDO"
: "INSPIRE<br>A CPT";

for(let i=0;i<=100;i++){

breathBar.style.width =
i + "%";

circle.style.transform =
`scale(${1 + i/450})`;

await wait(35);

}

}

async function explosive(){

setCircleState("explosive");

phase.textContent =
mode === "patient"
? "Soplido fuerte"
: "Inicio explosivo ATS";

instruction.innerHTML =
mode === "patient"
? "¡SOPLE<br>FUERTE!"
: "EXPLOSIÓN<br>INICIAL";

timer.textContent =
"";

await wait(1800);

}

async function exhale(){

setCircleState("exhale");

phase.textContent =
mode === "patient"
? "Continúe soplando"
: "Fase espiratoria";

let messagesPatient = [
"SIGA<br>SOPLANDO",
"MUY<br>BIEN",
"SIGA UN<br>POCO MÁS",
"CASI<br>TERMINA"
];

let messagesProfessional = [
"ESPIRACIÓN<br>SOSTENIDA",
"EVALUANDO<br>FLUJO",
"VIGILAR<br>FINAL PRECOZ",
"ESFUERZO<br>ADECUADO"
];

const messages =
mode === "patient"
? messagesPatient
: messagesProfessional;

for(let i=100;i>=0;i--){

breathBar.style.width =
i + "%";

circle.style.transform =
`scale(${1 + i/500})`;

if(i > 75){

instruction.innerHTML =
messages[0];

} else if(i > 50){

instruction.innerHTML =
messages[1];

} else if(i > 25){

instruction.innerHTML =
messages[2];

} else {

instruction.innerHTML =
messages[3];

}

await wait(70);

}

}

async function finalInhale(){

setCircleState("inhale");

phase.textContent =
mode === "patient"
? "Inspiración final"
: "Inspiración post maniobra";

instruction.innerHTML =
mode === "patient"
? "INSPIRE<br>RÁPIDO"
: "INSPIRACIÓN<br>FINAL";

await wait(1800);

}

async function finish(){

setCircleState("success");

phase.textContent =
mode === "patient"
? "Excelente práctica"
: "Evaluación completada";

instruction.innerHTML =
mode === "patient"
? "✅<br>MUY BIEN"
: `
✓ MANIOBRA<br>
ACEPTABLE
`;

timer.textContent =
"✓";

await wait(1200);

}

// =====================================
// VISUAL STATES
// =====================================

function setCircleState(state){

circle.classList.remove(
"state-inhale",
"state-exhale",
"state-explosive",
"state-success"
);

circle.classList.add(
`state-${state}`
);

}

// =====================================
// RESET
// =====================================

function resetSimulator(){

breathBar.style.width =
"0%";

timer.textContent =
"";

circle.style.transform =
"scale(1)";

instruction.innerHTML =
"LISTO";

}

// =====================================
// WAIT
// =====================================

function wait(ms){

return new Promise(
resolve =>
setTimeout(
resolve,
ms
)
);

}

});

// =====================================
// FPAIR MICROPHONE ATS V1
// =====================================

window.addEventListener(
"load",
() => {

const startMic =
document.getElementById(
"startMic"
);

if(!startMic) return;

const stopMic =
document.getElementById(
"stopMic"
);

const micStatus =
document.getElementById(
"micStatus"
);

const micIndicator =
document.getElementById(
"micIndicator"
);

const soundMeter =
document.getElementById(
"soundMeter"
);

const micFeedback =
document.getElementById(
"micFeedback"
);

let audioContext;
let analyser;
let microphone;
let stream;
let animationFrame;

let isBlowing = false;
let blowStarted = false;
let blowStartTime = 0;
let maxIntensity = 0;

startMic.addEventListener(
"click",
startMicrophone
);

stopMic.addEventListener(
"click",
stopMicrophone
);

// =====================================
// START MIC
// =====================================

async function startMicrophone(){

try{

stream =
await navigator
.mediaDevices
.getUserMedia({
audio:true
});

audioContext =
new AudioContext();

analyser =
audioContext
.createAnalyser();

microphone =
audioContext
.createMediaStreamSource(
stream
);

microphone.connect(
analyser
);

analyser.fftSize =
512;

startMic.disabled =
true;

stopMic.disabled =
false;

micStatus.textContent =
"Escuchando soplido...";

micIndicator.classList.add(
"active"
);

micFeedback.innerHTML =
"Comience cuando esté listo.";

listenAudio();

}catch(error){

console.error(error);

micStatus.textContent =
"No fue posible acceder al micrófono.";

micFeedback.innerHTML =
"Debe permitir acceso al micrófono.";

}

}

// =====================================
// AUDIO LOOP
// =====================================

function listenAudio(){

const dataArray =
new Uint8Array(
analyser.frequencyBinCount
);

function update(){

analyser.getByteFrequencyData(
dataArray
);

let volume = 0;

for(let i=0;
i<dataArray.length;
i++){

volume +=
dataArray[i];

}

volume =
volume /
dataArray.length;

const intensity =
Math.min(
volume * 2,
100
);

soundMeter.style.width =
`${intensity}%`;

analyzeBlow(
intensity
);

animationFrame =
requestAnimationFrame(
update
);

}

update();

}

// =====================================
// BLOW ANALYSIS
// =====================================

function analyzeBlow(
intensity
){

// INICIO DEL SOPLIDO
if(
intensity > 18 &&
!blowStarted
){

blowStarted =
true;

blowStartTime =
Date.now();

micStatus.textContent =
"Soplido detectado";

maxIntensity =
intensity;

if(
mode ===
"patient"
){

micFeedback.innerHTML =
`
✓ Buen inicio.
Siga soplando
todo lo posible.
`;

}else{

micFeedback.innerHTML =
`
Inicio detectado.<br>
Evaluando explosividad ATS.
`;

}

}

// DURANTE SOPLIDO
if(blowStarted){

if(
intensity >
maxIntensity
){

maxIntensity =
intensity;

}

const elapsed =
(
Date.now()
-
blowStartTime
)
/1000;

// SILENCIO = FIN
if(
intensity < 8
){

if(elapsed < 2){

if(
mode ===
"patient"
){

micFeedback.innerHTML =
`
⚠ Parece que
terminó muy rápido.

Intente continuar
el soplido.
`;

}else{

micFeedback.innerHTML =
`
⚠ Final precoz
probable.
`;

}

}else{

if(
mode ===
"patient"
){

micFeedback.innerHTML =
`
✓ Muy buen esfuerzo.
`;

}else{

micFeedback.innerHTML =
`
✓ Maniobra
aceptable.

Esfuerzo:
${estimateEffort()}
`;

}

}

blowStarted =
false;

}

}

}

// =====================================
// EFFORT
// =====================================

function estimateEffort(){

if(maxIntensity > 70){

return "alto";

}

if(maxIntensity > 40){

return "moderado";

}

return "bajo";

}

// =====================================
// STOP MIC
// =====================================

function stopMicrophone(){

cancelAnimationFrame(
animationFrame
);

if(stream){

stream
.getTracks()
.forEach(track =>
track.stop()
);

}

soundMeter.style.width =
"0%";

micIndicator.classList.remove(
"active"
);

micStatus.textContent =
"Micrófono detenido";

micFeedback.innerHTML =
"Entrenamiento finalizado.";

startMic.disabled =
false;

stopMic.disabled =
true;

blowStarted =
false;

maxIntensity =
0;

}

});
