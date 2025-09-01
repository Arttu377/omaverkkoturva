import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const TietovuotojenVaikutukset: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Tietovuotojen vaikutukset - Yksityishenkilöihin ja yhteiskuntaan" 
        description="Tutustu tietovuotojen pitkäkestoisiin vaikutuksiin yksityishenkilöihin ja yhteiskuntaan. Opi miten tietovuodot vaikuttavat identiteettiin ja talouteen."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
              <img 
                src="/kuvapankki/dataleak.png" 
                alt="Tietovuotojen vaikutukset" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tietovuotojen vaikutukset
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Yksityishenkilöihin ja yhteiskuntaan
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Tietovuodot ovat nousseet yhdeksi keskeisimmistä digitaalisista riskeistä vuonna 2025. Kun arkaluonteisia henkilötietoja päätyy vääriin käsiin, seuraukset voivat olla pitkäkestoisia ja monimuotoisia. Tietovuodot eivät ole enää poikkeustapauksia, vaan osa digitaalisen aikakauden todellisuutta. Kansainväliset tilastot osoittavat, että tietomurtojen määrä kasvoi vuonna 2024 lähes 20 % edellisvuoteen verrattuna (Verizon, 2024).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tietovuodon vaikutukset eivät rajoitu vain tekniseen vahinkoon. Yksityishenkilöille se voi tarkoittaa identiteettivarkauksia, taloudellisia menetyksiä ja jopa psykologista kuormitusta. Yrityksille tietovuodot merkitsevät maineen menetystä, sanktioita ja luottamuksen rapautumista. Yhteiskunnan näkökulmasta tietovuodot heikentävät kansalaisten luottamusta digitaalisiin palveluihin ja hidastavat digitalisaation kehitystä.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Kun tietovuoto tapahtuu, sen vaikutukset voivat olla vuosien mittaisia. Ihminen voi joutua selvittelemään väärinkäytöksiä pitkään sen jälkeen, kun itse vuoto on jo unohtunut uutisista."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- OmaVerkkoturvan Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Yksityishenkilön näkökulma
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kun henkilötiedot päätyvät rikollisille, ne voivat levitä nopeasti pimeässä verkossa ja jatkaa kiertämistään vuosien ajan. Tietovuodossa varastetut tiedot kuten sähköpostiosoitteet, henkilötunnukset, pankkitiedot ja salasanat toimivat rikollisille työkaluna, jolla rakennetaan uskottavia huijauksia ja väärinkäytöksiä (ENISA, 2023).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Vaikutukset näkyvät usein viiveellä. Identiteettivarkaudet saattavat realisoitua kuukausia tai jopa vuosia tietovuodon jälkeen. Tämä tekee ennaltaehkäisystä ja jatkuvasta seurannasta ratkaisevan tärkeää.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Moni ajattelee, että tietovuoto on vain hetkellinen riski. Todellisuudessa se on kuin varjo, joka seuraa pitkään ja voi aktivoitua milloin tahansa."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Taloudelliset ja psykologiset seuraukset
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Taloudelliset vaikutukset tietovuodon jälkeen voivat olla merkittäviä. Uhrilta voidaan huijata rahaa tai hänen nimissään voidaan tehdä sopimuksia. Pelkästään vuonna 2024 identiteettivarkauksista aiheutui maailmanlaajuisesti yli 50 miljardin dollarin tappiot (IBM, 2025).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Lisäksi psykologiset vaikutukset ovat usein aliarvioituja. Tietovuodon kohteeksi joutuminen aiheuttaa epävarmuutta, ahdistusta ja tunnetta hallinnan menettämisestä. Tämä heijastuu yksilön hyvinvointiin ja voi johtaa varovaisuuteen digitaalisten palvelujen käytössä.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Ihmisten luottamus on haurainta pääomaa. Kun se murenee, se ei palaudu hetkessä. Tämä on syy, miksi tietoturvasta on puhuttava ihmislähtöisesti, ei vain teknisin termein."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Yhteiskunnan ja yritysten näkökulma
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Yritysten osalta tietovuodot voivat olla tuhoisia. Mainehaitat ja sakot esimerkiksi GDPR-rikkomuksista ovat merkittäviä. Lisäksi tietovuodot heikentävät asiakkaiden halua asioida verkossa, mikä hidastaa digitaalisten palveluiden kehitystä. Yhteiskunnallisesti laajat tietovuodot voivat vaarantaa kansalaisten luottamuksen myös julkisiin instituutioihin ja hallinnon palveluihin (Valtioneuvosto, 2024).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ennaltaehkäisevä tietoturva, kuten jatkuva valvonta ja identiteetin suojauspalvelut, ovatkin keskeisessä roolissa. Tietovuodot eivät ole vain yksilön ongelma, ne koskevat koko digitaalista ekosysteemiä.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Kyse ei ole enää siitä, voiko tietovuoto tapahtua. Kyse on siitä, kuinka nopeasti se havaitaan ja miten sen vaikutukset minimoidaan."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yhteenveto</h3>
                <p className="text-lg text-gray-700">
                  Tietovuotojen vaikutukset ovat moniulotteisia ja pitkäkestoisia. Ne koskevat sekä yksityishenkilöitä että koko yhteiskuntaa, aiheuttaen taloudellisia, psykologisia ja sosiaalisia seurauksia. Ennaltaehkäisy ja jatkuva seuranta ovat avainasemassa tietovuotojen vaikutusten minimoimisessa.
                </p>
                <p className="text-lg text-gray-700 mt-3">
                  Tietoturva ei ole vain tekninen kysymys, vaan ihmislähtöinen haaste, joka vaatii ymmärrystä ja aktiivista suojautumista.
                </p>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Verizon (2024). Data Breach Investigations Report 2024. <a href="https://www.verizon.com/business/resources/reports/dbir./" className="text-blue-600 hover:underline">https://www.verizon.com/business/resources/reports/dbir./</a></li>
                  <li>ENISA (2023). Threat Landscape 2023. Euroopan unionin kyberturvavirasto. <a href="https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023" className="text-blue-600 hover:underline">https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023</a></li>
                  <li>IBM (2025). Cost of a Data Breach Report 2025. <a href="https://www.ibm.com/reports/data-breach" className="text-blue-600 hover:underline">https://www.ibm.com/reports/data-breach</a></li>
                  <li>Valtioneuvosto (2024). Suomen kyberturvallisuusstrategia 2024-2035. <a href="https://julkaisut.valtioneuvosto.fi/handle/10024/165860" className="text-blue-600 hover:underline">https://julkaisut.valtioneuvosto.fi/handle/10024/165860</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TietovuotojenVaikutukset;
