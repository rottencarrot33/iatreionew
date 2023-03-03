  const darkButton = document.getElementById('dark');
  const lightButton = document.getElementById('light');
  const body = document.body;


  darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    document.querySelector('.light-mode').style.display = "none";
    document.querySelector('.dark-mode').style.display = "block";
  };

  lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    document.querySelector('.dark-mode').style.display = "none";
    document.querySelector('.light-mode').style.display = "block";
  };

  // set the initial display of the images based on the active mode
  if (body.classList.contains('dark')) {
    document.querySelector('.light-mode').style.display = "none";
    document.querySelector('.dark-mode').style.display = "block";
  } else {
    document.querySelector('.dark-mode').style.display = "none";
    document.querySelector('.light-mode').style.display = "block";
  }



  // Page Animation

function reveal() {
  let reveals = document.querySelectorAll(".slideElement");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);