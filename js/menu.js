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

    // E-Mail Validierung
    const emailField = document.getElementById('email');
    if (emailField.value.indexOf('@') === -1) {
        isValid = false;
        emailField.classList.add('invalid');
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    } else {
        emailField.classList.remove('invalid');
    }

    // Telefonnummer Validierung
    const phoneField = document.getElementById('phone');
    if (!phoneField.value.startsWith('+41')) {
        isValid = false;
        phoneField.classList.add('invalid');
        alert('Bitte geben Sie eine gültige Telefonnummer ein, die mit "+41" beginnt.');
    } else {
        phoneField.classList.remove('invalid');
    }
        // Lieferzeit Validierung
        const deliveryTimeField = document.getElementById('deliveryTime');
        const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/; // RegEx für Zeitformat HH:MM
        if (!timePattern.test(deliveryTimeField.value)) {
            isValid = false;
            deliveryTimeField.classList.add('invalid');
            alert('Bitte geben Sie eine gültige Lieferzeit im Format "XX:XX" ein.');
        } else {
            deliveryTimeField.classList.remove('invalid');
        }

    if (!isValid) {
        // Verhindere das Absenden des Formulars, wenn nicht alle Felder korrekt ausgefüllt sind
        event.preventDefault();
    }

});

//Speichert die Daten in der Datenbank:

const onClickSubmit = async () => {
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto("Order", {
    Prename: Prename.value,
    Name: Name.value,
    Phone: Phone.value,
    Email: Email.value,
    Adress: Adress.value,
    Time: Time.value,
    SteakChoice: SteakChoice.value,
    CookingLevel: CookingLevel.value,
    Sides: sides.value,
    Sauce: sauce.value,
  });
}
