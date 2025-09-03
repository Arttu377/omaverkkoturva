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
            {/* Main heading with background video */}
            <div className="relative text-center mb-16" style={{ height: '400px', marginLeft: '-50vw', marginRight: '-50vw', left: '50%', right: '50%', width: '100vw' }}>
              {/* Background video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
              >
                <source src="/Video4.mp4" type="video/mp4" />
                Video ei lataudu. Tarkista tiedostopolku.
              </video>
              
              {/* Content overlay */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
                <div className="p-8">
                  <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
                    Meistä
                  </h1>
                  <p className="text-xl text-white max-w-3xl mx-auto">
                    Verkkoturvaa helposti, yhdessä.
                  </p>
                </div>
              </div>
            </div>
            
            {/* OmaVerkkoturva osio */}
            <div className="text-center mb-16 mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                OmaVerkkoturva
              </h2>
              <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-4">
                <p>
                  OmaVerkkoturva on suomalainen toimija, joka suojaa kotitaloudet verkkohuijauksilta ja identiteettivarkauksilta helposti ja luotettavasti.
                </p>
                <p>
                  Huijaukset kehittyvät jatkuvasti, erityisesti tekoälyn myötä, ja niistä on tullut entistä ovelampia sekä vaikeammin tunnistettavia. Ne eivät enää rajoitu pelkkiin huijausviesteihin tai puheluihin, vaan voivat kohdistua yllättävillä tavoilla kehen tahansa.
                </p>
                <p>
                  OmaVerkkoturva on kehitetty tarjoamaan konkreettista turvaa arjen netinkäyttöön. Palvelumme tekee tietoturvasta ymmärrettävää ja käytännönläheistä ilman turhaa monimutkaisuutta. Se kokoaa yhteen kaiken olennaisen suojan helpossa ja arkeen sopivassa muodossa, jotta kotitaloudet voivat asioida verkossa turvallisin mielin.
                </p>
              </div>
            </div>
            
            <div className="space-y-16 text-gray-700 leading-relaxed">
              {/* Osa 1 - vasen */}
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8 items-center -ml-4 md:-ml-16">
                <div className="md:col-start-1">
                  <div className="bg-blue-50 rounded-full p-16 md:p-20 lg:p-24 mt-32 md:py-24 md:px-12 lg:px-16" style={{ maxWidth: 'none', minHeight: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Kulissien takaa</h2>
                    <div className="space-y-4 max-w-2xl">
                      <p className="text-sm md:text-base leading-relaxed">
                        Olemme Arttu Ruotsalainen ja Arttu Simanainen. Taustamme on tietoliikennepalveluissa, ja työssämme huomasimme nopeasti, kuinka paljon huijauksia oikeasti tapahtuu. Huijaukset eivät olleet koskettaneet suoraan lähipiiriämme, joten niiden kokonaismäärä oli todella yllättävä. Jopa enemmän yllätti se, kuinka ovelia huijaukset todellisuudessa ovat, eivätkä ne aina rajoitu pelkkiin huijauslinkkeihin tai huijauspuheluihin.
                      </p>
                      <p className="text-sm md:text-base leading-relaxed">
                        Huijarit kehittyvät jatkuvasti, erityisesti tekoälyn myötä, ja siksi tietoturvapalveluiden on pysyttävä mukana. Mietimme, mikä voisi tarjota oikeasti konkreettista suojaa huijauksia vastaan. Lähdimme kysymään suoraan asiakkailta, mitä he kokevat tärkeäksi. Näiden keskustelujen pohjalta syntyi palvelu, joka on oikeasti hyödyllinen ihan jokaiselle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Osa 2 - oikea */}
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Teksti ensin mobiilissa; desktopissa oikealla */}
                <div className="md:col-start-2 md:order-2">
                  <div className="bg-blue-50 rounded-full p-12">
                    <h2 className="text-2xl font-semibold text-gray-900">Missiomme</h2>
                    <p className="mt-2">
                      Haluamme suojata suomalaisten nettikäyttöä ja antaa aidon turvallisuuden tunteen huijareita ja kehittyvää teknologiaa vastaan. Henkilötiedot ovat yksi arvokkaimmista resursseista, ja siksi panostamme niiden suojaamiseen täysillä.
                    </p>
                  </div>
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
                  <div className="bg-blue-50 rounded-full p-12">
                    <h2 className="text-2xl font-semibold text-gray-900">Visiomme</h2>
                    <p className="mt-2">
                      Näemme, että identiteetti tulisi suojata samalla tavoin kuin kotivakuutus suojaa kotia, autovakuutus autoa ja lemmikkivakuutus lemmikkiä. Emme tyydy vain nykyiseen, vaan kehitämme palveluamme jatkuvasti huijareiden mukana, sillä uhat muuttuvat nopeasti.
                    </p>
                  </div>
                </div>
                <div className="bg-transparent md:col-start-2">
                  <img
                    src="/kuvapankki/Kappaleen teksti (80).png"
                    alt="Visiomme"
                    className="block ml-auto w-full max-w-[420px] h-auto object-contain bg-transparent"
                    style={{ background: 'transparent', backgroundColor: 'transparent' }}
                  />
                </div>
              </div>
            </div>

            {/* Osa 4 - Lupaamme osio erillisenä */}
            <div className="mt-32 text-gray-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Teksti ensin mobiilissa; desktopissa oikealla */}
                <div className="md:col-start-2 md:order-2">
                  <div className="bg-blue-50 rounded-full p-16 -ml-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Lupaamme</h2>
                    <p className="mt-2">
                      Tietoturvasta puhutaan usein monimutkaisesti, mutta haluamme tehdä siitä ymmärrettävää ja konkreettista. Palvelumme on helppokäyttöinen, tarjoaa oikeaa suojaa ja sopii jokaisen kotitalouden arkeen. Tavoitteemme on, että OmaVerkkoturvan avulla jokainen voi tuntea olevansa turvassa digitaalisessa maailmassa. Palvelumme on kuin arvopaketti: se tarjoaa kaiken tarvitsemasi turvan yhdessä helppokäyttöisessä kokonaisuudessa.
                    </p>
                  </div>
                </div>
                {/* Kuva toisena mobiilissa; desktopissa vasemmalla */}
                <div className="bg-transparent md:col-start-1 md:order-1">
                  <img
                    src="/kuvapankki/Kappaleen teksti (85).png"
                    alt="Lupaamme"
                    className="w-full max-w-[480px] h-auto object-contain bg-transparent"
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

