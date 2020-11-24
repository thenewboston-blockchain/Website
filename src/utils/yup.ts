import * as yup from 'yup';

// https://github.com/jaredpalmer/formik/issues/90
function equalTo(ref: any, message?: string) {
  return yup.string().test({
    exclusive: false,
    message: message || `Must be the same as ${ref.path}`,
    name: 'equalTo',
    test(value: any) {
      if (!value) return true;
      return value === this.resolve(ref);
    },
  });
}

function notEqualTo(ref: any, message?: string) {
  return yup.string().test({
    exclusive: false,
    message: message || `Can not be the same as ${ref.path}`,
    name: 'notEqualTo',
    test(value: any) {
      if (!value) return true;
      return value !== this.resolve(ref);
    },
  });
}

function callbackWithRef(ref: any, cb: (thisValue: any, refValue: any) => boolean, message: string) {
  return yup.number().test({
    exclusive: false,
    message,
    name: 'callbackWithRef',
    test(value: any) {
      if (!value) return true;
      return cb(value, this.resolve(ref));
    },
  });
}

yup.addMethod(yup.number, 'callbackWithRef', callbackWithRef);
yup.addMethod(yup.string, 'equalTo', equalTo);
yup.addMethod(yup.string, 'notEqualTo', notEqualTo);

export default yup;
