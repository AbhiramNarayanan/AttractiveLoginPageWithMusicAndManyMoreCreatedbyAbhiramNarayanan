document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const lightbulb = document.getElementById("lightbulb");
    const successAudio = new Audio('electronic-rock-king-around-here-15045.mp3');
    const wrongAudio = new Audio('scary-forest-90162.mp3');
    
    loginButton.addEventListener("click", function() {
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      
      if (usernameInput.value === "Abhiram" && passwordInput.value === "123") {
        lightbulb.classList.remove("wrong");
        lightbulb.classList.add("on");
        stopAudio(wrongAudio);
        playAudio(successAudio);
        changeBackground("green");
      } else {
        lightbulb.classList.remove("on");
        lightbulb.classList.add("wrong");
        stopAudio(successAudio);
        playAudio(wrongAudio);
        changeBackground("red");
      }
      
      // Reset input color after 3 seconds
      setTimeout(function() {
        resetInputColor(usernameInput);
        resetInputColor(passwordInput);
      }, 3000);
    });
    
    // Function to change background color with animation
    function changeBackground(color) {
      document.body.style.transition = "background 3s";
      document.body.style.background = color;
    }
    
    // Function to play audio
    function playAudio(audio) {
      audio.currentTime = 0;
      audio.play();
    }
    
    // Function to stop audio
    function stopAudio(audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    
    // Function to reset input color
    function resetInputColor(input) {
      input.style.transition = "color 0s";
      input.style.color = "";
    }
  });
  