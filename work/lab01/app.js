"use strict";
(() => {
  const gallery = document.querySelector(".gallery");
  gallery.addEventListener('click', (e) => {
      console.dir(e.target)
      if (e.target.nodeName === "IMG") {
          e.target.parentNode.classList.toggle('darken')
      } else if (e.target.classList.contains('caption')){
        e.target.parentNode.classList.toggle('focus')
        document.querySelectorAll('.wrapper.focus').forEach((element) => {
            console.log(element);
            if (!element.contains(e.target)) {
                // If the wrapper doesn't contain the target we click
                element.classList.remove('focus')
            }
        })
      }
  })
})();
