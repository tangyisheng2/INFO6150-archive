# Midterm Project

** Due Mon Mar 7 11:59pm PT **

## Goals

- You will create a small website of static HTML, CSS, and JS files
- The website will give information about a topic of your choice
- The website is visible by running `npx serve` IN THIS DIRECTORY and visiting `http://localhost:3000/` in the browser
- You will demonstrate your understanding of the skills taught in class so far to fulfill the requirements

## Technical Requirements
- The static files will all be in the `public/` directory
  - this will be the document root of your server
  - you can create subdirectories for organization if you wish
- The site consists of at least 3 pages with distinct content
- You have navigation on all pages to allow you to navigate among the pages
- The site must have a common header identifying the site
  - Individual pages can have a subheader to indicate the page, but this is not required
- One page (of your choice) will include a form (gathering information of your choice) that will POST to `/form`
  - the `/form` url (which is provided by me) will redirect the user to `/form.html`.  You will need to provide a form.html (in `public/`)  that gives some message about getting their data.  (Example text: "Thank your for submitting your data"), and has navigation to continue navigating around the site
  - the form needs to include at least:
    - two text inputs
    - one dropdown selection
    - one checkbox
  - The content of the form should make sense for the site topic you have.  Add any additional fields needed to make that work.
  - The layout of the form is of your choice (including 2-column layout or multi-column layout if you choose) but should include styling to improve the user experience.
- The site must be generally responsive (resize to allow text to fit) up to a page of 1024px width (after that you can simply increase the left/right gutter margins if you wish, or continue to be responsive), and have at least one adaptive breakpoint (at a point of your choice) that shows a layout change in response to the available size.  The site must be comfortably usable and readable on mobile screens down to 360px width.
- The site must have at least one interactive menu that uses a transition.  It can be a dropdown, a slide-in, or a similar style of your choice.
- The site must have at least 3 images.  These can be logos, backgrounds, or foreground images.  Be sure to use images that you have legal permissions to use (your images, or ones with a license that allow their use).
  - For this assignment, the actual image sizes do not have to match the displayed sizes.
- The site must have a footer that includes listing where the images are licensed from.  I must be able to identify which images are using which license/source, if there are multiple.  If an image is your own, say so in the footer.

## Overall Requirements
- You must demonstrate the skills taught in class
- You must follow the best-practices presented in class
- You should be trying to create a good experience for the user
- You must NOT make use of outside libraries or compilations
  - this means no bootstrap, etc.
  - remember the goal of demonstrating the skills from class

## Submission Instructions

- Start from the up-to-date main branch (git checkout main; git pull origin main)
- Create a feature branch named 'midterm' (git checkout -b midterm)
- Create a package.json and necessary files to complete the work described in this README
- Add, commit, and push the branch to github
- Create a PR to merge to main
- Be sure to include the reviewer(s).
