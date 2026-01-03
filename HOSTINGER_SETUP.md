# How to Deploy to Hostinger - Step by Step

## What This File Does
This guide will help you move your Mea Muziq Productions website from Replit to Hostinger.

---

## STEP 1: Download Your Website from Replit

1. In Replit, look at the left side where you see all your files
2. Click the three dots (...) next to the folder icon at the top
3. Click "Download as ZIP"
4. Save it to your computer (remember where you put it!)

---

## STEP 2: Create a GitHub Account (Skip if you have one)

1. Go to **github.com**
2. Click "Sign up"
3. Enter your email, create a password, pick a username
4. Follow the steps to verify your account

---

## STEP 3: Create a New Repository on GitHub

1. After logging in, click the **+** button in the top right corner
2. Click "New repository"
3. Name it: `mea-muziq-website`
4. Make sure "Public" is selected
5. Check the box that says "Add a README file"
6. Click "Create repository"

---

## STEP 4: Upload Your Files to GitHub

1. On your new repository page, click "Add file" button
2. Click "Upload files"
3. Unzip the folder you downloaded from Replit
4. Drag ALL the files and folders into the upload area
5. At the bottom, click "Commit changes"

**Important:** Make sure you upload the CONTENTS of the folder, not the folder itself!

---

## STEP 5: Get Hostinger Hosting

1. Go to **hostinger.com**
2. Click "Hosting" in the menu
3. Choose "Business Web Hosting" or "Cloud Hosting" (NOT the cheapest one - those don't support Node.js)
4. Complete your purchase
5. Once done, go to hPanel (the control panel)

---

## STEP 6: Connect GitHub to Hostinger

1. In hPanel, click "Websites" on the left
2. Click "Add Website" or "Create Website"
3. Choose "Import from GitHub"
4. Click "Connect to GitHub" - a popup will ask for permission, click "Authorize"
5. Select your `mea-muziq-website` repository
6. For the branch, select `main`

---

## STEP 7: Configure Build Settings

When Hostinger asks for settings, enter:

| Field | What to Enter |
|-------|---------------|
| **Build command** | `npm run build` |
| **Start command** | `npm start` |
| **Port** | `5000` |
| **Node version** | `20` |

Click "Deploy" and wait a few minutes!

---

## STEP 8: Connect Your Domain (Optional)

If you have a domain name:
1. In hPanel, go to "Domains"
2. Click "Add Domain"
3. Enter your domain name
4. Follow the instructions to update your domain's nameservers

---

## Automatic Updates

The special file I created (`.github/workflows/deploy.yml`) means:
- Every time you update your code on GitHub
- The website will automatically rebuild itself!

---

## Need Help?

If something doesn't work:
1. Check that you're using Business or Cloud hosting (not basic)
2. Make sure all files were uploaded correctly
3. Check the build logs in Hostinger for error messages

---

## Your Website Settings Summary

- **Build command:** `npm run build`
- **Start command:** `npm start`  
- **Port:** `5000`
- **Node version:** `20`
