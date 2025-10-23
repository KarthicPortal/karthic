// Website Initialization
class WebsiteManager {
    constructor() {
        this.config = this.getConfig();
        this.currentSubdomain = this.getSubdomain();
        this.init();
    }

    getConfig() {
        return typeof WEBSITE_CONFIG !== 'undefined' ? WEBSITE_CONFIG : {};
    }

    getSubdomain() {
        const hostname = window.location.hostname;
        const parts = hostname.split('.');
        return parts.length > 2 ? parts[0] : 'main';
    }

    init() {
        this.updatePageMeta();
        this.initializeNavigation();
        this.loadContent();
        this.initializeEventListeners();
    }

    updatePageMeta() {
        // Disabled dynamic page meta updates to prevent character duplication
        // Static HTML content is already properly structured
        return;
        
        const subdomainConfig = SUBDOMAIN_CONFIGS?.[this.currentSubdomain] || {};
        const config = { ...this.config, ...subdomainConfig };
        
        document.getElementById('page-title').textContent = config.site?.title || 'Karthic - Personal Portfolio';
        document.getElementById('page-description').setAttribute('content', config.site?.description || 'Passionate Developer & Problem Solver');
    }

    initializeNavigation() {
        // Disabled dynamic navigation updates to prevent conflicts
        // Static HTML navigation is already properly structured
        return;
        
        const subdomainConfig = SUBDOMAIN_CONFIGS?.[this.currentSubdomain] || {};
        const navItems = subdomainConfig.navigation || this.config.navigation?.main || [];
        
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.innerHTML = navItems.map(item => `
                <li class="nav-item">
                    <a href="${item.href}" class="nav-link">
                        <i class="${item.icon}"></i>
                        ${item.label}
                    </a>
                </li>
            `).join('');
        }
    }

    loadContent() {
        // Disabled dynamic content loading to prevent character duplication
        // Static HTML content is already properly structured
        return;
        
        const subdomainConfig = SUBDOMAIN_CONFIGS?.[this.currentSubdomain] || {};
        const sections = { ...this.config.sections, ...subdomainConfig.sections };
        
        // Load each section based on configuration
        Object.keys(sections).forEach(sectionKey => {
            const section = sections[sectionKey];
            if (section && section.enabled) {
                this.loadSection(sectionKey, section);
            } else {
                this.hideSection(sectionKey);
            }
        });
    }

    loadSection(sectionKey, section) {
        const sectionElement = document.getElementById(sectionKey);
        if (!sectionElement) return;

        switch(sectionKey) {
            case 'home':
                this.loadHomeSection(section);
                break;
            case 'about':
                this.loadAboutSection(section);
                break;
            case 'skills':
                this.loadSkillsSection(section);
                break;
            case 'projects':
                this.loadProjectsSection(section);
                break;
            case 'blog':
                this.loadBlogSection(section);
                break;
            case 'contact':
                this.loadContactSection(section);
                break;
        }
    }

    loadHomeSection(section) {
        // Disabled dynamic home section updates to prevent character duplication
        // Static HTML content is already properly structured
        return;
        
        const titleElement = document.querySelector('.hero-title');
        const subtitleElement = document.querySelector('.hero-subtitle');
        const descriptionElement = document.querySelector('.hero-description');
        const buttonsContainer = document.querySelector('.hero-buttons');

        if (titleElement && section.title) {
            titleElement.innerHTML = section.title;
        }
        if (subtitleElement && section.subtitle) {
            subtitleElement.textContent = section.subtitle;
        }
        if (descriptionElement && section.description) {
            descriptionElement.textContent = section.description;
        }
        if (buttonsContainer && section.buttons) {
            buttonsContainer.innerHTML = section.buttons.map(btn => 
                `<a href="${btn.href}" class="btn ${btn.class}">${btn.text}</a>`
            ).join('');
        }
    }

    loadAboutSection(section) {
        // Disabled dynamic about section updates to prevent character duplication
        // Static HTML content is already properly structured
        return;
        
        const aboutText = document.querySelector('.about-text');
        const statsContainer = document.querySelector('.about-stats');

        if (aboutText && section.content) {
            aboutText.innerHTML = section.content.map(paragraph => 
                `<p>${paragraph}</p>`
            ).join('');
        }

        if (statsContainer && section.stats) {
            statsContainer.innerHTML = section.stats.map(stat => 
                `<div class="stat">
                    <h3>${stat.value}</h3>
                    <p>${stat.label}</p>
                </div>`
            ).join('');
        }
    }

    loadSkillsSection(section) {
        // Disabled dynamic skills section updates to prevent character duplication
        // Static HTML content is already properly structured
        return;
        const skillsGrid = document.querySelector('.skills-grid');
        
        if (skillsGrid && section.categories) {
            skillsGrid.innerHTML = section.categories.map(category => `
                <div class="skill-category">
                    <h3>${category.name}</h3>
                    <div class="skill-items">
                        ${category.skills.map(skill => `
                            <div class="skill-item">
                                <i class="${skill.icon}"></i>
                                <span>${skill.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    loadProjectsSection(section) {
        const projectsGrid = document.querySelector('.projects-grid');
        
        if (projectsGrid && section.items) {
            projectsGrid.innerHTML = section.items.map(project => `
                <div class="project-card">
                    <div class="project-image">
                        <i class="${project.image}"></i>
                    </div>
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tech">
                            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            ${project.links.map(link => `
                                <a href="${link.href}" class="project-link">
                                    <i class="${link.icon}"></i> ${link.text}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    loadBlogSection(section) {
        // This would be implemented for blog subdomain
        console.log('Loading blog section:', section);
    }

    loadContactSection(section) {
        // Disabled dynamic contact section updates to prevent character duplication
        // Static HTML content is already properly structured
        return;
        const contactMethods = document.querySelector('.contact-methods');
        
        if (contactMethods && section.methods) {
            contactMethods.innerHTML = section.methods.map(method => `
                <div class="contact-method">
                    <i class="${method.icon}"></i>
                    <div>
                        <h4>${method.type}</h4>
                        <p>${method.value}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    hideSection(sectionKey) {
        const sectionElement = document.getElementById(sectionKey);
        if (sectionElement) {
            sectionElement.style.display = 'none';
        }
    }

    initializeEventListeners() {
        this.initializeNavigation();
        this.initializeMobileMenu();
        this.initializeSmoothScrolling();
        this.initializeScrollEffects();
        this.initializeFormHandling();
        this.initializeAnimations();
    }

    initializeMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }));
        }
    }

    initializeSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initializeScrollEffects() {
        // Navbar background change on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    navbar.style.boxShadow = 'none';
                }
            }
        });

        // Scroll progress indicator
        this.createScrollProgress();
    }

    initializeFormHandling() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });
        }
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        if (!name || !email || !subject || !message) {
            this.showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        this.showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        form.reset();
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    initializeAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.skill-category, .project-card, .stat, .contact-method');
        animatedElements.forEach(el => observer.observe(el));

        // Typing animation for hero title
        this.initializeTypingAnimation();
    }

    initializeTypingAnimation() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.innerHTML;
            setTimeout(() => {
                this.typeWriter(heroTitle, originalText, 50);
            }, 500);
        }
    }

    typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #2563eb, #7c3aed);
            z-index: 10001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease-in';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
        
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        });
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Disabled WebsiteManager to prevent character duplication
    // Static HTML content is already properly structured
    // new WebsiteManager();
});

// Legacy code for backward compatibility
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .stat, .contact-method');
    animatedElements.forEach(el => observer.observe(el));
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    });
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Delay the typing animation slightly
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill items hover effect enhancement
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Project cards 3D tilt effect
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
});

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Lazy loading for images (if any are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Console welcome message
console.log(`
🚀 Welcome to Karthic's Portfolio!
   
   Built with ❤️ using vanilla HTML, CSS, and JavaScript
   
   Feel free to explore the code and reach out if you have any questions!
   
   Contact: karthic@example.com
`);

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
});
