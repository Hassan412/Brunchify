// Detect scroll event to add a sticky class to the navbar
window.onscroll = () => {
    const navbar = document.querySelector('.navbar')

    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}

// Execute code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Options for the IntersectionObserver
    const options = {
        threshold: 0.7,
        rootMargin: "60px",
    }

    // Select and observe elements with class "heading-one"
    const headings = document.querySelectorAll('.heading-one');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("text-animate");
                } else {
                    entry.target.classList.remove("text-animate");
                }
            });
        }, options
    );
    headings.forEach(heading => {
        observer.observe(heading);
    });

    // Select and observe elements with class "heading-two"
    const headingtwo = document.querySelectorAll('.heading-two')
    headingtwo.forEach(heading => {
        observer.observe(heading);
    });

    // Select and observe elements with class "paragraph-anime"
    const paragraphs = document.querySelectorAll('.paragraph-anime')
    paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
    });

    // Second IntersectionObserver for images with class "image-anime"
    const observertwo = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("img-animation");
                } else {
                    entry.target.classList.remove("img-animation");
                }
            });
        }, {
            threshold: 0,
            rootMargin: "100px",
        }
    )
    const imgs = document.querySelectorAll('.image-anime')
    imgs.forEach(img => {
        observertwo.observe(img);
    });
});

// Execute code when the entire page including its resources is fully loaded
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    const main = document.querySelector("main");
  
    // Hide the preloader and gradually show the content once everything is fully loaded
    preloader.style.display = "none";
    main.style.opacity = "1";
});

  



