window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //only selects elements that has audio
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio || !key) {
      return;
    }
    key.classList.toggle("playing");

    audio.currentTime = 0; //if key is pressed again, resets audio
    audio.play();
    key.classList.add("playing");
  });

  const keys = document.querySelectorAll(".key");
  keys.forEach(key =>
    key.addEventListener('transitionend', removeTransition)
  );

  function removeTransition(e) {
    if (e.propertyName !== 'transform' ) return;
    console.log(e.propertyName)
    this.classList.remove("playing");

  }