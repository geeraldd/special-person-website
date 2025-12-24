import React, { useState } from "react";
import { motion } from "framer-motion";

const WhiteBear = (props) => (
  <svg width="26" height="28" viewBox="0 0 74 84" fill="none" {... props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#fff"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#f2f2f2"/>
    <circle cx="29" cy="53" r="4" fill="#888"/>
    <circle cx="45" cy="53" r="4" fill="#888"/>
  </svg>
);

const BrownBear = (props) => (
  <svg width="26" height="28" viewBox="0 0 74 84" fill="none" {...props}>
    <ellipse cx="37" cy="52" rx="30" ry="28" fill="#cc9966"/>
    <ellipse cx="23" cy="36" rx="8" ry="8" fill="#e6b87c"/>
    <ellipse cx="51" cy="36" rx="8" ry="8" fill="#e6b87c"/>
    <circle cx="29" cy="53" r="4" fill="#7c482b"/>
    <circle cx="45" cy="53" r="4" fill="#7c482b"/>
  </svg>
);

const letters = [
  {
    title: "Letter 1 — Thank You",
    content: "Hi vin, Happy Christmas! and advance Happy New Year! I really hope you're happy today, kayo ng pamilya mo. I'm wishing you all the best. I hope na this message makes you smile. Uhmm... Thank you vince, dahil anjan ka, ikaw mismo ay napakalaking biyaya na. Thank you for making me feel like I matter, Thank you for making me feel that I'm important , thank you for cheering me up every time I am down and sad, Thank you for making me happy. Thank you for the jokes. Thank you for the gifts, thank you for all your help. Thank you for listening to my problems and complains. Thank you for the advices you said, the reminders, I'm grateful. Thank you for the every goodnights, thank you for the hugs, the kiss, thank you for making me feel that someone care for me, that someone love me. Thank you for helping me be the very best version of myself. Vin I'm in debt with you, for all the things you have done and said. It is more than what you think of, you have been a great part of my life. Without you I won't be the person who I am today. Thank you with all my heart vince... We've known each other for a long time, 7 years at most, and even with the ups and downs, andito tayo ngayun oh. We've made it together. Happy Christmas ulit Vin, xoxo. 💐"
  },
  {
    title: "Letter 2 — YOU",
    content: "Hi vin, Hinde to love letter ha, mukhang love letter lang hahaha, This past days lage ka anjan para sakin and I appreciate everything. You've been a big part of my life and it's something I'll cherish and treasure palage. Even though ilang beses monako iniwan sa ere, sa totoo lang napatawad na kita even before you said sorry. Vin, no matter what happend to us, I think di mawawala yung part na importante ka sakin. I have always loved you vin! I have never liked someone else as much as how I like you. I want you to know that because I don't wanna live my life knowing I have regrets not telling you this.  Sa ngayun I don't want to be the one to put label and assume something between us, I kinda like how were sailing with our journeys now. Slow and steady. Pag pasensyahan monako ha kung minsan nagsusungit ako haha. Ket minsan wala tayong ma ayos na mapag usapan, it means a lot to me that at least we talk and ask how our days went by. Uhm I hope that you'll be able to trust me more, you still use your dummy acc kasi and vin dikopa talaga nakikita mukha mo, I dont have a single picture of you in my phone. Diko alam kung nahihiya kalang o may tinatago ka, o anong rason pa, and I have no rights to force you. Just know that nothing well change. Masyadong magulo at mapang husga ang mundo pero, Isa lang yung buhay natin, might as well spend it with the person we love diba. Hinde ako nag paparinig ha, nasasayo nayun haha. Sa ngayun enjoy lang tayo, let's keep chasing our dreams together, let's be successful together, let's become the best version of ourselves together, let's be happy together. Ano G kaba? ✨"
  },
  {
    title: "Letter 3 — My Story",
    content: "Warning vin medyo mahaba haba to haha, ik kwento klong yung naging buhay ko, some of it na naalala kopa. Uhmm enjoy reading I guess hehe. Dko masyadong tanda lahat ng mga nangyari ng bata pa ako. Na aalala klong nung nasa elementary pako ako yung pinaka matalino sa klase. Tanda ko yung guro namin non ay si Ma'am Corazon, strict syang teacher pero bilib ako sa kanya kasi may natututunan talaga ako. Minsan ako nag l lead sa flag ceremony, at palage ako honor student top 1 o 2 sa klase. Nakatira kami dati sa Leyte, Malitbogay, Pastrana, Leyte. Yung Bahay namin katabi lang ng bahay ng lola ng mama ko, tanda ko may alaga syang pagong non pero nawala nung pagkatapos ng bagyo. Malaki bakuran ni lola, merong puno ng eba na minsan kumukuha ako tas sina sawsaw ko sa asin, meron din syang puno ng kayumeto sa likod ng bahay. Nakakalungkot lang kasi d mn lang ako nakasama umuwi nung pumanaw si lola, that time may klase kasi kaya si mama at isang kapatid klong ang pumunta. Miss kona si lola, ang huling beses na nakita ko sya ay yung pa alis na kami papunta dito sa Bohol, naiyak pa sya non kasi ma m miss nya kami. Tanda ko dati sinasama kami ng tito namin manguha ng lanzones kasi may taniman si lola dati non, madami kaming nakukuha ilang balde at sako tas yung iba binebenta din namin. Nung mga panahon, araw bago yung Super Typhhon Yolanda, ang init sobra, pero dahil super typhoon napagdesisyunan nina mama na mag evacuate kami dun sa centro sa bahay ng kapatid ni lola kasi malaki din bahay nila at mas safe. Nung araw na mismo ng bagyo nagising ako non tas umuulan lang, nag kape sila tas si mama bumili pa ng tinapay, pero ilang minuto non lumakas na sobra yung ulan tas yung hangin, hanggang sa nag start na yung bagyo. Si mama na stock sya dun sa binilhan nya ng tinapay, at si papa nmn ay nag pa iwan sya dun sa bahay namin para mag bantay, tanda ko nun na sobrang lakas ng hangin at ulan tas yung bubung nilipad na, humawak nlng ako sa pader nun ng umiiyak kasi nililipad na lahat, hinde ko masyadong tanda na lahat ng mga nangyari kasi sobrang bilis. After nung bagyo gabi na nun umuulan padin tas s mama naka balik na, ang ginaw ng time nayun kasi basang basa kami lahat, nag ano lang sila ng itatakip sa taas para d maulanan tas sa may kilid na kami humiga. Kinabukasan grabe yung damage pagkalabas namin, dumiretso agad kami papunta sa bahay nmin at safe nmn din si papa, yung bahay namin na tumbahan ng puno ng nyog kaya sira talga, inano lang nmin kung anong kaya pang magamit at ni repair yung bahay para may matulugan kami, nung mga nagdaang araw takot ako sobra non pag gabi kasi sabi nila may mga tao daw na pumapasok ng bahay tas nagnanakaw at nang r rape. Ilang weeks o buwan ata napag desisyunan nina mama at papa na lumipat na kami dito sa Bohol, dito din nmn si papa lumaki. Kung tatanungin ako kung gusto koba ulit bumalik dun, siguro sasabihin ko hinde na muna, pero sa totoo lang miss kona umuwi dun, miss kona yung lugar, mga kaibigan ko dati, at lahat ng mga ala ala ko dun. Pagdating nmn dito sa Bohol dito kami nakitira sa pinsan n papa hanggang sa naka bahay na kami. Nung bago pako dito masasabi kong napaka bait ko talga haha, lage ako nauutusan at d ako nagrereklamo, siguro ganon nmn lahat pag bata pa. Sa school nmn tanda ko na b bully pako non, pero wala lang sakin yun, dito din samin pag transfere ka dika pedeng maging top 1 sa klase, kaya ket ako dapat top 1 pangalawa nlng ako, kakalipat klong nyan ha nag top 2 agad haha. grade 5 nako nung dito nako nag aral. Alam mo dati ang sipag sipag ko lage ako nauutusan ket sa kapitbahay namin, binibigyan lng ng pera pag katapos, merong isang beses na utusan ako mag buhat ng malalaking kahoy tas nalaman ni papa tas sabi nya wag nadaw ako mag pa utos sa iba kasi nga di nya daw ako inuutusan mag buhat tas sa iba klong gagawin yun. After non dnako nag pa utos sa kapitbahay haha. Nung nakatira pa kami dati sa pinsan ni papa si mama nag abroad ilang years din yun tas nabilhan kami ng mga gadgets, ganyan ganyan tas ako lang lahat nakakasira kaya pinapagalitan ako lage kaya di na kami binilhan. Nung si papa nmn yung nagtrabaho naiwan kami nina mama, nung mga panahon nayun nakikita ko yung ibang kapitbahay naming lalaki nag kaka interest kay mama, na h harras na si mama kasi yung lalaki mismo nag aaway away para lang kay mama, meron din yung time na yung kapitbahay namin pinag kalat nya na yung asawa nya nakikipag anohan kay mama, nakikita ko gabi gabi non na umiiyak si mama, maraming kapitbahay namin ang sinisiraan sya nag kakampihan para ganonin sya, dati binu bully ako dito sinasabi na wag daw ako papalag kasi dayo lang kami hinde kami talaga taga rito. Madaming pinag daanan si mama dati kasi sobrang toxic ng mga tao rito. Minsan nag aaway yung kapitbahay namin, nag sisigawan, nagmumurahan, minsan nag sasapakan na tas kumukuha na ng kutsilyo. Pero ilang araw okay na, iba nmn kina ka away nilang kapitbahay lang din. Diko gusto dito sa totoo lang, ang gulo pero nasanay nalng ako. Nag mana ako kay papa, ayaw ko yung may nakaka away ako kaya as much as possible ako lage umiintindi, pina pagalitan ko si mama pag nakikisaw saw sya sa iba kasi madalas syang ganon. Nung nag highschool ako, pag aaral lang lage nasa isip ko non, dati pag tinatanog anong gusto kong maging paglaki sinasabi ko gusto ko maging teacher, yan yung gusto ni mama para sakin. Honor student ako buong journey ng highschool ko hanggang sa gumraduate. Mahilig ako dati mag sulat ng mga poems, at mga kwento, meron nga akong story na natapos sinulat ko sya sa notebook, tas pina pabasa ko sa mga k klase ko dati kasi gusto ko malaman reaction nila. Inspired ako mag sulat lang ng magsulat dati kasi wala nmn akong masyadong iniisip hanggang sa naisipan ko sumali sa school publication. tas yun na lagay dun isa sa mga sinulat ko, ang proud kopa sa sarili ko non. Nung nag college nako alam mo nmn na to na gusto kona mag engineering, kaso na punta ako sa IT, di talaga ako magaling mag coding, lagi lang ako nangongopya kasi diko ma gets, mini m morize kopa dati yung buong code para lang maka pasa kasi ang hirap talaga. Diko sure pero siguro 1st year college ako nung malamn kong nag cheat si mama kay papa. Minsan twice a week, minsan gabi gabi talaga umaalis si mama. Na curios ako syempre kasi san sya pumupunta eh gabi na, tas kung umuwi sya madaling araw na. Sinasabi nya lang na pumunta sya kina ganyan, pinapunta sya kina ganon, pero d ako kumbinsido talaga, hanggang sa chineck ko phone nya nakita ko dun convo nila. Diko alam naramdaman ko nung time nayun, ilang days pa bago nag sink in lahat. Siguro dun na nag simula na namuo na yung galit ko kay mama, sinisigawan kona sya tas madalas nakong galit, minsan sa kapatid ko nailalabas. May mga gabi na umiiyak nalng ako pag na iisip ko yun, tas lahat ng galit ko diko ma ilabas, na ipon nlng sya sakin kaya siguro hinde nako naging masya talaga, lage akong galit, at ang negative konang tao. dinamn talaga ako ganto dati eh, Pag umaalis ako sa bahay puro masasama naiisip ko, pano pag na bangga sinsakyan ko, ano kaya maiisip nila pag wala na ako, Sa totoo lang I killed myself a lot of times sa isip ko vin, I've imagined how everything would went if I just be gone, everyday umiiyak ako silently. Na depressed ako masyado, problema sa school, sa bahay, madalas sa sarili ko. Sinisisi ko yung sarili ko ilang beses, ni dikona magawang mahalin sarili ko, pumapasok akong pangiti ngiti ket deep inside di ako okay, kunting bagay lang na d down agad ako, madalas natutulala nlng ako. Vin, bakit kaya nakakaya ng ibang tao mag cheat? bakit nila ipagpapalit yung binuo nilang pamilya para sa panandaliang saya? Naisip ko din baka human nature yung kasi may pangangailangan din si mama tas ilang years na wala si papa pero.. Ang sakit lang isipin. Kaya pinapangako ko sa sarili ko na once nasa realationship ako diko gagawin na mag cheat sa iba kasi alam ko kung gano kasakit. Mahal ko si mama sobra dati nung bata ako, I look up to her kasi sa dami ng sakripisyo nya at sikap samin pero ngayun I also hate her, but I still love her kasi sya mama ko. Minsan nangingibabaw na yung hate ko sa kanya and I feel sorry, kaya sinisisi ko ulit sarili ko. Up to now may mga gabi padin na umaalis si mama pero d na madalas once a week o minsan wala na. I'm that kind na palaging iniisip ket kunting bagay kaya na b big deal sakin lahat. There are times that I feel empty sa sarili ko, dikona alam deriksyon ng buhay ko, wala pakong napapatunayan sa sarili ko, takot pako mag desisyon para sa sarili ko kasi ayaw ko mag kamali. Ako yung panganay, ako yung breadwinner pero ang baba ng tingin ko sa sarili ko, and tamad kona, unproductive lage, ang dami dami kong insecurities sa sarili ko, at alam ko, alam ko na kaylangan ko talaga ayusin sarili ko. I'm always trying to be better araw araw vin, but sa totoo lang i just feel lonely. Hinde dahil sa nasa bahay lang ako, but deep inside talaga. Lately masaya ako, and I feel less down kasi you've been there with me, diko alam kong mabait kalang sakin or it means more, and I dont wanna expect anything, and assume na there's something, sa ngayun go lang ako sa flow. Siguro yun na lahat haha, haba na sobra eh. bye byee... 🥰"
  },
  {
    title: "Letter 4 — Poems",
    content: `Hi vin, actually gagawan sana kita ng sarili kong gawang tula, kaso wala ng time, tas na isipan ko ibigay sayo yung dati kong mga gawa kaso diko mahanap haha, limot kona san ko nailagay eh kaya ito na muna ha, promise bawi ako. 
    "You are in my heart, 
    You shall be in there forever, 
    My greatest wish is that you are happy when you think of me, 
    I am when I think of you."🥰`
  },
  {
    title: "Letter 5 — Greetings",
    content: "Naragsak a Paskua ken advance a Naragsak a Baro a Tawen kenka Vin ken iti pamilya mo. Wish ko nga agbalin a naragsak ken napno iti ayat ti sumaruno a tawen para kadatayo. Ad-adu koma ti bendision nga umay, ken nasayaat a salun-at para kenka ken iti pamilya mo. Honestly, wish ko talaga nga agkakadua tayo iti 2026—simple laeng a naragsak, awan ti agbaybay-a ken awan ti iwanan. Sapay koma ta uray ania ti mapaspasamak, agtalinaed tayo a napigsa ken agtultuloy ti ayat tayo. Salamat ta adda ka kanayon, ken ta iparamdam mo kaniak ti ayat ken karingayan. Ikaw ti rason no apay nga naragsak ti aldaw ko. Agannad ka kanayon, ken alalahanin mo nga addaak laeng ditoy para kenka. Ay-ayaten ka unay, gwapo. Ingat ka kanayon. 😏💕"
  }
];

export default function Letters() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <WhiteBear />
          <h2 style={{ 
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.2rem',
            color: '#C41E3A',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Letters for You
          </h2>
          <BrownBear />
        </div>

        {/* Right tool area */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button className="interactive-icon" title="Write a new letter">✍️</button>
          <button className="interactive-icon" title="Surprise">🎁</button>
        </div>
      </div>

      {letters.map((letter, idx) => (
        <motion. div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity:  1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          style={{
            position: "relative",
            margin: "14px auto",
            maxWidth: "640px",
            padding: "18px",
            background: openIdx === idx 
              ? "linear-gradient(135deg, #C41E3A, #D4AF37)"
              : "linear-gradient(135deg, #FFF9F3, #FFFBF5)",
            borderRadius: "18px",
            boxShadow: openIdx === idx
              ? "0 12px 32px rgba(196, 30, 58, 0.25)"
              : "0 4px 16px rgba(196, 30, 58, 0.1)",
            textAlign: "left",
            cursor: "pointer",
            border: openIdx === idx
              ? "2px solid rgba(212, 175, 55, 0.5)"
              : "2px solid rgba(212, 175, 55, 0.2)",
            transition: "all 0.3s ease"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display:  "flex", gap: 10, alignItems: "center" }}>
              <WhiteBear style={{ width: 28, height: 30 }} />
              <b style={{ 
                fontSize: "1.05rem",
                color: openIdx === idx ? "#fff" : "#165B33",
                fontFamily: "'Montserrat', sans-serif"
              }}>
                {letter.title}
              </b>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="interactive-icon" title="Share">🔗</button>
              <button className="interactive-icon" title="Favorite">⭐</button>
            </div>
          </div>

          {openIdx === idx && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity:  1, y: 0 }}
              style={{
                marginTop: "12px",
                color: openIdx === idx ? "#fff" : "#165B33",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.6,
                fontWeight: 500
              }}
            >
              {letter.content}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}