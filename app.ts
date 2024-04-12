import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';

export class GoLambdaHelloWorldStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define Go Lambda function
    const goLambda = new lambda.GoFunction(this, 'GoLambda', {
      runtime: lambda.Runtime.GO_1_X,
      code: lambda.Code.asset('main.go'), // Path to your Go code
      handler: 'main.main', // Entry point in your Go code
    });

    // Define API Gateway with a GET method
    const api = new apigw.RestApi(this, 'HelloWorldApi', {
      description: 'API Gateway for Go Lambda Hello World',
    });

    const hello = api.root.addResource('hello');
    hello.addMethod('GET', new apigw.LambdaIntegration(goLambda));
  }
}

const app = new cdk.App();
new GoLambdaHelloWorldStack(app, 'GoLambdaHelloWorldStack');
app.synth();