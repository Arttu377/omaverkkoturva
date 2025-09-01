import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const VerkkorikollisuusSuomessaJaPohjoismaissa: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Verkkorikollisuus Suomessa ja Pohjoismaissa: Tilannekuva ja torjunnan haasteet" 
        description="Vuonna 2024 suomalaisilta yritettiin huijata 107,2 miljoonaa euroa. Tutustu Pohjoismaiden verkkorikollisuuden tilannekuvaan ja torjunnan haasteisiin."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
              <img
                src="/kuvapankki/Kappaleen teksti (73).png"
                alt="Verkkorikollisuus Suomessa ja Pohjoismaissa"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Verkkorikollisuus Suomessa ja Pohjoismaissa
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Tilannekuva ja torjunnan haasteet
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Tilanne Suomessa
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vuonna 2024 suomalaisilta yritettiin huijata 107,2 miljoonaa euroa, kun vuonna 2023 vastaava summa oli 76,9 miljoonaa euroa. Noin 44,3 miljoonaa euroa pystyi palauttamaan eli huijarit veivät lopulta 62,9 miljoonaa euroa. Erityisesti tietojenkalasteluhuijaukset kasvoivat räjähdysmäisesti: 161 % edellisvuodesta. Rikkaimpia saaliita kirjattiin sijoitushuijauksissa (20,1 M€) ja rakkaushuijauksissa (4,4 M€), joista jälkimmäiset osittain uudelleenluokiteltu sijoitushuijauksiksi.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Kyberpetokset eivät ole satunnaisia väärinkäytöksiä, vaan ne ovat ammattimaista toimintaa, jossa huijarit manipuloivat uhrin luottamusta järjestelmällisesti."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Finanssiala ry</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Finanssialan edustajat korostavat tiedonvaihdon ja lainsäädännön ajantasaisuutta torjunnan keskiössä.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Pohjoismaiden kehityskuva
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Myös muualla Pohjolassa huijausten määrä on korkea. Tietoevry Bankingin mukaan 16 % ruotsalaisista ja 12 % norjalaisista on kokenut taloushuijauksen tai identiteettivarkauden viime vuonna. Vuoden 2025 ensimmäisellä puoliskolla Tietoevry yhdessä yhteistyöpankkiensa kanssa esti huijariyrityksiä vastaan 2,3 miljardia Norjan kruunua (yli 200 M€) kasvu yli 60 % edelliseen vuoteen verrattuna.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Digitalisaatio on uhka ja suoja samassa paketissa
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Digitalisaation ja tekoälyn yleistyminen on sekä rikollisten että puolustajien etu. Tieteuutiset kertovat, että saatavilla oleva data yhä monimutkaistuu huijaustyypeissä, mukaan lukien deepfake -äänet, QR-huijaukset sekä tekoälyavusteiset phishing-menetelmät. GenAI-järjestelmien arvioidaan jopa nelinkertaistavan petoksista koituvat rahalliset menetykset vuoteen 2027 mennessä.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eurooppalaistason trendit</h3>
                <p className="text-lg text-gray-700">
                  Eurooppalaistason analyysit vahvistavat trendin: epäiltyjen huijaustapausten määrä nousi 43 % vuosina 2022–2024, ja erityisesti sosiaalisten manipulointien määrä kasvoi 156 %.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Viranomaistoiminta ja yhteiskunnan rooli
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sääntelyn ja viranomaisyhteistyön tehostaminen on välttämätöntä huijausten torjumiseksi. Finanssialan korostama tiedonvaihdon estot ovat olleet lainsäädännöllisesti turhan tiukkoja, esimerkiksi maksujen saajan tilitiedon ennakkovarmistuksia ei ole standardoitu. OP ja Nordea ovat ottaneet käyttöön maksujen kohdistamisen varmistusmekanismeja, jotka vastaavat tulevaa EU-vaatimusta.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Lisäksi kyberturvallisuusvirasto (NCSC-FI) on varoittanut phishing-huijareista, jotka luovat väärennettyjä lentolupajärjestelmiä (ETA/ESTA) tietopyyntöineen ja keräävät maksutietoja.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Suositukset
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Suomessa ja Pohjoismaissa verkkohuijaukset ovat muuttuneet yhä laajamittaisemmiksi, ja niissä rikollisuudessa hyödynnetään teknologioita, jotka haastavat perinteisen turvallisuuden. Johtopäätökseksi voidaan todeta:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Rahalliset menetykset</h3>
                  <p className="text-gray-700">Rahalliset menetykset ovat huomattavia, ja trendi on nouseva.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Huijausmuodot</h3>
                  <p className="text-gray-700">Tietojenkalastelu ja sijoitushuijaukset ovat erityisen leviäviä ja tuottoisia huijausmuotoja.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tekoälyn rooli</h3>
                  <p className="text-gray-700">Tekoäly toimii sekä rikollisuuden välineenä että sen torjunnassa – valppauden ja teknologian yhdistelmä on välttämätön.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lainsäädäntö</h3>
                  <p className="text-gray-700">Tarvitaan lainsäädännön ja tiedonkulun kehittämistä, viranomaisyhteistyön vahvistamista sekä suojauksia maksuvaiheissa.</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yhteiskunnalliset toimenpiteet</h3>
                <ul className="text-lg text-gray-700 space-y-2">
                  <li>• Kansalaisten mediatietoisuuden nostaminen</li>
                  <li>• Pankkien proaktiivinen torjunta</li>
                  <li>• Kyberturvayhteistyö</li>
                  <li>• Koko yhteiskunnan osallistuminen</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Huijauksen torjuminen edellyttää koko yhteiskunnan osallistumista kuten viranomaisia, pankkeja, teknologia-alan toimijoita ja maksajaa itseään."
                </blockquote>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://www.verkkouutiset.fi/a/karut-luvut-julki-suomalaisilta-huijattiin-lahes-63-miljoonaa-euroa/" className="text-blue-600 hover:underline">Verkkouutiset - Karut luvut julki: Suomalaisilta huijattiin lähes 63 miljoonaa euroa</a></li>
                  <li><a href="https://www.finanssiala.fi/en/news/volume-of-fraud-skyrockets-in-finland-banks-blocked-more-than-e44-millions-worth-of-fraud-related-payments-in-2024/" className="text-blue-600 hover:underline">Finanssiala - Volume of fraud skyrockets in Finland</a></li>
                  <li><a href="https://www.taloustaito.fi/Rahat/verkkorikolliset-puijasivat-suomalaisilta-lahes-63-miljoonaa-euroa/" className="text-blue-600 hover:underline">Taloustaito - Verkkorikolliset puijasivat suomalaisilta lähes 63 miljoonaa euroa</a></li>
                  <li><a href="https://yle.fi/a/74-20163606" className="text-blue-600 hover:underline">Yle - Verkkohuijaukset kasvussa</a></li>
                  <li><a href="https://www.tietoevry.com/en/newsroom/all-news-and-releases/press-releases/2025/08/fraud-survey-2025/" className="text-blue-600 hover:underline">Tietoevry - Fraud Survey 2025</a></li>
                  <li><a href="https://www.tietoevry.com/en/newsroom/all-news-and-releases/press-releases/2025/04/tietoevry-bankings-new-insight-report-reveals-an-increase-in-digital-payment-fraud-in-europe/" className="text-blue-600 hover:underline">Tietoevry - Digital Payment Fraud in Europe</a></li>
                  <li><a href="https://www.deloitte.com/fi/fi/services/consulting-risk/perspectives/escalating-threat-of-fraud-across-the-eu-and-nordics.html" className="text-blue-600 hover:underline">Deloitte - Escalating Threat of Fraud Across the EU and Nordics</a></li>
                  <li><a href="https://arxiv.org/abs/2410.09066" className="text-blue-600 hover:underline">arXiv - AI and Cybersecurity Research</a></li>
                  <li><a href="https://www.kyberturvallisuuskeskus.fi/en/news/weekly-review-national-cyber-security-centre-finland-ncsc-fi-232025" className="text-blue-600 hover:underline">Kyberturvallisuuskeskus - Weekly Review 23/2025</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default VerkkorikollisuusSuomessaJaPohjoismaissa;
