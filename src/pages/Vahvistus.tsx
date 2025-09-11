import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Mail, ShieldCheck, Bell, IdCard, Building2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Vahvistus: React.FC = () => {
  return (
    <PageLayout>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 p-6 md:p-8">
            <div className="mt-8 md:mt-12 flex items-start md:items-baseline gap-4 md:gap-5">
              <CheckCircle2 className="text-green-600 w-8 h-8 flex-shrink-0 -mt-1 md:-mt-2" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-8 md:mb-10 lg:mb-12">
                Kiitos tilauksesi vahvistamisesta!
              </h1>
            </div>

            <div className="mt-8 space-y-7 md:space-y-8 text-gray-700 leading-relaxed">
              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 mt-1 w-6 h-6 flex-shrink-0" />
                <p className="m-0">Saat pian sähköpostiisi käyttäjätunnuksen aktivointiohjeet.</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-blue-600 mt-1 w-6 h-6 flex-shrink-0" />
                <p className="m-0">Vakuutus tulee voimaan, kun olet kirjautunut palveluun ja tunnistautunut vahvasti järjestelmään.</p>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="text-blue-600 mt-1 w-6 h-6 flex-shrink-0" />
                <p className="m-0">Valvomme automaattisesti sähköpostiosoitettasi ja puhelinnumeroasi, mutta suosittelemme vahvistamaan ne myös itse.</p>
              </div>
              <div className="flex items-start gap-3">
                <IdCard className="text-blue-600 mt-1 w-6 h-6 flex-shrink-0" />
                <p className="m-0">Voit lisätä palveluun esimerkiksi ajokorttisi, passinumerosi ja maksukorttisi numeron. Nämä tiedot ovat aina piilotettuina, eikä kukaan muu pääse niihin käsiksi.</p>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="text-blue-600 mt-1 w-6 h-6 flex-shrink-0" />
                <p className="m-0">Teemme yhteistyötä Suomen viranomaisten ja pankkien kanssa, ja saamme heiltä tietoa, mikäli tietojasi havaitaan liikkuvan jossain. Valvomme myös pimeää verkkoa ja ilmoitamme sinulle sovellukseen sekä sähköpostilla, jos tietojasi on vuotanut. Mikäli haluat ilmoitukset myös tekstiviestillä, voit ottaa tämän asetuksen käyttöön sovelluksessa.</p>
              </div>

              <p className="font-medium text-gray-900 m-0">
                Kiitos, että valitsit OmaVerkkoturvan – pidetään yhdessä verkko turvallisena!
              </p>
            </div>

            <div className="mt-10 border-t border-blue-100 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Yhteystiedot</h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-gray-700">
                <div className="inline-flex items-center gap-2">
                  <Phone className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <a href="tel:+358451211663" className="hover:text-blue-700">+358 45 121 1663</a>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Mail className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <a href="mailto:tuki@omaverkkoturva.fi" className="hover:text-blue-700">tuki@omaverkkoturva.fi</a>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Vahvistus;


