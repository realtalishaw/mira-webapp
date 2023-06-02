export type AmplifyDependentResourcesAttributes = {
  "api": {
    "downloadImage": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "mirawebapp": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "mirawebapp": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "downloadImages": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3mirawebappstorage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}