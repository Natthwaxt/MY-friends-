function log(message) {
    console.log(message);
    $('#log').append(message + '<br>');
  }
  
  if (navigator.onLine) {
    log('Natthawat Inthasuwanonline...');
  } else {
    log('offline');
  }
  
  window.addEventListener("offline", function(e) {
    log("went offline");
  });
  
  window.addEventListener("online", function(e) {
    log("came online");
  });