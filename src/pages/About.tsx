import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <PageLayout>
      <SEO 
        title="Meistä - OmaVerkkoturva" 
        description="Tutustu OmaVerkkoturvaan"
        keywords={['meistä', 'omaverkkoturva']}
      />
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            {/* Main heading */}
            <div className="text-center mb-16 mt-16">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Meistä
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Haluamme, että verkkoturva on sinulle yhtä helppoa ja arkeen sopivaa kuin mikä tahansa muu palvelu.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-20 mb-2">Kulissien takaa</h2>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              {/* Osa 1 - vasen */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:col-start-1">
                  <p>
                    Olemme Arttu Ruotsalainen ja Arttu Simanainen. Taustamme on tietoliikennepalveluissa, ja työssämme huomasimme nopeasti, kuinka paljon huijauksia oikeasti tapahtuu. Huijaukset eivät olleet koskettaneet suoraan lähipiiriämme, joten niiden kokonaismäärä oli todella yllättävä. Jopa enemmän yllätti se, kuinka ovelia huijaukset todellisuudessa ovat, eivätkä ne aina rajoitu pelkkiin huijauslinkkeihin tai huijauspuheluihin.
                  </p>
                                     <p className="mt-4">
                     Huijarit kehittyvät jatkuvasti, erityisesti tekoälyn myötä, ja siksi tietoturvapalveluiden on pysyttävä mukana. Mietimme, mikä voisi tarjota oikeasti konkreettista suojaa huijauksia vastaan. Lähdimme kysymään suoraan asiakkailta, mitä he kokevat tärkeäksi. Näiden keskustelujen pohjalta syntyi palvelu, joka on oikeasti hyödyllinen ihan jokaiselle.
                   </p>
                </div>
              </div>

              {/* Osa 2 - oikea */}
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Teksti ensin mobiilissa; desktopissa oikealla */}
                <div className="md:col-start-2 md:order-2">
                  <h2 className="text-2xl font-semibold text-gray-900">Missiomme</h2>
                  <p className="mt-2">
                    Haluamme suojata suomalaisten nettikäyttöä ja antaa aidon turvallisuuden tunteen huijareita ja kehittyvää teknologiaa vastaan. Henkilötiedot ovat yksi arvokkaimmista resursseista, ja siksi panostamme niiden suojaamiseen täysillä.
                  </p>
                </div>
                {/* Kuva toisena mobiilissa; desktopissa vasemmalla */}
                <div className="bg-transparent md:col-start-1 md:order-1">
                  <img
                    src="/kuvapankki/Kappaleen teksti (75).png"
                    alt="Missiomme"
                    className="w-full max-w-[420px] h-auto object-contain bg-transparent"
                    style={{ background: 'transparent', backgroundColor: 'transparent' }}
                  />
                </div>
              </div>

              {/* Osa 3 - vasen */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:col-start-1">
                  <h2 className="text-2xl font-semibold text-gray-900">Visiomme</h2>
                  <p className="mt-2">
                    Näemme, että identiteetti tulisi suojata samalla tavoin kuin kotivakuutus suojaa kotia, autovakuutus autoa ja lemmikkivakuutus lemmikkiä. Emme tyydy vain nykyiseen, vaan kehitämme palveluamme jatkuvasti huijareiden mukana, sillä uhat muuttuvat nopeasti.
                  </p>
                </div>
                <div className="bg-transparent md:col-start-2">
                  <img
                    src="/kuvapankki/Kappaleen teksti (76).png"
                    alt="Visiomme"
                    className="block ml-auto w-full max-w-[420px] h-auto object-contain bg-transparent"
                    style={{ background: 'transparent', backgroundColor: 'transparent' }}
                  />
                </div>
              </div>

              {/* Osa 4 - vasen ja oikea */}
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Teksti ensin mobiilissa; desktopissa oikealla */}
                <div className="md:col-start-2 md:order-2">
                  <h2 className="text-2xl font-semibold text-gray-900">Lupaamme</h2>
                  <p className="mt-2">
                    Tietoturvasta puhutaan usein monimutkaisesti, mutta haluamme tehdä siitä ymmärrettävää ja konkreettista. Palvelumme on helppokäyttöinen, tarjoaa oikeaa suojaa ja sopii jokaisen kotitalouden arkeen. Tavoitteemme on, että OmaVerkkoturvan avulla jokainen voi tuntea olevansa turvassa digitaalisessa maailmassa. Palvelumme on kuin arvopaketti: se tarjoaa kaiken tarvitsemasi turvan yhdessä helppokäyttöisessä kokonaisuudessa.
                  </p>
                </div>
                {/* Kuva toisena mobiilissa; desktopissa vasemmalla */}
                <div className="bg-transparent md:col-start-1 md:order-1">
                  <img
                    src="/kuvapankki/Kappaleen teksti (74).png"
                    alt="Lupaamme"
                    className="w-full max-w-[380px] h-auto object-contain bg-transparent"
                    style={{ background: 'transparent', backgroundColor: 'transparent' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
