const HelloWorld: {[isoLangCode: string]: string} = {
  en: 'Hello World',
  fr: 'Bonjour monde',
  he: 'שלום עולם',
  hi: 'नमस्ते दुनिया',
  ko: '여보세요 세계',
  te: 'హలో ప్రపంచం',
  uk: 'Привіт, світе',
  ur: 'ہیلو ورلڈ!'
};

export const defaultHelloWorld = HelloWorld.en;

export const HelloWorldKeys = Object.keys(HelloWorld);

export default HelloWorld;
