const { awscdk } = require('projen');
const {
  NodeProject,
  NpmAccess,
} = require('projen/lib/javascript');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Lars Fronius',
  authorAddress: 'lars@fronius.me',
  defaultReleaseBranch: 'main',
  cdkVersion: '2.80.0',
  name: '@larsfronius/commercetools-cdk-constructs',
  repositoryUrl: 'https://github.com/larsfronius/commercetools-cdk-constructs.git',
  constructsVersion: '10.3.0',
  lambdaAutoDiscover: true,
  devDeps: ['@aws-cdk/assert'],
  excludeTypescript: ['src/commercetools-subscription-provider/**', 'src/commercetools-api-extension-provider/**'],
  eslint: true,
  eslintOptions: {
    ignorePatterns: ['src/commercetools-subscription-provider/**', 'src/commercetools-api-extension-provider/**'],
  },
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
});

const ctSubscriptionProviderProject = new NodeProject({
  name: 'commercetools-subscription-provider',
  repositoryDirectory: 'src/commercetools-subscription-provider',
  defaultReleaseBranch: 'main',
  entrypoint: 'index.lambda.ts',
  deps: ['@commercetools/platform-sdk', '@commercetools/sdk-client-v2', '@middy/core', '@middy/secrets-manager'],
  devDeps: ['esbuild', 'typescript', '@types/aws-lambda'],
  jest: false,
  jestOptions: {
    jestConfig: {
      rootDir: 'src/commercetools-subscription-provider',
    },
  },
  parent: project,
  outdir: 'src/commercetools-subscription-provider',
});

const ctApiExtensionProviderProject = new NodeProject({
  name: 'commercetools-api-extension-provider',
  repositoryDirectory: 'src/commercetools-api-extension-provider',
  defaultReleaseBranch: 'main',
  entrypoint: 'index.lambda.ts',
  deps: ['@commercetools/platform-sdk', '@commercetools/sdk-client-v2', '@middy/core', '@middy/secrets-manager'],
  devDeps: ['esbuild', 'typescript', '@types/aws-lambda'],
  jest: false,
  jestOptions: {
    jestConfig: {
      rootDir: 'src/commercetools-api-extension-provider',
    },
  },
  parent: project,
  outdir: 'src/commercetools-api-extension-provider',
});

project.synth();
