// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"

Rails.start()

window.addEventListener("load", () => {
  const destroy_links = document.querySelectorAll("a.destroy[data-remote]");
  destroy_links.forEach((element) => {
    element.addEventListener("ajax:success", () => {
      const tr = element.closest('tr');
      tr.remove();
    });
  });
  const active_links = document.querySelectorAll("tr a.toggle[data-remote]");
  active_links.forEach((element) => {
    element.addEventListener("ajax:success", (event) => {
      element.innerHTML = element.innerHTML == "Activate" ? "Disactivate" : "Activate"
      // const [data, status, xhr] = event.detail; 
      // const tr = element.closest('tr');
      // tr.outerHTML = xhr.response;

      // const new_toggle_links = tr.querySelectorAll("a.toggle[data-remote]")
      // console.log(new_toggle_links);
      // new_toggle_links.forEach((element) => {
      //   add_disable_handler(element)
      // });
    });
  });
});
