// ENTER button
const enterBtn = document.getElementById("enter");
const overlay = document.getElementById("overlay");

enterBtn.addEventListener("click", () => {
  overlay.classList.add("gone");
  document.body.classList.add("ready");
  setTimeout(() => (overlay.style.display = "none"), 900);
});

// Fake visitor counter
const counter = document.getElementById("counter");
if (counter) {
  const base = 1436289;
  const seed = base + Math.floor(Math.random() * 100);
  counter.textContent = String(seed).padStart(7, "0");
}

// Fake "duration" for the audio bar — increments a fake time
const timeEl = document.getElementById("current-time");
let secs = 0;
setInterval(() => {
  if (!document.body.classList.contains("ready")) return;
  secs++;
  const m = Math.floor(secs / 60);
  const s = String(secs % 60).padStart(2, "0");
  timeEl.textContent = `${m}:${s}`;
}, 1000);

// Play button just toggles a state
const play = document.getElementById("play-icon");
let playing = false;
play.addEventListener("click", () => {
  playing = !playing;
  play.textContent = playing ? "❚❚" : "▶";
});

// Gentle drift on some elements
document.querySelectorAll(".diiv1, .diiv2").forEach((el, i) => {
  let t = i * 100;
  setInterval(() => {
    t += 0.02;
    el.style.transform = `rotate(${(i === 0 ? -2 : 3) + Math.sin(t) * 1.5}deg)`;
  }, 40);
});

