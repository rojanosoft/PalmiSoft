/**
 * PALMISOFT - JavaScript Functionality
 * Handles navigation, form validation, animations, and user interactions
 */

// ============= MOBILE NAVIGATION ============= 
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }
});

// ============= SMOOTH SCROLLING ============= 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============= HEADER SCROLL EFFECT ============= 
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ============= ACTIVE NAVIGATION LINK ============= 
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============= FORM VALIDATION ============= 
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Validate form
        let isValid = true;
        
        // Validate nombre
        const nombre = document.getElementById('nombre');
        if (!nombre.value.trim() || nombre.value.trim().length < 3) {
            showError('nombre', 'Por favor ingresa tu nombre completo (mínimo 3 caracteres)');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            showError('email', 'Por favor ingresa un correo electrónico válido');
            isValid = false;
        }
        
        // Validate telefono
        const telefono = document.getElementById('telefono');
        const telefonoRegex = /^[0-9+\s\-()]+$/;
        if (!telefono.value.trim() || !telefonoRegex.test(telefono.value)) {
            showError('telefono', 'Por favor ingresa un número de teléfono válido');
            isValid = false;
        }
        
        // Validate asunto
        const asunto = document.getElementById('asunto');
        if (!asunto.value) {
            showError('asunto', 'Por favor selecciona un asunto');
            isValid = false;
        }
        
        // Validate mensaje
        const mensaje = document.getElementById('mensaje');
        if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
            showError('mensaje', 'Por favor ingresa un mensaje (mínimo 10 caracteres)');
            isValid = false;
        }
        
        // Validate privacidad
        const privacidad = document.getElementById('privacidad');
        if (!privacidad.checked) {
            showError('privacidad', 'Debes aceptar la política de privacidad para continuar');
            isValid = false;
        }
        
        // If form is valid
        if (isValid) {
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            
            // Simulate API call delay
            setTimeout(function() {
                // Hide form and show success message
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Log form data (in production, this would be sent to a server)
                console.log('Form Data:', {
                    nombre: nombre.value,
                    email: email.value,
                    telefono: telefono.value,
                    empresa: document.getElementById('empresa').value,
                    asunto: asunto.value,
                    mensaje: mensaje.value,
                    timestamp: new Date().toISOString()
                });
                
                // Re-enable button
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            }, 1500);
        } else {
            // Scroll to first error
            const firstError = document.querySelector('.form-input.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    // Handle "Send Another Message" button
    const sendAnotherButton = document.getElementById('sendAnother');
    if (sendAnotherButton) {
        sendAnotherButton.addEventListener('click', function() {
            successMessage.style.display = 'none';
            contactForm.style.display = 'block';
            contactForm.reset();
            clearErrors();
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

// ============= FORM VALIDATION HELPERS ============= 
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    const errorInputs = document.querySelectorAll('.form-input.error');
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });
    
    const errorMessages = document.querySelectorAll('.form-error');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
}

function validateField(field) {
    const fieldId = field.id;
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    field.classList.remove('error');
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    let isValid = true;
    let errorMessage = '';
    
    switch(fieldId) {
        case 'nombre':
            if (!field.value.trim() || field.value.trim().length < 3) {
                isValid = false;
                errorMessage = 'Mínimo 3 caracteres';
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!field.value.trim() || !emailRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Correo electrónico inválido';
            }
            break;
            
        case 'telefono':
            const telefonoRegex = /^[0-9+\s\-()]+$/;
            if (!field.value.trim() || !telefonoRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Número de teléfono inválido';
            }
            break;
            
        case 'asunto':
            if (!field.value) {
                isValid = false;
                errorMessage = 'Selecciona un asunto';
            }
            break;
            
        case 'mensaje':
            if (!field.value.trim() || field.value.trim().length < 10) {
                isValid = false;
                errorMessage = 'Mínimo 10 caracteres';
            }
            break;
            
        case 'privacidad':
            if (!field.checked) {
                isValid = false;
                errorMessage = 'Debes aceptar la política';
            }
            break;
    }
    
    if (!isValid) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }
    }
    
    return isValid;
}

// ============= SCROLL ANIMATIONS ============= 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .tech-category, .about-content');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ============= COUNTER ANIMATION (for stats) ============= 
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Animate counters when they come into view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const number = parseInt(entry.target.textContent.replace(/\D/g, ''));
            animateCounter(entry.target, number);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// ============= ACCESSIBILITY ENHANCEMENTS ============= 
// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (mobileMenuToggle) {
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }
});

// ============= PRELOAD OPTIMIZATION ============= 
// Add loading state to page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ============= CONSOLE BRANDING ============= 
console.log('%c🚀 PalmiSoft - Soluciones Tecnológicas', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c¿Interesado en trabajar con nosotros?', 'color: #64748b; font-size: 14px;');
console.log('%cContacto: rojan11@gmail.com | +57 317 318 4631', 'color: #0ea5e9; font-size: 12px;');
