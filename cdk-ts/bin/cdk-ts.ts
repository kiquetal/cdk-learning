#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkTsStack } from '../lib/cdk-ts-stack';

const app = new cdk.App();
new CdkTsStack(app, 'CdkTsStack');
