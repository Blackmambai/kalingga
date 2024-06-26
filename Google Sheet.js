const scriptURL = 'https://script.google.com/macros/s/AKfycbwFknh59PkLq2GDyKXj07VLsSKMZmO4Wg3LmvAllCceXLG0m_SaeC-Fiq7Hm-CQN3o-tg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})