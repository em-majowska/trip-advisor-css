const $ = document;
const contactForm = $.querySelector("#contactForm");

$.addEventListener("DOMContentLoaded", () => {
  const loginBtn = $.querySelector(".login-btn");
  const closeModalBtn = $.querySelector(".close-btn");
  const modal = $.querySelector(".modal");
  const submitBtn = $.querySelector("#submitBtn");

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
      contactForm.reset();
    }
  });

  // get form data

  for (let element of contactForm.elements) {
    element.addEventListener("change", () => {
      if (contactForm.checkValidity()) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    });
  }

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    contactForm.reportValidity();

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
