document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scroll-btn');
    const introSection = document.getElementById('intro-section');
    const mainContent = document.getElementById('main-content');
    const body = document.getElementById('body');

    function openInvitation(){
        introSection.classList.add('hide');
        setTimeout(() => {
        introSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        body.classList.remove('overflow-hidden');
    }, 500);
    }

    function handleResize() {
        if (window.innerWidth >= 960 && !introSection.classList.contains('hidden') && mainContent.classList.contains('hidden')) {
            // For larger screens: Show both sections side by side
            introSection.classList.remove('fixed', 'inset-0', 'z-50', 'hide');
            introSection.classList.add('relative', 'lg:flex');
            mainContent.classList.remove('hidden');
            body.classList.remove('overflow-hidden');
            scrollButton.removeEventListener('click', openInvitation);

        } else if (window.innerWidth < 960 && !introSection.classList.contains('hidden') && mainContent.classList.contains('hidden')) {
            // For smaller screens: Enable Open Invitation button
            introSection.classList.add('fixed', 'inset-0', 'z-50');
            // body.classList.add('overflow-hidden');

            // Mobile-specific "Open Invitation" functionality
            scrollButton.addEventListener('click', openInvitation);
        } else if (window.innerWidth < 960 && introSection.classList.contains('hidden') && !mainContent.classList.contains('hidden')){
            // For smaller screens: Enable Open Invitation button
            introSection.classList.add('fixed', 'inset-0', 'z-50');
            // body.classList.add('overflow-hidden');
            scrollButton.removeEventListener('click', openInvitation);

        } else if (window.innerWidth >= 960 && introSection.classList.contains('hidden') && !mainContent.classList.contains('hidden')){
            introSection.classList.remove('fixed', 'inset-0', 'z-50', 'hide');
            introSection.classList.add('relative', 'lg:flex');
            scrollButton.removeEventListener('click', openInvitation);

        } else if (window.innerWidth < 960 && !introSection.classList.contains('hidden') && !mainContent.classList.contains('hidden')){
            mainContent.classList.add('hidden');
            scrollButton.addEventListener('click', openInvitation);
        }
    }

    // Initialize functionality on page load and window resize
    window.addEventListener('resize', handleResize);
    handleResize();
});

let currentIndex1 = 0;
let currentIndex2 = 0;

function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    let currentIndex = carouselId === 'carousel1' ? currentIndex1 : currentIndex2;
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    if(carouselId === 'carousel1') currentIndex1 = currentIndex;
    else currentIndex2 = currentIndex;
}

function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    let currentIndex = carouselId === 'carousel1' ? currentIndex1 : currentIndex2;
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    if(carouselId === 'carousel1') currentIndex1 = currentIndex;
    else currentIndex2 = currentIndex;
}