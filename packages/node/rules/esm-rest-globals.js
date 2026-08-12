import { restrictedGlobals } from '@stack-lint/base';

export default restrictedGlobals.concat([
  {
    name: 'module',
    message: '`module` is not available in ESM. Use `export` instead.',
  },
  {
    name: '__dirname',
    message:
      '`__dirname` is not available in ESM. Use `import.meta.dirname` instead.',
  },
  {
    name: '__filename',
    message:
      '`__filename` is not available in ESM. Use `import.meta.filename` instead.',
  },
]);
