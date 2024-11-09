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
        scrollButton.addEventListener('touchstart', () => {
            scrollButton.classList.remove('bg-customPrimaryGreen');
            scrollButton.classList.add('bg-customLightGreen');
        });

        scrollButton.addEventListener('touchend', () => {
            scrollButton.classList.remove('bg-customLightGreen');
            scrollButton.classList.add('bg-customPrimaryGreen');
        });
    }

    function handleResize() {
        if (window.innerWidth >= 960 && !introSection.classList.contains('hidden') && mainContent.classList.contains('hidden')) {
            introSection.classList.remove('fixed', 'inset-0', 'z-50', 'hide');
            introSection.classList.add('relative', 'lg:flex');
            mainContent.classList.remove('hidden');
            scrollButton.removeEventListener('click', openInvitation);
        } else if (window.innerWidth < 960 && !introSection.classList.contains('hidden') && mainContent.classList.contains('hidden')) {
            introSection.classList.add('inset-0', 'z-50', 'overflow-y-auto');
            scrollButton.addEventListener('click', openInvitation);
        } else if (window.innerWidth < 960 && introSection.classList.contains('hidden') && !mainContent.classList.contains('hidden')){
            introSection.classList.add('fixed', 'inset-0', 'z-50');
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

    window.addEventListener('resize', handleResize);
    handleResize();
});

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
}


function openGoogleMapsDuri() {
    const url = "https://maps.app.goo.gl/BcoythpWnAngR7hP9";
    window.open(url, '_blank');
}

function openGoogleMapsJogja() {
    const url = "https://maps.app.goo.gl/xfDWegCDjTzDt1vs5";
    window.open(url, '_blank');
}

const duriWeddingUTC = Date.UTC(2024, 11, 1, 1, 0, 0);
const jogjaWeddingUTC = Date.UTC(2024, 11, 8, 2, 15, 0);

