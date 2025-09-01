import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const Artikkelit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  const articles = [
    {
      slug: 'verkkorikollisuus-suomessa-ja-pohjoismaissa',
      title: 'Verkkorikollisuus Suomessa ja Pohjoismaissa: Tilannekuva ja torjunnan haasteet',
      description: 'Vuonna 2024 suomalaisilta yritettiin huijata 107,2 miljoonaa euroa. Tutustu Pohjoismaiden verkkorikollisuuden tilannekuvaan.',
      category: 'Kyberturvallisuus',
      image: '/kuvapankki/Kappaleen teksti (73).png'
    },
    {
      slug: 'suomen-haavoittuvuus-ja-kyberuhkien-luonne',
      title: 'Suomen haavoittuvuus ja kyberuhkien luonne',
      description: 'Kyberturvallisuus ei ole enää vain teknisten järjestelmien ominaisuus, vaan yhteiskunnan ja yksilön turvallisuuden kulmakivi.',
      category: 'Kyberturvallisuus',
      image: '/kuvapankki/Kappaleen teksti (71).png'
    },
    {
      slug: 'suomen-kyberturvallisuustilanne-2025',
      title: 'Suomen kyberturvallisuustilanne vuonna 2025',
      description: 'Suomen kyberturvallisuuden uhkataso pysyy korkealla. Tutustu ajankohtaiseen tilanteeseen ja yhteiskunnallisiin haasteisiin.',
      category: 'Kyberturvallisuus',
      image: '/kuvapankki/Kappaleen teksti (70).png'
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Artikkelit - Identiteettisuoja ja verkkoturva | OmaVerkkoturva" 
        description="Lue artikkeleita identiteettisuojasta, verkkoturvallisuudesta ja tietoturvasta. OmaVerkkoturvan artikkelit tarjoaa ajankohtaisia vinkkejä ja ohjeita."
        keywords={['identiteettisuoja', 'verkkoturva', 'artikkelit', 'tietoturva', 'identiteettivarkaus', 'verkkoturvallisuus']}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Artikkeli
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seuraa uusimpia artikkeleita tietoturvasta ja identiteettisuojasta.
            </p>
          </div>

                     {/* Articles grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {articles
               .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
               .map((article, index) => (
              <Card key={article.slug} className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  )}
                  <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <Link 
                    to={`/blog/${article.slug}`}
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
               {Array.from({ length: Math.ceil(articles.length / postsPerPage) }, (_, i) => (
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
               onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(articles.length / postsPerPage)))}
               disabled={currentPage === Math.ceil(articles.length / postsPerPage)}
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

export default Artikkelit;
