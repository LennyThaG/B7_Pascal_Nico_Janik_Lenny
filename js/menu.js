/* JS Code, der nur auf der Menu Page verwendet wird */
document.getElementById('orderForm').addEventListener('submit', function(event) {
  const form = event.target;

  // Überprüfe jedes Feld im Formular
  const fields = form.querySelectorAll('input, select, textarea');
  let isValid = true;
  fields.forEach(function(field) {
      if (!field.value) {
          isValid = false;
          // Füge eine Klasse hinzu, um das fehlende Feld visuell hervorzuheben
          field.classList.add('invalid');
      } else {
          // Entferne die Klasse, wenn das Feld ausgefüllt ist
          field.classList.remove('invalid');
      }
  });

  if (!isValid) {
      // Verhindere das Absenden des Formulars, wenn nicht alle Felder ausgefüllt sind
      event.preventDefault();
      alert('Bitte füllen Sie alle Felder im Formular aus.');
  }
});