# GitHub Pages Setup Guide for Digital Guardians

## 🚀 Quick Start

This repository is now fully compatible with GitHub Pages! Follow these steps to deploy your website:

### Option 1: Enable GitHub Pages (Recommended)

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select the branch you want to deploy (e.g., `main` or `copilot/enable-github-pages-hosting`)
4. Click **Save**
5. Your site will be published at: `https://dcnsakthi.github.io/DigitalGuardians/`

### Option 2: Using GitHub Actions (Advanced)

Create a `.github/workflows/pages.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## 📁 Project Structure

```
DigitalGuardians/
├── index.html              # Main landing page
├── styles.css              # All styling and responsive design
├── script.js               # Interactive features and quiz functionality
├── resources/              # Additional resource pages
│   ├── safety-checklist.html
│   ├── privacy-guide.html
│   ├── phishing-guide.html
│   ├── deepfake-guide.html
│   ├── conversation-starters.html
│   ├── multilingual.html
│   ├── workshops.html
│   ├── ambassadors.html
│   ├── parents.html
│   └── youth.html
├── README.md               # Project information
├── GITHUB_PAGES_SETUP.md   # This file
└── LICENSE                 # License information
```

## ✨ Features Included

### 1. **Interactive Quiz System**
- Three difficulty levels: Beginner, Intermediate, Advanced
- 30 total questions covering digital safety topics
- Progress tracking and score calculation
- Instant feedback and explanations

### 2. **Digital Safety Toolkit**
- Comprehensive family safety checklist
- Privacy protection guide
- Phishing prevention resources
- Deepfake detection information
- Multilingual support

### 3. **Gamified Learning**
- Real-world safety scenarios
- Daily challenges to build habits
- Interactive decision-making exercises
- Progress tracking

### 4. **Educational Resources**
- Workshop information
- Community ambassador program
- Resources for parents
- Youth-specific content

### 5. **Fully Responsive Design**
- Mobile-friendly layout
- Tablet optimization
- Desktop experience
- Accessible navigation

## 🌐 Why This Works with GitHub Pages

All functionality in this project uses:

- ✅ **Pure HTML, CSS, and JavaScript** - No build process required
- ✅ **Static files only** - No server-side processing needed
- ✅ **Relative paths** - All links work in any hosting environment
- ✅ **No dependencies** - No npm packages or external libraries required
- ✅ **Client-side only** - All interactions happen in the browser

## 🔧 Local Testing

To test the website locally before deploying:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```

Then open your browser to `http://localhost:8000`

## 📝 Customization

### Updating Content

1. **Main Page**: Edit `index.html`
2. **Styles**: Modify `styles.css`
3. **Quiz Questions**: Update the `quizData` object in `script.js`
4. **Resources**: Edit files in the `resources/` directory

### Adding New Pages

1. Create a new HTML file in the `resources/` directory
2. Link to it from `index.html`
3. Ensure it includes the header navigation and footer
4. Use relative paths (`../styles.css`) for styling

### Color Scheme

The color scheme is defined in CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    --accent-color: #f59e0b;
    /* ... more colors ... */
}
```

## 🔒 Security Considerations

This website is designed with security and privacy in mind:

- No data collection or tracking
- No external API calls
- No form submissions to servers
- All processing happens client-side
- Educational content about security best practices

## 🎯 Browser Compatibility

The website works on:

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

The website includes:

- Responsive grid layouts
- Touch-friendly buttons
- Mobile menu toggle
- Optimized font sizes
- Reduced motion for accessibility

## 🚀 Performance

Optimized for fast loading:

- Minimal CSS (~14KB)
- Efficient JavaScript (~26KB)
- No external dependencies
- Optimized images (emoji icons)
- Clean, semantic HTML

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

See the LICENSE file in the root directory.

## 🆘 Troubleshooting

### Site not loading after deployment

- Wait 5-10 minutes for GitHub Pages to build
- Check that the correct branch is selected in Settings
- Ensure `index.html` is in the root directory

### Broken links

- All links use relative paths
- Resource pages link back to `../index.html`
- Check that all referenced files exist

### JavaScript not working

- Check browser console for errors
- Ensure `script.js` is properly linked in `index.html`
- Test in different browsers

### Styling issues

- Clear browser cache
- Check that `styles.css` is properly linked
- Verify CSS file is in the same directory as `index.html`

## 📞 Support

For issues or questions:

1. Check this documentation
2. Review the code comments
3. Test in different browsers
4. Check GitHub Issues for similar problems

---

**Ready to deploy?** Follow the Quick Start guide above and your Digital Guardians website will be live on GitHub Pages! 🎉
