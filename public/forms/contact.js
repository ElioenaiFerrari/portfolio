const formContact = document.querySelector('form#form-contact');

async function sendMessage(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const response = await fetch('http://localhost:3333/services/send-message', {
    method: 'POST',
    body: JSON.stringify({ name, email, subject, message }),
    headers: { 'Content-Type': 'application/json' },
  });

  return response.json();
}

formContact.addEventListener('submit', sendMessage);
