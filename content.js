var myInterval;

myInterval = setInterval(function () {
  let searchV2Exists = document.getElementsByClassName('searchV2').length > 0;
  let barreiraJornadaExists =
    document.getElementsByClassName('barreiraJornada').length > 0;
  let detectaAdblockExists =
    document.getElementById('detecta-adblock') !== null;
  let fcAbRootExists = document.getElementsByClassName('fc-ab-root').length > 0;

  if (searchV2Exists) {
    document.body.style.overflow = 'auto';
  }

  if (barreiraJornadaExists) {
    document.documentElement.style = '';
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

  // Clear the interval when all three conditions are satisfied
  if (searchV2Exists && barreiraJornadaExists && detectaAdblockExists) {
    window.clearInterval(myInterval);
  } else {
    console.log('interval running');
  }
}, 1000);
