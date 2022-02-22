# Services JS Assignment

** Due Mon Feb 28 11:59pm PT **

## Goal

This will be a list of forum posts
- Clicking on the title of a post will show the comments
- Clicking on a different title will
  - stop showing the comments of the original post
  - will show the comments of the new post

Most of the functionality is already provided
- You will need to modify the parts that generate HTML
- You will need to provide CSS 

## Functional Requirements
- Create a services.css file that styles the resulting HTML
- Do not change the index.html
- Fill in the parts of the services.js that say "FILL IN" as described below
  - You may add/change any JS needed to create the HTML you want to output
  - Make sure to add classes in your HTML so you can style it!
  - DO remove the "FILL IN" Comments - get in the habit of updating comments that are no longer relevant when you change code
- The data for this assignment is all nonsense lorem ipsum and email addresses (so don't expect the words to make a lot of sense, the focus is on the layout of the parts)
- Style the page appropriately so that the posts resemble "real" forum posts
  - So you can recognize distinct posts as distinct, their title and body are shown
  - If you want to use `text-overflow: ellipsis;` (https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow ) to show a truncated version of the body if the post isn't selected, you can
  - You have a lot of freedom to style this as you like - the important parts are that a user can select a post to see the comments, and that the different parts of the post and comments are clear
  - If you want inspiration, look at forums like reddit (`https://www.reddit.com/r/javascript/`) or Twitter or Facebook, where a post can be clicked on to see comments.  In this case, I'm requiring the title of the post to be a link, but the rest of the HTML structure and the styling of all of it is up to you.
  - You are free to include visuals for actions we aren't implementing, such as the ability to edit or vote on posts, you will only be graded on the HTML, CSS, and the functionality that this assignment requires
  - Remember to make parts show/not show by using classes the JS changes
- You should consider how you would show errors, but you do not need to show errors for this assignment

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'services-js' (`git checkout -b services-js`)
* add the necessary files in this directory to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Restrictions

- Do not use table, CSS table-cell, floats, or other related concepts for layout
- use rem-based values for padding/margin
- Do not use outside JS or CSS libraries 

