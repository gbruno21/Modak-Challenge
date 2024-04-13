import * as cdk from '@aws-cdk/core';
import { ModakChallengeStack } from '../lib/modak-challenge-stack';

const app = new cdk.App();
new ModakChallengeStack(app, 'ModakChallengeStack');