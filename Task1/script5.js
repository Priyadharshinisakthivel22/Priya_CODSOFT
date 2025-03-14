const dynamicText = ["Developer", "Designer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeWriter() {
  if (isDeleting) {
    currentText = dynamicText[index].substring(0, charIndex--);
  } else {
    currentText = dynamicText[index].substring(0, charIndex++);
  }

  document.getElementById("dynamic-text").textContent = currentText;

  if (!isDeleting && charIndex === dynamicText[index].length) {
    isDeleting = true;
    setTimeout(typeWriter, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % dynamicText.length;
    setTimeout(typeWriter, 300);
  } else {
    setTimeout(typeWriter, 100);
  }
}

function openResume() {
  window.open("resume.jpg", "_blank");
}

function openCertificates() {
  alert("Certificates coming soon!");
}

function showSkills() {
  alert("Skills: HTML, CSS, JavaScript, Responsive Design");
}

function showContact() {
  alert(
    "Email: priyadharshinisakthivel2004@gmail.com\nLinkedIn: linkedin.com/in/priyadharshini-sakthivel-2576092a5\nMobile: +91 9944927148"
  );
}

function hireMe() {
  alert("Thank you for your interest!");
}

typeWriter();
