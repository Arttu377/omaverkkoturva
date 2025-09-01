import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Nettikiusaaminen: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Nettikiusaaminen - Ongelma ja yhteiskunnallinen haaste" 
        description="Tutustu nettikiusaamisen uhkiin ja oppi miten suojata itseäsi ja muita. Opi tunnistamaan ja estämään nettikiusaamista."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
              <img 
                src="/kuvapankki/Kappaleen teksti (66).png" 
                alt="Nettikiusaaminen" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nettikiusaaminen
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Ongelma ja yhteiskunnallinen haaste
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Nettikiusaaminen on yksi digitaalisen aikakauden merkittävimmistä sosiaalisista ongelmista. Vaikka sosiaalinen media ja verkkoympäristöt tarjoavat monia mahdollisuuksia viestintään ja yhteisöllisyyteen, ne ovat myös kasvattaneet riskin joutua kiusaamisen kohteeksi. Vuonna 2025 nettikiusaaminen ei rajoitu enää pelkästään nuoriin, vaan sitä kohdataan yhä useammin myös aikuisissa yhteisöissä.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Nettikiusaaminen on monelle näkymätön uhka, joka vaikuttaa niin arkeen kuin työelämäänkin. Digitaalisen ympäristön vaarat eivät ole pelkästään teknisiä, vaan myös sosiaalisia."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- OmaVerkkoturvan Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Miksi nettikiusaaminen on vakava ongelma?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nettikiusaamisen vaikutukset ulottuvat laajalle. Uhkana ovat sekä henkinen hyvinvointi että yksityisyyden loukkaaminen. Kiusaaminen voi ilmetä esimerkiksi uhkaavina viesteinä, henkilökohtaisten tietojen levittämisenä tai häirintänä keskusteluryhmissä ja sosiaalisen median alustoilla. Tutkimusten mukaan nettikiusaaminen lisää merkittävästi ahdistusta, masennusta ja sosiaalista eristäytymistä (Livingstone & Smith, 2014).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Lisäksi verkkoympäristö mahdollistaa kiusaamisen laajemman leviämisen ja anonymiteetin, mikä voi tehdä kiusaamisesta vaikeammin havaittavaa ja estettävää (UNICEF, 2022).
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Yksikin haitallinen viesti voi tuntua pieneltä, mutta jatkuessaan se voi aiheuttaa merkittävää henkistä kuormaa. Siksi ennaltaehkäisy ja oikeanlainen reagointi ovat välttämättömiä."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Miten suojautua ja ehkäistä nettikiusaamista?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nettikiusaamista voidaan ehkäistä sekä yksilötasolla että järjestelmällisesti organisaatioissa ja kouluissa. Keskeistä on käyttäjien kouluttaminen tunnistamaan kiusaamisen muodot ja oppimaan, miten niihin reagoidaan turvallisesti.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Teknisiä keinoja ovat esimerkiksi viestien ja profiilien yksityisyysasetusten hallinta, sisältöjen suodatus, ilmoitusjärjestelmien hyödyntäminen sekä turvallisten yhteisöjen rakentaminen. Lisäksi tietoturva- ja identiteettipalvelut voivat auttaa havaitsemaan ja estämään yksityisten tietojen väärinkäytön, mikä on keskeistä kiusaamisen ehkäisemisessä.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Turvallinen verkkoympäristö rakentuu sekä teknologian että tietoisuuden varaan. Käyttäjien on tiedettävä oikeat toimintatava ja järjestelmien tulee tarjota suojamekanismit."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Yhteisöllinen ja kulttuurinen näkökulma
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nettikiusaamisen torjuminen ei ole pelkästään yksittäisen käyttäjän vastuulla. On tärkeää, että yhteisöt, koulut ja yritykset luovat kulttuurin, jossa kiusaaminen ei ole hyväksyttävää, ja että uhri voi saada tukea ja apua. Varhaiset puuttumiset ja avoin keskustelukulttuuri vähentävät ongelman eskaloitumista.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Ennaltaehkäisy alkaa puheesta ja kulttuurista. Kun kiusaaminen ei ole hyväksyttävää, teknologia ja säännöt tukevat tätä tavoitetta."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yhteenveto</h3>
                <p className="text-lg text-gray-700">
                  Nettikiusaaminen on vakava yhteiskunnallinen ongelma, joka vaikuttaa niin nuoriin kuin aikuisiinkin. Sen estäminen vaatii sekä teknisiä ratkaisuja että kulttuurista muutosta.
                </p>
                <p className="text-lg text-gray-700 mt-3">
                  Turvallinen verkkoympäristö rakentuu yhteisölliselle vastuulle, tietoisuudelle ja oikeille toimintatavoille.
                </p>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Livingstone, S., & Smith, P. K. (2014). Annual Research Review: Harms experienced by child users of online and mobile technologies: the nature, prevalence and management of sexual and aggressive risks in the digital age. Journal of Child Psychology and Psychiatry, 55(6), 635–654. <a href="https://acamh.onlinelibrary.wiley.com/doi/full/10.1111/jcpp.12197" className="text-blue-600 hover:underline">https://acamh.onlinelibrary.wiley.com/doi/full/10.1111/jcpp.12197</a></li>
                  <li>UNICEF (2022). Cyberbullying: What is it and how to stop it. <a href="https://www.unicef.org/end-violence/how-to-stop-cyberbullying" className="text-blue-600 hover:underline">https://www.unicef.org/end-violence/how-to-stop-cyberbullying</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Nettikiusaaminen;
