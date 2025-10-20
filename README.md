# Karthic's Scalable Personal Website

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Designed to be easily scalable for different subdomains and content types.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modular Architecture**: Easy to customize and extend
- **Subdomain Support**: Different content for different subdomains
- **Content Management**: JSON-based configuration system
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
karthic/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── config.js           # Configuration and content management
├── CNAME              # Domain configuration
└── README.md          # This file
```

## 🛠️ Configuration

The website uses a configuration-driven approach. All content and behavior can be modified through `config.js`:

### Main Configuration
- Site information (title, description, author)
- Navigation structure
- Section content and visibility
- Theme settings
- Social media links

### Subdomain Support
Different subdomains can have different configurations:

- `karthic.is-a.dev` - Main portfolio site
- `blog.karthic.is-a.dev` - Blog-focused layout
- `portfolio.karthic.is-a.dev` - Creative portfolio
- `resume.karthic.is-a.dev` - Professional resume

## 🎨 Customization

### Adding New Sections
1. Add section configuration to `config.js`
2. Create corresponding HTML structure
3. Add CSS styling
4. Implement section loader in `script.js`

### Creating Subdomain Variants
1. Add subdomain configuration to `SUBDOMAIN_CONFIGS`
2. Define custom navigation and sections
3. Override default content as needed

### Example: Adding a Blog Section
```javascript
// In config.js
sections: {
    blog: {
        enabled: true,
        title: "Latest Posts",
        posts: [
            {
                title: "My First Post",
                excerpt: "This is a sample blog post...",
                date: "2024-01-15",
                category: "Technology"
            }
        ]
    }
}
```

## 🚀 Deployment

1. **GitHub Pages**: Push to your repository and enable Pages
2. **Custom Domain**: Update CNAME file with your domain
3. **Subdomains**: Configure DNS to point subdomains to the same repository

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Development

### Local Development
1. Clone the repository
2. Open `index.html` in a browser
3. Modify `config.js` for content changes
4. Update CSS for styling changes

### Adding New Features
1. Update configuration in `config.js`
2. Modify HTML structure if needed
3. Add CSS styling
4. Implement JavaScript functionality
5. Test across different devices

## 📝 Content Management

All content is managed through the configuration file:

- **Text Content**: Update directly in `config.js`
- **Images**: Replace placeholder icons with actual images
- **Links**: Update social media and project links
- **Sections**: Enable/disable sections as needed

## 🎯 Future Enhancements

- [ ] Blog post management system
- [ ] Image gallery for portfolio
- [ ] Contact form backend integration
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Progressive Web App features

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by Karthic