// ============================================
// LANGUAGE TOGGLE (EN / PT)
// ============================================
const translations = {
  en: {
    "enter.line1": "↳ cross the threshold",
    "enter.line2": "(the words are already there)",

    "aa.poetry": "Poetry",
    "aa.fiction": "Fiction",
    "aa.essays": "Essays",
    "aa.language": "Language",
    "aa.silence": "Silence",
    "aa.village": "Village",
    "aa.deadline": "Deadline",
    "aa.ghost": "Ghost",

    "bb.welcome": "Welcome!",
    "bb.sitefor": "a site for",

    "cc.found": "        .-~~~-.\n       (       )\n        `-~~~-'\n         found\n    ",

    "ee.clock": "   ,--~~,\n  (      )\n   `~~~~'\n   clock\n          ",
    "ee.trapped": "t<br>r<br>a<br>p<br>p<br>e<br>d<br> <br>i<br>n<br> <br>l<br>a<br>n<br>g<br>u<br>a<br>g<br>e",
    "ee.nowords": "There is no way to know how many words.",

    "ff.visitors": "visitors ",

    "gg.flip": "_,.-'~'-.,__,.- Flip A Word -.,__,.-'~'-.,_",
    "gg.pyramid": "          &\n         &&&\n        &&&&&\n       &&&&&&&\n      &&&&&&&&&\n         |||\n        pyramid of continuity\n        ",
    "gg.vortex": "        resemblance vortex\n         |||\n      &&&&&&&&&\n       &&&&&&&\n        &&&&&\n         &&&\n          &\n        ",
    "gg.asterism": "      ✧\n    ✧ ✧ ✧\n  ✧ ✧ ✧ ✧ ✧\n    ✧ ✧ ✧\n      ✧\n      silence Asterism\n      ",
    "gg.cavemen": "Whoever wants to speak has to bet. We're going to lose, we're all always going to lose. Let's bet that language really is forgetting. So when we try to say something, as cavemen, we point at the singular and say &ldquo;stone!&rdquo;, stone as I see it. But to the extent that the stone stops being this stone in my hand, under the particular perspective of my eyes, under the light present in this cave, language lies. Stone is now a word. And the word despairs, straining to touch reality. Will it create another one instead?",
    "gg.arrow": "Remember to Release the Arrow",
    "gg.credit": "&copy; 2026 by G.S.C. — all voices reserved",

    "ii.about": "bout the writer. Gabriel Stroka Ceballos holds a degree in Communications from Faculdade Cásper Líbero, in São Paulo, and completed a degree in Philosophy at the University of São Paulo (USP), graduating with a 9.2 GPA. That return to formal study was driven less by career strategy than by an old, unresolved curiosity about how thought and language shape one another.",
    "ii.publishedworks": "Published Works",
    "ii.languagetheory": "Language Theory",
    "ii.practice": "The literary practice began with poetry and has developed across poetry, fiction, and essays on language. In 2022, he published his poetry collection <em>Não foi assim que nos pediram os que morriam?</em> with Urutau, followed by the novel <em>Coração pequeno</em> with Cachalote in 2025. The novel is built around a sustained stream of consciousness, interrupted by ruptures in awareness.",
    "ii.alongside": "His literary writing has developed alongside a long professional engagement with language in advertising and communications, as well as academic work in Philosophy.",
    "ii.cycle": "the arrow follows the spirit<br>the arrow follows the spirit<br>the arrow follows the spirit<br>the arrow follows the spirit",

    "pub.explicacao": "poem &middot; 4th place, UFLA Literary Contest",
    "pub.voto": "poem &middot; finalist, 28th FEPOC",
    "pub.passaro": "poems &middot; Revista Sete Faces, 16th ed.",
    "pub.penas": "collective anthology &middot; Supernova",
    "pub.subversa": "Revista Subversa — No. 4",
    "pub.urutau": "poetry collection &middot; Urutau",
    "pub.siesta": "poem &middot; Jornal Relevo",
    "pub.coracao": "novel &middot; Cachalote",
    "pub.odisseu": "essay &middot; Revista O Odisseu",

    "pubworks.title": "Published Works",
    "pubworks.coracao": "novel &middot; Aboio",
    "pubworks.urutau": "poetry &middot; Urutau",
    "pubworks.ensaio-name": "Essay",
    "pubworks.ensaio": "essay &middot; Revista O Odisseu",

    "kk.contact": "&ldquo;C*o*n*t*a*c*t&rdquo;",
    "kk.elvate": "el vate",
    "kk.writeghost": "write to the ghost",
    "kk.languages": "languages",
    "kk.basedin": "based in",
    "kk.endnote": "— act, act, act.",

    "audio.silence": "Silence playing in the background",
  },
  pt: {
    "enter.line1": "↳ atravesse o umbral",
    "enter.line2": "(as palavras já estão lá)",

    "aa.poetry": "Poesia",
    "aa.fiction": "Ficção",
    "aa.essays": "Ensaios",
    "aa.language": "Linguagem",
    "aa.silence": "Silêncio",
    "aa.village": "Vilarejo",
    "aa.deadline": "Prazo",
    "aa.ghost": "Fantasma",

    "bb.welcome": "Bem-vindo!",
    "bb.sitefor": "um site para",

    "cc.found": "        .-~~~-.\n       (       )\n        `-~~~-'\n       encontrado\n    ",

    "ee.clock": "   ,--~~,\n  (      )\n   `~~~~'\n  relógio\n          ",
    "ee.trapped": "p<br>r<br>e<br>s<br>o<br> <br>n<br>a<br> <br>l<br>i<br>n<br>g<br>u<br>a<br>g<br>e<br>m",
    "ee.nowords": "Não há como saber quantas palavras.",

    "ff.visitors": "visitantes ",

    "gg.flip": "_,.-'~'-.,__,.- Jogue Uma Palavra -.,__,.-'~'-.,_",
    "gg.pyramid": "          &\n         &&&\n        &&&&&\n       &&&&&&&\n      &&&&&&&&&\n         |||\n     pirâmide da continuidade\n        ",
    "gg.vortex": "       vórtice da semelhança\n         |||\n      &&&&&&&&&\n       &&&&&&&\n        &&&&&\n         &&&\n          &\n        ",
    "gg.asterism": "      ✧\n    ✧ ✧ ✧\n  ✧ ✧ ✧ ✧ ✧\n    ✧ ✧ ✧\n      ✧\n     Asterismo do silêncio\n      ",
    "gg.cavemen": "Quem quer falar tem que apostar. Vamos perder, todos vamos sempre perder. Apostemos que a linguagem é mesmo esquecimento. Então quando tentamos dizer algo, como homens das cavernas, apontamos para o singular e dizemos &ldquo;pedra!&rdquo;, pedra como eu a vejo. Mas na medida em que a pedra deixa de ser esta pedra na minha mão, sob a perspectiva particular dos meus olhos, sob a luz presente nesta caverna, a linguagem mente. Pedra agora é uma palavra. E a palavra se desespera, se esforçando para tocar a realidade. Será que vai criar uma outra em troca?",
    "gg.arrow": "Lembre-se de Soltar a Flecha",
    "gg.credit": "&copy; 2026 por G.S.C. — todas as vozes reservadas",

    "ii.about": "obre o escritor. Gabriel Stroka Ceballos é formado em Comunicação pela Faculdade Cásper Líbero, em São Paulo, e concluiu a graduação em Filosofia pela Universidade de São Paulo (USP), com média 9,2. Esse retorno ao estudo formal foi motivado menos por estratégia de carreira do que por uma antiga, não resolvida, curiosidade sobre como pensamento e linguagem se moldam mutuamente.",
    "ii.publishedworks": "Obras Publicadas",
    "ii.languagetheory": "Teoria da Linguagem",
    "ii.practice": "A prática literária começou com a poesia e se desenvolveu em poesia, ficção e ensaios sobre a linguagem. Em 2022, publicou a coletânea de poemas <em>Não foi assim que nos pediram os que morriam?</em> pela Urutau, seguida do romance <em>Coração pequeno</em> pela Cachalote em 2025. O romance é construído em torno de um fluxo contínuo de consciência, interrompido por rupturas de percepção.",
    "ii.alongside": "A escrita literária se desenvolveu ao lado de um longo trabalho profissional com linguagem em publicidade e comunicação, assim como o trabalho acadêmico em Filosofia.",
    "ii.cycle": "a flecha segue o espírito<br>a flecha segue o espírito<br>a flecha segue o espírito<br>a flecha segue o espírito",

    "pub.explicacao": "poema &middot; 4º lugar, Concurso Literário UFLA",
    "pub.voto": "poema &middot; finalista, 28º FEPOC",
    "pub.passaro": "poemas &middot; Revista Sete Faces, 16ª ed.",
    "pub.penas": "antologia coletiva &middot; Supernova",
    "pub.subversa": "Revista Subversa — Nº 4",
    "pub.urutau": "coletânea de poemas &middot; Urutau",
    "pub.siesta": "poema &middot; Jornal Relevo",
    "pub.coracao": "romance &middot; Cachalote",
    "pub.odisseu": "ensaio &middot; Revista O Odisseu",

    "pubworks.title": "Obras Publicadas",
    "pubworks.coracao": "romance &middot; Aboio",
    "pubworks.urutau": "poesia &middot; Urutau",
    "pubworks.ensaio-name": "Ensaio",
    "pubworks.ensaio": "ensaio &middot; Revista O Odisseu",

    "kk.contact": "&ldquo;C*o*n*t*a*t*o&rdquo;",
    "kk.elvate": "el vate",
    "kk.writeghost": "escreva ao fantasma",
    "kk.languages": "idiomas",
    "kk.basedin": "baseado em",
    "kk.endnote": "— aja, aja, aja.",

    "audio.silence": "Silêncio tocando ao fundo",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.documentElement.setAttribute("lang", lang);

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem("gsc-lang", lang);
  } catch (_) {}
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

let savedLang = "en";
try {
  savedLang = localStorage.getItem("gsc-lang") || "en";
} catch (_) {}
applyLanguage(savedLang);
