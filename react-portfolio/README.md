# 🚀 Tasuntha's Professional Portfolio

This is the newly redesigned portfolio using **React**, **Vite**, **Tailwind CSS v4**, and **Three.js**.

## 🛠️ How to run locally

1. Make sure you are in the `react-portfolio` directory:
   ```bash
   cd react-portfolio
   ```
2. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173`

## ✏️ Things to update before publishing

Open the code in your editor and look for the following comments to add your personal links:

1. **`src/components/About.jsx`**:
   Search for `/* REPLACE '#' WITH YOUR RESUME GOOGLE DRIVE OR PDF LINK */` and replace the `#` with your actual Resume link.
2. **`src/components/Projects.jsx`**:
   Search for `/* REPLACE '#' WITH GITHUB LINK */` and `/* REPLACE '#' WITH FIGMA OR DEMO LINK */` to add links to your projects.
3. **`src/components/Contact.jsx`**:
   Search for `/* REPLACE YOUR_FORMSPREE_ID WITH YOUR ACTUAL FORMSPREE ID */`. Go to [Formspree.io](https://formspree.io/), create a free account, and get your form ID. Paste it in the `action` attribute.

## 🌐 How to publish to GitHub Pages

The easiest way to deploy this React app to GitHub Pages is using the `gh-pages` package.

1. Install `gh-pages` as a dev dependency:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Open `package.json` and add a `homepage` field at the top. Replace `Tasuntha-Chathunika` with your exact GitHub username and `1.website` with your repository name.
   ```json
   "homepage": "https://Tasuntha-Chathunika.github.io/1.website",
   ```
3. Add the following to your `scripts` in `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run the deploy command:
   ```bash
   npm run deploy
   ```
   This will automatically build your app and push it to a new branch called `gh-pages`.
5. Go to your GitHub Repository Settings -> Pages, and set the source branch to `gh-pages`. Wait 1-2 minutes and your site will be live!

---
*Designed with ❤️ by Antigravity*
