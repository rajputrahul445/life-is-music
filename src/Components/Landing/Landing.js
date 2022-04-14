import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <section className='landing'>
        <div className='halfCol'>
            <div className='d-block'>
                <h1>BUCHUNG</h1>
                <p>Wir freuen uns, dass Du uns bei Deinem großen Tag dabei haben möchtest. Wir möchten Dir gerne den Ablauf vorstellen. Die Buchung kostet Dich nur fünf Minuten Deiner Zeit, danach ist Dein Event  vollständig durchgeplant! Keine Sorge, sollte es Probleme geben stehen wir jederzeit für ein Gespräch zur Verfügung.</p>
                <a href='/' className='yellowBtn'>Let’s Finally Celebrate</a>
            </div>
        </div>
        <div className='halfCol colorBg'>
            <div className='d-block'>
                <img src='/images/music.png' alt='' />
                <h3>Ändern Sie Ihre Stimmung<br/>Veranstaltung mit <span className='underLineImg'>Musik</span></h3>
            </div>
            <img src='/images/tune.png' alt="" className='tuneImg'/>
        </div>
    </section>
  )
}

export default Landing