# Personal Website

A responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Structure

- `index.html` - The main HTML file
- `css/styles.css` - Main stylesheet
- `js/main.js` - JavaScript functionality
- `img/` - Directory for images
- `.github/workflows/` - GitHub Actions workflow files for deployment

## Features

- Responsive design that works on desktop and mobile
- Navigation menu with smooth scrolling
- About Me section
- Skills showcase with progress bars
- Portfolio section with project showcases
- Contact form with validation
- Social media links

## Customization

To personalize this website:

1. Replace placeholder text in `index.html` with your information
2. Add your own images to the `img` directory
3. Customize colors and styles in `css/styles.css`
4. Add any additional JavaScript functionality in `js/main.js`

## Getting Started

To run this website locally, simply open the `index.html` file in a web browser.

## GitHub Pages Deployment

This website is configured to automatically deploy to GitHub Pages using GitHub Actions. Here's how to set it up:

1. Create a new GitHub repository
2. Push this code to the repository's main branch
3. Go to repository Settings > Pages
4. Under "Source", select "GitHub Actions" (not Branch)
5. No further configuration is needed as the workflow file is already set up
6. GitHub will automatically run the workflow when you push to the main branch
7. Once deployed, your site will be available at `https://[your-username].github.io/[repository-name]/`

### Troubleshooting Deployment

If you encounter deployment issues:
- Check that your repository doesn't contain large binary files or symlinks
- Ensure GitHub Actions has proper permissions set in repository settings
- Review the Actions tab for detailed error messages
- The workflow is configured to include only web-related files (HTML, CSS, JS, and images)

#### Advanced Troubleshooting
If you still face deployment errors about artifacts:
1. In your repository, go to Settings → Actions → General
2. Ensure "Read and write permissions" is selected under "Workflow permissions"
3. Try manually triggering the workflow from the Actions tab
4. Check that none of your files exceed GitHub's file size limits
5. Look for hidden or unexpected workflow files in your repository that might be causing conflicts
6. Temporarily delete the `.github/workflows` folder, then recreate it with only the essential workflow file
7. Check if there's a default GitHub workflow template being applied at the organization level