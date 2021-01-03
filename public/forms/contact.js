const formContact = document.querySelector('form#form-contact');

async function sendMessage(event) {
  try {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const subject = document.querySelector('input[name="subject"]');
    const message = document.querySelector('textarea[name="message"]');

    const response = await fetch(
      'https://elioenai-ferrari.herokuapp.com/services/send-message',
      {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';

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
