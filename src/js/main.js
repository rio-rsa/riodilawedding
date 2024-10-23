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

function openGoogleMaps() {
    // Use Google Maps URL scheme to open Google Maps
    const url = "https://maps.app.goo.gl/xfDWegCDjTzDt1vs5"; // Replace with desired coordinates or location
    window.open(url, '_blank');  // Open in a new tab
}

// Set the date for the wedding in UTC (replace with your wedding date in UTC)
const weddingUTC = Date.UTC(2024, 11, 1, 1, 0, 0);  // Dec 1, 2024, 01:00:00 UTC
console.log("WEDDING UTC (in milliseconds):", weddingUTC);

function updateCountdown() {
    // Get current local time and convert to UTC
    const now = new Date();

    // Convert the current local time to UTC in milliseconds
    const nowUTC = now.getTime();

    // Calculate the difference in milliseconds
    const timeDifference = weddingUTC - nowUTC;

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown boxes
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // If the countdown is over, display a message
    if (timeDifference < 0) {
        document.querySelector('.countdown-grid').innerHTML = '<p>The event has started!</p>';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);