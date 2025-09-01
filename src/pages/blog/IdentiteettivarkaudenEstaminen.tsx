import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const IdentiteettivarkaudenEstaminen: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Identiteettivarkauden estäminen - Miten suojata oma digitaalinen identiteetti?" 
        description="Opas identiteettivarkauden estämiseen ja suojautumiseen verkossa. Opi miten suojata digitaalinen identiteettisi ja välttää identiteettivarkauksia."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
              <img 
                src="/kuvapankki/identi.png" 
                alt="Identiteettivarkauden estäminen" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Identiteettivarkauden estäminen - Miten suojata oma digitaalinen identiteetti?
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Identiteettivarkaudet ovat nousseet yhdeksi nopeimmin kasvavista rikollisuuden muodoista Euroopassa ja Suomessa. Kyse ei ole vain yksittäisten käyttäjätunnusten joutumisesta vääriin käsiin, vaan usein kokonaisvaltaisesta henkilökohtaisten tietojen väärinkäytöstä. Varkauden seuraukset voivat ulottua väärillä tiedoilla otetuista pikavipeistä aina pitkiin oikeusprosesseihin, joissa uhri joutuu todistamaan omaa syyttömyyttään.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Moni ajattelee, että identiteettivarkaus tapahtuu vain, jos antaa itse tietonsa huijarille. Todellisuudessa suurin riski liittyy siihen, että tietoja varastetaan massoittain palveluista ja ne päätyvät rikollisten käyttöön, usein uhrin huomaamatta."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- OmaVerkkoturvan Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Miten identiteettivarkaus tapahtuu?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Identiteettivarkaus voi alkaa monella tavalla. Yleisimpiä keinoja ovat tietomurrot, kalasteluviestit (phishing) ja haittaohjelmat, joiden kautta rikolliset saavat pääsyn käyttäjätietoihin. Suomessa poliisin tilastojen mukaan identiteettivarkauksien määrä on kasvanut viimeisen kymmenen vuoden aikana merkittävästi, mikä kertoo ilmiön laajentumisesta osaksi arkea.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Yksi huolestuttava trendi on, että rikolliset yhdistävät eri lähteistä varastettuja tietoja. Esimerkiksi sähköpostiosoite, henkilötunnus ja pankkitunnukset voivat päätyä samaan rikollisverkostoon eri tietomurtojen kautta. Näin rikolliset voivat rakentaa uhrin identiteetistä kokonaisen profiilin, jota käytetään väärinkäytöksiin.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Rikolliset toimivat verkossa tehokkaasti ja organisoidusti. He käyttävät samoja työkaluja esimerkiksi datan analytiikkaa ja automaatiota aivan kuin kuin lailliset yritykset. Tämä tekee yksittäisen kuluttajan suojautumisesta entistä tärkeämpää."
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Ennaltaehkäisy - Asia mitä jokainen voi tehdä?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Identiteettivarkauden estäminen perustuu ennaltaehkäisyyn ja aktiiviseen oman digitaalisen jalanjäljen hallintaan. Käytännössä tämä tarkoittaa muutamia keskeisiä asioita:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Vahvat ja yksilölliset salasanat:</strong> Jokaisessa palvelussa tulisi käyttää erilaista salasanaa. Salasananhallintasovellukset helpottavat tätä merkittävästi.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Kaksivaiheinen tunnistautuminen (2FA):</strong> Pankki- ja sähköpostipalveluissa 2FA vähentää merkittävästi riskiä, vaikka salasana vuotaisikin.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Tietovuotojen seuranta:</strong> Palvelut, kuten OmaVerkkoturva, ilmoittavat, jos henkilötietosi ovat päätyneet tietovuotoon. Tämä mahdollistaa nopean reagoinnin.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Kriittinen suhtautuminen viesteihin:</strong> Epäilyttävät sähköpostit, tekstiviestit ja puhelut tulisi aina tarkistaa virallisista lähteistä.
                  </div>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Yksinkertaisimmillaan suojaus on sitä, että ei käytä samaa salasanaa joka paikassa. Kun tähän lisää monitoroinnin ja kaksivaiheisen tunnistautumisen, suojaustaso nousee merkittävästi."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Teknologian rooli identiteetin suojaamisessa
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Yksittäinen kuluttaja voi tehdä paljon, mutta teknologiset työkalut tarjoavat ylimääräisen turvakerroksen. Identiteetin valvontapalvelut tarkkailevat jatkuvasti pimeää verkkoa ja rikollisten kauppapaikkoja, joihin varastettuja tietoja usein päätyy. Lisäksi palvelut voivat tarjota varoituksia, jos henkilötunnusta tai luottokorttitietoja käytetään väärin.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Euroopan unionin tietosuojalainsäädäntö (GDPR) velvoittaa yrityksiä ilmoittamaan tietomurroista, mutta ilmoituksen saaminen voi kestää päiviä tai viikkoja. Tänä aikana rikolliset ehtivät jo hyödyntää tietoja. Tästä syystä yksityinen valvontapalvelu voi olla ratkaiseva turvakeino. Tietosuojalaki velvoittaa yrityksiä ilmoittamaan vuodoista, mutta kuluttajan näkökulmasta viive voi olla kohtalokas. Siksi reaaliaikainen monitorointi on käytännössä välttämättömyys.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yhteenveto</h3>
                <p className="text-lg text-gray-700">
                  Identiteettivarkaus ei ole enää marginaalinen riski, vaan todellinen ja kasvava uhka, joka koskettaa yhä useampaa suomalaista. Ennaltaehkäisy, oman digitaalisen jalanjäljen hallinta ja modernien turvapalveluiden käyttö muodostavat tehokkaimman suojan.
                </p>
                <p className="text-lg text-gray-700 mt-3">
                  Kun identiteetti varastetaan, on usein jo myöhäistä. Siksi tärkeintä on estää varkaus ennalta ja siinä digitaaliset työkalut ovat kuluttajan paras turva.
                </p>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Poliisi. (2024). Suojaudu identiteettivarkaudelta. <a href="https://poliisi.fi/-/suojaudu-identiteettivarkaudelta" className="text-blue-600 hover:underline">https://poliisi.fi/-/suojaudu-identiteettivarkaudelta</a></li>
                  <li>Euroopan komissio. (2023). Tietosuoja ja GDPR. <a href="https://commission.europa.eu/law/law-topic/data-protection_en?prefLang=fi" className="text-blue-600 hover:underline">https://commission.europa.eu/law/law-topic/data-protection_en?prefLang=fi</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default IdentiteettivarkaudenEstaminen;
