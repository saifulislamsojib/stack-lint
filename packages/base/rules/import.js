import testFiles from '../constants/testFiles.js';

export const devDepsImportAllowedFiles = [
  '{vite,vitest,eslint,next,postcss,jest,rollup,rsbuild,oxlint,webpack,parcel,storybook,playwright,cypress,babel,swc,tsup,unbuild,esbuild,astro,nuxt,svelte,tailwind,prettier,commitlint,stylelint,lintstaged}.config.{js,ts,mjs,mts,cjs}',
  ...testFiles,
];

export const unassignedImportFiles = [
  '**/*.css',
  '@testing-library/jest-dom',
  '@testing-library/jest-dom/vitest',
];

export default {
  'import-x/no-duplicates': 'error',
  'import-x/no-named-as-default': 'error',
  'import-x/no-named-as-default-member': 'error',
  'import-x/unambiguous': 'warn',
  'import-x/no-empty-named-blocks': 'error',
  'import-x/no-relative-packages': 'error',
  'import-x/no-self-import': 'error',
  'import-x/no-named-default': 'error',
  'import-x/no-absolute-path': 'error',
  'import-x/newline-after-import': 'error',
  'import-x/no-dynamic-require': 'error',
  'import-x/no-import-module-exports': 'error',
  'import-x/no-cycle': 'error',
  'import-x/no-useless-path-segments': 'error',
  'import-x/order': [
    'error',
    { groups: [['builtin', 'external', 'internal']] },
  ],
  'import-x/first': 'error',
  'import-x/no-mutable-exports': 'error',
  'import-x/no-amd': 'error',
  'import-x/no-deprecated': 'error',
  'import-x/no-unassigned-import': ['error', { allow: unassignedImportFiles }],
  'import-x/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import-x/no-extraneous-dependencies': [
    'error',
    { devDependencies: devDepsImportAllowedFiles },
  ],
  'import-x/no-anonymous-default-export': [
    'error',
    {
      allowArray: true,
      allowArrowFunction: true,
      allowCallExpression: true,
      allowNew: true,
      allowObject: true,
    },
  ],
};
