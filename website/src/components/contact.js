import React from 'react';

function Contact() {
  return (
    <>
      <header>
        <h1>Contact me!</h1>
        <p>If you ever need to contact me for what ever reson you can message, dm or comment on any of the places below and I will get back with in 24 hours assuming its a real question or something. If it needs to be private use Project Nu or Discord and if not any will do.</p>
      </header>

      <br />

      <main>
        <ul>
          <li className='contact-li'><img src="./images/discordLogo.svg" alt="Discord logo" className='contact-image' /> Discord: <code className='contact-code'>not_ethan.</code></li>
          <li className='contact-li'><img src="./images/githubLogo.png" alt="Github Logo" className='contact-image' /> <a href="https://github.com/not-a-ethan">Github Profile</a></li>
          <li className='contact-li'><img src="./images/replitLogo.png" alt="Replit Logo" className='contact-image' /> <a href="https://ask.replit.com/u/not-ethan/summary">Replit Ask Profile</a></li>
          {/* <img src="./images/projectNuLogo.bmp" alt="Project Nu Logo" /> <a href="https://projectnu.org/u/ethan/summary">Project Nu Profile</a></li> */ }
        </ul>
      </main>
    </>
  )
}

export default Contact