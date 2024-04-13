What I did:
- In an empty repo, initialize the cdk project (cdk init app --language typescript)
- Install packages (npm install @aws-cdk/aws-lambda @aws-cdk/aws-apigateway)
- Init Go module (go mod init Modak-Challenge)
- Install go packages (go get github.com/aws/aws-lambda-go/lambda / go get github.com/aws/aws-lambda-go/events)
- Create compile and zip .go file
- Edit lib/modak-challenge-stack.ts with our stack
- Edit bin/modak-challenge.ts to use @aws-cdk/core package
- Export credentials
- Install CDK Toolkit (cdk bootstrap aws://ACCOUNT_NUMBER/REGION)
- Deploy stack (cdk deploy)
- Test api (In my case, with the endpoint found in the previous deploy output and postman)
- Don't forget to clean up after you test it

What you should do to test it:
- Clone repository
- Install packages (npm install @aws-cdk/aws-lambda @aws-cdk/aws-apigateway)
- Export credentials
- Install CDK Toolkit (cdk bootstrap aws://ACCOUNT_NUMBER/REGION)
- Deploy stack (cdk deploy) 

Thanks for your time!