const HelloWorld: {[isoLangCode: string]: string} = {
  en: 'Hello World',
  he: 'שלום עולם',
  ko: '여보세요 세계',
  te: 'హలో ప్రపంచం',
  uk: 'Привіт, світе',
};

export const defaultHelloWorld = HelloWorld.en;

export const HelloWorldKeys = Object.keys(HelloWorld);

export default HelloWorld;
