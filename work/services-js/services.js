"use strict";
(function () {
  // All caps because these are actual constants, not just const variables
  const MESSAGES = {
    NETWORK_ERROR: "Unable to connect, please try again",
    GENERIC_ERROR: "Something went wrong, please try again",
  };

  const state = {
    // NOTE FOR STUDENTS: you will have to set state.activePostId in your code
    activePostId: null, // only one post shows comments at a time, this is the id
    // NOTE FOR STUDENTS: The below are already managed by loadPosts() and loadComments()
    posts: [],
    commentsForPost: {}, // only load comments for a post once - this doesn't detect NEW comments since load
  };

  const postEl = document.querySelector(".posts");

  loadPosts();
  addAbilityToTogglePosts();

  ////////////////////////

  function render() {
    const html = state.posts
      .map((post) => {
        const isActive = post.id === Number(state.activePostId);
        let commentsHtml = "";
        let postHtml = "";

        if (state.commentsForPost[post.id]) {
          commentsHtml = state.commentsForPost[post.id]
            .map(
              (comment) => `
          <li class="comment">
            <span class="username">${comment.name}</span>
             (<span class="email">${comment.email}</span>): 
             ${comment.body}
          </li>
        `
            )
            .join("");
          postHtml = `<p class="post__body">${state.posts[post.id].body}</p>`;
        }
        return `
        <li class="post ${isActive ? "post--active" : ""}">
          <a class="post__title" data-id="${post.id}" href="#${post.id}">${
          post.title
        }</a>
        ${postHtml}
          <ul class="post__comments">
            ${commentsHtml}
          </ul>
        </li>
      `;
      })
      .join("");
    postEl.innerHTML = html;
    updateStatus("");
  }

  function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .catch(() => Promise.reject("NETWORK_ERROR"))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject("GENERIC_ERROR");
      })
      .then((posts) => {
        state.posts = posts;
        render();
      })
      .catch((error) => updateStatus(error));
  }

  function updateStatus(message) {
    const statusEl = document.querySelector(".status");
    if (message) {
      statusEl.innerText = MESSAGES[message] || MESSAGES.GENERIC_ERROR;
    } else {
      statusEl.innerText = "";
    }
  }

  function addAbilityToTogglePosts() {
    postEl.addEventListener("click", (e) => {
      // set/unset state.activePostId as needed
      // call loadComments() with a postId when done
      // Get Post id
      state.activePostId = e.target.attributes["data-id"].value;
      loadPosts();
      loadComments(state.activePostId);
    });
  }

  function loadComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .catch(() => Promise.reject("NETWORK_ERROR"))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject("GENERIC_ERROR");
      })
      .then((comments) => {
        state.commentsForPost[postId] = comments;
        render();
      })
      .catch((error) => updateStatus(error));
  }
})();
