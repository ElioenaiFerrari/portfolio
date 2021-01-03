const formContact = document.querySelector('form#form-contact');

async function sendMessage(event) {
  try {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const response = await fetch(
      'https://elioenai-ferrari.herokuapp.com/services/send-message',
      {
        method: 'POST',
        body: JSON.stringify({ name, email, subject, message }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (response.status === 200) {
      alert('You email are send with success');
    } else {
      alert('Fail on send you email');
    }
  } catch (error) {
    console.log(error);
  }
}

formContact.addEventListener('submit', sendMessage);
