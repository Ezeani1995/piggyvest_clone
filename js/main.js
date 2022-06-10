const header = document.querySelector("#header");
const testimonialMessagesContainer = document.querySelector(
  ".testimonials-messages"
);
const testimonialMessages = document.querySelectorAll(".testimonials-message");
const maxHeight = 833;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) header.classList.add("scrollY");
  else header.classList.remove("scrollY");
});

console.log(testimonialMessagesContainer.clientHeight);
console.log(testimonialMessages);

testimonialMessages.forEach((testimonialMessage) => {
  console.log(testimonialMessage.clientHeight);
});

function getNextDiv() {
  for (let i = 0; i < testimonialMessages.length; i++) {}
}
