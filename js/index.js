


document.addEventListener('DOMContentLoaded', function() {
    const videoSection = document.querySelector('.coffee-cupbg'); 
    const video = document.getElementById('myVideo');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
    };

    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, options);

    videoObserver.observe(videoSection);
});



