import React, { useState } from 'react';
import './Contacts.css';

const contactLinks = [
  {
    href: 'https://github.com/ajdajay',
    icon: 'fab fa-github',
    label: 'github.com/ajdajay',
    target: '_blank',
  },
  {
    href: 'antonettejeandajay99@gmail.com',
    icon: 'fas fa-envelope',
    label: 'antonettejeandajay99@gmail.com',
    target: '_self',
  },
  {
    href: 'https://www.instagram.com/antonette_jeannn?igsh=ZGNteWxsaWM3bTFl',
    icon: 'fab fa-instagram',
    label: '@fatma.uiux',
    target: '_blank',
  },
];

const appreciationMessages = [
  '❤️ You\'re amazing! Another appreciation back to you.',
  '🎉 So glad you like my work! Keep inspiring.',
  '✨ Appreciation unlocked! Let\'s create beautiful things.',
  '🌟 Your support fuels my creativity — thank you!',
];

function Contacts() {
  const [appreciateCount, setAppreciateCount] = useState(0);
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const maxAppreciation = 5;

  const handleAppreciate = () => {
    const next = appreciateCount + 1;
    setAppreciateCount(next);

    if (next === 1) {
      setMessage('🙏 Thank you for the appreciation! Your support means the world.');
    } else if (next <= maxAppreciation) {
      setMessage(appreciationMessages[(next - 2) % appreciationMessages.length] + ' ✨');
    } else {
      setMessage('💖 Overflowing with gratitude! You\'re the best.');
      setDisabled(true);
    }
  };

  return (
    <div id="contact" className="contact-section">
      <h2>📬 Let's Connect</h2>
      <p>
        Have a project in mind? Reach out directly — I'm always open to discuss design,
        tech, or collaborations.
      </p>

      <div className="contact-links">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.target}
            rel="noreferrer"
            className="contact-card"
          >
            <i className={link.icon}></i>
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      <button
        className="appreciate-btn"
        onClick={handleAppreciate}
        disabled={disabled}
      >
        <i className="far fa-heart"></i> Appreciate
      </button>

      <div className="appreciation-message" style={{ opacity: message ? 1 : 0 }}>
        {message}
      </div>
    </div>
  );
}

export default Contacts;
