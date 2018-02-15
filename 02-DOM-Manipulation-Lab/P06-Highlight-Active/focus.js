function focus() {
   let inputFields = document.getElementsByTagName('input');
   let fields = Array.from(inputFields);
   for (let field of fields) {
       field.addEventListener('focus', highlight);
       field.addEventListener('blur', toneDown);
   }

   function highlight() {
       this.parentNode.className = 'focused';
   }

   function toneDown() {
       this.parentNode.removeAttribute('class');
   }
}