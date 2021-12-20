const { awscdk } = require('projen');
const { NodeProject } = require('projen/lib/javascript');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Lars Fronius',
  authorAddress: 'lars@fronius.me',
  defaultReleaseBranch: 'main',
  cdkVersion: '2.0.0',
  name: '@larsfronius/commercetools-cdk-constructs',
  repositoryUrl: 'https://github.com/larsfronius/commercetools-cdk-constructs.git',
  constructsVersion: '10.0.0',
  lambdaAutoDiscover: true,
  devDeps: ['@aws-cdk/assert'],
  excludeTypescript: ['src/commercetools-subscription-provider/**'],
  eslint: true,
  eslintOptions: {
    ignorePatterns: ['src/commercetools-subscription-provider/**']
  },
  releaseToNpm: true
});

const lambdaProject = new NodeProject({
  name: 'commercetools-subscription-provider',
  repositoryDirectory: 'src/commercetools-subscription-provider',
  defaultReleaseBranch: 'main',
  entrypoint: 'index.lambda.ts',
  deps: ['@commercetools/platform-sdk', '@commercetools/sdk-client-v2', '@middy/core', '@middy/secrets-manager'],
  devDeps: ['esbuild', 'typescript', '@types/aws-lambda'],
  jest: false,
  jestOptions: {
    jestConfig: {
      rootDir: 'src/commercetools-subscription-provider'
    }
  },
  parent: project,
  outdir: 'src/commercetools-subscription-provider'
})

project.synth()
