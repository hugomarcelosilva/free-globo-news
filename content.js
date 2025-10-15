var myInterval;

myInterval = setInterval(function () {
  let searchV2Exists = document.getElementsByClassName('searchV2').length > 0;
  let barreiraJornadaExists =
    document.getElementsByClassName('barreiraJornada').length > 0;
  let detectaAdblockExists =
    document.getElementById('detecta-adblock') !== null;
  let fcAbRootExists = document.getElementsByClassName('fc-ab-root').length > 0;
  let containerIdExists = document.getElementById('containerId') !== null;
  let templateContainerExists = document.getElementById('template-container') !== null;

  if (searchV2Exists) {
    document.body.style.overflow = 'auto';
  }

  if (barreiraJornadaExists) {
    document.documentElement.style = '';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    document.getElementsByClassName('barreiraJornada')[0].style.visibility =
      'hidden';
  }

  if (detectaAdblockExists) {
    document.getElementById('detecta-adblock').style.display = 'none';
  }

  if (fcAbRootExists) {
    document
      .getElementsByClassName('fc-ab-root')[0]
      .setAttribute('style', 'display: none !important;');
  }

  // Remove Piano/Tinypass adblock banner
  if (containerIdExists) {
    document.getElementById('containerId').remove();
  }

  if (templateContainerExists) {
    document.getElementById('template-container').remove();
  }

  // Remove iframes that contain Piano paywall
  let iframes = document.querySelectorAll('iframe[id^="offer_"]');
  if (iframes.length > 0) {
    iframes.forEach(iframe => {
      iframe.remove();
    });
  }

  // Also check for .barrer class elements
  let barrerElements = document.getElementsByClassName('barrer');
  if (barrerElements.length > 0) {
    for (let i = 0; i < barrerElements.length; i++) {
      barrerElements[i].remove();
    }
  }

  // Remove Piano overlay/backdrop elements
  let tpOverlay = document.querySelector('.tp-backdrop, .tp-modal, [class*="piano"]');
  if (tpOverlay) {
    tpOverlay.remove();
  }

  // Reset body and html styles to ensure content is visible
  if (containerIdExists || templateContainerExists) {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    document.body.style.height = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.position = 'static';
  }

  // Clear the interval when all conditions are satisfied
  if (searchV2Exists && barreiraJornadaExists && detectaAdblockExists) {
    window.clearInterval(myInterval);
  } else {
    console.log('interval running');
  }
}, 1000);
