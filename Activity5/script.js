 var keyframes = [
        { backgroundPosition: "-100px 0" },
        { backgroundPosition: "-100px -128px" }
      ];
      // and a timing object, which contains values we'd normally put in the 'animation' CSS rule
      var timing = {
        duration: 750,
        iterations: Infinity,
        easing: "steps(13, end)"
      };
      /* with the WAAPI's animate function, we apply both keyframes and timing objects to .cat#withWAAPI 
      (Have a look in your DOM inspector!)*/
      var manRunning = document.getElementById("cave").animate(keyframes, timing);
      var slowen = .5;
      var speeden = 2;
      function slowAnimations() {
        var currentSpeed = manRunning.playbackRate;
        manRunning.playbackRate = currentSpeed * slowen;
      }
      function speedAnimations() {
        var currentSpeed = manRunning.playbackRate;
        manRunning.playbackRate = currentSpeed * speeden;
      }