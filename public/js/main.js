// document.addEventListener('DOMContentLoaded', function() {
//     const root = document.documentElement;
//     const baselineFontSize = 16; // Your target base size in px

//     const currentFontSize = parseFloat(window.getComputedStyle(root).fontSize);
    
//     if (currentFontSize !== baselineFontSize) {
//         root.style.fontSize = `${baselineFontSize}px`;
//     }
// });



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
        setTimeout(() => {
            window.scrollTo(0, 0); 
        }, 10);
    }, 500);
    }

    function handleTouchFeedback() {
        // Mobile-specific visual feedback on touch
        scrollButton.addEventListener('touchstart', () => {
            scrollButton.classList.remove('bg-customPrimaryGreen');
            scrollButton.classList.add('bg-customLightGreen'); // Adds darker background color
        });

        scrollButton.addEventListener('touchend', () => {
            scrollButton.classList.remove('bg-customLightGreen'); // Reverts to original color
            scrollButton.classList.add('bg-customPrimaryGreen');
        });
    }

    function handleResize() {
        if (window.innerWidth >= 960 && !introSection.classList.contains('hidden') && mainContent.classList.contains('hidden')) {
            // For larger screens: Show both sections side by side
            introSection.classList.remove('fixed', 'inset-0', 'z-50', 'hide');
            introSection.classList.add('relative', 'lg:flex');
            mainContent.classList.remove('hidden');
            // body.classList.remove('overflow-hidden');
            scrollButton.removeEventListener('click', openInvitation);
            scrollButton.removeEventListener('touchstart', handleTouchFeedback);
        } else if (window.innerWidth < 960 && !introSection.classList.contains('hidden') && mainContent.classList.contains('hidden')) {
            // For smaller screens: Enable Open Invitation button
            introSection.classList.add('fixed', 'inset-0', 'z-50', 'overflow-y-auto');
            // body.classList.add('overflow-hidden');
            
            // Mobile-specific "Open Invitation" functionality
            scrollButton.addEventListener('click', openInvitation);
            handleTouchFeedback();
        } else if (window.innerWidth < 960 && introSection.classList.contains('hidden') && !mainContent.classList.contains('hidden')){
            // For smaller screens: Enable Open Invitation button
            introSection.classList.add('fixed', 'inset-0', 'z-50');
            // body.classList.add('overflow-hidden');
            scrollButton.removeEventListener('click', openInvitation);
            scrollButton.removeEventListener('touchstart', handleTouchFeedback);
        } else if (window.innerWidth >= 960 && introSection.classList.contains('hidden') && !mainContent.classList.contains('hidden')){
            introSection.classList.remove('fixed', 'inset-0', 'z-50', 'hide');
            introSection.classList.add('relative', 'lg:flex');
            scrollButton.removeEventListener('click', openInvitation);
            scrollButton.removeEventListener('touchstart', handleTouchFeedback);
        } else if (window.innerWidth < 960 && !introSection.classList.contains('hidden') && !mainContent.classList.contains('hidden')){
            mainContent.classList.add('hidden');
            scrollButton.addEventListener('click', openInvitation);
            handleTouchFeedback();
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

function openGoogleMapsDuri() {
    // Use Google Maps URL scheme to open Google Maps
    const url = "https://maps.app.goo.gl/BcoythpWnAngR7hP9"; // Replace with desired coordinates or location
    window.open(url, '_blank');  // Open in a new tab
}

function openGoogleMapsJogja() {
    // Use Google Maps URL scheme to open Google Maps
    const url = "https://maps.app.goo.gl/xfDWegCDjTzDt1vs5"; // Replace with desired coordinates or location
    window.open(url, '_blank');  // Open in a new tab
}

// Set the date for the wedding in UTC (replace with your wedding date in UTC)
const duriWeddingUTC = Date.UTC(2024, 11, 1, 1, 0, 0);  // Dec 1, 2024, 01:00:00 UTC
const jogjaWeddingUTC = Date.UTC(2024, 11, 8, 2, 15, 0);  // Dec 8, 2024, 02:15:00 UTC

function updateCountdown() {
    // Get current local time and convert to UTC
    const now = new Date();

    // Convert the current local time to UTC in milliseconds
    const nowUTC = now.getTime();

    // Calculate the difference in milliseconds
    const duriTimeDifference = duriWeddingUTC - nowUTC;
    const jogjaTimeDifference = jogjaWeddingUTC - nowUTC;

    // Calculate days, hours, minutes, and seconds remaining
    const duriDays = Math.floor(duriTimeDifference / (1000 * 60 * 60 * 24));
    const duriHours = Math.floor((duriTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const duriMinutes = Math.floor((duriTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const duriSeconds = Math.floor((duriTimeDifference % (1000 * 60)) / 1000);
    const jogjaDays = Math.floor(jogjaTimeDifference / (1000 * 60 * 60 * 24));
    const jogjaHours = Math.floor((jogjaTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const jogjaMinutes = Math.floor((jogjaTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const jogjaSeconds = Math.floor((jogjaTimeDifference % (1000 * 60)) / 1000);

    // If the countdown is over, display a message
    if (duriTimeDifference < 0) {
        duriDays = duriHours = duriMinutes = duriSeconds = 0;
    }
    if (jogjaTimeDifference < 0) {
        jogjaDays = jogjaHours = jogjaMinutes = jogjaSeconds = 0;
    }

    // Update the countdown boxes
    document.getElementById('duriDays').textContent = String(duriDays).padStart(2, '0');
    document.getElementById('duriHours').textContent = String(duriHours).padStart(2, '0');
    document.getElementById('duriMinutes').textContent = String(duriMinutes).padStart(2, '0');
    document.getElementById('duriSeconds').textContent = String(duriSeconds).padStart(2, '0');
    document.getElementById('jogjaDays').textContent = String(jogjaDays).padStart(2, '0');
    document.getElementById('jogjaHours').textContent = String(jogjaHours).padStart(2, '0');
    document.getElementById('jogjaMinutes').textContent = String(jogjaMinutes).padStart(2, '0');
    document.getElementById('jogjaSeconds').textContent = String(jogjaSeconds).padStart(2, '0');

    

}

// Update countdown every second
setInterval(updateCountdown, 1000);


// Function to detect if the user is on iOS
function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Function to add event to calendar based on the device
function addToCalendarDuri() {
    const googleCalendarURL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Rio+%26+Dila+%28Akad+%26+Resepsi%29&dates=20241201T010000Z/20241201T100000Z&details=Pernikahan+Rio+%26+Dila+%28Akad+%26+Resepsi%29+di+Duri%2C+Riau&location=Gedung+Lancang+Kuning%2C+PT.+Pertamina+Hulu+Rokan%2C+Duri%2C+Riau";
    const icsFileURL = "/public/assets/duri.ics"; // Create an .ics file for Apple Calendar

    if (isiOS()) {
        // For iPhone (Apple Calendar)
        window.location.href = icsFileURL; // This will download/open the .ics file
    } else {
        // For Android and desktop (Google Calendar)
        window.open(googleCalendarURL, "_blank"); // Opens Google Calendar in a new tab
    }
}

// Function to add event to calendar based on the device
function addToCalendarJogja() {
    const googleCalendarURL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Acara+Ngunduh+Mantu+Rio+%26+Dila&dates=20241208T021500Z/20241208T043000Z&details=Acara+Ngunduh+Mantu+Rio+%26+Dila+di+Yogyakarta&location=Pendopo+Tulungo%2C+Kasultanan+Ngayogyakarta+Hadiningrat";
    const icsFileURL = "/public/assets/jogja.ics"; // Create an .ics file for Apple Calendar

    if (isiOS()) {
        // For iPhone (Apple Calendar)
        window.location.href = icsFileURL; // This will download/open the .ics file
    } else {
        // For Android and desktop (Google Calendar)
        window.open(googleCalendarURL, "_blank"); // Opens Google Calendar in a new tab
    }
}

const bankData = {
    anz: {
        name: "ANZ",
        accountNumber: "1234567890",
        accountHolder: "Rio Akbar"
    },
    mandiri: {
        name: "Mandiri",
        accountNumber: "0987654321",
        accountHolder: "Adila Ilma"
    },
    bni: {
        name: "BNI",
        accountNumber: "1122334455",
        accountHolder: "Nama Pemilik BNI"
    }
};

function showBankDetails() {
    const selectedBank = document.getElementById("bankSelect").value;
    const bankDetails = document.getElementById("bankDetails");

    if (selectedBank && bankData[selectedBank]) {
        document.getElementById("bankName").textContent = bankData[selectedBank].name;
        document.getElementById("accountNumber").textContent = bankData[selectedBank].accountNumber;
        document.getElementById("accountHolder").textContent = bankData[selectedBank].accountHolder;
        bankDetails.classList.remove("hidden");
    } else {
        bankDetails.classList.add("hidden");
    }
}

function copyBankDetails() {
    const bankName = document.getElementById("bankName").textContent;
    const accountNumber = document.getElementById("accountNumber").textContent;
    const accountHolder = document.getElementById("accountHolder").textContent;
    
    const details = `${accountNumber}`;
    
    navigator.clipboard.writeText(details).then(() => {
        alert("Informasi rekening berhasil disalin!");
    }).catch(() => {
        alert("Gagal menyalin informasi rekening.");
    });
}