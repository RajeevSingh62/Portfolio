import React from 'react';

const Contact = () => {
  const contacts = [
    {
      name: 'Email',
      value: 'Rajeevsingh629944@gmail.com',
      link: 'mailto:Rajeevsingh629944@gmail.com',
    },
    {
      name: 'Phone',
      value: '+916299443754',
      link: 'tel:+916299443754',
    },
    {
      name: 'LinkedIn',
      value: 'https://www.linkedin.com/in/rajeev-singh-145a72250/',
      link: 'https://www.linkedin.com/in/rajeev-singh-145a72250/',
    },
    {
      name: 'GitHub',
      value: 'https://github.com/RajeevSingh62',
      link: 'https://github.com/RajeevSingh62',
    },
    {
      name: 'Instagram',
      value: 'Rajeevsingh123',
      link: 'https://instagram.com/yourinstagram',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Me</h2>
      <p style={styles.description}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
        Feel free to reach out to me through any of the platforms below.
      </p>
      <ul style={styles.list}>
        {contacts.map((contact, index) => (
          <li key={index} style={styles.listItem}>
            <strong style={{color:"grey"}}>{contact.name}: </strong>
            <a href={contact.link} style={styles.link} target="_blank" rel="noopener noreferrer">
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    
    padding: '30px',
    maxWidth: '600px',
    margin: '40px auto',
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#666',
    lineHeight: '1.6',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    margin: '15px 0',
    fontSize: '1.1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
};

export default Contact;
