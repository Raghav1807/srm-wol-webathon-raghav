// Get an HTML element in JavaScript code
const signup = document.querySelector(".signup");
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");
const closeButton1 = document.querySelector(".close-modal1");
const login = document.querySelector(".login");
const loginModal = document.querySelector(".login-modal-wrapper");

// function which shows the modal by changing the style of signupModal to "block"
const showModal = () => {
  signupModal.style.display = "block";
};

const showModal1 = () => {
  loginModal.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeModal = () => {
  signupModal.style.display = "none";
};

const closeModal1 = () => {
  loginModal.style.display = "none";
};
// Call the showModal function when signup button is clicked
signup.addEventListener("click", () => {
  showModal();
});

facebook.addEventListener("click", () => {
  showModal();
});

twitter.addEventListener("click", () => {
  showModal();
});

login.addEventListener("click", () => {
  showModal1();
});

// Call the closeModal function when close button on the modal is clicked
closeButton.addEventListener("click", () => {
  closeModal();
});

closeButton1.addEventListener("click", () => {
  closeModal1();
});

// Call the closeModal function when anywhere outside of the modal is clicked
//window.addEventListener("click", () => {
//  if (event.target === modal) {
//    closeModal();
//  }
//});
