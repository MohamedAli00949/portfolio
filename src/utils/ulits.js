export const scrolling = () => {
    let sections = document.querySelectorAll("section");
    let sectionsLink = document.querySelectorAll("li a.section-link");
    
    let activeSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            activeSection = section.getAttribute("id");
        }
    });

    sectionsLink.forEach((link) => {
        link.classList.remove("active");
        if(link.getAttribute("href") === `#${activeSection}`) {
            link.classList.add("active");
        }
    })
};

export const stickyNavbar = () => {
    let windowOffset = window.scrollY;
    const sticky = document.querySelector("header.navbar");

    if(sticky) {
        if (windowOffset > 100) {
            sticky.classList.add("scrolling");
            // sticky.styl
        } else {
            sticky.classList.remove("scrolling");
        }
    }
}