# PWA with Lightning Web Components and JSForce for accessing data

Sample application showing a Progressive Web App (PWA) built with [Lightning Web Components](https://lwc.dev) and the [Workbox](https://developers.google.com/web/tools/workbox) toolkit. The intention is to access real data using [jsforce] (https://jsforce.github.io/).

This sample application demonstrates how to buid an app that works with PWA and can be installed on your desktop or on the home screen of your local device. It also has access to real SF account data.

you can check the application [Live](https://lwc-wpa-demo.herokuapp.com/).


## Installation Instructions

1. Clone this repository
    ```
    git clone https://github.com/krukmat/pwa-lwc-sforce
    cd lwc-pwa-demo
    ```

1. Install the dependencies
    ```
    npm install
    ```

1. Configure the SF Credentials:
```
server.js:
username = 'youruser@org.com', password = 'password+token';
```

1. Build the application
    ```
    npm run build:development
    ``` 
    or (production build):
    ```
    npm run build
    ``` 

1. Start the server
    ```
    node server
    ```

1. Access the application at [http://localhost:3001](http://localhost:3001)

1. If you need, it also possible to configure a heroku instance and run it.
