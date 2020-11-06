const HelloWorld: {[isoLangCode: string]: string} = {
  ar: 'مرحبًا بالعالم',
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
  he: 'שלום עולם',
  hi: 'नमस्ते दुनिया',
  id: 'Halo Dunia',
  it: 'Ciao Mondo',
  ko: '여보세요 세계',
  mk: 'Здраво Свету',
  no: 'Hallo Verden',
  pt: 'Olá mundo',
  ru: 'Привет мир',
  sv: 'Hej Värld',
  ta: 'ஹலோ வேர்ல்ட்',
  te: 'హలో ప్రపంచం',
  uk: 'Привіт світе',
  ur: 'ہیلو ورلڈ',
  vi: 'Xin chào thế giới',
  zh: '你好 世界',
};

export const defaultHelloWorld = HelloWorld.en;

export const HelloWorldKeys = Object.keys(HelloWorld);

export default HelloWorld;
