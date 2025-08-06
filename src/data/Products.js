import bock from "../images/beers/bock.png"
import juniper from "../images/beers/juniper.png"
import kaski from "../images/beers/kaski.png"
import kesailta from "../images/beers/kesailta.png"
import kevatkylma from "../images/beers/kevatkylma.png"
import kuusenkerkka from "../images/beers/kuusenkerkka.png"
import luotolampi from "../images/beers/luotolampi.png"
import metsamarja from "../images/beers/metsamarja.png"
import pellava from "../images/beers/pellava.png"
import savusahti from "../images/beers/savusahti.png"
import talviyo from "../images/beers/talviyo.png"
import tervaporter from "../images/beers/terva.png"
import yotaivas from "../images/beers/yotaivas.png"

import bock2 from "../images/beers/no-bg/bock.png"
import juniper2 from "../images/beers/no-bg/juniper.png"
import kaski2 from "../images/beers/no-bg/kaski.png"
import kesailta2 from "../images/beers/no-bg/kesailta.png"
import kevatkylma2 from "../images/beers/no-bg/kevatkylma.png"
import kuusenkerkka2 from "../images/beers/no-bg/kuusenkerkka.png"
import luotolampi2 from "../images/beers/no-bg/luotolampi.png"
import metsamarja2 from "../images/beers/no-bg/metsamarja.png"
import pellava2 from "../images/beers/no-bg/pellava.png"
import savusahti2 from "../images/beers/no-bg/savusahti.png"
import talviyo2 from "../images/beers/no-bg/talviyo.png"
import tervaporter2 from "../images/beers/no-bg/terva.png"
import yotaivas2 from "../images/beers/no-bg/yotaivas.png"

// Shop background
import bockSbg from "../images/beers/bg/bock-bg1024.png"
import juniperSbg from "../images/beers/bg/juniper-bg1024.png"
import kaskiSbg from "../images/beers/bg/kaski-bg1024.png"
import kesailtaSbg from "../images/beers/bg/kesailta-bg1024.png"
import kevatkylmaSbg from "../images/beers/bg/kevatkylma-bg1024.png"
import kuusenkerkkaSbg from "../images/beers/bg/kuusenkerkka-bg1024.png"
import luotolmapiSbg from "../images/beers/bg/luotolampi-bg1024.png"
import metsamarjaSbg from "../images/beers/bg/metsamarja-bg1024.png"
import pellavaSbg from "../images/beers/bg/pellava-bg1024.png"
import savusahtiSbg from "../images/beers/bg/savusahti-bg1024.png"
import talviyoSbg from "../images/beers/bg/talviyo-bg1024.png"
import tervaSbg from "../images/beers/bg/terva-bg1024.png"
import yotaivasSbg from "../images/beers/bg/yotaivas-bg1024.png"

// Backgrounds
import bockBg from "../images/beers/bg/bock-bg1.png"
import juniperBg from "../images/beers/bg/juniper2.png"
import kaskiBg from "../images/beers/bg/kaski-bg.png"
import kesailtaBg from "../images/beers/bg/kesailta-bg.png"
import kevatkylmaBg from "../images/beers/bg/kevatkylma-bg.png"
import kuusenkerkkaBg from "../images/beers/bg/kuusenkerkka-bg.png"
import luotolampiBg from "../images/beers/bg/luotolampi-bg.png"
import metsamarjaBg from "../images/beers/bg/metsamarja-bg.png"
import pellavaBg from "../images/beers/bg/pellava-bg.png"
import savusahtiBg from "../images/beers/bg/savusahti-bg.png"
import talviyoBg from "../images/beers/bg/talviyo-bg.png"
import tervaBg from "../images/beers/bg/terva-bg.png"
import yotaivasBg from "../images/beers/bg/yotaivas-bg.png"

// Bottles
import bockBottle from "../images/beers/no-bg/bock1.png"
import juniperBottle from "../images/beers/no-bg/juniper1.png"
import kaskiBottle from "../images/beers/no-bg/kaski1.png"
import kesailtaBottle from "../images/beers/no-bg/kesailta1.png"
import kevatkylmaBottle from "../images/beers/no-bg/kevatkylma1.png"
import kuusenkerkkaBottle from "../images/beers/no-bg/kuusenkerkka1.png"
import luotolampiBottle from "../images/beers/no-bg/luotolampi1.png"
import metsamarjaBottle from "../images/beers/no-bg/metsamarja1.png"
import pellavaBottle from "../images/beers/no-bg/pellava1.png"
import savusahtiBottle from "../images/beers/no-bg/savusahti1.png"
import talviyoBottle from "../images/beers/no-bg/talviyo1.png"
import tervaBottle from "../images/beers/no-bg/terva1.png"
import yotaivasBottle from "../images/beers/no-bg/yotaivas1.png"

