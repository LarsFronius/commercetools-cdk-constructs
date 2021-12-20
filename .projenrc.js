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
  releaseToNpm: false
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
// new NodePackage(project, {
//   packageName: 'commercetools-subscription-provider',
//   deps: ["@middy/core",  "@middy/secrets-manager",    "@commercetools/platform-sdk",    "@commercetools/sdk-client-v2"],
//   repositoryDirectory: 'src/commercetools-subscription-provider',
//   repository: 'https://github.com/larsfronius/commercetools-cdk-constructs.git'
// });
//
// project.addTask('dep-install', {
//   cwd: 'src/commercetools-subscription-provider',
//   exec: 'npm ci'
// })


// const handler = new awscdk.LambdaFunction(project, {
//   cdkDeps: {
//     cdkMajorVersion: 2,
//   },
//   entrypoint: 'src/commercetools-subscription-provider/index.lambda.ts',
//   runtime: LambdaRuntime.NODEJS_14_X,
//   bundlingOptions: {
//     sourcemap: true,
//     externals: ['aws-sdk'],
//   },
// });

