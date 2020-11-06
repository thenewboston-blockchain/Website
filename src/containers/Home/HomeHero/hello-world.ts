const HelloWorld: {[isoLangCode: string]: string} = {
  ar: 'مرحبًا بالعالم',
  az: 'Salam Dünya',
  bn: 'স্বাগতম বিশ্ব',
  da: 'Hej Verden',
  de: 'Hallo Welt',
  el: 'Γεια σου κόσμε',
  en: 'Hello World',
  es: 'Hola Mundo',
  eu: 'Kaixo Mundua',
  fa: 'سلام دنیا',
  fj: 'Bula Vuravura',
  fr: 'Bonjour monde',
  gu: 'કેમ છો દુનિયા',
  he: 'שלום עולם',
  hi: 'नमस्ते दुनिया',
  hr: 'Pozdrav svijetu',
  id: 'Halo Dunia',
  ig: 'Ndewo Ụwa',
  it: 'Ciao Mondo',
  ko: '안녕 세상아',
  mk: 'Здраво Свету',
  nl: 'Hallo Wereld',
  no: 'Hallo Verden',
  pt: 'Olá mundo',
  ru: 'Привет мир',
  sv: 'Hej Värld',
  ta: 'ஹலோ வேர்ல்ட்',
  te: 'హలో ప్రపంచం',
  tr: 'Merhaba Dünya',
  uk: 'Привіт світе',
  ur: 'ہیلو ورلڈ',
  vi: 'Xin chào thế giới',
  yo: 'Mo ki Ile Aiye',
  zh: '你好 世界',
};

export const defaultHelloWorld = HelloWorld.en;

export const HelloWorldKeys = Object.keys(HelloWorld);

export default HelloWorld;
