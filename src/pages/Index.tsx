
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Verkkoturva – OmaVerkkoturva | Suojaa identiteettisi verkossa" 
        description="Verkkoturva- ja identiteettisuoja Suomessa: OmaVerkkoturva auttaa estämään identiteettivarkaudet ja suojaa henkilötietosi helposti yhdellä ratkaisulla." 
        imageUrl="/kuvapankki/8e39c5ba-0ce6-4338-9dbb-3c3c9b33cbb7.png"
        keywords={[
          'verkkoturva',
          'verkkoturva palvelu',
          'verkkoturva yrityksille',
          'identiteettisuoja',
          'identiteettivarkaus',
          'henkilötietojen suoja',
          'tietoturva',
          'verkkohuijaukset',
          'puhelinhuijaukset'
        ]}
      />
      <Hero />
    </PageLayout>
  );
};

export default Index;
