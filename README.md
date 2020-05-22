# Sample React app for ibm-mfp-web-push


## How to use this?

Download/Clone the repo:

1. `npm i`
2. `npm i ibm-mfp-web-push`
3. Setup Proxy in the App. Go to **setupProxy.js** and update `target` field to your MobileFirst Server URL.

On MobileFirst console: 

1. Register App with Application ID `com.webpush` with Web Platform. (You can choose any display name of your choice but Application ID should be com.webpush)
2. Make sure you add **push.mobileclient, devices.read, devices.write, subscriptions.read** security checks under the Security Section.

## Boom! Ready to start the App.

`npm start`
