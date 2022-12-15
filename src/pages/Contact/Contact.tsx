import { useEffect } from 'react';
import { Layout } from '../../common';

const Contact = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return <Layout></Layout>;
};

export default Contact;
