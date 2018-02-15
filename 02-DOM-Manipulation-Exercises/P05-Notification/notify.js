function notify(message) {
   let notification = document.getElementById('notification');
   notification.textContent = message;
   notification.style.display = 'block';
   setTimeout(hide, 2000);
   function hide() {
       notification.style.display = 'none';
   }
}