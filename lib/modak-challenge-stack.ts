import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class ModakChallengeStack extends cdk.Stack {
  constructor(app: cdk.App, id: string, props?: cdk.StackProps) {
    super(app, id, props);

    //Define Custom Runtime
    const customRuntime = new lambda.Runtime('provided.al2023', lambda.RuntimeFamily.GO)

    //Create Lambda Function
    const helloLambda = new lambda.Function(this, 'Modak Function', {
      runtime: customRuntime,
      code: lambda.Code.fromAsset('function.zip'),
      handler: 'main',
    });

    //Create API Gateway
    const api = new apigateway.RestApi(this, 'Modak Api', {
      restApiName: 'Modak API',
    });

    //Create GET method and integrate with Lambda Function
    const helloResource = api.root.addResource('hello');
    const helloIntegration = new apigateway.LambdaIntegration(helloLambda);
    helloResource.addMethod('GET', helloIntegration);
  }
}