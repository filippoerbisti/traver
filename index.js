const spans = document.querySelectorAll(".word span");

setTimeout(() => {
    spans.forEach((span, idx) => {
        span.addEventListener("click", (e) => {
            e.target.classList.add("active");
        });
        span.addEventListener("animationend", (e) => {
            e.target.classList.remove("active");
        });

        // Initial animation
        setTimeout(() => {
            span.classList.add("active");
        }, 600 * (idx + 1));
    });
}, 1700)