export const products = [
    {
        id: 1,
        name: "Mänty Bock",
        image: bock,
        image2: bock2,
        sbg: bockSbg,
        bg: bockBg,
        bottle: bockBottle,
        price: 4.90,
        alcohol: 6.7,
        volume: 0.33,
        style: "Tumma bock",
        fits: [
            'Nuotion äärelle', 
            'Ruokapöydän paras kaveri'
        ],
        story: [
            "Mänty Bock on kunnianosoitus suomalaisen metsän jylhälle rauhalle ja vanhoille juurille. Tämä tumma ja täyteläinen bock-olut syntyi halusta tuoda jotakin perinteikästä, mutta silti omaleimaista Mäntylän Panimon valikoimaan. ",
            "Innoitus sai alkunsa eräänä myöhäissyksyn iltana, kun panimon porukka istui ulkona vanhan männyn juurella. Ilmassa tuoksui kostea havumetsä, ja käsissä höyrysi ensimmäiset kokeelliset keitokset tulevasta bockista. Sen lämmin, maltainen runko ja hennon metsäinen katkeruus loivat heti tunteen siitä, että tämä olut ei ole pelkkä juoma – se on vuodenaika pullossa. ",
            "Mänty Bockissa maistuvat paahdetut maltaat, kevyt karamellisuus ja ripaus havuisuutta – aivan kuin sukeltaisi syvälle kuusikon siimekseen. Se on täydellinen valinta viileisiin iltoihin, rauhallisiin hetkiin ja niille, jotka etsivät syvyyttä jokaisesta siemauksesta."
        ]
    },
    {
        id: 2,
        name: "Juniper Pale Ale",
        image: juniper,
        image2: juniper2,
        sbg: juniperSbg,
        bg: juniperBg,
        bottle: juniperBottle,
        price: 4.70,
        alcohol: 5.2,
        volume: 0.33,
        style: "Pale Ale katajanmarjalla",
        fits: [
            'Kesäpäivän pelastaja', 
            'Mielen kohottaja'
        ],
        story: [
            "Juniper Pale Ale syntyi kaipuusta metsään – sinne, missä ilma on raikasta ja katajapensaat tuoksuvat auringon lämmössä. Tämä raikas, havuinen pale ale yhdistää modernin oluttyylin ja pohjoisen luonnon omaleimaisen sävyn: katajanmarjan. ",
            "Kataja ei ole pelkkä mauste – se on suomalaisen maiseman sielu. Panimolla haluttiin tuoda tuo maku olueen niin, että jokainen kulauksellinen veisi ajatukset kivikkorinteille ja valoisille mäntykankaille. Kevyen sitruksinen humalointi kohtaa katajan pihkaisen säväyksen, luoden persoonallisen mutta helposti lähestyttävän kokonaisuuden. ",
            "Juniper Pale Ale on kuin retkipäivän jälkeinen virkistävä hengähdys: raikas, kirkas ja mieleenpainuva."
        ]
    },
    {
        id: 3,
        name: "Kaski Red Ale",
        image: kaski,
        image2: kaski2,
        sbg: kaskiSbg,
        bg: kaskiBg,
        bottle: kaskiBottle,
        price: 4.80,
        alcohol: 5.5,
        volume: 0.33,
        style: "Red Ale",
        fits: [
            'Ruokapöydän paras kaveri', 
            'Nuotion äärelle'
        ],
        story: [
            "Kaski Red Ale sai alkunsa tarinasta, joka on yhtä vanha kuin suomalainen maanviljelys – kasken poltosta. Siinä, missä metsä palaa hallitusti ja uusi kasvu versoo tuhkasta, syntyy myös tämä olut: lämmin, syvä ja mausteinen. ",
            "Panimolla haluttiin luoda jotain, jossa yhdistyvät punertavan oluen pehmeys ja maun moniulotteisuus. Kaski Red Ale rakentuu paahteisista maltaista, joissa on ripaus karamellisuutta ja hentoa savuisuutta – kuin muisto hiljalleen kytevästä kaskeaamusta. ",
            "Olut on suunniteltu nautittavaksi rauhassa – iltanuotiolla, syksyisessä metsässä tai yksinkertaisesti silloin, kun kaipaat jotain täyteläistä ja tasapainoista. Kaski ei huuda – se kertoo."
        ]
    },
    {
        id: 4,
        name: "Kesäilta Session Ipa",
        image: kesailta,
        image2: kesailta2, 
        sbg: kesailtaSbg,
        bg: kesailtaBg,
        bottle: kesailtaBottle,
        price: 4.50,
        alcohol: 4.2,
        volume: 0.33,
        style: "Session IPA",
        fits: [
            'Kesäpäivän pelastaja', 
            'Mielen kohottaja'
        ],
        story: [
            "Kesäilta Session IPA on pullotettu hetki suomalaista kesää. Se tuo mieleen lämpimän kallion, hyttysten surinan ja ilta-auringon, joka ei malta laskea horisonttiin. Tämä kepeä ja raikkaasti humaloitu session IPA on suunniteltu nautittavaksi silloin, kun illat venyvät – ja jano pysyy kevyenä. ", 
            "Panimolla haluttiin tehdä olut, jossa on täysi maku mutta kevyempi ote. Sitruunainen, trooppinen humalointi antaa oluelle eloisan luonteen, mutta matala alkoholipitoisuus mahdollistaa sen, että yksi ei jää viimeiseksi. ",
            "Kesäilta on yhteisiä nauruja, mökkilaiturin rauhaa ja vapauden tuntua – ja juuri siksi tämä olut on olemassa."
        ]
    },
    {
        id: 5,
        name: "Kevätkylmä Lager",
        image: kevatkylma,
        image2: kevatkylma2,
        sbg: kevatkylmaSbg,
        bg: kevatkylmaBg,
        bottle: kevatkylmaBottle,
        price: 4.50,
        alcohol: 4.7,
        volume: 0.33,
        style: "Helles Lager",
        fits: [
            'Herää eloon -olut', 
            'Darran selättäjä'
        ],
        story: [
            "Kevät ei koskaan saavu huutaen. Se hiipii hiljaa yöpakkasten sekaan, rohkenee valoon ja sulattaa lumen kulman kerrallaan. Kevätkylmä Lager syntyi juuri tästä odotuksesta – siitä hetkestä, kun aurinko alkaa viipyä vähän pidempään ja ilma tuoksuu uudelta alulta. ",
            "Tämä vaalea, pehmeä ja hienostuneesti humaloitu lager on kunnianosoitus suomalaiselle keväälle. Kevätkylmä on täydellinen tasapaino raikkaan rapsakkuuden ja maltillisen makeuden välillä – kuin kylmä ilta auringonlaskun jälkeen, kun villapaita lämmittää vielä hetken ja kädessä on kylmä pullo jotain, mikä tuntuu oikealta."
        ]
    },
    {
        id: 6,
        name: "Kuusenkerkkä Ipa",
        image: kuusenkerkka,
        image2: kuusenkerkka2,
        sbg: kuusenkerkkaSbg,
        bg: kuusenkerkkaBg,
        bottle: kuusenkerkkaBottle,
        price: 5.20,
        alcohol: 5.5,
        volume: 0.33,
        style: "India Pale Ale maustettuna kuusenkerkällä",
        fits: [
            'Mielen kohottaja', 
            'Saunajuoman kuningas'
        ],
        story: [
            "Keväällä metsässä tuoksuu uudelta – maa herää, ja kuusenoksien päissä versoo vihreää. Siitä tuoreudesta, luonnon villistä voimasta ja kevään rohkeasta energiasta sai alkunsa Kuusenkerkkä IPA. ",
            "Ystävykset poimivat ensimmäiset kerkät käsin Mäntylän lähimetsästä, lisäten ne kokeellisesti IPA-eräänsä. Lopputulos yllätti: vahvasti humaloitu mutta pehmeä ja metsäinen, raikas ja havuinen – kuin keuhkot täynnä puhdasta metsäilmaa. ",
            "Kuusenkerkkä IPA yhdistää pohjoisen metsän aromit moderniin IPA-tyyliin. Se on tasapainoinen, hieman sitruksinen ja ilahduttavan erilainen – suomalainen metsä pullossa."
        ]
    },
    {
        id: 7,
        name: "Luotolampi Wheat Ale",
        image: luotolampi,
        image2: luotolampi2,
        sbg: luotolmapiSbg,
        bg: luotolampiBg,
        bottle: luotolampiBottle,
        price: 4.80,
        alcohol: 4.8,
        volume: 0.33,
        style: "Vehnäolut",
        fits: [
            'Kesäpäivän pelastaja', 
            'Herää eloon -olut'
        ],
        story: [
            "Hiljainen lammen pinta, jossa heijastuu pilvetön kesätaivas. Kaskisen saariston kupeessa oleva luotolampi oli paikka, johon ystävykset vetäytyivät hengittämään, ideoimaan – ja joskus myös maistelemaan uusia kokeiluja. Siellä syntyi ajatus oluesta, joka olisi yhtä lempeä ja kirkas kuin tuo hetki veden äärellä. ",
            "Luotolampi Wheat Ale on pehmeä, vaalean samea ja kevyesti sitruksinen vehnäolut, jossa pilkahtaa häivähdys kesän tuoksuja – appelsiininkuorta, hiivaa ja vaaleaa viljaa. Helposti lähestyttävä, mutta ei koskaan tylsä. Olut, joka rauhoittaa mutta ei turruta – kuin lintujen ääni ja laineiden liplatus kesäpäivänä."
        ]
    },
    {
        id: 8,
        name: "Metsämarja Stout",
        image: metsamarja,
        image2: metsamarja2,
        sbg: metsamarjaSbg,
        bg: metsamarjaBg,
        bottle: metsamarjaBottle,
        price: 5.40,
        alcohol: 5.9,
        volume: 0.33,
        style: "Marjastout",
        fits: [
            'Nuotion äärelle', 
            'Ruokapöydän paras kaveri'
        ],
        story: [
            "Kosteassa havumetsässä, poimittujen variksenmarjojen, mustikoiden ja puolukoiden keskellä syntyy muistoja, jotka eivät unohdu. Metsämarja Stout on kunnianosoitus suomalaiselle marjametsälle – hiljaiselle, mutta täynnä elämää. Se sai alkunsa, kun panijat halusivat yhdistää vahvan, paahteisen stoutin ja pohjoisen metsän omat makeat ja hapokkaat aarteet. ",
            "Tämä tumma olut tarjoaa syvän suklaan ja kahvin sävyjen taustalla kevyen vivahteen metsän marjoista – kuin hämärtyvä ilta mökillä, kun nokipannu kahisee ja käsissä on jotain samettista ja lämmittävää. Metsämarja Stout ei ole makea, vaan tasapainoinen – juuri sopivasti marjainen, jotta se herättää uteliaisuuden ja jättää jäljen."
        ]    
    },
    {
        id: 9,
        name: "Pellava Blonde Ale",
        image: pellava,
        image2: pellava2,
        sbg: pellavaSbg,
        bg: pellavaBg,
        bottle: pellavaBottle,
        price: 4.80,
        alcohol: 4.9,
        volume: 0.33,
        style: "Blonde Ale",
        fits: [
            'Kesäpäivän pelastaja', 
            'Darran selättäjä'
        ],
        story: [
            "Pellava Blonde Ale on kuin loppukesän pellon laita – vaalea, lempeä ja selkeälinjainen. Se sai alkunsa ajatuksesta luoda olut, joka olisi yhtä ajaton ja luonnollinen kuin pellavakangas: yksinkertainen, mutta täynnä sävyjä, kun sitä katsoo lähempää. ",
            "Pellava on helposti lähestyttävä, kevyt ja tasapainoinen ale, jossa viljaisuus saa seurakseen hienovaraisen kukkaisuuden ja aavistuksen hunajaista makeutta. Tämä olut ei huuda huomiota – se kutsuu viipyilemään. Ystävykset Mäntylän autotallipanimossa kehittivät sen ajatellen yhteisiä kesäiltoja, pitkiä pöytäkeskusteluja ja hetkiä, jolloin kaikki on kohdallaan."
        ]
    },
    {
        id: 10,
        name: "Savusahti Farmhouse Ale",
        image: savusahti,
        image2: savusahti2,
        sbg: savusahtiSbg,
        bg: savusahtiBg,
        bottle: savusahtiBottle,
        price: 5.60,
        alcohol: 6.2,
        volume: 0.33,
        style: "Farmhouse Ale, savumaltainen",
        fits: [
            'Nuotion äärelle', 
            'Saunajuoman kuningas'
        ],
        story: [
            "Savusahti Farmhouse Ale on kunnianosoitus suomalaiselle sahtiperinteelle ja maatilan arjelle. Se yhdistää perinteisen savuisuuden rustiikkiseen farmhouse-tyyliin – syntyen jossain savusaunan, viljapellon ja vanhan navetan välimaastossa. ",
            "Tämä olut sai alkunsa kokeilusta, jossa ystävykset halusivat yhdistää savumaltaan syvän aromin modernin, kuivahkon ja hiivavetoisen farmhouse-oluen rakenteeseen. Tuloksena syntyi uniikki makumaailma: savuisen leipäinen, kevyesti hedelmäinen ja rohkean maalaishenkinen. ",
            "Savusahti ei ole helpoin eikä tavanomaisin olut – mutta se on rehellinen. Se vie ajatukset syksyisiin haravointipäiviin, saunailtoihin maalla ja savun tuoksuun, joka jää vaatteisiin ja muistoihin."
        ]
    },
    {
        id: 11,
        name: "Talviyö Winter Ale",
        image: talviyo,
        image2: talviyo2,
        sbg: talviyoSbg,
        bg: talviyoBg,
        bottle: talviyoBottle,
        price: 5.60,
        alcohol: 6.5,
        volume: 0.33,
        style: "Winter Ale",
        fits: [
            'Nuotion äärelle', 
            'Ruokapöydän paras kaveri'
        ],
        story: [
            "Talviyö on olut, joka syntyi pimeästä, mutta lämmittää valolla. Se on kunnianosoitus suomalaiselle talvelle – niille hetkille, kun pakkanen paukkuu nurkissa, tähdet näkyvät kirkkaina ja lumi hiljentää kaiken muun. ",
            "Ystävykset halusivat luoda oluen, joka sopisi juuri näihin hetkiin: tumma, täyteläinen ja mausteinen, mutta ei raskas. Talviyö on maustettu ripauksella neilikkaa, appelsiininkuorta ja paahdettua mallasta – kuin joulun ja nuotion välimaasto pullossa. ",
            "Se ei vaadi kiirettä eikä ääntä – vain villasukat, hyvä tuoli ja ehkä vähän lunta ikkunan takana."
        ]
    },
    {
        id: 12,
        name: "Tervaporter",
        image: tervaporter,
        image2: tervaporter2,
        sbg: tervaSbg,
        bg: tervaBg,
        bottle: tervaBottle,
        price: 5.60,
        alcohol: 6.8,
        volume: 0.33,
        style: "Porter, tervalla maustettu",
        fits: [
            'Nuotion äärelle', 
            'Mielen kohottaja'
        ],
        story: [
            "Tervaporter on kuin harmaa marraskuun ilta, jolloin sade ropisee kattoon ja ulkona tuoksuu märkä metsä ja vanha savusauna. Tämä olut ei ole kiireiselle – se on niille, jotka haluavat pysähtyä hetkeksi ja maistaa menneisyyttä. ",
            "Inspiraatio Tervaporteriin syntyi vanhasta tervatynnyristä, joka löytyi panokaverien isoisän liiteristä. Sen haju, tummuus ja historia olivat kuin lupaus siitä, että tästä tehdään jotain rohkeaa. Ja niin tehtiin. ",
            "Tervaporter yhdistää paahteisen porterin pehmeän rungon lempeän, mutta selkeän tervan aromiin. Lopputulos on syvä, savuinen ja hienostuneesti karhea – kuin kansanperinne pullossa."
        ]
    },
    {
        id: 13,
        name: "Yötaivas Imperial Stout",
        image: yotaivas,
        image2: yotaivas2,
        sbg: yotaivasSbg,
        bg: yotaivasBg,
        bottle: yotaivasBottle,
        price: 6.20,
        alcohol: 9.2,
        volume: 0.33,
        style: "Imperial Stout",
        fits: [
            'Nuotion äärelle', 
            'Ruokapöydän paras kaveri'
        ],
        story: [
            "Yötaivas syntyi hiljaisuudesta – siitä hetkestä, kun tähdet syttyvät metsän ylle ja koko maailma pysähtyy. Se on kunnianosoitus arktiselle pimeydelle, jonka keskellä pieni valo, lämpö ja vahva maku tuntuvat suuremmilta kuin koskaan. ",
            "Tämä imperial stout on Mäntylän Panimon voimakkain olut. Sen sydän sykkii paahteesta, tummasta suklaasta, lakritsista ja kevyestä kahvin vivahteesta. Täyteläinen runko ja pitkä jälkimaku tekevät siitä nautiskeluoluen, joka ei sovi kiireeseen – vaan hetkiin, jolloin haluat olla läsnä. ",
            "Yötaivas on olut, joka kertoo tarinoita – nuotion äärellä, villahuopien alla tai kynttilänvalossa."
        ]
    },
]