const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('off');
        } else {
            entry.target.classList.add('off');
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.off');
hiddenElements.forEach((el) => observer.observe(el));
