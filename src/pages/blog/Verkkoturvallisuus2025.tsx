import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Verkkoturvallisuus2025: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Verkkoturvallisuus 2025 - Tietoturva digitaalisessa arjessa" 
        description="Tutustu verkkoturvallisuuden uusimpiin trendeihin ja uhkiin vuonna 2025. Opi miten suojata itseäsi digitaalisessa arjessa."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
              <img 
                src="/kuvapankki/Cyper.jpg" 
                alt="Verkkoturvallisuus 2025" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Verkkoturvallisuus 2025
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Verkkoturvallisuus on noussut vuonna 2025 yhdeksi keskeisimmistä arjen turvallisuustekijöistä. Yksityishenkilöiden verkkoalttius on kasvanut digitaalisten palveluiden laajenemisen myötä. Verkkoasiointi, sosiaalisen median käyttö, etätyö ja pilvipalvelut ovat muuttaneet arjen pysyvästi. Samalla myös tietoturvauhkien määrä ja monimuotoisuus ovat lisääntyneet.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tietoturvauhkia ei voi enää nähdä vain teknisinä ongelmina, vaan ne liittyvät olennaisesti yksilön taloudelliseen ja henkiseen turvallisuuteen. Identiteettivarkaudet, tietojen kalastelu ja haittaohjelmat vaikuttavat ihmisten arkeen konkreettisesti. Vuonna 2024 julkaistujen tilastojen mukaan lähes joka kolmas suomalainen on kohdannut jonkinlaisen tietoturvauhan verkossa (Traficom, 2025). Tämä kertoo siitä, että verkkoturvallisuus ei ole enää harvojen huoli, vaan koko väestöä koskettava ilmiö.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Olen huomannut, että ihmiset usein ajattelevat tietoturvaa vasta silloin, kun ongelma on jo tapahtunut. Tavoitteemme OmaVerkkoturvassa on muuttaa tämä asenne: verkkoturvallisuus kuuluu jokapäiväiseen arkeen aivan samalla tavalla kuin kotioven lukitseminen."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- OmaVerkkoturvan Arttu Simanainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Miten verkkoturvallisuus näkyy yksilön arjessa?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Arjen tietoturva muodostuu pienistä, mutta ratkaisevista toiminnoista. Yksinkertaiset käytännöt, kuten vahvojen salasanojen käyttö, monivaiheinen tunnistautuminen ja ohjelmistojen päivittäminen, vähentävät merkittävästi riskiä joutua rikollisten kohteeksi.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Erityisen ajankohtaista vuonna 2025 on identiteetin suojaaminen. Rikolliset hyödyntävät entistä monimutkaisempia keinoja, kuten tekoälyllä tuotettuja huijausviestejä ja väärennettyjä äänitteitä, jotka tekevät tunnistamisesta vaikeampaa (Europol, 2024). Tämä korostaa ennaltaehkäisyn merkitystä.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Teknologian kehittyminen on kaksiteräinen miekka: se helpottaa elämäämme, mutta antaa samalla rikollisille uusia välineitä. Juuri siksi meidän pitää rakentaa tietoturva siten, että se on käyttäjälle helppoa ja automaattista."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Simanainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Suomalaiset ja verkkoturva vuonna 2025
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Suomessa verkkoturvallisuus on noussut keskusteluun paitsi yksityishenkilöiden, myös yhteiskunnan tasolla. Valtion kyberturvallisuusstrategiat painottavat yksilön vastuuta osana kansallista tietoturvaa (Valtioneuvosto, 2024). Käytännössä tämä tarkoittaa sitä, että jokaisen kansalaisen tietoturvataidot vaikuttavat koko yhteiskunnan resilienssiin.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Kansainvälisesti Suomi sijoittuu korkealle tietoturvan hallinnassa, mutta yksilötasolla ero osaajien ja arjen käyttäjien välillä voi olla suuri. Tämä näkyy esimerkiksi siinä, että osa ihmisistä käyttää edelleen samoja salasanoja useissa palveluissa, vaikka asiasta on varoitettu vuosien ajan.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Kysymys ei ole siitä, etteivät ihmiset ymmärtäisi tietoturvan merkitystä. Kyse on enemmänkin siitä, että ratkaisut pitää tuoda lähelle käyttäjää ja tehdä niistä yhtä vaivattomia kuin sähköpostin avaaminen."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Simanainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Tulevaisuuden suunta
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vuonna 2025 ja sen jälkeen verkkoturvallisuuden painopiste siirtyy entistä vahvemmin jatkuvaan monitorointiin ja ennaltaehkäisyyn. Yksityishenkilöiden on mahdollista hyödyntää palveluita, jotka havaitsevat identiteettiin liittyvät riskit jo ennen kuin vahinko ehtii tapahtua.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tietoturva ei kuitenkaan ole vain teknologinen ratkaisu. Se vaatii myös asennemuutosta ja tietoisuuden lisäämistä. Kun käyttäjät ymmärtävät, että oma identiteetti ja tietoturva ovat yhtä arvokkaita kuin fyysiset omaisuudet, syntyy pohja aidosti turvallisemmalle digitaaliselle arjelle.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Meidän visiomme OmaVerkkoturvassa on se, että ihmiset voivat elää digitaalista elämää luottavaisesti. Turvallisuus ei saa olla este vaan mahdollistaja."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Simanainen</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yhteenveto</h3>
                <p className="text-lg text-gray-700">
                  Verkkoturvallisuus on muuttunut vuonna 2025 osaksi jokapäiväistä arkea. Tietoturvauhkien monimuotoisuus ja kehittyneisyys vaativat jatkuvaa tietoisuutta ja aktiivista suojautumista. Yksilön tietoturvataidot vaikuttavat koko yhteiskunnan turvallisuuteen.
                </p>
                <p className="text-lg text-gray-700 mt-3">
                  Tulevaisuudessa verkkoturvallisuus perustuu ennaltaehkäisyyn ja käyttäjäystävällisiin ratkaisuihin, jotka tekevät turvallisuudesta osan arkea eikä esteenä.
                </p>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Traficom (2025). Kyberturvallisuuskeskus 2025. Liikenne- ja viestintävirasto Traficom. <a href="https://www.kyberturvallisuuskeskus.fi/fi" className="text-blue-600 hover:underline">https://www.kyberturvallisuuskeskus.fi/fi</a></li>
                  <li>Europol (2024). Internet Organised Crime Threat Assessment (IOCTA) 2024. <a href="https://www.europol.europa.eu/publication-events/main-reports/internet-organised-crime-threat-assessment-iocta-2024" className="text-blue-600 hover:underline">https://www.europol.europa.eu/publication-events/main-reports/internet-organised-crime-threat-assessment-iocta-2024</a></li>
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

export default Verkkoturvallisuus2025;
