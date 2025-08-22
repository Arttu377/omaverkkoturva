import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const GeneralTerms = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Takaisin etusivulle
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">OmaVerkkoturva, Yleiset sopimusehdot</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Sopimuksen kohde</h2>
              
              <p className="text-gray-600 mb-4">
                Nämä yleiset sopimusehdot ("Sopimusehdot") määrittävät ehdot ja periaatteet, joiden mukaisesti OmaVerkkoturva Oy, y-tunnus 1234567-8 ("Palveluntarjoaja") tarjoaa ja ylläpitää Henkilösuoja-palvelua ("Palvelu") asiakkaalle ("Asiakas").
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Palvelun tarkoitus</h3>
              <p className="text-gray-600 mb-4">
                Henkilösuoja-palvelu suojaa Asiakkaan henkilötietoja ja muita luottamuksellisia tietoja. Palveluun voi kuulua esimerkiksi:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Henkilötietojen seuranta</li>
                <li>Ilmoitukset mahdollisista tietomurroista</li>
                <li>Ohjeet tietoturvariskien torjumiseksi</li>
                <li>Muut palvelukuvauksessa erikseen mainitut toiminnot</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Mihin ehdot koskevat</h3>
              <p className="text-gray-600 mb-4">
                Näitä ehtoja sovelletaan kaikkiin tilanteisiin, joissa Asiakas käyttää palvelua. Tämä koskee kaikkia laitteita ja kanavia. Nämä ehdot yhdessä mahdollisten erityisehtojen, tilaussopimuksen ja palvelukuvauksen kanssa määrittävät Asiakkaan ja Palveluntarjoajan oikeudet ja velvollisuudet. Asiakas sitoutuu käyttämään palvelua ehtojen, lain ja hyvän tavan mukaisesti.
              </p>
              
              <p className="text-gray-600 mb-4">
                Jos Asiakkaalle toimitetaan kolmannen osapuolen materiaaleja, ohjelmistoja tai palveluja, niiden käyttöä säätelevät vain kyseisen tuotteen tai palvelun omat ehdot. Palveluntarjoajan sopimusehtoja ei sovelleta näihin kolmannen osapuolen tuotteisiin tai palveluihin.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Määritelmät</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Asiakas</h3>
              <p className="text-gray-600 mb-4">
                Henkilö tai yritys, joka on tehnyt sopimuksen Palvelun käytöstä ja jolla on voimassa oleva oikeus käyttää Palvelua.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Palvelu</h3>
              <p className="text-gray-600 mb-4">
                OmaVerkkoturva Oy:n tarjoama Henkilösuoja-palvelu, joka sisältää palvelukuvauksessa mainitut toiminnot, kuten henkilötietojen valvonnan, tietoturvahälytykset ja mahdolliset lisäpalvelut.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Palveluntarjoaja</h3>
              <p className="text-gray-600 mb-4">
                OmaVerkkoturva Oy (y-tunnus 3475096-9), joka tuottaa, ylläpitää ja kehittää Palvelua sekä täyttää sopimuksessa määritellyt velvoitteet.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Käyttäjätunnukset</h3>
              <p className="text-gray-600 mb-4">
                Tunnisteet, salasanat ja muut todennustiedot, jotka Palveluntarjoaja antaa Asiakkaalle tai tämän valtuuttamalle käyttäjälle Palvelun käyttöä varten.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Henkilötiedot</h3>
              <p className="text-gray-600 mb-4">
                Kaikki tiedot, jotka liittyvät tunnistettuun tai tunnistettavissa olevaan henkilöön ja jotka kuuluvat EU:n tietosuoja-asetuksen (GDPR) piiriin.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Tietoturvaloukkaus</h3>
              <p className="text-gray-600 mb-4">
                Tapahtuma, jossa Asiakkaan henkilötiedot tai muut suojatut tiedot joutuvat luvattomaan käyttöön, muuttuvat, tuhoutuvat tai katoavat.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Palvelukuvaus</h3>
              <p className="text-gray-600 mb-4">
                Palveluntarjoajan ajantasainen erittely Palvelun sisällöstä, toiminnallisuuksista ja mahdollisista rajoituksista.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Sopimus</h3>
              <p className="text-gray-600 mb-4">
                Asiakkaan ja Palveluntarjoajan välinen sopimus, joka koostuu näistä ehdoista, tilaussopimuksesta, palvelukuvauksesta ja mahdollisista erityisehdoista tai liitteistä.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Erityisehdot</h3>
              <p className="text-gray-600 mb-4">
                Kirjallisesti sovitut lisäehdot, jotka täydentävät tai muuttavat näitä Sopimusehtoja.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Lainsäädäntö</h3>
              <p className="text-gray-600 mb-4">
                Kaikki soveltuva Suomen laki, EU-lainsäädäntö ja viranomaisten antamat sitovat määräykset ja ohjeet, joita Palvelun tuottamiseen ja käyttöön sovelletaan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GeneralTerms;
