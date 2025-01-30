// Function to toggle the navigation menu visibility
function toggleNav() {
  document.querySelector("#fixed").classList.toggle("hidden");
}

// Typewriter effect variables
const words = ["Backend Developer", "Node.js Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

// Function to handle the typewriter effect
function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j - 1
    );
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j + 1
    );
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 200);
}

// Start the typewriter effect
type();

// Google Sheets script URL
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzqEhVh6QNPEw452laB_JT5Rjt5_lLmDRI7laVg5ehhYnKcAjRLfo8EcRtEOT1VAZY/exec";

// Select the form element
const form = document.forms["submit-to-google-sheet"];

// Add event listener for form submission
form.addEventListener("submit", (e) => {
  document.getElementById("submit_button").innerHTML = "Sending...";
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success");

      // Show success message and reset form
      setTimeout(() => {
        document.getElementById("sucess").style.display = "block";
        document.getElementById("submit_button").innerHTML =
          "Sent Successfully";
        setTimeout(() => {
          document.getElementById("sucess").style.display = "none";
          document.getElementById("submit_button").innerHTML = "Send";
        }, 3000);
        form.reset();
      }, 1000);
    })
    .catch((error) => console.error("Error!", error.message));
});
