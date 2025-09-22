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
                Nämä yleiset sopimusehdot (”Sopimusehdot”) määrittävät ehdot ja periaatteet, joiden mukaisesti Telendor Oy (Omaverkkoturva) , Y-tunnus 1234567-8 (”Palveluntarjoaja”) tarjoaa ja ylläpitää OmaVerkkoturvan palveluita (”Palvelu”) asiakkaalle (”Asiakas”).
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Palvelun tarkoitus</h3>
              <p className="text-gray-600 mb-4">OmaVerkkoturva-palvelu suojaa Asiakkaan henkilötietoja ja muita luottamuksellisia tietoja. Palveluun voi kuulua esimerkiksi:</p>
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
              <p className="text-gray-600 mb-4">Henkilö tai yritys, joka on tehnyt sopimuksen Palvelun käytöstä ja jolla on voimassa oleva oikeus käyttää Palvelua.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Palvelu</h3>
              <p className="text-gray-600 mb-4">Telendor Oy:n (OmaVerkkoturva) tarjoama OmaVerkkoturva-palvelu, joka sisältää palvelukuvauksessa mainitut toiminnot, kuten henkilötietojen valvonnan, tietoturvahälytykset ja mahdolliset lisäpalvelut.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Palveluntarjoaja</h3>
              <p className="text-gray-600 mb-4">Telendor Oy (OmaVerkkoturva) (y-tunnus 3475096-9), joka tuottaa, ylläpitää ja kehittää Palvelua sekä täyttää sopimuksessa määritellyt velvoitteet.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Käyttäjätunnukset</h3>
              <p className="text-gray-600 mb-4">Tunnisteet, salasanat ja muut todennustiedot, jotka Palveluntarjoaja antaa Asiakkaalle tai tämän valtuuttamalle käyttäjälle Palvelun käyttöä varten.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Henkilötiedot</h3>
              <p className="text-gray-600 mb-4">Kaikki tiedot, jotka liittyvät tunnistettuun tai tunnistettavissa olevaan henkilöön ja jotka kuuluvat EU:n tietosuoja-asetuksen (GDPR) piiriin.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Tietoturvaloukkaus</h3>
              <p className="text-gray-600 mb-4">Tapahtuma, jossa Asiakkaan henkilötiedot tai muut suojatut tiedot joutuvat luvattomaan käyttöön, muuttuvat, tuhoutuvat tai katoavat.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Palvelukuvaus</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoajan ajantasainen erittely Palvelun sisällöstä, toiminnallisuuksista ja mahdollisista rajoituksista.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Sopimus</h3>
              <p className="text-gray-600 mb-4">Asiakkaan ja Palveluntarjoajan välinen sopimus, joka koostuu näistä ehdoista, tilaussopimuksesta, palvelukuvauksesta ja mahdollisista erityisehdoista tai liitteistä.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Erityisehdot</h3>
              <p className="text-gray-600 mb-4">Kirjallisesti sovitut lisäehdot, jotka täydentävät tai muuttavat näitä Sopimusehtoja.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Lainsäädäntö</h3>
              <p className="text-gray-600 mb-4">Kaikki soveltuva Suomen laki, EU-lainsäädäntö ja viranomaisten antamat sitovat määräykset ja ohjeet, joita Palvelun tuottamiseen ja käyttöön sovelletaan.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sopimuksen syntyminen</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Sopimuksen syntyminen</h3>
              <p className="text-gray-600 mb-4">Sopimus Asiakkaan ja Palveluntarjoajan välillä syntyy, kun Asiakas on saanut kirjallisen tilausvahvistuksen. Palveluntarjoaja pidättää oikeuden muuttaa tai peruttaa tilauksen, jos olosuhteet sitä vaativat.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Osapuolten sitoutuminen</h3>
              <p className="text-gray-600 mb-4">Sopimuksen syntymisen jälkeen Palveluntarjoaja sitoutuu toimittamaan Palvelun näiden Sopimusehtojen, Palvelukuvauksen ja sovellettavan lainsäädännön mukaisesti. Asiakas sitoutuu puolestaan maksamaan sovitut maksut ja käyttämään Palvelua Sopimusehtojen sekä muiden sovittujen ehtojen mukaisesti.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Voimassaoloaika</h3>
              <p className="text-gray-600 mb-4">Sopimus astuu voimaan sopimuksen syntymispäivänä tai erikseen sovittuna aloituspäivänä ja on voimassa toistaiseksi, ellei toisin ole kirjallisesti sovittu.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.4 Määräaikainen sopimus</h3>
              <p className="text-gray-600 mb-4">Mikäli Sopimus on määräaikainen, se on voimassa sovitun ajan, minkä jälkeen Sopimus jatkuu toistaiseksi, ellei osapuolet sovi määräajan jatkamisesta tai muutoksista ennen sopimuskauden päättymistä.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.5 Ehtojen ensisijaisuus</h3>
              <p className="text-gray-600 mb-4">Mikäli Sopimusehtojen, Erityisehtojen, Palvelukuvauksen ja tilaussopimuksen välillä on ristiriitoja, sovelletaan ensisijaisesti Erityisehtoja, toissijaisesti tilaussopimusta, kolmanneksi Palvelukuvausta ja viime kädessä näitä yleisiä Sopimusehtoja.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Palvelun sisältö</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Palvelun sisältö</h3>
              <p className="text-gray-600 mb-4">Palvelu sisältää kulloinkin voimassa olevassa Palvelukuvauksessa määritellyt toiminnot ja ominaisuudet, joihin voi sisältyä esimerkiksi:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Asiakkaan henkilötietojen ja muiden luottamuksellisten tietojen valvonta internetissä, sosiaalisessa mediassa, rikollisverkostoissa ja muissa tietolähteissä.</li>
                <li>Ilmoitusten ja hälytysten toimittaminen Asiakkaalle, mikäli valvonnassa havaitaan tietovuotoja, tietoturvaloukkauksia tai muuta poikkeavaa toimintaa.</li>
                <li>Ohjeistukset ja neuvonta mahdollisten tietoturvauhkien tai tietomurtojen ennaltaehkäisemiseksi ja vaikutusten rajoittamiseksi.</li>
                <li>Mahdolliset lisäpalvelut, kuten tietoturvatestaukset, raportit tai asiantuntijatuki, mikäli niistä on erikseen sovittu.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Toimitus</h3>
              <p className="text-gray-600 mb-4">Palvelu toimitetaan Asiakkaalle Palveluntarjoajan hyväksymien tunnusten ja pääsynhallintamenetelmien avulla. Palvelun toimitus katsotaan tapahtuneeksi, kun Asiakas on saanut käyttöönsä tarvittavat tunnukset, pääsyn Palveluun tai muut sovitut käyttövalmiudet.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Palvelun käytettävyys</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoaja pyrkii varmistamaan Palvelun jatkuvan käytettävyyden ja minimoi suunniteltujen huoltokatkojen vaikutukset. Palveluntarjoajalla on kuitenkin oikeus tehdä Palveluun teknisiä muutoksia, huoltotöitä ja päivityksiä, jotka voivat tilapäisesti vaikuttaa Palvelun saatavuuteen.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Palvelun muutokset</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoajalla on oikeus kehittää ja muuttaa Palvelua, sen ominaisuuksia ja teknistä toteutusta. Mikäli muutoksella on olennainen vaikutus Palvelun sisältöön tai Asiakkaan oikeuksiin, Palveluntarjoaja ilmoittaa siitä Asiakkaalle kohtuullisessa ajassa ennen muutoksen voimaantuloa.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Hinnat ja maksuehdot</h2>

              <p className="text-gray-600 mb-4">5.1. Palvelun avausmaksu on 3,99 € per Palvelu. Mikäli Asiakas tilaa useamman Palvelun samanaikaisesti, veloitetaan avausmaksu vain kerran, yhteensä 3,99 € kaikista tilatuista Palveluista. Palvelu laskutetaan Palvelusopimuksessa sovitun hinnan mukaisesti ja määritellyllä laskutusvälillä. Lasku erääntyy maksettavaksi laskussa ilmoitettuna eräpäivänä ennen kyseisen laskutuskauden alkua. Maksun suorittaminen on edellytys palvelun käyttöoikeuden voimassaololle.</p>
              <p className="text-gray-600 mb-4">5.2. Mikäli Asiakas ei suorita erääntynyttä laskua, Palveluntarjoajalla on oikeus keskeyttää Palvelun käyttö joko väliaikaisesti tai pysyvästi. Myöhässä maksetusta laskusta voidaan periä viivästyskorkoa korkolain mukaisesti. Tilapäisesti keskeytetty Palvelu palautuu käyttöön heti, kun avoimet laskut on maksettu. Palveluntarjoajalla on oikeus veloittaa 15 €:n palvelumaksu Palvelun uudelleenkytkennästä.</p>
              <p className="text-gray-600 mb-4">5.3. Palveluntarjoajalla on oikeus muuttaa hintoja ilmoittamalla muutoksesta Asiakkaalle kirjallisesti vähintään 60 päivää ennen muutoksen voimaantuloa. Mikäli Asiakas ei hyväksy muutosta, hänellä on oikeus irtisanoa Sopimus ilmoittamalla siitä kirjallisesti vähintään 30 päivää ennen muutoksen voimaantuloa.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Asiakkaan velvollisuudet</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Oikeat ja ajantasaiset tiedot</h3>
              <p className="text-gray-600 mb-4">Asiakas sitoutuu antamaan Palveluntarjoajalle oikeat, täydelliset ja ajantasaiset tiedot sopimusta tehdessään sekä ylläpitämään näitä tietoja koko Sopimuksen voimassaolon ajan.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Käyttäjätunnusten suojaaminen</h3>
              <p className="text-gray-600 mb-4">Asiakas vastaa hänelle toimitettujen käyttäjätunnusten, salasanojen ja muiden kirjautumistietojen huolellisesta säilyttämisestä ja siitä, etteivät ne joudu ulkopuolisten haltuun. Asiakas vastaa kaikesta Palvelun käytöstä, joka tapahtuu hänen tunnuksillaan.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">6.3 Palvelun asianmukainen käyttö</h3>
              <p className="text-gray-600 mb-4">Asiakas sitoutuu käyttämään Palvelua vain laillisiin tarkoituksiin ja näiden Sopimusehtojen mukaisesti. Asiakas ei saa käyttää Palvelua tavalla, joka:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>rikkoo sovellettavaa lainsäädäntöä tai viranomaismääräyksiä</li>
                <li>loukkaa kolmansien osapuolten oikeuksia</li>
                <li>vaarantaa Palvelun tietoturvaa, toimintaa tai saatavuutta.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">6.4 Tietoturvayhteistyö</h3>
              <p className="text-gray-600 mb-4">Asiakkaan tulee viipymättä ilmoittaa Palveluntarjoajalle, jos hän havaitsee Palvelussa tietoturva-aukon, tietoturvaloukkauksen tai epäilee käyttäjätunnustensa joutuneen vääriin käsiin.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">6.5 Laitteet ja yhteydet</h3>
              <p className="text-gray-600 mb-4">Asiakas vastaa itse Palvelun käyttöön tarvittavista laitteista, ohjelmistoista ja internet-yhteydestä sekä niiden toimivuudesta ja tietoturvasta.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">6.6 Maksujen suorittaminen</h3>
              <p className="text-gray-600 mb-4">Asiakas sitoutuu maksamaan sovitut maksut eräpäivään mennessä Palveluntarjoajan ohjeiden mukaisesti. Maksun viivästyessä Palveluntarjoajalla on oikeus periä viivästyskorkoa korkolain mukaisesti sekä keskeyttää Palvelun käyttö siihen saakka, kunnes maksut on suoritettu.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">6.7 Vastuu omista tiedoista</h3>
              <p className="text-gray-600 mb-4">Asiakas vastaa siitä, että hänellä on oikeus luovuttaa Palveluntarjoajalle valvottavaksi annetut henkilötiedot ja muut tiedot. Asiakas vastaa myös tietojen oikeellisuudesta.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Palveluntarjoajan velvollisuudet</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Palvelun toimitus</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoaja sitoutuu tuottamaan Palvelun sovitun sisällön ja laajuuden mukaisesti, kuten määritelty Sopimusehdoissa, tilaussopimuksessa ja palvelukuvauksessa. Palvelu tuotetaan huolellisesti, ammattitaitoisesti ja voimassa olevaa lainsäädäntöä noudattaen.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7.2 Palvelun toimivuus ja virheet</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoaja vastaa siitä, että Palvelu toimii normaalikäytössä ja oikeissa ympäristöissä olennaisesti Sopimuksen mukaisesti. Jos Asiakas ilmoittaa havaitsemistaan virheistä kirjallisesti, Palveluntarjoaja pyrkii kohtuullisin keinoin korjaamaan tai kiertämään virheet viivytyksettä. Palvelua ei kuitenkaan taata virheettömäksi tai keskeytyksettä toimivaksi.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7.3 Palvelun keskeyttäminen</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoajalla on oikeus keskeyttää Palvelu kokonaan tai osittain seuraavissa tilanteissa:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Palvelun tai sen osan korjaus-, huolto- tai päivitystoimenpiteet sitä edellyttävät;</li>
                <li>Asiakkaan toiminta tai muu sen vastuulla oleva seikka uhkaa Palvelun toimintaa, turvallisuutta tai muita käyttäjiä;</li>
                <li>On syytä epäillä, että Käyttäjätunnukset ovat joutuneet kolmannen osapuolen hallintaan tai käytetään Sopimuksen vastaisesti;</li>
                <li>Palvelua käytetään lain tai viranomaismääräysten vastaisesti;</li>
                <li>Asiakas on rikkonut Sopimusta eikä ole korjannut rikkomusta 7 kalenteripäivän kuluessa kirjallisesta ilmoituksesta.</li>
              </ul>
              <p className="text-gray-600 mb-4">Palvelun tilapäinen keskeyttäminen ei vapauta Asiakasta Sopimuksen mukaisista maksuvelvoitteista.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7.4 Vastuun rajoitukset</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoaja ei vastaa Palvelujen soveltuvuudesta tiettyyn tarkoitukseen, kolmansien osapuolten oikeuksista tai virheistä heidän ohjelmistoissaan tai palveluissaan. Epäsuorista tai välillisistä vahingoista, kuten tulonmenetyksistä, liiketoiminnan keskeytyksestä tai tietojen menetyksestä, Palveluntarjoaja ei ole vastuussa, vaikka vahingon mahdollisuudesta olisi ilmoitettu etukäteen.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7.5 Virhevastuu</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoajan vastuu virheistä rajoittuu ainoastaan virheen korjaamiseen omalla kustannuksellaan.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. TIETOTURVA JA PALVELUN YLLÄPITO</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">8.1 Tietoturva</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoaja huolehtii, että järjestelmät, ohjelmistot ja tiedonsiirtomenetelmät täyttävät yleisesti hyväksytyt tietoturvastandardit. Henkilötietojen käsittelyssä noudatetaan EU:n yleistä tietosuoja-asetusta (GDPR), Suomen tietosuojalakia ja muuta soveltuvaa lainsäädäntöä.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">8.2 Ilmoitusvelvollisuus</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoaja ilmoittaa viipymättä Asiakkaalle, jos tietoturvaloukkaus tai muu merkittävä poikkeama havaitaan Asiakkaan tiedoissa, ja tekee yhteistyötä vaikutusten rajoittamiseksi.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">8.3 Ylläpito ja kehitys</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoaja vastaa Palvelun teknisestä ylläpidosta ja kehittämisestä. Palvelua voidaan muokata tai parantaa, kunhan muutokset eivät olennaisesti heikennä sovittua palvelutasoa ilman Asiakkaan suostumusta.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">8.4 Huolto- ja käyttökatkot</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoaja pyrkii minimoimaan huolto- ja käyttökatkot. Suunnitelluista huoltotöistä ilmoitetaan etukäteen, ja äkillisistä häiriöistä tiedotetaan heti, kun se on käytännössä mahdollista.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">8.5 Vastuun rajoitukset ylläpidossa</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoaja ei vastaa käyttökatkoksista, viiveistä tai virheistä, jotka johtuvat Asiakkaasta, kolmannen osapuolen palveluista tai tekijöistä, joihin sillä ei ole vaikutusmahdollisuutta, kuten ylivoimaisesta esteestä (force majeure).</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Immateriaalioikeudet</h2>
              <p className="text-gray-600 mb-4">Kaikki Palveluun liittyvät oikeudet, mukaan lukien tekijänoikeudet, tavaramerkit ja muut immateriaalioikeudet, kuuluvat Palveluntarjoajalle tai sen lisenssinantajille.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Tietosuoja ja henkilötietojen käsittely</h2>
              <p className="text-gray-600 mb-4">10.1. Palveluntarjoaja vastaa Palvelun suojaamisesta tietoturvauhkia vastaan noudattaen omia tietoturvakäytäntöjään. Tämä kattaa muun muassa tietoliikenneverkot, laitteistot, palvelutuotantotilat ja liiketilat, jotka suojataan yleisesti hyväksyttyjen tietoturvakäytäntöjen mukaisesti.</p>
              <p className="text-gray-600 mb-4">10.2. Palveluntarjoaja käsittelee Käyttäjän henkilötietoja Palvelun käytön yhteydessä Palvelun tarjoamisen ja siihen liittyvien tarkoitusten mukaisesti. Tarkemmat tiedot henkilötietojen käsittelystä löytyvät tietosuojaselosteesta.</p>
              <p className="text-gray-600 mb-4">10.3. Palveluntarjoaja ei vastaa yleisen tietoliikenneverkon tietoturvaan liittyvistä häiriöistä, vioista tai muista ongelmista, joihin sillä ei ole vaikutusmahdollisuutta, eikä näistä aiheutuvista vahingoista.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Palvelun saatavuus ja virhetilanteet</h2>
              <p className="text-gray-600 mb-4">Palveluntarjoaja pyrkii tarjoamaan Palvelun keskeytyksettä, mutta ei takaa Palvelun jatkuvaa saatavuutta. Palvelun mahdollisista katkoksista pyritään tiedottamaan etukäteen.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Sopimuksen voimassaolo ja irtisanominen</h2>
              <p className="text-gray-600 mb-4">Asiakkaalla, joka on tilannut kuukausilaskutteisen Palvelun, on oikeus peruuttaa tilauksensa neljäntoista (14) vuorokauden kuluessa tilauspäivästä. Peruutus tulee tehdä kirjallisesti lähettämällä ilmoitus osoitteeseen tuki@omaverkkoturva.fi tai käyttämällä Palveluntarjoajan verkkosivuilta löytyvää peruutuslomaketta.</p>
              <p className="text-gray-600 mb-4">Peruutusoikeus ei koske kertamaksullisia Palveluita, jotka on jo toteutettu tai toimitettu.</p>
              <p className="text-gray-600 mb-4">Peruutusilmoitus katsotaan saapuneeksi ja astuneeksi voimaan siitä hetkestä, kun Asiakas on lähettänyt peruutuspyynnön näiden Sopimusehtojen mukaisesti. Peruutusilmoituksessa tulee olla seuraavat tiedot:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Palvelun tilauspäivä</li>
                <li>Asiakkaan nimi</li>
                <li>Asiakkaan kotiosoite</li>
                <li>Sähköpostiosoite</li>
                <li>Selkeä maininta peruutettavista Palveluista</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">13. Irtisanomisoikeus</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Toistaiseksi voimassa oleva sopimus</h3>
              <p className="text-gray-600 mb-4">Asiakas voi irtisanoa toistaiseksi voimassa olevan sopimuksen päättymään aikaisintaan neljäntoista (14) päivän kuluttua irtisanomisilmoituksesta.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Määräaikainen sopimus</h3>
              <p className="text-gray-600 mb-4">Asiakas voi ilmoittaa määräaikaisen Sopimuksen päättymisestä aikaisintaan kuusi (6) kuukautta ennen määräajan päättymistä. Määräaikaista Sopimusta ei voi irtisanoa kesken sopimuskauden Asiakkaan aloitteesta, ellei kyseessä ole erityistilanne, kuten:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Asiakkaan joutuminen maksuvaikeuksiin sairauden tai muun hänestä riippumattoman syyn vuoksi</li>
                <li>Muu erityinen ja perusteltu syy, jonka vuoksi Sopimuksen pitäminen voimassa olisi Asiakkaan kannalta kohtuutonta</li>
              </ul>
              <p className="text-gray-600 mb-4">Näissä erityistilanteissa Asiakkaalla on oikeus irtisanoa määräaikainen Sopimus päättymään kahden (2) viikon kuluttua kirjallisen irtisanomisilmoituksen toimittamisesta Palveluntarjoajalle.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Palveluntarjoajan irtisanomisoikeus</h3>
              <p className="text-gray-600 mb-4">Palveluntarjoajalla on oikeus irtisanoa mikä tahansa Palvelu päättymään milloin tahansa ilmoittamalla siitä kirjallisesti Asiakkaalle.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">14. Sopimuksen siirtäminen</h2>
              <p className="text-gray-600 mb-4">14.1. Asiakkaalla ei ole oikeutta siirtää sopimusta kolmannelle osapuolelle ilman Palveluntarjoajan kirjallista suostumusta. Palveluntarjoajalla on oikeus siirtää sopimus liiketoimintansa yhteydessä.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">15. SOVELLETTAVA LAKI JA RIITOJEN RATKAISU</h2>
              <p className="text-gray-600 mb-4">15.1. Tähän Sopimukseen sekä siihen liittyviin tai siitä johtuviin erimielisyyksiin sovelletaan Suomen lakia, lukuun ottamatta kansainvälisiä lainvalintasäännöksiä. Mahdolliset riitatilanteet pyritään ensisijaisesti ratkaisemaan neuvottelemalla osapuolten kesken. Mikäli neuvottelut eivät johda ratkaisuun, riidat käsitellään Suomessa asianmukaisessa tuomioistuimessa. Kuluttaja-asiakkaalla on lisäksi oikeus saattaa Sopimusta ja siihen liittyvää palvelua koskeva riita kuluttajariitalautakunnan käsiteltäväksi.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">16. Vastuunrajoitus</h2>
              <p className="text-gray-600 mb-4">16.1. Mikäli Palveluntarjoaja ei korjaa Palvelussa ilmenevää Virhettä kohtuullisessa ajassa ja tämä aiheuttaa Asiakkaalle vahinkoa, Palveluntarjoajan kokonaisvastuu rajoittuu enintään viimeisten kolmen (3) kuukauden aikana maksettujen palvelumaksujen yhteissummaan Sopimuksen voimassaoloaikana, ellei pakottavasta lainsäädännöstä muuta johdu.</p>
              <p className="text-gray-600 mb-4">16.2. Palveluntarjoaja ei ole vastuussa erityisistä, epäsuorista, välillisistä, satunnaisista tai seurannaisista vahingoista, kuluista tai menetyksistä, jotka liittyvät tai aiheutuvat Palvelun käytöstä tämän Sopimuksen mukaisesti, paitsi jos pakottava lainsäädäntö määrää toisin.</p>
              <p className="text-gray-600 mb-4">16.3. Palveluntarjoaja ei vastaa vakuutuksiin liittyvistä asioista, kuten korvauksista, päätöksistä tai korvaussummista. Näistä asioista vastaa Trygg-Hansa Försäkring filial (Y-tunnus 516403-8662). Asiakkaan tulee olla suoraan yhteydessä Trygiin vahingon sattuessa sovelluksen kautta, puhelimitse numeroon 029 003 92 20 tai sähköpostilla osoitteeseen affinity@tryg.fi.</p>
              <p className="text-gray-600 mb-4">16.4. Palveluntarjoaja ei myöskään vastaa Asiakkaan tietojen tai tiedostojen tuhoutumisesta, katoamisesta tai muuttumisesta aiheutuvista vahingoista tai kustannuksista, kuten esimerkiksi tiedostojen uudelleenluomisesta johtuvista kuluista.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">17. Ylivoimainen este</h2>
              <p className="text-gray-600 mb-4">17.1. Kumpikaan osapuoli ei ole vastuussa viivästyksistä tai vahingoista, jotka johtuvat esteestä, joka on sen kohtuullisen vaikutusvallan ulkopuolella, jota se ei olisi voinut ennakoida palveluita tarjotessaan, eikä jonka seurauksia se olisi kohtuudella voinut välttää tai poistaa. Lakot, työsulut, saarron kaltaiset toimenpiteet sekä muut työtaistelutoimet katsotaan ylivoimaisiksi esteiksi myös silloin, kun osapuoli itse on osallisena tai vaikutuksen kohteena.</p>
              <p className="text-gray-600 mb-4">17.2. Mikäli Palveluntarjoajan alihankkija kohtaa ylivoimaisen esteen, tämä vapauttaa myös Palveluntarjoajan vastuusta, mikäli alihankintatehtävää ei voida siirtää toiselle taholle ilman kohtuutonta lisäkustannusta tai merkittävää viivettä.</p>
              <p className="text-gray-600 mb-4">17.3. Osapuoli on velvollinen ilmoittamaan toiselle osapuolelle viipymättä kirjallisesti, mikäli ylivoimainen este ilmenee. Vastaavasti osapuoli ilmoittaa esteen päättymisestä heti kirjallisesti toiselle osapuolelle.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">18. Sovellettava laki ja riitojen ratkaisu</h2>
              <p className="text-gray-600 mb-4">18.1. Sopimukseen sovelletaan Suomen lakia. Sopimuksesta aiheutuvat erimielisyydet pyritään ensisijaisesti ratkaisemaan neuvotteluteitse. Mikäli sovintoon ei päästä, riidat ratkaistaan Helsingin käräjäoikeudessa.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">19. Asiakastuki</h2>
              <p className="text-gray-600 mb-4">19.1. Asiakas voi ottaa yhteyttä Palveluntarjoajan asiakastukeen sähköpostitse tai muun ilmoitetun kanavan kautta. Asiakastuki palvelee arkipäivisin klo 10–16.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">20. PÄIVITYKSET JA HUOLTO</h2>
              <p className="text-gray-600 mb-4">20.1. Palvelut tarjotaan “sellaisina kuin ne ovat”, eikä niiden mukana tule muita takuita kuin ne, jotka on nimenomaisesti mainittu tässä Sopimuksessa tai palvelukohtaisissa käyttöehdoissa.</p>
              <p className="text-gray-600 mb-4">20.2. Palveluntarjoaja kehittää ohjelmistojaan jatkuvasti ja pidättää itselleen oikeuden muuttaa niiden toimintoja ja ominaisuuksia. Muutosten tavoitteena on Palveluiden parantaminen, ohjelmiston mukauttaminen markkina- tai lainsäädäntömuutoksiin sekä teknisten rajoitteiden huomioiminen. Tämän seurauksena ohjelmistoon voidaan lisätä uusia ominaisuuksia tai poistaa vanhoja.</p>
              <p className="text-gray-600 mb-4">20.3. Päivitykset, Virheiden korjaukset tai muut huoltotoimet voivat ajoittain aiheuttaa käyttökatkoja. Palveluntarjoaja ei voi taata, että Palvelut ovat koko ajan täysin käytettävissä.</p>
              <p className="text-gray-600 mb-4">20.4. Käyttäjä on vastuussa ohjelmistonsa päivittämisestä sen uusimpaan versioon heti, kun päivitys on saatavilla, jotta käytettävyys ja tietoturva säilyvät parhaalla mahdollisella tasolla.</p>
              <p className="text-gray-600 mb-4">20.5. Palveluntarjoaja voi päättää tiettyjen ohjelmistoversioiden ylläpidosta ja tuesta, mikä voi johtaa niiden käytön päättymiseen. Jos vanhempaa ohjelmistoversiota käytetään ylläpidon päättymisen jälkeen, se tapahtuu Käyttäjän omalla vastuulla. Tällainen käyttö voi myös aiheuttaa lisäkustannuksia esimerkiksi tiedonsiirron osalta.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">21. MUUT EHDOT JA RAJOITUKSET</h2>
              <p className="text-gray-600 mb-4">21.1. Palveluntarjoaja ei ole vastuussa häiriöistä, tietovuodoista tai muista ongelmista, jotka aiheutuvat kolmansien osapuolten toiminnasta tai muista Palvelun ulkopuolisista tekijöistä.</p>
              <p className="text-gray-600 mb-4">21.2. Palveluiden käyttö edellyttää, että Asiakas on luonnollinen henkilö ja täyttänyt 18 vuotta sekä että hänellä on oikeus tehdä sitovia sopimuksia.</p>
              <p className="text-gray-600 mb-4">21.3. Käyttäjä vastaa itse siitä, että hänen antamansa tiedot ovat Suomen lakien ja asetusten mukaisia, eivät loukkaa kolmansien osapuolien oikeuksia, ja että hänellä on tarvittavat oikeudet tietojen käyttöön.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">22. YHTEISTYÖKUMPPANIEN JÄRJESTELMÄT</h2>
              <p className="text-gray-600 mb-4">22.1. Palveluiden käyttö voi edellyttää kolmansien osapuolien, kuten yhteistyökumppaneiden ja alihankkijoiden, tarjoamien palveluiden hyväksymistä.</p>
              <p className="text-gray-600 mb-4">22.2. Palveluntarjoaja pidättää oikeuden ottaa käyttöön uusia yhteistyökumppaneita tai alihankkijoita sekä muuttaa olemassa olevia kumppaneita ja heidän tarjoamiaan palveluita milloin tahansa.</p>
              <p className="text-gray-600 mb-4">22.3. Käyttäjä hyväksyy, että Palveluntarjoaja voi hyödyntää yhteistyökumppaneiden ja alihankkijoiden palveluita muun muassa asiakastietojen turvalliseen säilytykseen ja hallinnointiin, asiakaspalveluun, ohjelmisto- ja ohjelmisto-osien toimittamiseen, laskutukseen sekä kaikkeen muuhun Palveluiden tarjoamiseen tarvittavaan toimintaan.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">23. RAJAPINNAT</h2>
              <p className="text-gray-600 mb-4">23.1. Palveluntarjoaja voi hyödyntää  rajapintaa luottotietojen tarkistamiseen, toimikelpoisuuden varmentamiseen sekä osoitetietojen vahvistamiseen.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">24. MUUTOKSET EHTOIHIN</h2>
              <p className="text-gray-600 mb-4">24.1. Palveluntarjoajalla on oikeus päivittää näitä ehtoja. Ajantasaiset ehdot löytyvät aina verkkosivuiltamme www.omaverkkoturva.fi. Mikäli ehdonmuutos olennaisesti heikentää Asiakkaan tai Käyttäjän asemaa, Palveluntarjoaja tiedottaa muutoksesta etukäteen kirjallisesti, jotta Asiakkaalla on mahdollisuus irtisanoa sopimus ennen muutoksen voimaantuloa. </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">25. Yhteystiedot</h2>
              <p className="text-gray-600 mb-4">
                Telendor Oy (OmaVerkkoturva)<br />
                Y-tunnus: 3475096-9<br />
                Sähköposti: tuki@omaverkkoturva.fi<br />
                Osoite: Yliopistonkatu 21 A, 40100 Jyväskylä
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GeneralTerms;
