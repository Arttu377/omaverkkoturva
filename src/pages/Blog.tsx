import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, Clock } from 'lucide-react';

const Blog = () => {
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
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Blog
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Identiteettisuoja ja verkkoturva
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ajankohtaisia artikkeleita, vinkkejä ja ohjeita identiteettisuojasta ja verkkoturvallisuudesta. 
              Pysy ajan tasalla tietoturvassa ja suojaa henkilötietojasi.
            </p>
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={post.slug} className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
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

          {/* Newsletter signup */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-900 to-blue-800 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Pysy ajan tasalla tietoturvassa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6">
                  Tilaa uutiskirjeemme ja saat ensimmäisenä tiedossa uusista artikkeleista ja tietoturvavinkeistä.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Sähköpostiosoitteesi"
                    className="flex-1 px-4 py-2 border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                    Tilaa
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
