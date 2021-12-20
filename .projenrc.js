const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Lars Fronius',
  authorAddress: 'lars@fronius.me',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'commercetools-cdk-constructs',
  repositoryUrl: 'https://github.com/lars/commercetools-cdk-constructs.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();