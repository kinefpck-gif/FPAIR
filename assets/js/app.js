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
// FPAIR MICROPHONE ATS FIX
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

// =====================================
// ATS LIVE ELEMENTS
// =====================================

const atsStart =
document.getElementById(
"atsStart"
);

const atsEffort =
document.getElementById(
"atsEffort"
);

const atsDuration =
document.getElementById(
"atsDuration"
);

const atsQuality =
document.getElementById(
"atsQuality"
);

// =====================================
// SPIROMETRY CANVAS
// =====================================

const spirometryCanvas =
document.getElementById(
"spirometryCanvas"
);

const spirometryCtx =
spirometryCanvas?.getContext(
"2d"
);

let curvePoints = [];
   
let audioContext;
let analyser;
let microphone;
let stream;
let animationFrame;

let blowStarted =
false;

let blowStartTime =
0;

let maxIntensity =
0;

// =====================================
// MODE
// =====================================

function getCurrentMode(){

const professional =
document
.getElementById(
"professionalMode"
);

return professional
?.classList.contains(
"active"
)
? "professional"
: "patient";

}

// =====================================
// EVENTS
// =====================================

startMic.addEventListener(
"click",
async () => {

try{

micStatus.textContent =
"Solicitando acceso...";

stream =
await navigator
.mediaDevices
.getUserMedia({
audio:true
});

audioContext =
new (
window.AudioContext ||
window.webkitAudioContext
)();

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
256;

startMic.disabled =
true;

stopMic.disabled =
false;

micIndicator.classList.add(
"active"
);

micStatus.textContent =
"Micrófono activo";

micFeedback.innerHTML =
"Sople fuerte cerca del micrófono.";

// RESET ATS

atsStart.textContent =
"Esperando";

atsEffort.textContent =
"Sin señal";

atsDuration.textContent =
"0 s";

atsQuality.textContent =
"No iniciada";
   
listenAudio();

}catch(error){

console.error(
"MIC ERROR",
error
);

micStatus.textContent =
"Micrófono bloqueado";

micFeedback.innerHTML =
`
Debe permitir acceso
al micrófono.
`;

}

});

stopMic.addEventListener(
"click",
stopMicrophone
);

// =====================================
// LISTEN
// =====================================

function listenAudio(){

const dataArray =
new Uint8Array(
analyser.frequencyBinCount
);

function update(){

analyser
.getByteFrequencyData(
dataArray
);

let sum = 0;

for(
let i = 0;
i < dataArray.length;
i++
){

sum +=
dataArray[i];

}

const average =
sum /
dataArray.length;

// =====================================
// ATS EXTREME STRICT MODE
// =====================================

// Ignora casi todo el ruido ambiente
const noiseGate = 42;

// limpia ruido residual
const cleanAverage =
Math.max(
0,
average - noiseGate
);

// curva MUY estricta
const intensity =
Math.min(
Math.pow(
cleanAverage,
1.92
) * 0.055,
100
);

// =====================================
// MEDIDOR DINÁMICO ATS
// =====================================

soundMeter.style.width =
`${intensity}%`;

// BAJO ESFUERZO
if(intensity < 78){

soundMeter.style.background =
`
linear-gradient(
90deg,
#ef4444,
#f87171
)
`;

soundMeter.style.boxShadow =
`
0 0 16px
rgba(239,68,68,.35)
`;

}

// ESFUERZO MODERADO
else if(intensity < 98){

soundMeter.style.background =
`
linear-gradient(
90deg,
#facc15,
#f59e0b
)
`;

soundMeter.style.boxShadow =
`
0 0 18px
rgba(250,204,21,.35)
`;

}

// SOPLIDO FUERTE / VALIDADO
else{

soundMeter.style.background =
`
linear-gradient(
90deg,
#22c55e,
#4ade80
)
`;

soundMeter.style.boxShadow =
`
0 0 22px
rgba(34,197,94,.4)
`;

}

analyzeIntensity(
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
// ANALYSIS
// =====================================

function analyzeIntensity(
intensity
){

const mode =
getCurrentMode();

// DETECTA SOPLIDO

if(
intensity > 65 &&
!blowStarted
){

blowStarted =
true;

blowStartTime =
Date.now();

maxIntensity =
intensity;

micStatus.textContent =
"Soplido detectado";

if(
mode ===
"patient"
){

micFeedback.innerHTML =
`
✓ Buen inicio<br>
Siga soplando
todo lo posible.
`;

}else{

micFeedback.innerHTML =
`
Inicio detectado.<br>
Analizando calidad ATS.
`;

}

}

// DURANTE SOPLIDO

if(blowStarted){

const elapsed =
(
Date.now()
-
blowStartTime
)
/1000;

// DURACIÓN LIVE
atsDuration.textContent =
`${elapsed.toFixed(1)} s`;

// ESFUERZO LIVE
if(intensity < 78){

atsEffort.textContent =
"Bajo";

}
else if(intensity < 98){

atsEffort.textContent =
"Moderado";

}
else{

atsEffort.textContent =
"Alto";

}

// INICIO EXPLOSIVO
if(maxIntensity > 96){

atsStart.textContent =
"✓ Explosivo";

}else{

atsStart.textContent =
"⚠ Mejorable";

}

// CALIDAD ESTIMADA
if(
elapsed > 2 &&
maxIntensity > 95
){

atsQuality.textContent =
"A";

}
else if(
elapsed > 1
){

atsQuality.textContent =
"B";

}
else{

atsQuality.textContent =
"C";

}   

maxIntensity =
Math.max(
maxIntensity,
intensity
);

// TERMINÓ

if(intensity < 6){

if(elapsed < 2){

if(
mode ===
"patient"
){

micFeedback.innerHTML =
`
⚠ Parece breve.<br>
Intente seguir
soplando más tiempo.
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
✓ Buen esfuerzo.<br>
Excelente práctica.
`;

}else{

micFeedback.innerHTML =
`
✓ Maniobra
aceptable.<br>

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

if(maxIntensity > 65){

return "alto";

}

if(maxIntensity > 35){

return "moderado";

}

return "bajo";

}

// =====================================
// STOP
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
"Esperando práctica.";

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