function updateCountdown() {
    const now = new Date();
    const nowUTC = now.getTime();

    const duriTimeDifference = duriWeddingUTC - nowUTC;
    const jogjaTimeDifference = jogjaWeddingUTC - nowUTC;

    const duriDays = Math.floor(duriTimeDifference / (1000 * 60 * 60 * 24));
    const duriHours = Math.floor((duriTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const duriMinutes = Math.floor((duriTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const duriSeconds = Math.floor((duriTimeDifference % (1000 * 60)) / 1000);
    const jogjaDays = Math.floor(jogjaTimeDifference / (1000 * 60 * 60 * 24));
    const jogjaHours = Math.floor((jogjaTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const jogjaMinutes = Math.floor((jogjaTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const jogjaSeconds = Math.floor((jogjaTimeDifference % (1000 * 60)) / 1000);

    if (duriTimeDifference < 0) {
        duriDays = duriHours = duriMinutes = duriSeconds = 0;
    }
    if (jogjaTimeDifference < 0) {
        jogjaDays = jogjaHours = jogjaMinutes = jogjaSeconds = 0;
    }

    document.getElementById('duriDays').textContent = String(duriDays).padStart(2, '0');
    document.getElementById('duriHours').textContent = String(duriHours).padStart(2, '0');
    document.getElementById('duriMinutes').textContent = String(duriMinutes).padStart(2, '0');
    document.getElementById('duriSeconds').textContent = String(duriSeconds).padStart(2, '0');
    document.getElementById('jogjaDays').textContent = String(jogjaDays).padStart(2, '0');
    document.getElementById('jogjaHours').textContent = String(jogjaHours).padStart(2, '0');
    document.getElementById('jogjaMinutes').textContent = String(jogjaMinutes).padStart(2, '0');
    document.getElementById('jogjaSeconds').textContent = String(jogjaSeconds).padStart(2, '0');

    

}

setInterval(updateCountdown, 1000);

function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function addToCalendarDuri() {
    const googleCalendarURL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Rio+%26+Dila+%28Akad+%26+Resepsi%29&dates=20241201T010000Z/20241201T100000Z&details=Pernikahan+Rio+%26+Dila+%28Akad+%26+Resepsi%29+di+Duri%2C+Riau&location=Gedung+Lancang+Kuning%2C+PT.+Pertamina+Hulu+Rokan%2C+Duri%2C+Riau";
    const icsFileURL = "https://res.cloudinary.com/dz0ndwdvf/raw/upload/v1730291342/duri_sxvaxx.ics";
    if (isiOS()) {
        window.location.href = icsFileURL;
    } else {
        window.open(googleCalendarURL, "_blank");
    }
}

function addToCalendarJogja() {
    const googleCalendarURL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Acara+Ngunduh+Mantu+Rio+%26+Dila&dates=20241208T021500Z/20241208T043000Z&details=Acara+Ngunduh+Mantu+Rio+%26+Dila+di+Yogyakarta&location=Pendopo+Tulungo%2C+Kasultanan+Ngayogyakarta+Hadiningrat";
    const icsFileURL = "https://res.cloudinary.com/dz0ndwdvf/raw/upload/v1730291347/jogja_bswjq0.ics";

    if (isiOS()) {
        window.location.href = icsFileURL;
    } else {
        window.open(googleCalendarURL, "_blank");
    }
}

const bankData = {
    anz: {
        name: "ANZ (BSB: 016363)",
        accountNumber: "297882867",
        accountHolder: "Rio Akbar"
    },
    mandiri: {
        name: "Mandiri",
        accountNumber: "1720001511536",
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
        const buttonText = document.getElementById("bank-button");
        const originalText = buttonText.textContent;

        const fadeText = (newText, revert = false) => {
            buttonText.style.transition = "opacity 0.3s ease";
            buttonText.style.opacity = "0";
            setTimeout(() => {
                buttonText.textContent = newText;
                buttonText.style.opacity = "1";
                if (revert) {
                    setTimeout(() => {
                        fadeText(originalText);
                    }, 1000);
                }
            }, 200);
        };

        fadeText("Informasi berhasil disalin!", true);
    }).catch(() => {
        alert("Gagal menyalin informasi rekening.");
    });
}


function increasePax() {
    const paxInput = document.getElementById("pax");
    let paxValue = parseInt(paxInput.value, 10);
    paxInput.value = paxValue + 1;
}

function decreasePax() {
    const paxInput = document.getElementById("pax");
    let paxValue = parseInt(paxInput.value, 10);
    if (paxValue > 1) {
        paxInput.value = paxValue - 1;
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyXT6Izx6mjzESbyUKRnQhcqsDGpKZI7BEIDeAnEGbaBtBtpOq-PAjHqxWdjovT9wQ/exec';
const form = document.forms['rsvp-form'];
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
    e.preventDefault();

    const originalText = submitButton.textContent;

    const fadeText = (newText, revert = false) => {
        submitButton.style.transition = "opacity 0.3s ease";
        submitButton.style.opacity = "0";
        setTimeout(() => {
            submitButton.textContent = newText;
            submitButton.style.opacity = "1";
            if (revert) {
                setTimeout(() => {
                    fadeText(originalText);
                }, 1000);
            }
        }, 300);
    };

    fadeText("Mengirimkan pesan...");

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            fadeText("Pesan telah dikirim!", true);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            fadeText("Error! Try Again", true);
        });
});


function copyLink() {
    const link = "https://www.youtube.com/live/owVgaeadgdY";
    navigator.clipboard.writeText(link).then(() => {
        const buttonText = document.getElementById("button-text");
        const originalText = buttonText.textContent;
        const fadeText = (newText, revert = false) => {
            buttonText.style.transition = "opacity 0.3s ease";
            buttonText.style.opacity = "0";
            setTimeout(() => {
                buttonText.textContent = newText;
                buttonText.style.opacity = "1";
                if (revert) {
                    setTimeout(() => {
                        fadeText(originalText);
                    }, 300);
                }
            }, 200);
        };
        fadeText("Tautan berhasil disalin", true);
    }).catch(err => {
        console.error("Failed to copy link: ", err);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const musicBox = document.getElementById("music-box");
    const audio = new Audio("/assets/audio.mp3");
    audio.loop = true;
    audio.muted = true; 
    function playMusic() {
        audio.muted = false;
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                musicBox.classList.add("playing");
            });
        }
    }
    playMusic();
    function attemptPlayOnInteraction() {
        if (audio.paused) {
            playMusic();
        }
    }
    musicBox.addEventListener("click", function () {
        if (audio.paused) {
            audio.currentTime = 0; 
            musicBox.classList.add("playing"); 
            playMusic();
        } else {
            audio.pause();
            musicBox.classList.remove("playing"); 
        }
    });

    document.addEventListener("click", attemptPlayOnInteraction, { once: true });
    document.addEventListener("scroll", attemptPlayOnInteraction, { once: true });
});

