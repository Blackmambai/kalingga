/*
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFknh59PkLq2GDyKXj07VLsSKMZmO4Wg3LmvAllCceXLG0m_SaeC-Fiq7Hm-CQN3o-tg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      Swal.fire({
        icon: 'success',
        title: 'Terima Kasih',
        text: 'Anda telah terdaftar',
      }).then(() => {
        window.location.reload();
      });
    })
    .catch(error => {
      console.error('Error!', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sepertinya ada masalah',
      });
    });
});
*/


// Versi 2
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFknh59PkLq2GDyKXj07VLsSKMZmO4Wg3LmvAllCceXLG0m_SaeC-Fiq7Hm-CQN3o-tg/exec';
const form = document.forms['daftar'];
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show initial status message
  statusMessage.innerHTML = "Data sedang di baca...";

  // Delay to simulate reading data
  setTimeout(() => {
    statusMessage.innerHTML = "Tunggu sebentar...";
  }, 2000); // 2 seconds delay

  // Delay to simulate saving data
  setTimeout(() => {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        statusMessage.innerHTML = "Data berhasil di simpan..!";

        // Show success message after status update
        Swal.fire({
          icon: 'success',
          title: 'Terima Kasih',
          text: 'Anda telah terdaftar',
        }).then(() => {
          window.location.reload();
        });
      })
      .catch(error => {
        console.error('Error!', error.message);

        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sepertinya ada masalah',
        });
      });
  }, 5000); // Total 5 seconds delay for all operations
});