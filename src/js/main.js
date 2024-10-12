// document.getElementById('scroll-btn').addEventListener('click', function() {
//     document.getElementById('about-pengantin').scrollIntoView({ behavior: 'smooth' });
// });

document.getElementById('scroll-btn').addEventListener('click', function() {
    // Slide up the intro section
    document.getElementById('intro-section').classList.add('hide');
  
    // Wait for the animation to finish before showing the main content
    setTimeout(() => {
        document.getElementById('intro-section').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.body.classList.remove('overflow-hidden');
    }, 500); // Matches the animation duration
});