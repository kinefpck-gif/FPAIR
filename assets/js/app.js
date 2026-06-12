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
