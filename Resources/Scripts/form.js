// Simple booking form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for booking! We’ll contact you soon to confirm your appointment.");
    form.reset();
  });
});
