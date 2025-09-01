import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const TietojenkalastelunEstaminen: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Tietojenkalastelun estäminen - Suojaudu yleisimmältä verkkorikokselta" 
        description="Tutustu tietojenkalastelun (phishing) uhkiin ja oppi miten suojata itseäsi. Opi tunnistamaan huijausviestejä ja estämään tietojenkalastelu."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
              <img 
                src="/kuvapankki/Kappaleen teksti (64).png" 
                alt="Tietojenkalastelun estäminen" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tietojenkalastelun estäminen
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Suojaudu yleisimmältä verkkorikokselta
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Tietojenkalastelu (phishing) on edelleen vuonna 2025 yksi yleisimmistä verkkorikollisuuden muodoista. Rikollisten tavoitteena on huijata käyttäjät paljastamaan henkilökohtaisia tietojaan, kuten salasanoja, pankkitunnuksia tai luottokorttitietoja. Hyökkäykset naamioidaan usein luotettaviksi sähköposteiksi, tekstiviesteiksi tai puhelinsoitoiksi, ja ne perustuvat ihmisten luottamukseen ja kiireen tunteen luomiseen.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Euroopan unionin kyberturvaviraston (ENISA, 2023) mukaan tietojenkalastelu on edelleen yleisin tapa, jolla tietomurrot alkavat. Sama ilmiö näkyy myös kansainvälisesti: Googlen tutkimus osoitti, että käyttäjät, jotka ottavat käyttöön suojautumiskeinoja, kuten kaksivaiheisen tunnistuksen, vähentävät merkittävästi riskiä joutua phishing-hyökkäysten kohteeksi (Google, 2019).
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Tietojenkalastelu on kuin digitaaliset ansalangat. Niitä on kaikkialla. Käyttäjän pitää oppia tunnistamaan merkit, mutta samalla meidän täytyy rakentaa järjestelmiä, jotka ottavat suurimman vastuun suojasta."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- OmaVerkkoturvan Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Miten tietojenkalastelu toimii?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tietojenkalastelussa hyödynnetään psykologiaa ja teknologiaa. Yleisin muoto on sähköposti, joka näyttää tulevan pankilta, viranomaiselta tai luotettavalta yritykseltä. Viesti sisältää usein kiireellisen pyynnön, kuten "päivitä tietosi heti" tai "vahvista tilisi turvallisuussyistä". Kun käyttäjä klikkaa linkkiä, hänet ohjataan väärennetylle sivustolle, joka kerää tunnukset ja salasanat.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Viime vuosina hyökkäykset ovat monimutkaistuneet. Rikolliset hyödyntävät tekoälyä tuottaakseen uskottavampia viestejä ja jopa väärennettyjä puheluita, joissa käytetään oikean henkilön ääntä. Tämä tekee käyttäjän kouluttamisesta ja teknologisista suojakeinoista entistä tärkeämpiä (Microsoft, 2024).
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Olen nähnyt, kuinka taitavasti laadittuja huijausviestejä nykyään tehdään. Joskus ne näyttävät paremmilta kuin oikeat viestit. Siksi tarvitaan sekä käyttäjän varovaisuutta että automaattisia suojia."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Kuinka estää tietojenkalastelu?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tietojenkalastelun estäminen vaatii sekä käyttäjän tietoisuutta että teknisiä ratkaisuja. Käytännön keinoja ovat:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Skeptisyys viestejä kohtaan,</strong> jotka vaativat kiireellistä toimintaa
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Linkkien ja lähettäjän tarkistaminen</strong> ennen klikkaamista
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Kaksivaiheisen tunnistuksen käyttö,</strong> joka tekee pelkistä tunnuksista hyödyttömiä rikollisille
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Ajantasaiset tietoturvaohjelmistot</strong> ja sähköpostisuodattimet
                  </div>
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Yritysten ja organisaatioiden vastuulla on kouluttaa käyttäjiä ja ottaa käyttöön suojausratkaisuja, jotka havaitsevat epäilyttävät viestit ennen kuin ne tavoittavat loppukäyttäjän.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Tietojenkalastelun paras torjunta on yhdistelmä ennakointia ja käytännön toimia. Kun käyttäjä oppii tunnistamaan riskit, ja järjestelmät hoitavat loput, syntyy paras suoja."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Tulevaisuuden kehitys
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vuonna 2025 tietojenkalastelu ei ole katoamassa, vaan muuttaa muotoaan. Tekoäly mahdollistaa entistä uskottavammat huijaukset, mutta sama teknologia tarjoaa myös tehokkaampia puolustuskeinoja. Ennakoivat järjestelmät, jotka tunnistavat epäilyttävät viestit reaaliajassa, yleistyvät sekä yritysten että yksityishenkilöiden käytössä.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tietojenkalastelun estäminen ei ole pelkästään tekninen haaste. Se on myös osa digitaalisen kulttuurin kehittämistä, jossa käyttäjät ymmärtävät oman roolinsa tietoturvassa.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Tulevaisuudessa tärkeintä on, että turvallisuus ei tunnu ylimääräiseltä vaivalta. Se pitää rakentaa niin, että käyttäjä kokee sen luonnollisena osana digitaalista arkea."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yhteenveto</h3>
                <p className="text-lg text-gray-700">
                  Tietojenkalastelu on edelleen yksi yleisimmistä verkkorikollisuuden muodoista vuonna 2025. Sen estäminen vaatii sekä käyttäjän tietoisuutta että teknisiä ratkaisuja. Kaksivaiheinen tunnistus ja varovaisuus viestejä kohtaan ovat avainasemassa suojautumisessa.
                </p>
                <p className="text-lg text-gray-700 mt-3">
                  Tulevaisuudessa tekoäly mahdollistaa sekä kehittyneemmät hyökkäykset että tehokkaammat puolustuskeinot.
                </p>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>ENISA (2023). Threat Landscape 2023. Euroopan unionin kyberturvavirasto. <a href="https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023" className="text-blue-600 hover:underline">https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023</a></li>
                  <li>Google (2019). New research: How effective is basic account hygiene at preventing hijacking. Google Security Blog. <a href="https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html" className="text-blue-600 hover:underline">https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html</a></li>
                  <li>Microsoft (2024). Digital Defense Report 2024. Microsoft Security. <a href="https://www.microsoft.com/en-us/security/security-insider/threat-landscape/microsoft-digital-defense-report-2024" className="text-blue-600 hover:underline">https://www.microsoft.com/en-us/security/security-insider/threat-landscape/microsoft-digital-defense-report-2024</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TietojenkalastelunEstaminen;
