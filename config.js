// Website Configuration - Easy to modify for different subdomains
const WEBSITE_CONFIG = {
    // Site Information
    site: {
        title: "Karthic - Personal Portfolio",
        description: "Passionate Developer & Problem Solver",
        author: "Karthic",
        domain: "karthic.is-a.dev",
        subdomain: window.location.hostname.split('.')[0] || 'main'
    },

    // Navigation Configuration
    navigation: {
        main: [
            { id: 'home', label: 'Home', href: '#home', icon: 'fas fa-home' },
            { id: 'about', label: 'About', href: '#about', icon: 'fas fa-user' },
            { id: 'skills', label: 'Skills', href: '#skills', icon: 'fas fa-code' },
            { id: 'projects', label: 'Projects', href: '#projects', icon: 'fas fa-briefcase' },
            { id: 'blog', label: 'Blog', href: '#blog', icon: 'fas fa-blog' },
            { id: 'contact', label: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
        ],
        // Add subdomain-specific navigation
        blog: [
            { id: 'home', label: 'Home', href: '#home', icon: 'fas fa-home' },
            { id: 'posts', label: 'Posts', href: '#posts', icon: 'fas fa-newspaper' },
            { id: 'categories', label: 'Categories', href: '#categories', icon: 'fas fa-tags' },
            { id: 'about', label: 'About', href: '#about', icon: 'fas fa-user' },
            { id: 'contact', label: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
        ],
        portfolio: [
            { id: 'home', label: 'Home', href: '#home', icon: 'fas fa-home' },
            { id: 'gallery', label: 'Gallery', href: '#gallery', icon: 'fas fa-images' },
            { id: 'projects', label: 'Projects', href: '#projects', icon: 'fas fa-briefcase' },
            { id: 'skills', label: 'Skills', href: '#skills', icon: 'fas fa-code' },
            { id: 'contact', label: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
        ]
    },

    // Content Sections Configuration
    sections: {
        home: {
            enabled: true,
            title: "Hi, I'm <span class='highlight'>Karthic Ganesan</span>",
            subtitle: "Cloud/Platform/DevSecOps Engineer & Problem Solver",
            description: "I love provisioning innovative infrastructure solutions and turning ideas into reality through code. Welcome to my digital space where creativity meets technology.",
            buttons: [
                { text: "View My Work", href: "#projects", class: "btn-primary" },
                { text: "Get In Touch", href: "#contact", class: "btn-secondary" }
            ]
        },
        about: {
            enabled: true,
            title: "About Me",
            content: [
                "I'm a passionate about technologies and innovation with a love for creating meaningful digital experiences. With expertise in modern cloud technologies, I enjoy consulting and helping building applications that make a difference.",
                "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community."
            ],
            stats: [
                { value: "20+", label: "Projects Completed" },
                { value: "15+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" }
            ]
        },
        skills: {
            enabled: true,
            title: "Skills & Technologies",
            categories: [
                {
                    name: "Infrastructure as Code",
                    skills: [
                        { name: "Terraform", icon: "fas fa-code" },
                        { name: "Ansible", icon: "fas fa-tools" },
                        { name: "ARM templates", icon: "fas fa-file-code" },
                        { name: "Bicep", icon: "fas fa-file-code" }
                    ]
                },
                {
                    name: "Scripting Languages",
                    skills: [
                        { name: "Bash", icon: "fas fa-terminal" },
                        { name: "PowerShell", icon: "fas fa-terminal" },
                        { name: "Python", icon: "fab fa-python" },
                        { name: "TypeScript", icon: "fab fa-js-square" },
                        { name: "Perl", icon: "fas fa-code" }
                    ]
                },
                {
                    name: "Tools & Others",
                    skills: [
                        { name: "Docker", icon: "fab fa-docker" },
                        { name: "Kubernetes", icon: "fas fa-network-wired" },
                        { name: "Azure", icon: "fas fa-cloud" },
                        { name: "Databricks", icon: "fas fa-database" },
                        { name: "GitHub", icon: "fab fa-github" },
                        { name: "Azure DevOps", icon: "fas fa-project-diagram" }
                    ]
                },
                {
                    name: "Certifications",
                    skills: [
                        { name: "CKA: Certified Kubernetes Administrator", icon: "fas fa-certificate" },
                        { name: "AZ-400: Designing and Implementing Microsoft DevOps Solutions", icon: "fab fa-microsoft" },
                        { name: "AZ-204: Developing Solutions for Microsoft Azure", icon: "fab fa-microsoft" },
                        { name: "AZ-104: Azure Administrator Associate", icon: "fab fa-microsoft" },
                        { name: "'DevOps Expert' badge from Microsoft", icon: "fas fa-award" }
                    ]
                }
            ]
        },
        projects: {
            enabled: true,
            title: "Featured Projects",
            items: [
                {
                    title: "E-Commerce Platform",
                    description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
                    image: "fas fa-shopping-cart",
                    tech: ["React", "Node.js", "MongoDB"],
                    links: [
                        { text: "Code", href: "#", icon: "fab fa-github" },
                        { text: "Live Demo", href: "#", icon: "fas fa-external-link-alt" }
                    ]
                },
                {
                    title: "Task Management App",
                    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                    image: "fas fa-tasks",
                    tech: ["Vue.js", "Socket.io", "Express"],
                    links: [
                        { text: "Code", href: "#", icon: "fab fa-github" },
                        { text: "Live Demo", href: "#", icon: "fas fa-external-link-alt" }
                    ]
                },
                {
                    title: "Analytics Dashboard",
                    description: "A comprehensive analytics dashboard with interactive charts, data visualization, and real-time monitoring capabilities.",
                    image: "fas fa-chart-line",
                    tech: ["D3.js", "Python", "Flask"],
                    links: [
                        { text: "Code", href: "#", icon: "fab fa-github" },
                        { text: "Live Demo", href: "#", icon: "fas fa-external-link-alt" }
                    ]
                }
            ]
        },
        blog: {
            enabled: false, // Enable for blog subdomain
            title: "Latest Posts",
            posts: [
                {
                    title: "Getting Started with React Hooks",
                    excerpt: "Learn the basics of React Hooks and how they can simplify your functional components.",
                    date: "2024-01-15",
                    category: "React",
                    readTime: "5 min read"
                },
                {
                    title: "Building Scalable APIs with Node.js",
                    excerpt: "Best practices for creating robust and scalable REST APIs using Node.js and Express.",
                    date: "2024-01-10",
                    category: "Backend",
                    readTime: "8 min read"
                }
            ]
        },
        contact: {
            enabled: true,
            title: "Get In Touch",
            description: "I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just say hello.",
            methods: [
                { type: "Email", value: "karthic.ceg@gmail.com", icon: "fas fa-envelope" },
                { type: "LinkedIn", value: "in.linkedin.com/in/karthic-ganesan-a610b7a", icon: "fab fa-linkedin" },
                { type: "GitHub", value: "github.com/karthicportal", icon: "fab fa-github" }
            ]
        }
    },

    // Theme Configuration
    theme: {
        primaryColor: "#2563eb",
        secondaryColor: "#fbbf24",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Inter', sans-serif"
    },

    // Social Links
    social: {
        github: "https://github.com/karthicportal",
        linkedin: "https://in.linkedin.com/in/karthic-ganesan-a610b7a",
        twitter: "https://twitter.com/karthic",
        email: "mailto:karthic.ceg@gmail.com"
    },

    // SEO Configuration
    seo: {
        keywords: ["developer", "portfolio", "web development", "react", "node.js", "javascript"],
        ogImage: "/images/og-image.jpg",
        twitterCard: "summary_large_image"
    }
};

// Subdomain-specific configurations
const SUBDOMAIN_CONFIGS = {
    'blog': {
        sections: {
            home: {
                title: "Welcome to My <span class='highlight'>Blog</span>",
                subtitle: "Thoughts on Technology & Development",
                description: "Sharing insights, tutorials, and experiences from my journey as a developer."
            },
            blog: {
                enabled: true
            },
            projects: {
                enabled: false
            }
        }
    },
    'portfolio': {
        sections: {
            home: {
                title: "My <span class='highlight'>Portfolio</span>",
                subtitle: "Creative Works & Projects",
                description: "A showcase of my creative projects, designs, and professional work."
            },
            projects: {
                enabled: true,
                title: "Creative Projects"
            }
        }
    },
    'resume': {
        sections: {
            home: {
                title: "Professional <span class='highlight'>Resume</span>",
                subtitle: "Karthic - Full Stack Developer",
                description: "Download my resume and explore my professional experience and qualifications."
            },
            about: {
                enabled: true,
                title: "Professional Summary"
            },
            skills: {
                enabled: true,
                title: "Technical Skills"
            }
        }
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WEBSITE_CONFIG, SUBDOMAIN_CONFIGS };
}
