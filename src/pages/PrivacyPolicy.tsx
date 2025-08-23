import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const PrivacyPolicy = () => {
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
            
            <h1 className="text-4xl font-bold mb-8">Tietosuoja</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4">TIETOSUOJALAUSUNTO</h2>
              
              <p className="text-gray-600 mb-4">
                OmaVerkkoturvalla pidämme henkilötietojen turvallista käsittelyä ja säilytystä äärimmäisen tärkeänä. Vahva tietosuoja edellyttää, että henkilöstö saa riittävän perehdytyksen ja koulutuksen. Siksi varmistamme, että jokainen työntekijämme ja alihankkijamme tuntee ja noudattaa tietojen käsittelyä koskevia ohjeita.
              </p>
              
              <p className="text-gray-600 mb-4">
                Tämä tietosuojailmoitus kuvaa, miten käsittelemme henkilötietoja palveluissamme. Se koskee kaikkia toimintoja, joissa henkilötietoja käsitellään.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Kerättävät tiedot</h3>
              <p className="text-gray-600 mb-4">
                Kun rekisteröidyt palveluumme tai liityt uutiskirjeen tilaajaksi, voimme kerätä sinusta henkilökohtaisia tietoja, kuten nimen, osoitteen, sähköpostiosoitteen, puhelinnumeron, henkilötunnuksen ja syntymäajan.
              </p>
              
              <p className="text-gray-600 mb-4">
                Asiakaspalvelun yhteydessä saatamme tallentaa tilanteeseen liittyviä tietoja, esimerkiksi nauhoittaa puheluita tai kirjata ylös keskustelun aikana esiin tulleita olennaisia asioita.
              </p>
              
              <p className="text-gray-600 mb-4">
                Lisäksi saatamme hyödyntää evästeitä ja vastaavia teknologioita kerätäksemme tietoa palvelun käytöstä ja kehittääksemme käyttäjäkokemusta entistä paremmaksi.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Mihin tietojasi hyödynnetään?</h3>
              <p className="text-gray-600 mb-4">
                Käsittelemme henkilötietojasi, jotta voimme tuottaa ja toimittaa palveluitamme, kehittää niitä edelleen sekä parantaa käyttäjäkokemustasi.
              </p>
              
              <p className="text-gray-600 mb-4">
                Tietoja voidaan hyödyntää muun muassa asiakaspalvelutilanteissa ja markkinointiviestien lähettämisessä, jos olet antanut tähän etukäteen luvan.
              </p>
              
              <p className="text-gray-600 mb-4">
                Joissain tapauksissa tietoja, kuten sähköpostiosoitetta, käytetään myös tietoturvapoikkeamien ja mahdollisten tietovuotojen tunnistamiseen.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Tietojen luovuttaminen</h3>
              <p className="text-gray-600 mb-4">
                Emme välitä henkilötietoja ulkopuolisille ilman lupaasi.
              </p>
              
              <p className="text-gray-600 mb-4">
                Voimme kuitenkin jakaa tietoja luotetuille yhteistyötahoille, alihankkijoille ja muille palveluntarjoajille, jotka osallistuvat palveluidemme tuottamiseen, laskutukseen tai markkinointiin.
              </p>
              
              <p className="text-gray-600 mb-4">
                Tietoja säilytetään EU:n yleisen tietosuoja-asetuksen (GDPR) vaatimusten mukaisesti. Asiakastietoja käsitellään sisäisessä järjestelmässä sekä turvallisilla palvelimilla, joita tarjoavat Google, Microsoft Azure ja AWS.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Tietoturvatoimet</h3>
              <p className="text-gray-600 mb-4">
                Suojaamme henkilötietosi asianmukaisilla teknisillä ja hallinnollisilla ratkaisuilla, joilla estetään luvaton käyttö, tietojen muuttaminen tai hävittäminen.
              </p>
              
              <p className="text-gray-600 mb-4">
                Edellytämme myös, että kaikki kumppanimme ja alihankkijamme sitoutuvat noudattamaan korkeatasoisia tietosuojakäytäntöjä.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Oikeutesi</h3>
              <p className="text-gray-600 mb-4">
                Sinulla on oikeus saada tietää, mitä henkilötietoja meillä on sinusta, pyytää virheellisten tietojen korjaamista ja vaatia tietojen poistamista. Voit myös tietyissä tilanteissa vastustaa henkilötietojesi käsittelyä.
              </p>
              
              <p className="text-gray-600 mb-4">
                Lisäksi voit pyytää tietojesi siirtämistä toiselle palveluntarjoajalle ja peruuttaa aiemmin antamasi suostumuksen milloin tahansa, jos käsittely perustuu suostumukseen.
              </p>
              
              <p className="text-gray-600 mb-4">
                Huomioithan, että osa palveluistamme edellyttää henkilötietojen käsittelyä, ja ilman näiden tietojen käyttöä palvelua ei voida toimittaa.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Tietojen säilytysaika</h3>
              <p className="text-gray-600 mb-4">
                Henkilötietoja säilytetään ainoastaan sen ajan, joka on välttämätöntä palveluiden tuottamisen tai lakisääteisten velvoitteiden täyttämisen kannalta.
              </p>
              
              <p className="text-gray-600 mb-4">
                Kun tietojen säilyttäminen ei enää ole tarpeen, ne poistetaan tai hävitetään turvallisella tavalla.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Yhteydenotto</h3>
              <p className="text-gray-600 mb-4">
                Jos sinulla on kysymyksiä tietosuojakäytännöistämme tai haluat käyttää oikeuksiasi liittyen henkilötietojen käsittelyyn, voit olla meihin yhteydessä sähköpostitse osoitteeseen tuki@omaverkkoturva.fi.
              </p>
              
              <p className="text-gray-600 mb-6">Viimeisin päivitys: 13.8.2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">TIETOSUOJASELOSTE</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1. REKISTERINPITÄJÄ</h3>
              <p className="text-gray-600 mb-4">
                Telendor Oy (OmaVerkkoturva)<br />
                Ytunnus: 3475096-9<br />
                Osoite: Yliopistonkatu 21<br />
                Puhelin: 0451211663
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2. TIETOSUOJAVASTAAVA</h3>
              <p className="text-gray-600 mb-4">
                Arttu Aleksi Simanainen<br />
                tuki@omaverkkoturva.fi
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3. REKISTERIN NIMI</h3>
              <p className="text-gray-600 mb-4">
                Telendor Oy:n (OmaVerkkoturva) asiakas- ja markkinointirekisteri
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">4. HENKILÖTIETOJEN KÄSITTELYN TARKOITUS, PERUSTE JA VAIKUTUKSET</h3>
              <p className="text-gray-600 mb-4">
                Käsittelemme henkilötietoja ensisijaisesti alla kuvattuihin käyttötarkoituksiin perustuvan oikeutetun edun tai sopimuksen täyttämisen perusteella. Mikäli lähetämme sinulle sähköisiä suoramarkkinointiviestejä, teemme sen ainoastaan antamasi suostumuksen pohjalta.
              </p>
              
              <p className="text-gray-600 mb-4">
                Keräämiämme henkilötietoja hyödynnetään asiakassuhteen ylläpidossa, palveluiden toimittamisessa ja kehittämisessä, laskutuksessa, asiakaspalvelussa, perinnässä, markkinoinnissa sekä tiedotteiden välittämisessä. Lisäksi tietoja voidaan käyttää asiakaspalautteen keräämiseen ja asiakastyytyväisyyden mittaamiseen.
              </p>
              
              <p className="text-gray-600 mb-4">
                Näiden tietojen käsittelyn avulla pystymme tarjoamaan asiakkaillemme parempaa palvelua sekä kehittämään tuotteita ja palveluita vastaamaan entistä tarkemmin heidän tarpeitaan. Käsittelyllä ei ole asiakkaisiin muita vaikutuksia kuin edellä mainitut.
              </p>
              
              <p className="text-gray-600 mb-4">
                Mahdollisia asiakkaita koskevia henkilötietoja käytämme palveluidemme ja tuotteidemme markkinointiin sekä muihin myynnin ja markkinoinnin toimenpiteisiin, kuten sähköpostitse lähetettäviin markkinointiviesteihin. Näiden tietojen käsittelyllä ei ole muuta vaikutusta kuin markkinoinnin kohdentaminen oikeille vastaanottajille.
              </p>
              
              <p className="text-gray-600 mb-4">
                Hyödynnämme henkilötietojen automaattista profilointia, jotta voimme kohdentaa markkinointia tarkemmin, tehostaa kampanjoiden toteutusta ja parantaa markkinointimme osuvuutta. Profiloinnin avulla voimme tarjota mainontaa, joka vastaa paremmin rekisteröidyn kiinnostuksen kohteita ja tarpeita, esimerkiksi aiempien ostojen tai palveluiden käytön perusteella.
              </p>
              
              <p className="text-gray-600 mb-4">
                Profiloinnissa voidaan käyttää muun muassa ikää, asuinpaikkaa, käytössä olevia palveluita, evästeillä kerättyjä teknisiä tietoja (esimerkiksi selaimen versio tai laitteen käyttöjärjestelmä), laskutustietoja sekä käyttäjän itse antamia tietoja. Näin voimme esimerkiksi suunnata viestintää alueellisesti ja tiedottaa siitä, milloin olemme asiakkaan kotipaikkakunnalla. Rekisteröidyllä on aina oikeus kieltää profilointi tämän tietosuojaselosteen kohdassa 9 kuvatulla tavalla.
              </p>
              
              <p className="text-gray-600 mb-4">
                Joissakin tapauksissa voimme käsitellä henkilötietoja myös esimerkiksi tuotekehityksen tai markkinointikampanjoiden suunnittelun yhteydessä. Tällöin pyrimme mahdollisuuksien mukaan anonymisoimaan tai pseudonymisoimaan tiedot ennen jatkokäsittelyä. Käytämme aina myös tämän selosteen kohdassa 8 mainittuja suojauskeinoja.
              </p>
              
              <p className="text-gray-600 mb-4">
                Nämä jatkokäsittelyt liittyvät läheisesti edellä mainittuihin ensisijaisiin käyttötarkoituksiin ja tukevat asiakassuhteiden kehittämistä. Ne eivät aiheuta rekisteröidylle muita suoria vaikutuksia. Emme käsittele henkilötietoja muihin kuin tässä selosteessa kuvattuihin tarkoituksiin.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">5. Rekisterin sisältämät tiedot</h3>
              <p className="text-gray-600 mb-4">
                Rekisteriimme tallennetaan tietoja asiakkaista, potentiaalisista asiakkaista sekä heidän mahdollisista edustajistaan. Henkilötietorekisteri voi sisältää muun muassa seuraavanlaisia tietoja:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Perustiedot ja yhteystiedot: nimi, postiosoite, puhelinnumero ja sähköpostiosoite</li>
                <li>Henkilöön liittyvät tunnistetiedot: henkilötunnus, syntymäaika</li>
                <li>Tekniset tunnistetiedot: asiakkaan mobiililaitteen tunniste (laite-ID)</li>
                <li>Palveluihin ja sopimuksiin liittyvät tiedot: tilaustiedot, laskutustiedot ja siirretyn datan määrä</li>
                <li>Yritykseen tai organisaatioon liittyvät tiedot: yrityksen tai organisaation nimi, titteli</li>
                <li>Itse annetut tiedot: esimerkiksi yhteydenottopyyntöjen yhteydessä annetut lisätiedot</li>
                <li>Asiakaspalveluun liittyvät tiedot: muistiinpanot ja merkinnät, jotka helpottavat asiointia jatkossa</li>
                <li>Digitaalisen asioinnin tiedot: uutiskirjeiden tilaustiedot, verkkosivujen käyttöön liittyvät tekniset tiedot</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">6. Tietojen lähteet</h3>
              <p className="text-gray-600 mb-4">
                Keräämme henkilötiedot pääasiassa suoraan asiakkaalta esimerkiksi sopimusta solmittaessa tai asiakkaan käyttäessä OmaVerkkoturvan palveluita.
              </p>
              
              <p className="text-gray-600 mb-4">
                Tietoja voidaan kerätä myös seuraavin tavoin:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>verkkosivujen lomakkeiden (yhteydenotto-, peruutus- ja tarjouspyyntölomakkeet), chat-palvelun ja asiakastapaamisten kautta</li>
                <li>verkkosivuston kävijäseurannan avulla</li>
                <li>rajapintojen kautta</li>
                <li>rekisteröidyn palveluiden käyttöön, viestintään ja asiointiin liittyvien tapahtumien perusteella</li>
                <li>ostetuista markkinointirekistereistä (yrityksistä ja niiden henkilöstöstä) sekä julkisista lähteistä</li>
                <li>evästeiden ja vastaavien teknologioiden avulla</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">7. Tietojen luovutukset ja siirrot EU-/ETA-alueen ulkopuolelle</h3>
              <p className="text-gray-600 mb-4">
                Luovutamme ja siirrämme henkilötietoja kolmansille osapuolille vain silloin, kun se on välttämätöntä lakisääteisten velvoitteiden täyttämiseksi tai palvelujen tuottamiseksi. Pääosin henkilötietojen käsittely tapahtuu EU:n ja Euroopan talousalueen sisällä, mutta tietyissä tilanteissa tietoja voidaan siirtää myös näiden alueiden ulkopuolelle soveltuvan tietosuojalainsäädännön edellyttämällä tavalla.
              </p>
              
              <p className="text-gray-600 mb-4">
                Henkilötietoja voidaan antaa seuraaville tahoille:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Viranomaiset: luovutamme tietoja toimivaltaisille viranomaisille lain edellyttämissä tilanteissa.</li>
                <li>Yhteistyökumppanit ja palveluntarjoajat: voimme siirtää tietoja ulkopuolisille kumppaneille ja palveluntarjoajille tässä tietosuojaselosteessa mainittuihin tarkoituksiin.</li>
              </ul>
              
              <p className="text-gray-600 mb-4">
                Defentry AB toimii osassa käsittelyä itsenäisenä rekisterinpitäjänä ja vastaa tällöin henkilötietojen käsittelystä omien käytäntöjensä mukaisesti. Lisätietoa heidän tietosuojakäytännöistään on saatavilla osoitteessa:
              </p>
              
              <p className="text-gray-600 mb-4">
                Jos tietoja siirretään EU-/ETA-alueen ulkopuolelle, siirto perustuu johonkin seuraavista laillisista perusteista:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Euroopan komissio on antanut päätöksen, jonka mukaan vastaanottajamaa tarjoaa riittävän tietosuojan tason.</li>
                <li>Olemme ottaneet käyttöön asianmukaiset suojatoimet, kuten Euroopan komission hyväksymät vakiolausekkeet. Näistä voi pyytää jäljennöksen ottamalla yhteyttä kohdassa Yhteydenotot mainitulla tavalla.</li>
                <li>Olet antanut nimenomaisen suostumuksesi tietojen siirtoon, tai siirrolle on muu lainmukainen peruste.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">8. REKISTERIN SUOJAUKSEN PERIAATTEET</h3>
              <p className="text-gray-600 mb-4">
                Kaikkia henkilötietoja käsitellään ehdottoman luottamuksellisesti. Asiakas- ja henkilötiedot tallennetaan asiakkuudenhallintajärjestelmään ja niiden varmuuskopiot säilytetään OmaVerkkoturvan omissa tietokannoissa EU-alueella sijaitsevilla suojatuilla palvelimilla. Tietoihin on pääsy ainoastaan niillä henkilöillä, joiden työtehtävät sitä edellyttävät, ja käyttö tapahtuu henkilökohtaisilla tunnuksilla ja salasanoilla.
              </p>
              
              <p className="text-gray-600 mb-4">
                Tietojen käsittelyssä noudatetaan korkeaa tietoturvatasoa ja järjestelmät, joilla tietoja käsitellään, on suojattu asianmukaisin teknisin ratkaisuin. Kaikkien työntekijöiden ja alihankkijoiden kanssa on solmittu salassapitosopimukset. Henkilötietojen käsittelyoikeus on rajattu ainoastaan niille työntekijöille ja yhteistyökumppaneille, joilla on siihen työtehtäviensä perusteella oikeus. Yrityksen ulkopuolelle siirrettävät henkilötiedot salataan ennen lähettämistä.
              </p>
              
              <p className="text-gray-600 mb-4">
                Tietoturva varmistetaan muun muassa vahvalla tunnistautumisella, palomuureilla ja fyysisellä pääsynhallinnalla. Henkilöstöä on koulutettu tietojen turvalliseen käsittelyyn ja säilyttämiseen. Rekisteritiedot varmuuskopioidaan säännöllisesti ja ne voidaan palauttaa tarvittaessa.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">9. REKISTERÖIDYN OIKEUDET</h3>
              <p className="text-gray-600 mb-4">
                Rekisteröidyllä on milloin tahansa oikeus kieltää omien henkilötietojensa käyttö suoramarkkinointiin sekä tällaiseen markkinointiin liittyvään profilointiin. Lisäksi voit halutessasi määrittää erillisiä suostumuksia tai kieltoja eri kanaville (esimerkiksi sallia kirjeitse lähetettävät tarjoukset, mutta estää sähköpostimarkkinoinnin).
              </p>
              
              <p className="text-gray-600 mb-4">
                Tietosuojalainsäädännön mukaisesti sinulla on oikeus:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Saada tieto siitä, miten henkilötietojasi käsitellään.</li>
                <li>Tarkastaa, mitä sinua koskevia tietoja on tallennettu ja saada niistä kopio.</li>
                <li>Pyytää virheellisten tai puutteellisten tietojen oikaisua.</li>
                <li>Vaatia tietojesi poistamista järjestelmistämme.</li>
                <li>Vastustaa tietojesi käsittelyä henkilökohtaiseen erityiseen tilanteeseen liittyvällä perusteella silloin, kun käsittely perustuu oikeutettuun etuumme tai sopimuksen täyttämiseen, tai pyytää käsittelyn rajoittamista.</li>
                <li>Saada omat tietosi jäsennellyssä, koneluettavassa muodossa ja siirtää ne toiselle rekisterinpitäjälle, jos tiedot on toimittanut itse, käsittely perustuu sopimukseen tai suostumukseen ja käsittely tapahtuu automaattisesti.</li>
                <li>Tehdä valitus tietojesi käsittelystä tietosuojaviranomaiselle Suomessa tai muussa EU-maassa, jossa asut tai työskentelet, jos katsot, että käsittelyssä rikotaan voimassa olevaa tietosuojalainsäädäntöä.</li>
              </ul>
              
              <p className="text-gray-600 mb-4">
                Suostumuksen peruutus ei vaikuta ennen peruuttamista tapahtuneen käsittelyn lainmukaisuuteen. Kun suostumuksesi on peruutettu, emme enää lähetä sinulle suoramarkkinointia, tee sinua koskevaa markkinointiprofilointia tai kohdenna mainontaa sinulle.
              </p>
              
              <p className="text-gray-600 mb-4">
                Oikeuksiesi käyttämistä koskevat pyynnöt tulee lähettää tietosuojaselosteen Yhteydenotot-kohdassa mainittuun osoitteeseen. Ennen pyynnön käsittelyä saatamme pyytää lisätietoja ja henkilöllisyyden vahvistamista. Joissakin tilanteissa voimme kieltäytyä pyynnön toteuttamisesta, mikäli siihen on lainmukainen peruste.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">10. TIETOJEN SÄILYTYSAIKA</h3>
              <p className="text-gray-600 mb-4">
                Telendor Oy (OmaVerkkoturva) säilyttää henkilötietoja rekisterissään vain niin kauan kuin se on liiketoiminnan kannalta tarpeellista, ellei rekisteröity pyydä tietojen poistamista aikaisemmin. Asiakkaiden tiedot pidetään tallessa koko asiakassuhteen ajan. Asiakassuhteen päätyttyä tiedot säilyvät enintään viiden vuoden ajan asiakassuhteen päättymisestä.
              </p>
              
              <p className="text-gray-600 mb-4">
                Potentiaalisten asiakkaiden tiedot säilytetään suoramarkkinointitarkoituksiin tarkoitetussa rekisterissä enintään yhden vuoden ajan, edellyttäen että et ole kieltänyt markkinointiviestien vastaanottamista. Suoramarkkinointikielto voidaan kuitenkin säilyttää rekisterissä pidempään, jotta sitä voidaan kunnioittaa.
              </p>
              
              <p className="text-gray-600 mb-4">
                Joissakin tapauksissa tietoja voidaan säilyttää pidempään, jos se on tarpeen lakisääteisten velvoitteiden, kuten kirjanpitolainsäädännön, täyttämiseksi tai jos sopimukset kolmansien osapuolten kanssa edellyttävät pidempää säilytysaikaa.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">11. EVÄSTEET JA VASTAAVAT TEKNOLOGIAT SEKÄ NIIDEN KÄYTTÖ</h3>
              <p className="text-gray-600 mb-4">
                OmaVerkkoturvan verkkosivusto hyödyntää evästeitä parantaakseen käyttäjäkokemusta. Jokainen eväste tallennetaan erikseen laitteellesi ja on luettavissa vain sillä palvelimella, joka sen on asettanut. Koska eväste on sidottu tiettyyn selaimeen, sen asetukset ja hallinta koskevat pääsääntöisesti vain kyseistä selainta. Eväste ei voi suorittaa ohjelmia, levittää viruksia tai muuta haitallista koodia, eikä se vahingoita laitetta tai tiedostoja. Pelkästään evästeen avulla käyttäjää ei voida tunnistaa henkilökohtaisesti.
              </p>
              
              <p className="text-gray-600 mb-4">
                Evästeitä käytetään muun muassa verkkosivuston käyttötilastojen keräämiseen, analysointiin ja palvelun kehittämiseen. Mikäli evästeiden käyttöä ei hyväksy, verkkosivuston ja joidenkin palveluiden toiminnallisuus saattaa olla rajoittunutta tai estynyt kokonaan.
              </p>
              
              <p className="text-gray-600 mb-4">
                Sivustolla voidaan käyttää myös kolmansien osapuolten evästeitä esimerkiksi mainontaa tai analytiikkaa varten. Käyttäjä voi milloin tahansa muuttaa tai peruuttaa antamansa suostumuksen evästeilmoituksen kautta.
              </p>
              
              <p className="text-gray-600 mb-4">
                Jos käyttäjä ottaa yhteyttä liittyen evästeiden hyväksyntään, tulee ilmoittaa hyväksyntään liittyvä tunniste sekä päivämäärä. Hyväksyntä koskee verkkotunnusta www.omaverkkoturva.fi.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Tietosuojaselosteen muutokset</h3>
              <p className="text-gray-600 mb-4">
                Palveluntarjoajalla on oikeus päivittää tietosuojaselostetta esimerkiksi lainsäädännön muuttuessa. Muutoksista pyritään ilmoittamaan hyvissä ajoin, ja käyttäjän on suositeltavaa tarkistaa seloste aina, kun siitä ilmoitetaan muutoksia.
              </p>
              
              <p className="text-gray-600 mb-6">Viimeisin päivitys: 14.8.2025.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Yhteydenotot</h3>
              <p className="text-gray-600 mb-4">
                Kaikki tietosuojaselostetta ja henkilötietojen käsittelyä koskevat pyynnöt tulee toimittaa rekisterinpitäjälle sähköpostitse: tuki@omaverkkoturva.fi
              </p>
              
              <p className="text-gray-600 mb-4">
                Lisäksi yhteydenotto on mahdollista tehdä verkkosivuston lomakkeen kautta, henkilökohtaisesti toimipisteessä tai kirjallisesti osoitteeseen:
              </p>
              
              <p className="text-gray-600 mb-4">
                Telendor Oy (OmaVerkkoturva)<br />
                Arttu Aleksi Simanainen<br />
                Yliopistonkatu 21 A, 40100 Jyväskylä
              </p>
              
              <p className="text-gray-600 mb-4">
                Jos käyttäjä haluaa perua suostumuksensa suoramarkkinointiin, sen voi tehdä esimerkiksi jokaisessa markkinointiviestissä olevan peruutuslinkin kautta tai ottamalla yhteyttä asiakaspalveluun osoitteessa tuki@omaverkkoturva.fi
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;