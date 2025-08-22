import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <PageLayout>
      <SEO 
        title="Meistä - OmaVerkkoturva" 
        description="Tutustu OmaVerkkoturvaan"
        keywords={['meistä', 'omaverkkoturva']}
      />
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Meistä
            </h1>
                         <p className="text-lg text-gray-600">
               Tämä sivu on valmistumassa :)
             </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
