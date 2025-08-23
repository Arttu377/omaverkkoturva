import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, FileText } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, description }) => {
  const { slug } = useParams();
  
  // Muunna slug takaisin luettavaan muotoon
  const readableTitle = slug 
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : title;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4">
          <FileText className="w-4 h-4 mr-2" />
          Blog post
        </Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {readableTitle}
        </h1>
        <p className="text-xl text-gray-600">
          Tämä sisältö on kehitysvaiheessa ja tulee pian saataville
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Mitä odottaa?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                Syvällinen analyysi aiheesta ja sen merkityksestä tietoturvassa
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                Käytännön vinkit ja ohjeet suojautumiseen
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                Ajankohtaiset esimerkit ja tapaukset
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                Asiantuntijoiden näkemykset ja suositukset
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Ilmoita kun sisältö on valmis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            Haluatko saada ilmoituksen kun tämä sisältö on valmis? 
            Tilaa uutiskirjeemme ja olet ensimmäisenä tiedossa uusista artikkeleista.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Sähköpostiosoitteesi"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Tilaa
            </button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center mt-8">
        <a 
          href="/blog" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          ← Takaisin blog-etusivulle
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
