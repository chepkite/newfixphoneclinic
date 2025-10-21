// Simple mobile nav toggle or booking alert can go here

document.addEventListener("DOMContentLoaded", function() {
  console.log("NewFix site loaded!");
});


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("show");
    // Toggle menu icon
    menuToggle.textContent = mainNav.classList.contains("show") ? "✖" : "☰";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const device = document.getElementById("device").value.trim();
    const issue = document.getElementById("issue").value.trim();
    const time = document.getElementById("time").value;

    if (!name || !phone || !device || !issue) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email or phone 
    alert(`Thanks ${name}! Your booking request for your ${device} has been received.
We’ll contact you shortly at ${phone}.`);

    form.reset();
  });
});

