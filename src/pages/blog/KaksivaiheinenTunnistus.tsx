import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const KaksivaiheinenTunnistus: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Kaksivaiheinen tunnistus - Digitaalisen arjen välttämättömyys 2025" 
        description="Tutustu kaksivaiheisen tunnistuksen merkitykseen verkkoturvallisuudessa. Opi miten 2FA suojaa digitaalista identiteettiäsi."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-16">
              <img 
                src="/kuvapankki/Kappaleen teksti (63).png" 
                alt="Kaksivaiheinen tunnistus" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Kaksivaiheinen tunnistus
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Digitaalisen arjen välttämättömyys 2025
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Kaksivaiheinen tunnistus (two-factor authentication, 2FA) on noussut yhdeksi keskeisimmistä verkkoturvallisuuden käytännöistä vuonna 2025. Se tarjoaa yksityishenkilöille ja yrityksille tehokkaan tavan estää luvattomat kirjautumiset ja vähentää tietomurtojen riskiä. Yksinkertaistettuna 2FA tarkoittaa, että käyttäjän henkilöllisyys varmistetaan kahdella eri tavalla: ensin salasanalla ja sen jälkeen esimerkiksi kertakäyttökoodilla, biometrisellä tunnisteella tai autentikointisovelluksella.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tutkimusten mukaan kaksivaiheinen tunnistus vähentää tilimurtojen riskiä jopa 99 prosenttia verrattuna pelkkään salasanaan (Google, 2019). Tämä tekee siitä yhden tehokkaimmista ja helpoimmin käyttöönotettavista tietoturvatoimista.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Kaksivaiheinen tunnistus on käytännössä digitaalinen lisälukko. Jos salasana joutuu vääriin käsiin, toinen tunnistustapa estää rikollista pääsemästä sisään."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- OmaVerkkoturvan Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Miksi 2FA on välttämätön?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Salasanat yksinään eivät enää riitä suojaamaan käyttäjiä. Rikolliset hyödyntävät tietovuotoja, salasanalistoja ja automaattisia hyökkäystyökaluja murtautuakseen tileille. Koska ihmiset käyttävät edelleen usein samoja salasanoja useissa palveluissa, yksi tietovuoto voi avata oven useisiin tileihin (Verizon, 2024).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Kaksivaiheinen tunnistus tekee tästä huomattavasti vaikeampaa. Vaikka salasana olisi vuotanut, rikollisen täytyy vielä ohittaa toinen tunnistustaso, mikä on käytännössä mahdotonta ilman käyttäjän puhelinta tai muuta todennusvälinettä.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Olen nähnyt tilanteita, joissa pelkkä salasana olisi riittänyt rikolliselle. 2FA on ollut se ratkaiseva este, joka on pelastanut käyttäjän suuremmalta vahingolta."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Miten 2FA toimii arjessa?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kaksivaiheinen tunnistus voidaan toteuttaa monin eri tavoin. Yleisimmät keinot ovat:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Tekstiviestitse tai sähköpostitse lähetettävä kertakäyttökoodi</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Autentikointisovellus,</strong> kuten Google Authenticator tai Microsoft Authenticator
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Laitteeseen sidottu push-ilmoitus,</strong> joka hyväksytään yhdellä painalluksella
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Biometrinen tunniste,</strong> kuten sormenjälki tai kasvojentunnistus
                  </div>
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Teknologian kehittyessä yhä useammat palvelut siirtyvät sovelluspohjaiseen tai biometriseen tunnistukseen, jotka ovat turvallisempia kuin esimerkiksi tekstiviestit.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Turvallisuuden ei pitäisi olla vaikeaa. Kun kaksivaiheinen tunnistus tehdään käyttäjäystävälliseksi, se muuttuu automaattiseksi osaksi arkea."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Tulevaisuuden suunta
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vuonna 2025 kaksivaiheinen tunnistus on siirtymässä yhä vahvemmin kohti niin sanottua monivaiheista tunnistautumista (MFA), jossa voidaan hyödyntää useampaa eri tekniikkaa samanaikaisesti. Kehityksen tavoitteena on, että suojaus mukautuu käyttäjän tilanteeseen. Esimerkiksi korkean riskin kirjautumiset voivat vaatia useampia todennustapoja.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Kaksivaiheinen tunnistus ei kuitenkaan ole vain teknologiaa. Se on ennen kaikkea osa laajempaa kulttuurin muutosta, jossa yksityishenkilöt ymmärtävät oman digitaalisen identiteettinsä arvon ja suojaamisen tärkeyden.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <blockquote className="text-lg text-gray-800 italic">
                  "Meidän tehtävämme on tehdä tietoturvasta luonnollinen osa ihmisten päivittäistä toimintaa. Kaksivaiheinen tunnistus on siitä erinomainen esimerkki."
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">- Arttu Ruotsalainen</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yhteenveto</h3>
                <p className="text-lg text-gray-700">
                  Kaksivaiheinen tunnistus on vuonna 2025 välttämätön osa digitaalista turvallisuutta. Se vähentää tilimurtojen riskiä jopa 99 prosenttia ja tarjoaa tehokkaan suojan luvattomilta kirjautumisilta.
                </p>
                <p className="text-lg text-gray-700 mt-3">
                  Tulevaisuudessa 2FA kehittyy kohti monivaiheista tunnistautumista, mutta sen perusperiaate pysyy samana: lisäturva digitaaliselle identiteetille.
                </p>
              </div>

              {/* Sources */}
              <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lähteet</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Google (2019). New research: How effective is basic account hygiene at preventing hijacking. Google Security Blog. <a href="https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html" className="text-blue-600 hover:underline">https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html</a></li>
                  <li>Verizon (2024). Data Breach Investigations Report 2024. <a href="https://www.verizon.com/business/resources/reports/dbir./" className="text-blue-600 hover:underline">https://www.verizon.com/business/resources/reports/dbir./</a></li>
                  <li>ENISA (2023). Threat Landscape 2023. Euroopan unionin kyberturvavirasto. <a href="https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023" className="text-blue-600 hover:underline">https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default KaksivaiheinenTunnistus;
