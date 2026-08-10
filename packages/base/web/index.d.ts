import { Linter } from 'eslint';

export const webConfigs: Readonly<{
    languageOptions: {
        globals: Linter.Globals
    };
    rules: Linter.RulesRecord;
}>;