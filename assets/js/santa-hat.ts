/**
 * set santa hat for logo during Christmas
 * @returns {void}
 */
function setSantaHat() {
  const now = new Date()
  const month = now.getMonth() + 1 // Months are zero-based
  const day = now.getDate()

  // Check if the date is between December 20th and December 26th
  if (month === 12 && day >= 20 && day <= 26) {
    console.log('Happy Christmas!')
    const logos = document.querySelectorAll('.header-wrapper .logo')
    logos.forEach((logo) => {
      const hat = document.createElement('img')
      hat.src = '/images/santa-hat.svg'
      hat.alt = 'Santa Hat'
      hat.classList.add('santa-hat')
      logo.parentNode!.insertBefore(hat, logo)
    })
  }
  return
}

setSantaHat()
