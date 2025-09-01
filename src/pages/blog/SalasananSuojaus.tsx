import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const SalasananSuojaus: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Salasanan suojaus vuonna 2025 - Miksi se on edelleen tärkeää?" 
        description="Tutustu salasanan suojauksen merkitykseen vuonna 2025. Opi miten luoda vahvoja salasanoja ja suojata digitaalista identiteettiäsi."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
              <img 
                src="/kuvapankki/salasana.png" 
                alt="Salasanan suojaus" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Salasanan suojaus vuonna 2025
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Miksi se on edelleen tärkeää?
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Salasanat ovat yhä vuonna 2025 merkittävin yksittäinen suojausmekanismi verkossa. Vaikka biometriset tunnisteet ja monivaiheinen tunnistautuminen ovat yleistyneet, salasana pysyy edelleen ensimmäisenä suojakerroksena suurimmassa osassa digitaalisia palveluita. Tämä tekee salasanoista sekä välttämättömiä että riskialttiita.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tutkimukset osoittavat, että suurin osa tietomurroista liittyy tavalla tai toisella salasanoihin. Verizonin (2024) mukaan yli 80 % tietovuodoista liittyi varastettuihin tai heikkoihin salasanoihin. Tämä kertoo, että vaikka teknologia kehittyy, perusasioiden laiminlyönti voi olla vakavin riski yksityishenkilöille.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Salasanat ovat kuin kotiavaimet. Ne eivät saa olla kaikkien käsissä, eikä niitä saa jättää näkyville. Silti moni käyttää samaa avainta useaan oveen ja siinä piilee suurin ongelma."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- OmaVerkkoturvan Arttu Simanainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Miksi vahvat salasanat ovat välttämättömiä?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Salasanan suojaus on kriittistä, koska se estää luvattoman pääsyn henkilökohtaisiin tietoihin, sähköposteihin, pankkipalveluihin ja sosiaalisen median tileihin. Rikolliset hyödyntävät kehittyneitä työkaluja, kuten automatisoituja salasananmurto-ohjelmia ja tietomurroista kerättyjä salasanalistoja, joiden avulla he testaavat heikkoja tai aiemmin vuotaneita salasanoja (ENISA, 2023).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Vahva salasana ei ole vain pitkä, vaan myös monipuolinen. Se sisältää kirjaimia, numeroita ja erikoismerkkejä, eikä perustu helposti arvattaviin tietoihin, kuten syntymäpäivään tai lemmikin nimeen.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Usein ajatellaan, että salasana on yksinkertainen asia. Todellisuudessa se on portinvartija koko digitaaliselle identiteetille. Siksi sen vahvuuteen kannattaa panostaa."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Simanainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Monivaiheinen tunnistautuminen ja salasananhallinta
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vuonna 2025 yhä useampi palvelu tarjoaa monivaiheista tunnistautumista (MFA). Se tarkoittaa, että kirjautumisen yhteydessä käytetään salasanan lisäksi esimerkiksi kertakäyttökoodia tai biometrisia tunnisteita. Tämä lisää merkittävästi turvallisuutta ja tekee rikollisten työstä vaikeampaa.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Samalla salasananhallintaohjelmien käyttö on yleistynyt. Ne auttavat käyttäjiä luomaan vahvoja ja uniikkeja salasanoja jokaiseen palveluun. Salasananhallinta poistaa tarpeen muistaa kymmeniä pitkiä salasanoja ja vähentää riskiä käyttää samaa salasanaa useissa palveluissa (NIST, 2023).
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Salasananhallintaohjelmat muuttavat koko ajattelun. Käyttäjän ei tarvitse olla tietoturva-asiantuntija, vaan järjestelmä hoitaa puolestasi vaikeimman osan."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Simanainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Tulevaisuuden näkymä
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vaikka salasanojen tilalle kehitetään jatkuvasti uusia tunnistautumistapoja, niiden merkitys ei ole katoamassa lähivuosina. Biometrian ja salasanojen yhdistelmä on todennäköinen kehityssuunta, jossa käyttäjän identiteetti varmistetaan useilla eri tasoilla.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Käytännössä tämä tarkoittaa, että yksityishenkilöiden on edelleen kiinnitettävä huomiota salasanansa suojaamiseen. Hyvät käytännöt kuten eri salasana eri palveluun, salasananhallinnan hyödyntäminen ja monivaiheinen tunnistautuminen ovat yksinkertaisia, mutta ratkaisevia askeleita turvallisempaan digitaaliseen arkeen.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Salasanat eivät ole katoamassa, mutta niiden rinnalle tulee entistä enemmän älykkäitä suojausratkaisuja. Silti lopulta kysymys on siitä, miten käyttäjä itse toimii arjessa."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Simanainen</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yhteenveto</h3>
                <p className="text-lg text-gray-700">
                  Salasanat pysyvät vuonna 2025 keskeisenä suojausmekanismina, vaikka teknologia kehittyy. Vahvat ja uniikit salasanat, monivaiheinen tunnistautuminen ja salasananhallintaohjelmien käyttö ovat avainasemassa digitaalisen turvallisuuden kannalta.
                </p>
                <p className="text-lg text-gray-700 mt-3">
                  Tulevaisuudessa salasanat yhdistyvät biometrisiin tunnisteisiin, mutta käyttäjän omat toimet pysyvät ratkaisevina turvallisuuden kannalta.
                </p>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Verizon (2024). Data Breach Investigations Report 2024. <a href="https://www.verizon.com/business/resources/reports/dbir./" className="text-blue-600 hover:underline">https://www.verizon.com/business/resources/reports/dbir./</a></li>
                  <li>ENISA (2023). Threat Landscape 2023. Euroopan unionin kyberturvavirasto. <a href="https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023" className="text-blue-600 hover:underline">https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023</a></li>
                  <li>NIST (2023). Digital Identity Guidelines. U.S. National Institute of Standards and Technology. <a href="https://pages.nist.gov/800-63-3/" className="text-blue-600 hover:underline">https://pages.nist.gov/800-63-3/</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SalasananSuojaus;
