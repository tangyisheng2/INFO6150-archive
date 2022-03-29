# React Services Assignment

** Due 11:59pm PT Mon Apr 4 **

## Goal

- Take this react project and modify it
- You will need to run `npm install` once to load libraries for the project
- After that you can run `npm start` as normal to run the project
- On page load (When the `<Posts>` component is rendered)
  - show a loading spinner initially
  - load and display the list of posts (you must use useEffect!)
  - show a warning message on error in the `<div className="status">` area
    - Remember not to show the exact error message send by the service
    - Instead, show a user-friendly message that is BASED on the error code returned from the service
- When a post title is clicked, the `<Comments>` component should render
  - Comments for a different post should top rendering
  - If the comments for that post are already loaded, show them
  - Otherwise, show a spinner, then load the comments and show them
    - be sure to replace the spinner when the comments display
- Style these to be recognizable as a clickable post title and the corresponding post body and comments on that post 
  - Note the data represents fake posts, the text is just nonsense lorem ipsum
  - Style the page appropriately so that the posts resemble "real" forum posts
    - So you can recognize distinct posts as distinct, their title and body are shown
      - If you want to use `text-overflow: ellipsis;` (https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow ) to show a truncated version of the body, you can
    - Generally you have a lot of freedom to style this as you like - the important parts are that the data is loaded dynamically, and the below behavior
    - If you want inspiration, look at forums like reddit (`https://www.reddit.com/r/javascript/`) or Twitter or Facebook, where a post can be clicked on to see comments. In this case, I'm requiring the title of the post to be a link, but the rest of the HTML structure and the styling of all of it is up to you.
      - You are free to include visuals for actions we aren't implementing, you will only be graded on the HTML, CSS, and the functionality that this assignment requires

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-services' (`git checkout -b react-services`)
* add the necessary files in this directory to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Restrictions

- Do not use table, CSS table-cell, floats, or other related concepts for layout
- use rem-based values for padding/margin
- Do not use outside JS or CSS libraries
  - You are allowed to use fontawesome for icons if you want icons, but only the CSS version of the library
    - If you use fontawesome, their css files should already include license information
  - You are allowed to load css.gg CSS
    - If you use/link to css.gg css files, theose files should already include license information
    - If you copy css.gg css into your own css file, update README to say what you copied and link to css.gg license

