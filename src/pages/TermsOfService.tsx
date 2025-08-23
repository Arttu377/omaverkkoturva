import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TermsOfService = () => {
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
            
            <h1 className="text-4xl font-bold mb-8">Palvelusopimuksen käyttöehdot</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4">PALVELUT</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Palveluntarjoajan tehtävä</h3>
              <p className="text-gray-600 mb-4">
                Telendor Oy (OmaVerkkoturva) tarjoaa palveluita, jotka auttavat suojaamaan asiakkaiden tietoja ja laitteita. Palveluihin voi kuulua muun muassa:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Internet-liikenteen salaus, jotta tiedot pysyvät yksityisinä</li>
                <li>Haitallisen seurannan estäminen</li>
                <li>Hälytykset tietovuodoista ja tietoturvariskeistä</li>
                <li>Fyysinen suoja maksukorteille</li>
                <li>Neuvonta älylaitteiden ja tietoturvan käytössä</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Palvelukohtaiset käyttöehdot</h3>
              <p className="text-gray-600 mb-4">
                Nämä käyttöehdot täydentävät Palveluntarjoajan yleisiä sopimusehtoja ja tilaussopimusta. Niitä sovelletaan yhdessä muiden sopimusehtojen kanssa.
              </p>
              <p className="text-gray-600 mb-4">
                Käyttöehdot koskevat kaikkia Palveluntarjoajan palveluita, kuten Henkilösuoja-, OmaPuheturva- ja Täyssuoja-palveluja. Palvelujen tarkempi sisältö ja toiminnallisuudet on kuvattu palvelukohtaisissa kuvauksissa.
              </p>
              
              <p className="text-gray-600 mb-4">
                Henkilösuoja-palvelu valvoo asiakkaan tietoja tietovuotojen varalta monitorointipalvelun avulla. Valvottavia tietoja voivat olla esimerkiksi:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Henkilötunnus</li>
                <li>Puhelinnumero</li>
                <li>Luottotiedot</li>
                <li>Maksukortin tiedot</li>
                <li>Sähköpostiosoite</li>
              </ul>
              
              <p className="text-gray-600 mb-4">
                Jos palvelu havaitsee asiakkaan tietojen esiintymisen tietovuodossa, se lähettää ilmoituksen, kertoo tarkat tiedot tilanteesta ja antaa ohjeita, miten asiakkaan kannattaa toimia. Kun asiakas antaa palveluun käyttöön vaadittavat tiedot, hänet liitetään automaattisesti Trygg-Hansa Försäkring filialin (Tryg) ryhmävakuutuksen piiriin. Tämä vakuutus kattaa vahinkoja, jotka johtuvat identiteettivarkaudesta. Asiakas on vastuussa siitä, että syötetyt tiedot ovat oikeita ja laillisia. Palveluntarjoaja ei myönnä vakuutuksia eikä maksa korvauksia itse. Kaikki vakuutukseen liittyvät asiat hoidetaan suoraan Trygin kautta. Henkilösuoja-palvelun käyttö tarkoittaa, että asiakas hyväksyy Trygin kulloinkin voimassa olevat vakuutusehdot, jotka löytyvät palvelusta ja Trygin vakuutusehdoista.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Henkilösuoja-palvelu on saatavilla myös monikäyttäjäisenä lisenssinä</h3>
              <p className="text-gray-600 mb-4">
                Henkilösuoja-palvelu on saatavilla myös monikäyttäjäisenä lisenssinä, joka mahdollistaa joko yhden (1) tai neljän (4) alikäyttäjän lisäämisen Henkilösuoja-palveluun.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.4 OmaPuheturva-palvelu</h3>
              <p className="text-gray-600 mb-4">
                OmaPuheturva-palvelu auttaa suojaamaan asiakkaan puheluita ja viestintää tietoturvariskeiltä. Palvelu voi sisältää:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Puheluiden ja viestien tunnistuksen</li>
                <li>Hälytykset epäilyttävästä soitosta</li>
                <li>Ohjeet ja neuvot puhelimen ja sovellusten turvalliseen käyttöön</li>
              </ul>
              
              <p className="text-gray-600 mb-4">
                Asiakas on vastuussa siitä, että palveluun syötetyt tiedot ovat oikeita ja laillisia. Palveluntarjoaja ei maksa korvauksia asiakkaille mahdollisista vahingoista, vaan kaikki ilmoitukset ja ohjeet ovat suosituksia turvallisuuden parantamiseksi.
              </p>
              
              <p className="text-gray-600 mb-4">
                OmaPuheturva-palvelun käyttö tarkoittaa, että asiakas hyväksyy palvelun käyttöön liittyvät ehdot ja ohjeet, jotka löytyvät palvelusta sekä käyttöehdoista.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.5 OmaVerkkoturvan Täyssuoja-palvelu</h3>
              <p className="text-gray-600 mb-4">
                OmaVerkkoturvan Täyssuoja-palvelu sisältää seuraavat palvelut: Henkilösuoja ja Omapuheturva
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.6 Täyssuoja perhe-palvelu</h3>
              <p className="text-gray-600 mb-4">
                Täyssuoja perhe-palvelu sisältää seuraavat palvelut: Omapuheturva ja Henkilösuoja yhdellä pääkäyttäjällä ja neljällä (4) alikäyttäjällä.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.7 OmaVerkkoturva Täyssuoja yrityksille-palvelu</h3>
              <p className="text-gray-600 mb-4">
                OmaVerkkoturva Täyssuoja yrityksille-palvelu sisältää räätälöidyn määrän käyttöoikeuksia ja käyttäjiä Henkilösuoja-palveluun.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.2.1 Tekninen tuki ja kolmansien osapuolten palvelut</h3>
              <p className="text-gray-600 mb-4">
                Palveluntarjoaja voi tarjota asiakkaalle teknistä tukea osana palvelua. Tämä sisältää rajatun määrän puhelimitse annettavaa apua. Asiakkaalle ilmoitetaan palvelun käyttöönoton yhteydessä puhelinnumero, johon voi soittaa tukea varten.
              </p>
              
              <p className="text-gray-600 mb-4">
                Jotkut palvelut voivat sisältää kolmansien osapuolten tuottamia ohjelmistoja tai palveluita. Asiakkaan tulee hyväksyä kyseisten palveluiden omat ehdot, jos hän haluaa käyttää kaikkia palvelun ominaisuuksia.
              </p>
              
              <p className="text-gray-600 mb-4">
                Palveluiden käyttö voi aiheuttaa lisäkustannuksia, esimerkiksi tiedonsiirrosta, riippuen käytetystä laitteesta, internet-yhteydestä ja operaattoriverkosta. Nämä kulut ovat asiakkaan vastuulla, eikä palveluntarjoaja ole vastuussa niistä.
              </p>
              
              <p className="text-gray-600 mb-4">
                Palvelut voivat myös sisältää verkkosovelluksia, portaaleja tai kolmansien osapuolten ohjelmistoja. Asiakkaan tulee tutustua näiden käyttöehtoihin ja noudattaa niitä käyttäessään näitä sovelluksia. Palveluntarjoaja ei ole vastuussa mahdollisista ongelmista, joita voi syntyä kolmansien osapuolten sivustoista tai palveluista.
              </p>
              
              <p className="text-gray-600 mb-4">
                Esimerkiksi Palvelu käyttää Sentry.io-palvelua löytääkseen ja korjatakseen ohjelmistovirheitä. Sentry.io kerää teknistä tietoa, kuten laitteen tiedot, sovelluksen version ja virheilmoitukset, jotta palveluntarjoaja voi paikantaa ja korjata virheitä. Palvelun toiminnan varmistamisessa ja kehittämisessä voidaan lisäksi hyödyntää muita kolmansien osapuolten palveluita. Näiden palveluiden tietosuojakäytännöistä saa lisätietoja suoraan kyseiseltä palveluntarjoajalta.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.2.2 AWS-palvelimet ja käyttörajoitukset</h3>
              <p className="text-gray-600 mb-4">
                Palvelut toimivat Amazon Web Servicesin (AWS) palvelimilla. Palvelun käyttäjä sitoutuu samalla noudattamaan AWS:n kulloinkin voimassa olevia ehtoja.
              </p>
              
              <p className="text-gray-600 mb-4">
                Palvelua ei saa käyttää mihinkään lainvastaiseen tai vilpilliseen toimintaan. Käyttö ei saa loukata muiden oikeuksia, uhata tai edistää väkivaltaa, terrorismia tai muuta vakavaa vahinkoa, sisältää lapsiin kohdistuvaa hyväksikäyttöä tai rikkoutua muiden järjestelmien, ohjelmistojen tai verkkojen turvallisuutta. Lisäksi palvelua ei saa käyttää roskapostin, ei-toivottujen mainosten tai massaviestien lähettämiseen.
              </p>
              
              <p className="text-gray-600 mb-4">
                Käyttäjän on perehdyttävä palveluntarjoajan käyttöehtoihin ennen palvelun asentamista tai käyttämistä. Palvelun asentaminen, kopioiminen tai käyttäminen osoittaa, että käyttäjä ymmärtää ja hyväksyy ehdot. Jos käyttäjä ei hyväksy ehtoja, palvelua ei saa asentaa, kopioida tai käyttää.
              </p>
              
              <p className="text-gray-600 mb-4">
                Palveluun liittyy teknisiä rajoituksia, kuten verkkoyhteydet, tallennustila, käyttöjärjestelmä ja sijainti. Palvelu toimii vain Suomessa, eikä sen käyttö ole välttämättä sallittua muissa maissa. Käyttäjän tulee noudattaa paikallisia lakeja ja säädöksiä palvelua käyttäessään.
              </p>
              
              <p className="text-gray-600 mb-4">
                Henkilösuoja- ja Täyssuoja-palveluissa käytetään tietojen valvontaan yhteistyökumppani Defentry AB:n alustoja. Palveluntarjoaja voi jakaa asiakkaan tai käyttäjän puhelinnumeron ja sähköpostiosoitteen Defentry AB:lle, jotta palvelu voidaan aktivoida. Asiakkaan tai käyttäjän tulee hyväksyä Defentry AB:n käyttöehdot voidakseen käyttää Henkilösuoja- tai Täyssuoja-palvelua.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Palvelun käyttöoikeus ja rajoitukset</h2>
              
              <p className="text-gray-600 mb-4">
                Kun käyttäjä on maksanut sovitut maksut, hän saa oikeuden käyttää palvelua sovittujen ehtojen mukaisesti. Tämä käyttöoikeus on henkilökohtainen, eikä palvelua saa siirtää toiselle, muokata tai käyttää sopimuksen vastaisesti. Määräaikainen sopimus tarkoittaa, että sopimusta ei voi lopettaa ennen sovitun ajan päättymistä.
              </p>
              
              <p className="text-gray-600 mb-4">
                Käyttäjä saa asentaa palvelun vain sille määritetylle laitemäärälle, joka on ilmoitettu palvelussa, laskussa tai sopimuksessa. Palvelua saa käyttää vain näissä laitteissa. Käyttäjä ei saa:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>jakaa palvelua tai sen osia kolmansille,</li>
                <li>lähettää palvelua sähköisesti muille,</li>
                <li>kopioida palvelua muille,</li>
                <li>muokata, kääntää, myydä, vuokrata tai tehdä johdannaisteoksia palvelusta tai sen tiedostoista.</li>
              </ul>
              
              <p className="text-gray-600 mb-4">
                Käyttäjä ei saa purkaa palvelua tai sen tiedostoja lähdekoodiksi, paljastaa valmistusmenetelmiä tai muuttaa koodia yleisesti luettavaan muotoon, paitsi lain sallimissa rajoissa. Palvelu saattaa sisältää Palveluntarjoajan tai sen lisenssinmyöntäjien liikesalaisuuksia, eikä dokumentaatiota saa käyttää muuhun kuin palvelun käyttöön. Palveluntarjoajalla on oikeus estää palvelun käyttö käyttäjältä, joka ei noudata näitä ehtoja.
              </p>
              
              <p className="text-gray-600 mb-4">
                Käyttäjä ei saa antaa Palvelun aktivointikoodia tai tunnuksia toiselle, paitsi jos lisenssi sallii nimenomaisesti monikäyttäjäisen käytön. Palvelua saa käyttää vain siihen tarkoitukseen, jonka sopimus sallii, eikä käyttäjä saa muokata laitteen asetuksia vastoin sertifikaatin ehtoja. Käyttäjä ei saa hankkia, jakaa tai julkaista Palvelun avulla ohjelmistoja tai sisältöä.
              </p>
              
              <p className="text-gray-600 mb-4">
                Käyttäjä on vastuussa siitä, miten Palvelua käytetään. Palvelua ei saa käyttää toisen vahingoittamiseen. Käyttäjä ei saa kerätä, levittää tai julkaista yksityisiä tietoja, suojattua materiaalia, yrityssalaisuuksia, tekijänoikeudella suojattua aineistoa tai muita luottamuksellisia tietoja ilman lupaa. Palvelua ei saa käyttää laittomaan, häiritsevään, uhkaavaan, loukkaavaan tai tuhoavaan toimintaan.
              </p>
              
              <p className="text-gray-600 mb-4">
                Käyttäjä ei saa levittää lapsipornografiaa, eläinten hyväksikäyttöä kuvaavaa materiaalia, roskapostia tai haittaohjelmia. Käyttäjä ei saa käyttää Palvelua palvelunestohyökkäyksiin, tietojenkalasteluun, luvattomaan hakkerointiin tai muihin laittomiin toimiin. Käyttäjä ei saa tekeytyä toiseksi henkiloksi tai rikkoa lakia. Kaikki Palvelun sisällön hallinta tulee tehdä Palveluntarjoajan ohjeiden mukaisesti. Käyttäjä voi ottaa yhteyttä asiakaspalveluun oikeuksiin tai väärinkäytöksiin liittyvissä asioissa.
              </p>
              
              <p className="text-gray-600 mb-4">
                Kaikki oikeudet Palveluun ja sen sisältöön, mukaan lukien immateriaalioikeudet, kuuluvat Palveluntarjoajalle ja sen yhteistyökumppaneille. Käyttäjälle ei siirry omistusoikeutta Palveluun millään tavalla.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. TAKUU</h2>
              
              <p className="text-gray-600 mb-4">
                Palveluntarjoaja, sen yhteistyökumppanit ja jälleenmyyjät eivät takaa, että Palvelu tai siihen liittyvät ohjeet, tiedot ja dokumentit olisivat täysin oikeita, tarkkoja tai luotettavia. He eivät myöskään anna mitään muita oletettuja lupauksia tai takuita, kuten omistusoikeudesta, Palvelun toimivuudesta, suorituskyvystä, turvallisuudesta, kaupallisesta hyödyllisyydestä tai siitä, että Palvelu sopii tiettyyn käyttötarkoitukseen.
              </p>
              
              <p className="text-gray-600 mb-4">
                Palvelua ei ole suunniteltu eikä tarkoitettu käytettäväksi ympäristöissä, joissa ohjelmiston virhe voi aiheuttaa hengenvaaran tai vakavaa vahinkoa, kuten ydinvoimaloissa, lentokoneissa, elämää ylläpitävissä laitteissa tai asejärjestelmissä. Tällaisissa riskialttiissa tilanteissa Palveluntarjoaja ei anna mitään takuuta Palvelun toimivuudesta tai turvallisuudesta.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. VAHINGONKORVAUS JA VASTUUNRAJOITUS</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">5.1. Käyttäjän vastuu</h3>
              <p className="text-gray-600 mb-4">
                Käyttäjä vastaa itse Palvelun käytöstä. Palveluntarjoaja, sen työntekijät, yhteistyökumppanit tai muut toimittajat eivät ole vastuussa Käyttäjälle aiheutuvista vahingoista, kuten tiedon häviämisestä, laitteen toimintahäiriöistä tai taloudellisista tappioista.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">5.2. Korvausrajoitukset</h3>
              <p className="text-gray-600 mb-4">
                Jos vahinkoa kuitenkin syntyy, suurin mahdollinen korvaus rajoittuu enintään siihen summaan, jonka Käyttäjä on maksanut Palvelusta. Jos vahinko johtuu virheestä, korvaus rajoittuu maksettuun hintaan kuuden (6) kuukauden ajalta ennen virheen ilmenemistä.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">5.3. Henkilösuoja-palvelun rajoitukset</h3>
              <p className="text-gray-600 mb-4">
                Palveluntarjoaja ei takaa, että Henkilösuoja-palvelu havaitsee kaikki tietovuodot tai murrot, eikä ole vastuussa vahingoista, jotka johtuvat tietovuodoista, tietomurroista tai identiteettivarkaudesta, ellei laki toisin määrää.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">5.4. Rajapintojen vastuu</h3>
              <p className="text-gray-600 mb-4">
                Palveluntarjoaja ei ole vastuussa rajapintojen muutoksista, toimintahäiriöistä tai niiden lopettamisesta. Käyttäjä vastaa aina omista laitteistaan ja niihin tekemistään muutoksista.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">5.5. Lainvastainen toiminta</h3>
              <p className="text-gray-600 mb-4">
                Käyttäjä vastaa kaikista kuluista ja vaatimuksista, jotka johtuvat lainvastaisesta toiminnasta tai kolmansien osapuolten oikeuksien loukkauksista Palvelua käytettäessä.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">5.6. Kuluttajansuoja</h3>
              <p className="text-gray-600 mb-4">
                Käyttöehdot eivät rajoita kuluttajansuojalain tai muun pakottavan lainsäädännön mukaisia oikeuksia.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. TIETOJEN KERÄÄMINEN</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">6.1. Keräyslupa</h3>
              <p className="text-gray-600 mb-4">
                Käyttäjä antaa Palveluntarjoajalle luvan kerätä ja käsitellä laitteen ja verkon tietoja, jotta Palvelu voi toimia. Kerättävät tiedot riippuvat käytettävästä ohjelmistosta ja sen versiosta. Lisätietoja löytyy Palveluntarjoajan tietosuojaselosteesta.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">6.2. Käyttötietojen keräys</h3>
              <p className="text-gray-600 mb-4">
                Palveluntarjoaja kerää laitteen ja ohjelmiston käyttötietoja suojatakseen Käyttäjää haitalliselta seurannalta ja varmistaakseen turvallisen nettiyhteyden. Tähän voi kuulua esimerkiksi datan käyttömäärät, tilastot, tiedostojen metatiedot ja ohjelmiston käyttöön liittyvät tiedot.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">6.3. Henkilökohtaiset tiedot</h3>
              <p className="text-gray-600 mb-4">
                Palveluntarjoaja kerää myös tietoja, jotka voidaan yhdistää Käyttäjään. Näitä ovat esimerkiksi:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Käyttäjän itse antamat tiedot (esim. yhteystiedot, rekisteröintitiedot, tukipyyntöjen tiedot)</li>
                <li>Automaattisesti kerätyt tiedot Palvelun käytöstä (esim. laitetiedot, ohjelmiston tiedot, aktivointikoodit, käyttöjärjestelmä)</li>
                <li>Osittain tekniset ja tietoturvatiedot</li>
              </ul>
              
              <p className="text-gray-600 mb-4">
                Palveluntarjoaja voi käyttää alihankkijoita näiden tietojen käsittelyssä ja on velvollinen luovuttamaan tietoja, jos laki sitä vaatii.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">6.5. Kehitysehdotukset</h3>
              <p className="text-gray-600 mb-4">
                Käyttäjän Palveluntarjoajalle antamat ideat, kommentit ja kehitysehdotukset voidaan käyttää Palvelussa ilman erillistä korvausta. Palveluntarjoajalla on oikeus käyttää, muokata ja jakaa näitä ehdotuksia maailmanlaajuisesti ja muilla liiketoiminta-alueilla niin pitkään kuin laki tai kansainväliset sopimukset suojaavat tekijänoikeuksia ja teollisoikeuksia.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. PALVELUN KÄYTÖN RAJOITTAMINEN JA PÄÄTTÄMINEN</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">7.1. Väärinkäyttö</h3>
              <p className="text-gray-600 mb-4">
                Jos Palvelua käytetään väärin, näiden käyttöehtojen tai muiden sovellettavien ehtojen vastaisesti, Palveluntarjoaja voi lopettaa Käyttäjän käyttöoikeuden, rajoittaa Palvelun käyttöä tai olla uusimatta käyttöoikeutta ilman erillistä ilmoitusta.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">7.2. Käyttökatkot</h3>
              <p className="text-gray-600 mb-4">
                Palvelussa voi esiintyä ajoittaisia käyttökatkoja teknisten korjausten, päivitysten, huoltotöiden tai odottamattomien tilanteiden, kuten force majeure -tapauksien vuoksi. Palveluntarjoaja ja sen jälleenmyyjät eivät vastaa näistä käyttökatkoista aiheutuvista seurauksista, mutta tekevät parhaansa korjatakseen ongelmat nopeasti.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">7.3. Sopimusten päättyminen</h3>
              <p className="text-gray-600 mb-4">
                Jos Palvelun käyttö päättyy Palveluntarjoajan ja sen yhteistyökumppaneiden sopimusten vuoksi, käyttöoikeus voidaan poistaa ennakkoon ilman oikeutta korvaukseen. Käyttöön liittyvät rajoitukset pysyvät voimassa myös käytön päätyttyä.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Voimassaolo</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">8.1. Voimassaolo</h3>
              <p className="text-gray-600 mb-4">
                Nämä ehdot ovat voimassa toistaiseksi alkaen 14.8.2025.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Apple App Store -erikoisehdot</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9.1. App Store -tarjoilu</h3>
              <p className="text-gray-600 mb-4">
                Palvelu voidaan tarjota Applen App Store -sovelluskaupan kautta, mutta Apple ei vastaa huollosta tai tuesta.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9.2. Takuuprosessi</h3>
              <p className="text-gray-600 mb-4">
                Takuu- tai ongelmatilanteissa Käyttäjän tulee olla yhteydessä Palveluntarjoajan asiakaspalveluun. Apple ei ole vastuussa takuuprosessista.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9.3. Lainsäädännön vaatimukset</h3>
              <p className="text-gray-600 mb-4">
                Apple ei ole vastuussa Käyttäjän tai kolmansien osapuolten vaatimuksista, kuten siitä, että Palvelu ei täytä lakeja, määräyksiä tai kuluttajansuojavaatimuksia.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9.4. Immateriaalioikeudet</h3>
              <p className="text-gray-600 mb-4">
                Apple ei ole vastuussa immateriaalioikeuksien loukkaamista koskevista vaatimuksista, kuten tutkimisesta, puolustamisesta, sovittelusta tai korvauksesta.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9.5. Kauppasaarrot</h3>
              <p className="text-gray-600 mb-4">
                Palvelua ei saa käyttää maissa, joihin Yhdysvallat on asettanut kauppasaarron, eikä Käyttäjä saa olla listattu Yhdysvaltain kiellettyjen tai rajoitettujen osapuolten listalla.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9.6. Kolmansien osapuolten sopimusehdot</h3>
              <p className="text-gray-600 mb-4">
                Palvelun käyttö edellyttää kaikkien kolmansien osapuolten sopimusehtojen noudattamista.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9.7. Edunsaajat</h3>
              <p className="text-gray-600 mb-4">
                Apple ja sen tytäryhtiöt ovat kolmannen osapuolen edunsaajia näissä sopimuksissa ja voivat valvoa ehtojen noudattamista.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9.8. Ehtojen muutokset</h3>
              <p className="text-gray-600 mb-4">
                Palveluntarjoaja voi tehdä muutoksia näihin ehtoihin, jos Apple tai Yhdysvaltain hallinto katsoo sen tarpeelliseksi esimerkiksi lainsäädännön tai teknologian muutosten vuoksi.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9.9. Erikoisehtojen voimassaolo</h3>
              <p className="text-gray-600 mb-4">
                Nämä erikoisehdot ovat voimassa toistaiseksi alkaen 14.8.2025.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsOfService;
