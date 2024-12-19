window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector(".navbar").classList.add("scrolled");
    } else {
      document.querySelector(".navbar").classList.remove("scrolled");
    }
  }



  function sendToTelegram() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const telegramApiUrl = `https://api.telegram.org/bot7662068325:AAEZ7eo0e2fJECB1N2uagS8hbC9dMHH7Vxo/sendMessage`;
    const chatId = '7470836911';

    const text = `Yangi oquvchi izohi:\n\nName: ${name}\nNumber: ${email}`;

    fetch(telegramApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Xabaringiz Yuborildi!');
        } else {
            alert('Xabaringiz Yuborilmadi iltimos qaytadan urining.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });
}