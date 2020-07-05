function mostrar(idButton) {
  var album1 = document.getElementById('album1');
  var album2 = document.getElementById('album2');
  var album3 = document.getElementById('album3');
  var album4 = document.getElementById('album4');
  var album5 = document.getElementById('album5');
  var album6 = document.getElementById('album6');

  switch(idButton) {

    case 1:
    album1.style.visibility = 'visible';
    album2.style.visibility = 'hidden';
    album3.style.visibility = 'hidden';
    album4.style.visibility = 'hidden';
    album5.style.visibility = 'hidden';
    album6.style.visibility = 'hidden';
    break;

    case 2:
    album1.style.visibility = 'hidden';
    album2.style.visibility = 'visible';
    album3.style.visibility = 'hidden';
    album4.style.visibility = 'hidden';
    album5.style.visibility = 'hidden';
    album6.style.visibility = 'hidden';
    break;

    case 3:
    album1.style.visibility = 'hidden';
    album2.style.visibility = 'hidden';
    album3.style.visibility = 'visible';
    album4.style.visibility = 'hidden';
    album5.style.visibility = 'hidden';
    album6.style.visibility = 'hidden';
    break;

    case 4:
    album1.style.visibility = 'hidden';
    album2.style.visibility = 'hidden';
    album3.style.visibility = 'hidden';
    album4.style.visibility = 'visible';
    album5.style.visibility = 'hidden';
    album6.style.visibility = 'hidden';
    break;

    case 5:
    album1.style.visibility = 'hidden';
    album2.style.visibility = 'hidden';
    album3.style.visibility = 'hidden';
    album4.style.visibility = 'hidden';
    album5.style.visibility = 'visible';
    album6.style.visibility = 'hidden';
    break;

    case 6:
    album1.style.visibility = 'hidden';
    album2.style.visibility = 'hidden';
    album3.style.visibility = 'hidden';
    album4.style.visibility = 'hidden';
    album5.style.visibility = 'hidden';
    album6.style.visibility = 'visible';
    break;

    default:
    alert("hay un problema: No existe el álbum")
  }
}