import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  const blogPosts = [
    {
      slug: 'identiteettivarkauden-estaminen',
      title: 'Identiteettivarkauden estäminen',
      description: 'Opas identiteettivarkauden estämiseen ja suojautumiseen verkossa. Opit miten suojata henkilötietojasi ja välttää identiteettivarkauden uhkia.',
      category: 'Identiteettisuoja',
      readTime: '5 min'
    },
    {
      slug: 'verkkoturvallisuus-2025',
      title: 'Verkkoturvallisuus 2025',
      description: 'Uusimmat verkkoturvallisuuden uhkat ja suojautumiskeinot vuonna 2025. Pysy ajan tasalla tietoturvassa.',
      category: 'Verkkoturvallisuus',
      readTime: '7 min'
    },
    {
      slug: 'tietovuotojen-vaikutukset',
      title: 'Tietovuotojen vaikutukset',
      description: 'Mitä tietovuodot merkitsevät sinulle ja miten suojautua niiltä. Ymmärrä tietovuotojen riskejä ja seurauksia.',
      category: 'Tietoturva',
      readTime: '6 min'
    },
    {
      slug: 'salasanan-suojaus',
      title: 'Salasanan suojaus',
      description: 'Vahvojen salasanojen luominen ja hallinta. Opit salasanan suojauksen parhaat käytännöt.',
      category: 'Salasanat',
      readTime: '4 min'
    },
    {
      slug: 'kaksivaiheinen-tunnistus',
      title: 'Kaksivaiheinen tunnistus',
      description: 'Miksi kaksivaiheinen tunnistus on tärkeä ja miten se suojaa tilejäsi. Paranna tietoturvaasi 2FA:lla.',
      category: 'Tunnistus',
      readTime: '5 min'
    },
    {
      slug: 'tietojenkalastelun-estaminen',
      title: 'Tietojenkalastelun estäminen',
      description: 'Miten tunnistaa ja välttää tietojenkalasteluyritykset. Suojautu phishing-hyökkäyksiltä.',
      category: 'Phishing',
      readTime: '6 min'
    },
    {
      slug: 'verkkokauppahuijaukset',
      title: 'Verkkokauppahuijaukset',
      description: 'Yleisimmät verkkokauppahuijaukset ja miten välttää niitä. Turvallinen verkkokauppa.',
      category: 'Verkkokauppa',
      readTime: '5 min'
    },
    {
      slug: 'nettikiusaaminen',
      title: 'Nettikiusaaminen',
      description: 'Nettikiusaamisen tunnistaminen ja vastustaminen. Suojaa itseäsi ja muita verkossa.',
      category: 'Nettikiusaaminen',
      readTime: '6 min'
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Blog - Identiteettisuoja ja verkkoturva | OmaVerkkoturva" 
        description="Lue artikkeleita identiteettisuojasta, verkkoturvallisuudesta ja tietoturvasta. OmaVerkkoturvan blogi tarjoaa ajankohtaisia vinkkejä ja ohjeita."
        keywords={['identiteettisuoja', 'verkkoturva', 'blog', 'tietoturva', 'identiteettivarkaus', 'verkkoturvallisuus']}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
                         <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
               Blogi
             </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ajankohtaisia vinkkejä ja ohjeita identiteettisuojasta sekä verkkoturvallisuudesta. Pysy ajan tasalla tietoturvassa ja suojaa henkilötietojasi.
            </p>
          </div>

                     {/* Blog posts grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {blogPosts
               .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
               .map((post, index) => (
              <Card key={post.slug} className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                                     {post.slug === 'verkkoturvallisuus-2025' && (
                     <img 
                       src="/kuvapankki/Cyper.jpg" 
                       alt="Verkkoturvallisuus 2025" 
                       className="w-full h-32 object-cover rounded-lg mb-4"
                     />
                   )}
                                       {post.slug === 'identiteettivarkauden-estaminen' && (
                      <img 
                        src="/kuvapankki/identi.png" 
                        alt="Identiteettivarkauden estäminen" 
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                    )}
                                         {post.slug === 'tietovuotojen-vaikutukset' && (
                       <img 
                         src="/kuvapankki/dataleak.png" 
                         alt="Tietovuotojen vaikutukset" 
                         className="w-full h-32 object-cover rounded-lg mb-4"
                       />
                     )}
                                           {post.slug === 'salasanan-suojaus' && (
                        <img 
                          src="/kuvapankki/salasana.png" 
                          alt="Salasanan suojaus" 
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                      )}
                                             {post.slug === 'kaksivaiheinen-tunnistus' && (
                         <img 
                           src="/kuvapankki/Kappaleen teksti (63).png" 
                           alt="Kaksivaiheinen tunnistus" 
                           className="w-full h-32 object-cover rounded-lg mb-4"
                         />
                       )}
                                               {post.slug === 'tietojenkalastelun-estaminen' && (
                          <img 
                            src="/kuvapankki/Kappaleen teksti (64).png" 
                            alt="Tietojenkalastelun estäminen" 
                            className="w-full h-32 object-cover rounded-lg mb-4"
                          />
                        )}
                                                 {post.slug === 'verkkokauppahuijaukset' && (
                           <img 
                             src="/kuvapankki/Kappaleen teksti (65).png" 
                             alt="Verkkokauppahuijaukset" 
                             className="w-full h-32 object-cover rounded-lg mb-4"
                           />
                         )}
                         {post.slug === 'nettikiusaaminen' && (
                           <img 
                             src="/kuvapankki/Kappaleen teksti (66).png" 
                             alt="Nettikiusaaminen" 
                             className="w-full h-32 object-cover rounded-lg mb-4"
                           />
                         )}
                  <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Lue lisää →
                  </Link>
                </CardContent>
              </Card>
            ))}
                     </div>

           {/* Pagination */}
           <div className="mt-16 flex justify-center items-center space-x-4">
             <button
               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
               disabled={currentPage === 1}
               className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               <ChevronLeft className="w-4 h-4 mr-1" />
               Edellinen
             </button>
             
             <div className="flex items-center space-x-2">
               {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, i) => (
                 <button
                   key={i + 1}
                   onClick={() => setCurrentPage(i + 1)}
                   className={`px-3 py-2 text-sm font-medium rounded-md ${
                     currentPage === i + 1
                       ? 'bg-blue-600 text-white'
                       : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                   }`}
                 >
                   {i + 1}
                 </button>
               ))}
             </div>
             
             <button
               onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(blogPosts.length / postsPerPage)))}
               disabled={currentPage === Math.ceil(blogPosts.length / postsPerPage)}
               className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               Seuraava
               <ChevronRight className="w-4 h-4 ml-1" />
             </button>
           </div>

         </div>
       </div>
     </PageLayout>
   );
 };

export default Blog;
