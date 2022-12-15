import { useEffect } from 'react';
import { Layout, Locations } from '../../common';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <ContactForm />
      <Locations style={{ marginBottom: '120px' }} />
    </Layout>
  );
};

export default Contact;
