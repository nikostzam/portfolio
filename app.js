particlesJS.load('particles-js', 'particles.json');

var tl = new TimelineMax();
tl.from("#line", 3.5, { scaleX: 0, transformOrigin: "right"});
tl.from("#upper", 1.75, { opacity:0, y: 40 }, "text");
tl.from("#lower", 1.75, { opacity:0, y: -40 }, "text");
tl.to("#line, #upper, #lower", 1, { opacity: 1 });

const icon = document.querySelector('.menu-img');
const menu = document.querySelector('.nav-links');
icon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
