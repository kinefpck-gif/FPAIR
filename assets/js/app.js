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
