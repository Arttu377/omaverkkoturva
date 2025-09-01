import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const SuomenKyberturvallisuustilanne2025: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Suomen kyberturvallisuustilanne vuonna 2025 - Nouseva uhka ja yhteiskunnallinen valmius" 
        description="Suomen kyberturvallisuuden uhkataso pysyy korkealla. Tutustu ajankohtaiseen tilanteeseen, haasteisiin ja yhteiskunnallisiin valmiuksiin."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
                             <img
                 src="/kuvapankki/Kappaleen teksti (70).png"
                 alt="Suomen kyberturvallisuustilanne 2025"
                 className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
               />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Suomen kyberturvallisuustilanne vuonna 2025
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Nouseva uhka ja yhteiskunnallinen valmius
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Kyberturvallisuuden uhkataso pysyy korkealla
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Traficomin Kyberturvallisuuskeskus raportoi, että Suomen kyberturvallisuuden uhkataso on pysynyt edelleen kohonneena kuluneen vuoden aikana ja se nousi merkittävästi Venäjän hyökätessä Ukrainaan vuonna 2022. Suomeen kohdistuvan vihamielisen kybertoiminnan määrä on kasvanut huomattavasti, ja vakavien tietomurtojen sekä niiden yritysten määrä on yli kaksinkertaistunut edellisvuoteen verrattuna. Tämä kehitys heijastaa kiristyspohjaisten hyökkäysten (ransomware) yleistymistä sekä ohjelmistojen haavoittuvuuksien hyödyntämisen nopeutumista.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Suomen kyberturvallisuustilanne on vuonna 2025 entistä haastavampi. Vakavat kyberhyökkäykset, haavoittuvuuksien nopea hyödyntäminen ja valtiollisen tason vaikutusoperaatiot lisäävät riskiä tasapainon pettäessä."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Kyberturvallisuuskeskus</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Haavoittuvuuksien ja huijauksien uudet haasteet
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Erityisen huolestuttavaa on se, kuinka nopeasti uusia ohjelmistojen haavoittuvuuksia hyödynnetään tuotteissa ja järjestelmissä. Tällainen kehityssuunta tuottaa merkittävän riskitekijän yhteiskunnan digiturvallisuuteen. Lisäksi tietojenkalastelu- ja huijausviestien määrä on kasvanut räjähdysmäisesti: pelkästään viimeisellä neljänneksellä ilmoitusten määrä nousi 64 %.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Suomen kyberturvallisuuskenttää leimaa kasvava hybridivaikuttaminen, järjestäytyneiden rikollisryhmien toiminta sekä valtiollisten toimijoiden kyberoperaatiot. Traficomin ja Supon arvion mukaan tilanne on edelleen vakava, sillä kyberhyökkäykset ovat muuttuneet entistä kohdennetummiksi ja teknisesti kehittyneemmiksi. Erityisesti kriittistä infrastruktuuria, kuten energia-, viestintä- ja terveydenhuoltojärjestelmiä, vastaan on havaittu kohdistuneen hyökkäyksiä.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Näiden lisäksi informaatiovaikuttaminen on noussut merkittäväksi uhkatekijäksi. Valeuutiset, sosiaalisen median manipulointi ja tietomurrot luovat haasteita sekä yksityiselle että julkiselle sektorille. Näiden ilmiöiden seurauksena luottamus digitaalisiin palveluihin voi heikentyä, mikä puolestaan vaikuttaa yritysten liiketoimintaan ja kilpailukykyyn.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Valtio- ja hybridivaikuttaminen - kybersodankäynnin jatkumo
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Suojelupoliisi (Supo) varoittaa, että valtiollinen kyberuhan aktivoituminen Suomea kohtaan on jatkuvaa. Venäjän osalta kyberuhka voi kasvaa, mikäli osa sen Ukrainassa käytössä olevista kyberresursseista vapautuu tulevaisuudessa Suomea vastaan suuntautuvaan toimintaan. Myös Kiina on arvioiden mukaan aktiivisesti mukana kyberoperaatioissa, jotka voivat kohdistaa Suomeen, suomalaisiin laitteisiin ja infrastruktuuriin kolmansien osapuolien kautta.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yritysten riskit</h3>
                <p className="text-lg text-gray-700">
                  Yritykset kohtaavat laajan kirjon riskejä kyberuhkien seurauksena. Yksi keskeisistä riskeistä on liiketoiminnan jatkuvuuden vaarantuminen. Esimerkiksi kiristyshaittaohjelmat voivat lamauttaa kriittiset järjestelmät, mikä johtaa pitkiin käyttökatkoihin ja merkittäviin taloudellisiin menetyksiin.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Toinen merkittävä haavoittuvuus liittyy toimitusketjuihin. Yhä useammat hyökkäykset kohdistuvat pienempiin alihankkijoihin, joiden kautta voidaan päästä käsiksi suurempien yritysten tietojärjestelmiin. Tämä korostaa tarvetta kokonaisvaltaiselle riskienhallinnalle, jossa huomioidaan koko toimitusverkoston turvallisuus.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Suomen kyberturvallisuusvalmiudet - resilienssi ja yhteistyö
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vaikka uhkakuva on kasvanut, Suomi säilyttää korkean varautuneisuuden kyberuhkiin. Traficom ja Supo pitävät laajasti lamauttavien kyberiskujen todennäköisyyttä edelleen pienenä. Yhteiskunnan elintärkeiden toimintojen kuten energian, terveydenhuollon ja viestinnän turvaaminen edellyttää jatkuvaa tilannekuvan ylläpitoa ja reagointivalmiutta.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Toisaalta Suomen varautuneisuusjärjestelmät, tiedonvaihto ja viranomaisten, yritysten sekä tutkimusorganisaatioiden yhteistyö muodostavat vahvan suojan."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Kyberturvallisuuskeskus</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Tavoitteena jatkuva tilannekuva ja tiedonvaihto
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                NCSC-FI (Kyberturvallisuuskeskus) ylläpitää reaaliaikaista tilannekuvaa yhteiskunnan kyberturvallisuustilanteesta, tukee asiantuntijoita, analysoi tapahtumia ja jakaa tietoa viranomaisten ja yritysten kesken. Tämä toimintamalli on elintärkeä kriisien torjunnassa ja ennakoinnissa.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tämä tukee näkökulmaa, että resonanssi kyberturvariskien ja geopoliittisen ympäristön välillä edellyttää proaktiivista toimintaa kuten jatkuvaa resurssien kehitystä, järjestelmien päivitystä, koulutuksen ja automaation hyödyntämistä sekä kansainvälisten kumppanuuksien vahvistamista.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yhteenveto</h3>
                <p className="text-lg text-gray-700">
                  Suomen kyberturvallisuustilanne on vuonna 2025 entistä haastavampi. Vakavat kyberhyökkäykset, haavoittuvuuksien nopea hyödyntäminen ja valtiollisen tason vaikutusoperaatiot lisäävät riskiä tasapainon pettäessä. Toisaalta Suomen varautuneisuusjärjestelmät, tiedonvaihto ja viranomaisten, yritysten sekä tutkimusorganisaatioiden yhteistyö muodostavat vahvan suojan.
                </p>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://www.kyberturvallisuuskeskus.fi/fi/ajankohtaista/traficom-ja-supo-kyberturvallisuuden-uhkataso-pysynyt-koholla-vakavien-tapausten" className="text-blue-600 hover:underline">Kyberturvallisuuskeskus - Traficom ja Supo: Kyberturvallisuuden uhkataso pysynyt koholla</a></li>
                  <li><a href="https://yle.fi/a/74-20180011" className="text-blue-600 hover:underline">Yle - Kyberturvallisuusuhka edelleen koholla</a></li>
                  <li><a href="https://supo.fi/en/-/cyber-security-threat-level-remains-high-serious-cases-on-the-rise" className="text-blue-600 hover:underline">Suojelupoliisi - Kyberturvallisuusuhka edelleen koholla</a></li>
                  <li><a href="https://www.mtvuutiset.fi/artikkeli/tuore-tieto-kyberturvallisuusuhka-edelleen-koholla-vakavat-tapaukset-kasvussa/9212670" className="text-blue-600 hover:underline">MTV - Kyberturvallisuusuhka edelleen koholla</a></li>
                  <li><a href="https://traficom.fi/en/news/cyber-threat-level-remains-elevated-targeted-attacks-have-become-more-frequent" className="text-blue-600 hover:underline">Traficom - Kohdennetut hyökkäykset yleistyneet</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SuomenKyberturvallisuustilanne2025;
