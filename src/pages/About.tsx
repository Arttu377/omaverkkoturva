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
            <h1 className="text-2xl font-semibold text-gray-900 mt-20 mb-2">Kuka olemme?</h1>

            <div className="space-y-16 text-gray-700 leading-relaxed">
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
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="bg-transparent md:col-start-1">
                  <img
                    src="/kuvapankki/Kappaleen teksti (49).png"
                    alt="Missiomme"
                    className="w-full max-w-[420px] h-auto object-contain bg-transparent"
                    style={{ background: 'transparent', backgroundColor: 'transparent' }}
                  />
                </div>
                <div className="md:col-start-2">
                  <h2 className="text-2xl font-semibold text-gray-900">Missiomme</h2>
                  <p className="mt-2">
                    Haluamme suojata suomalaisten nettikäyttöä ja antaa aidon turvallisuuden tunteen huijareita ja kehittyvää teknologiaa vastaan. Henkilötiedot ovat yksi arvokkaimmista resursseista, ja siksi panostamme niiden suojaamiseen täysillä.
                  </p>
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
                    src="/kuvapankki/Kappaleen teksti (46).png"
                    alt="Visiomme"
                    className="block ml-auto w-full max-w-[420px] h-auto object-contain bg-transparent"
                    style={{ background: 'transparent', backgroundColor: 'transparent' }}
                  />
                </div>
              </div>

              {/* Osa 4 - oikea */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:col-start-2">
                  <h2 className="text-2xl font-semibold text-gray-900">Lupaamme</h2>
                  <p className="mt-2">
                    Tietoturvasta puhutaan usein monimutkaisesti, mutta haluamme tehdä siitä ymmärrettävää ja konkreettista. Palvelumme on helppokäyttöinen, tarjoaa oikeaa suojaa ja sopii jokaisen kotitalouden arkeen. Tavoitteemme on, että OmaVerkkoturvan avulla jokainen voi tuntea olevansa turvassa digitaalisessa maailmassa.
                  </p>
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
