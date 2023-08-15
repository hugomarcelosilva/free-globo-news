var myInterval;

myInterval = setInterval(function () {
  if (document.getElementsByClassName('barreiraJornada') != null) {
    document.body.style.overflow = 'auto';

    document.documentElement.style = '';
    document.getElementsByClassName('barreiraJornada')[0].style.visibility = 'hidden';

    document.getElementById('detecta-adblock').style.display = 'none';

    window.clearInterval(myInterval);
  } else {
    console.log('interval running');
  }
}, 1000);
