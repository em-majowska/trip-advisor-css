const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const loginBtn = $.querySelector(".login-btn");
  const closeModalBtn = $.querySelector(".close-btn");
  const modal = $.querySelector(".modal");

  // open modal
  loginBtn.addEventListener("click", () => {
    if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
      $.querySelector("body").classList.add("stop-scrolling");
    }
  });

  // close modal

  closeModalBtn.addEventListener("click", (e) => {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      $.querySelector("body").classList.remove("stop-scrolling");
    }
  });

  // get form data
  const contactForm = $.querySelector("#contactForm");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = $.querySelector("#firstName").value;
    const lastName = $.querySelector("#lastName").value;
    const email = $.querySelector("#email").value;
    const content = $.querySelector("#content").value;

    const body = {
      firstName,
      lastName,
      email,
      content,
    };

    try {
      const response = await axios.post("http://localhost:3000/contact", body);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  });
});
