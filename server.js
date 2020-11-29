'use strict';

const express = require('express'),
    path = require('path'),
    compression = require('compression'),
    app = express();
    let jsforce = require('jsforce'); //Adding JsForce
    let ENV = process.env.NODE_ENV || 'development',
    HOST = process.env.HOST || 'localhost',
    PORT = process.env.PORT || 3001,
    username = 'matias@kforce.com', password = 'U8rxC4iu3P2fMHL59YY8SvGtYQVa8QJc8DJ8jlIc';

if (ENV === 'production') {
    app.use((req, res, next) => {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(['https://', req.get('Host'), req.url].join(''));
        }
        return next();
    });
}

app.use(compression());
app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('/api/accounts', (req, res) => {
    // JSForce connection
    let conn = new jsforce.Connection({});
    conn.login(username, password, function(err, userInfo) {
        if (err) { return console.error(err); }
        // Now you can get the access token and instance URL information.
        // Save them to establish connection next time.
        console.log(conn.accessToken);
        console.log(conn.instanceUrl);
        // logged in user property
        console.log("User ID: " + userInfo.id);
        console.log("Org ID: " + userInfo.organizationId);
        
        //Perform SOQL Here
        conn.query("SELECT Id, Name FROM Account", function(err, result) {
          if (err) { return console.error(err); }
          console.log("total : " + result.totalSize);
          console.log("fetched : " + result.records.length);
          res.send(result.records);
        });
        
        });
    });

app.listen(PORT, () =>
    console.log(`✅ Server started: http://${HOST}:${PORT}`)
);