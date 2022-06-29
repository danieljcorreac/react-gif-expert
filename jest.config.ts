import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.ts']
};

export default config;