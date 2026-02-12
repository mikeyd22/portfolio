// Valentine's — Snowboarding: snow, Mount Fuji, snowboarder follows mouse

(function () {
  'use strict';

  var snowContainer = document.getElementById('snow');
  if (snowContainer) {
    var flakeCount = 50;
    var snowflakeChars = ['❄', '•', '❅', '✻'];
    for (var i = 0; i < flakeCount; i++) {
      var flake = document.createElement('span');
      flake.className = 'snowflake';
      flake.textContent = snowflakeChars[i % snowflakeChars.length];
      flake.style.left = Math.random() * 100 + '%';
      flake.style.animationDuration = (Math.random() * 4 + 4) + 's';
      flake.style.animationDelay = Math.random() * 5 + 's';
      flake.style.opacity = 0.5 + Math.random() * 0.5;
      flake.style.fontSize = (0.5 + Math.random() * 0.8) + 'rem';
      flake.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
      snowContainer.appendChild(flake);
    }
  }

  // Snowboarder follows mouse with ~0.6s delay and smooth movement (both pages)
  var snowboarder = document.getElementById('snowboarder');
  if (snowboarder) {
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    var mouseX = centerX;
    var mouseY = centerY;
    var currentX = centerX;
    var currentY = centerY;
    var delayFactor = 0.06; // smooth lag (~0.6s feel)

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      currentX += (mouseX - currentX) * delayFactor;
      currentY += (mouseY - currentY) * delayFactor;
      snowboarder.style.left = currentX + 'px';
      snowboarder.style.top = currentY + 'px';
      requestAnimationFrame(animate);
    }
    snowboarder.style.left = currentX + 'px';
    snowboarder.style.top = currentY + 'px';
    requestAnimationFrame(animate);
  }

})();
