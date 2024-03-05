const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/.well-known/apple-app-site-association', (request, response) => {
  response.set('Content-Type', 'application/json'); 
    response.json({
    "applinks": {
      "details": [
        {
          "appID": "43253H4X22.com.braintreepayments.Demo",
          "paths": ["*", "/", "/*"]
        }
      ]
    }
  })
})

app.get('/', function(req, res){
	res.send('Simple site for testing the universal links in iOS.Open /.well-known/apple-app-site-association route');
})

app.listen(port, function(){
  console.log(`Server running on http://localhost:${port}/`);
})
