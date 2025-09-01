import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const SuomenHaavoittuvuusJaKyberuhkienLuonne: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Suomen haavoittuvuus ja kyberuhkien luonne - Kyberturvallisuuden yhteiskunnalliset haasteet" 
        description="Kyberturvallisuus ei ole enää vain teknisten järjestelmien ominaisuus, vaan yhteiskunnan ja yksilön turvallisuuden kulmakivi. Tutustu Suomen kyberuhkien luonteeseen."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
              <img
                src="/kuvapankki/Kappaleen teksti (71).png"
                alt="Suomen haavoittuvuus ja kyberuhkien luonne"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Suomen haavoittuvuus ja kyberuhkien luonne
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Kyberturvallisuuden yhteiskunnalliset haasteet
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Kyberturvallisuus ei ole enää vain teknisten järjestelmien ominaisuus
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kyberturvallisuus ei ole enää vain teknisten järjestelmien ominaisuus, vaan yhteiskunnan ja yksilön turvallisuuden kulmakivi. Globalisaatio, digitalisaatio, etätyö ja pilvipalvelut ovat muuttaneet mobiililaitteet ja verkkoon kytkeytyvät järjestelmät hyökkäyspintarikkaiksi kohteiksi. Traficom, kansallisen kyberturvasta vastaava viranomainen, julkaisee viikkokatsauksia luodakseen tilannekuvaa uhkista ja tapahtumista. Katsauksesta 35/2025 nousevat erityisesti esiin huijaukset, kyberrikosten määrän kasvu, haittaohjelmat sekä järjestelmien haavoittuvuus.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Konkreettiset uhat viikolla 35 (Kyberturvallisuuskeskus)
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Lastensuojelun nimissä lähetetyt huijaustekstiviestit
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Rikolliset esiintyvät sosiaalityöntekijöinä ja viittaavat lastensuojeluun saadakseen kohteet avaamaan haitallisia linkkejä tai liitteitä. Tämän kautta pyritään varastamaan verkkopankkitunnuksia tai mobiilivarmennuksia. Uhrit ovat sekä organisaatioita että yksityishenkilöitä, ja taloudelliset vahingot vaihtelevat tuhansista jopa satoihin tuhansiin euroihin. Ilmiön teho perustuu luottamukseen viranomaisviestintää kohtaan, mikä tekee tästä erityisen vaarallisen huijausmallin.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Teams-puheluhuijaukset: IT-tukena esiintyminen
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hyökkääjät esittäytyvät Teamsin kautta "Help Desk" -tukena ja houkuttelevat uhrin asentamaan etäyhteysohjelmia (AnyDesk, Quick Assist). Oletusasetukset takaavat, että vierasliikenne onnistuu helpommin mikä korostaa teknisten asetusten hallinnan puutetta organisaatioissa. Näissä tapauksissa organisaation tietoturvapolitiikka ja käyttäjien koulutus ovat avainasemassa.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                PDF-sovelluksiksi naamioidut haittaohjelmat
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Haittaohjelmat naamioituvat PDF-editointityökaluiksi ja leviävät hakukonemainonnan tai epäluotettavien verkkosivujen kautta. Asennukset voivat johtaa tietovuotoihin tai täyteen järjestelmän kaappaamiseen. Vaara syntyy erityisesti siitä, että käyttäjät luottavat suosittuihin tiedostotyyppeihin ja altistuvat näin äkisti vakavalle haitalle.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Avalanche-haittaohjelma ja ransomware-infrastruktuuri
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Avalanche-palvelu toimii kyberrikollisten alustan kaltaisesti: se levittää haittaohjelmia (esim. ransomwarea), journalistia sisältöä, botteja ja rahanpesua. Sen kohteina ovat olleet esimerkiksi suuret rahoituslaitokset, ja toiminta sisältää henkilötietojen varastamista, palvelunestohyökkäyksiä sekä ransomware-iskuja. Tämä osoittaa kyberrikollisuuden institutionaalisen ja järjestäytyneen muodon.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Haavoittuvuudet ja uhkatason kehitys
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Suomen digitaalisessa turvallisuusympäristössä näkyy selkeä symbioosi teknologisen riippuvuuden ja ihmisten luottamuksen välillä. Digitalisaatio ja pilvipalveluiden käyttö luovat arkeen uusia hyökkäyspintoja; toisaalta kansalaisten korkea luottamus viranomaisiin toimii hyökkäyksiä helpottavana tekijä. Tämä dynamiikka näkyy selvästi Kyberturvallisuuskeskuksen viikkokatsauksissa, joissa mm. kulttuurinen hyväksyntä "viranomaisviesteille" on hyväksikäytetty huijauksissa kuten lastensuojeluviesteissä ja Teams-puheluhuijauksissa.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Traficomin ja Suojelupoliisin havainnot kertovat, että vakavien kyberhyökkäysten määrä on kaksinkertaistunut viime vuodesta, ja ohjelmistojen haavoittuvuudet ovat lisääntyneet merkittävästi."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Kyberturvallisuuskeskus</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Valtiolliset kybertoimet ovat edelleen aktiivisia uhkia, vaikka laajamittaisten operaatioiden riski pidetään toistaiseksi pienenä. Tämä asettaa paineen koko digitaaliselle infrastruktuurille ja vaatii jatkuvaa valmiutta.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Organisoitunut kyberrikollisuus
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Traficomin raportteihin tulleiden 18 000 poikkeamailmoituksen perusteella (v. 2024) on selvää, että kyberhyökkäykset Suomessa ovat systemaattisia ja toistuvia. Kiristysohjelmat kuten Akira ovat yleistyneet merkittävästi ICT- ja teollisuusaloilla. Tämä kertoo rikollisen toiminnan institutionaalisesta luonteesta. Avalanche- ja ransomware-ekosysteemit toimivat kuin yritykset, joilla on alihankkijoita, asiakkaita ja liiketoimintakonsepteja.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">EU-lainsäädäntö vastauksena</h3>
                <p className="text-lg text-gray-700">
                  Euroopan lainsäädäntö on vastaus kasvaneeseen kyberriskiin. Esimerkiksi NIS2-direktiivi laajentaa riskienhallinnan velvoitteita useille sektoreille ja asettaa tiukat uhkien raportointiaikataulut. Samoin Cyber Resilience Act (CRA) säätelee tuotteiden turvallisuusvaatimuksia ilmoitusvelvollisuudella ja tietoturvapäivityksillä varmistetaan, että tuotteet ovat turvallisia koko elinkaaren ajan.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Lisäksi ENISA:n vuositason kyberturvallisuusraportit osoittavat, että EU-maissa uhketaso on "merkittävä", sillä etenevät hyökkäykset ja haavoittuvuudet kohdistuvat kriittisiin toimijoihin. EU on myös käynnistänyt omien haavoittuvuustietokantojen rakentamisen riippumattomuuden lisäämiseksi.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Strategiset näkökulmat
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dynamiikka</h3>
                  <p className="text-gray-700">Suomi on digitaalisaation edelläkävijä, mutta samalla luottamus myös riskitekijä.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Organisoituminen</h3>
                  <p className="text-gray-700">Hankkeet kuten Avalanche eivät ole irrallisia, vaan rikollisia ketjuja.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Valtionresilienssi</h3>
                  <p className="text-gray-700">Viikkokatsaukset ja viranomaisyhteistyö luovat aktiivisen kyberturvaverkon.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">EU-yhteistyö</h3>
                  <p className="text-gray-700">NIS2- ja CRA-sääntelyt muodostavat normatiivisen kehikon, joka ohjaa organisaatioita.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kansallinen strategia</h3>
                <p className="text-lg text-gray-700">
                  Suomen kyberturvallisuusstrategia korostaa kokonaisvaltaista lähestymistapaa, yhteistyötä ja osaamisen vahvistamista.
                </p>
                <p className="text-sm text-gray-600 mt-2">- Valtioneuvoston Julkaisut</p>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://www.kyberturvallisuuskeskus.fi/fi/ajankohtaista/kyberturvallisuuskeskuksen-viikkokatsaus-352025" className="text-blue-600 hover:underline">Kyberturvallisuuskeskus - Viikkokatsaus 35/2025</a></li>
                  <li><a href="https://traficom.fi/fi/ajankohtaista/vuosi-2024-muistetaan-isoista-kybertapauksista" className="text-blue-600 hover:underline">Traficom - Vuosi 2024 muistetaan isoista kybertapauksista</a></li>
                  <li><a href="https://www.kyberturvallisuuskeskus.fi/fi/ajankohtaista/traficom-ja-supo-kyberturvallisuuden-uhkataso-pysynyt-koholla-vakavien-tapausten" className="text-blue-600 hover:underline">Kyberturvallisuuskeskus - Uhkataso pysynyt koholla</a></li>
                  <li><a href="https://vuosiraportit.traficom.fi/fi/tietotilinpaatos/tietotilinpaatos-2023/tieto-ennakoinnin-ja-johtamisen-perustana/traficomin" className="text-blue-600 hover:underline">Traficom - Vuosiraportti 2023</a></li>
                  <li><a href="https://www.skadden.com/insights/publications/2024/10/navigating-the-new-cybersecurity-landscape" className="text-blue-600 hover:underline">Skadden - Navigating the New Cybersecurity Landscape</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Cyber-security_regulation" className="text-blue-600 hover:underline">Wikipedia - Cyber-security regulation</a></li>
                  <li><a href="https://industrialcyber.co/reports/enisas-2024-report-on-state-of-the-cybersecurity-focuses-on-fortifying-digital-frontier-provides-recommendations/" className="text-blue-600 hover:underline">Industrial Cyber - ENISA's 2024 Report on Cybersecurity</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SuomenHaavoittuvuusJaKyberuhkienLuonne;
