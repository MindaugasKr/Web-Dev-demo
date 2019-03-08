function slideShow(slideClassName, buttonContainerName, buttonClasses, transitionDuration, displayDuration, intervalName) {

  /*
    Slideshow functionality:
        Goes over html elements with specified class name, in order.
        After reatching last - returns to first.

    How slide change:
        Slides transition using animated margin on first slide.

    HTML prerequiite:
        Slide elements must be on same line and width 100% of container element.
        Container element must have overflow hidden.
  */

  // set variables;
  var i = 0;
  var slideList = document.getElementsByClassName(slideClassName);

  // defoult parameters, because IE...
  if (!buttonClasses) {
    buttonClasses = "";
  }
  if (!transitionDuration) {
    transitionDuration = "0s";
  }

  // set transition duration
  for (var s = 0; s < slideList.length; s++) {
    slideList[s].style.transition = "margin " + transitionDuration;
  }

  // add and setup buttons, if container provided;
  if (buttonContainerName) {
    var btnContainer = document.getElementsByClassName(buttonContainerName)[0];

    // function to be ran when slide button is pressed;
    function btnLogic() {
      clearInterval(window.intervalName);
      slideChange(this.slideIndex);
    }

    // setup buttons;
    for (var x = 0; x < slideList.length; x++) {
      var btn = document.createElement("BUTTON");
      btn.className = buttonClasses;
      btn.slideIndex = x;
      btn.onclick = btnLogic;
      btnContainer.appendChild(btn);
    }
  }

  // expression that makes slides slide from one to another;
  function slideChange(index) {
    slideList[0].style.marginLeft = (-100 * index) + '%';
  }

  // run slide show;
  function runShow() {
    slideChange(i);
    i += 1;
    if (i === slideList.length) {
      i = 0;
    }
  }

  window.intervalName = setInterval(runShow, displayDuration)
}

window.onload = slideShow(slideClassName = 'ad__slide',
                          buttonContainerName = 'ad__btn-container',
                          buttonClasses = 'btn--slide-o',
                          transitionDuration = "0.5s",
                          displayDuration = 1000, // milliseconds;
                          intervalName = "adSlideShowInterval");
