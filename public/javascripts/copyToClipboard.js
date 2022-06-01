const copyBtn = document.querySelector('.copy-btn')

copyBtn.addEventListener('click', () => {
  const content = document.querySelector('.url-output').innerText

  navigator.clipboard.writeText(content)
    .then(() => {
      alert('已複製短網址到剪貼簿')
    })
    .catch(err => {
      console.log('Something went wrong', err);
    })
})