var myInterval;

myInterval = setInterval(function () {
  if (document.getElementById('detecta-adblock') != null) {
    document.body.style.overflow = 'auto';

    if (document.getElementById('detecta-adblock') != null) {
      document.getElementById('detecta-adblock').style.display = 'none';
    }

    window.clearInterval(myInterval);
  } else {
    console.log('interval running');
  }
}, 1000);
