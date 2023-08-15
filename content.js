var myInterval;

myInterval = setInterval(function () {
  if (document.getElementsByClassName('searchV2') != null) {
    document.body.style.overflow = 'auto';

    if (
      document.getElementsByClassName('barreiraJornada') != null &&
      document.getElementsByClassName('barreiraJornada').length > 0
    ) {
      document.documentElement.style = '';

      document.getElementsByClassName('barreiraJornada')[0].style.visibility =
        'hidden';
    }

    if (document.getElementById('detecta-adblock') != null) {
      document.getElementById('detecta-adblock').style.display = 'none';
    }

    if (
      document.getElementsByClassName('fc-ab-root') != null &&
      document.getElementsByClassName('fc-ab-root').length > 0
    ) {
      document
        .getElementsByClassName('fc-ab-root')[0]
        .setAttribute('style', 'display: none !important;');
    }

    window.clearInterval(myInterval);
  } else {
    console.log('interval running');
  }
}, 1000);
