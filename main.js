
//Preloader
document.addEventListener("DOMContentLoaded", function() {
    const loaderText = document.querySelector('.loader-text');
    const content = document.querySelector('.content');
      const texts = ['Ciao.', 'Bonjour.', 'Hola.', 'こんにちは.', 'مرحباً.', 'Olá.', 'Ẹ kúsẹ́.'];
    let currentIndex = 0;
  
    function changeText() {
      gsap.to(loaderText, { duration: 0.15,  opacity: 0, onComplete: () => {
        currentIndex = (currentIndex + 1) % texts.length;
        loaderText.textContent = texts[currentIndex];

        gsap.to(loaderText, { duration: 0.5, opacity: 1 });
      }});
    }
      setTimeout(() => {
      gsap.to('.preloader', { duration: 1.5, opacity: 0, display: 'none' });
      gsap.from('.content', { duration: 0.5, opacity: 1,filter: 'blur(5px)', delay: 0.5 });
      gsap.to({duration: 0.5, opacity: 1, delay: 0.5 })
    }, 9000); 
    setInterval(changeText, 1000);
  });
  


//Scroll Effect
const obeserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')

        }
    })
})
const section = document.querySelectorAll('.hide');
section.forEach((el) => obeserver.observe(el))

//Display Navbar
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav ul');
menuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    nav.classList.toggle('open'); 
});




