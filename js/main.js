
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
    }
    

    loadComponent('./components/header.html', 'header');
    loadComponent('./components/project.html', 'project');
    loadComponent('./components/experience.html', 'experience');
    loadComponent('./components/contact.html', 'contact');
    loadComponent('./components/home.html', 'home');
    loadComponent('./components/about.html', 'about');
    loadComponent('./components/footer.html', 'footer');

    function darkandlight() { 
        var body = document.body; 
        var lightIcon = document.querySelector('.light-icon'); 
        var darkIcon = document.querySelector('.dark-icon'); 
        var burgerlight = document.querySelector('.burger-light-icon');
        var burgerdark = document.querySelector('.burger-dark-icon');
        const isDarkMode = body.classList.toggle('dark-mode');
        const isLightMode = body.classList.toggle('light-mode');
        if (isDarkMode) { 
            lightIcon.classList.remove('hidden'); 
            darkIcon.classList.add('hidden'); 
            burgerlight.classList.remove('hidden'); 
            burgerdark.classList.add('hidden');
        } else if(isLightMode){ 
            lightIcon.classList.add('hidden'); 
            darkIcon.classList.remove('hidden'); 
            burgerlight.classList.add('hidden'); 
            burgerdark.classList.remove('hidden');
        }
    }
    

function burgerUp(){
    var mobileNav = document.getElementById('mobile-nav');
    setTimeout(() => {
        mobileNav.classList.add('open'); 
    }, 300); 
    mobileNav.classList.remove('hidden'); 
}

function closeicon(){
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.remove('open'); 
    setTimeout(() => {
        mobileNav.classList.add('hidden');
    }, 300); 
}

function navigateWithTransition(event) {
    event.preventDefault(); // Prevent immediate navigation
    const link = event.currentTarget;

    // Add a Tailwind class for fading effect
    document.body.classList.add('opacity-0', 'transition-opacity', 'duration-500');
    
    // Wait for the transition to complete, then navigate
    setTimeout(() => {
        window.location.href = link.href;
    }, 500); // Match the duration of Tailwind's `duration-500` class
}