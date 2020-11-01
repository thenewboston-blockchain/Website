const HelloWorld: {[isoLangCode: string]: string} = {
  en: 'Hello World',
  ko: '여보세요 세계',
  uk: 'Привіт, світе',
  ru: 'Здравствуй, мир',
};

export const defaultHelloWorld = HelloWorld.en;

export const HelloWorldKeys = Object.keys(HelloWorld);

export default HelloWorld;
