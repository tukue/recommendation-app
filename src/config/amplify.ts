import { Amplify } from 'aws-amplify';

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      region: import.meta.env.VITE_AWS_REGION,
      userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
      userPoolWebClientId: import.meta.env.VITE_AWS_USER_POOL_CLIENT_ID,
    },
    API: {
      GraphQL: {
        endpoint: import.meta.env.VITE_AWS_APPSYNC_URL,
        region: import.meta.env.VITE_AWS_REGION,
        defaultAuthMode: 'userPool'
      }
    }
  });
}