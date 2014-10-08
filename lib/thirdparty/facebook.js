var request = require('request');

function postMessage(access_token, link, message) {
    // Specify the URL and query string parameters needed for the request
    var url = 'https://graph.facebook.com/me/feed';
    var params = {
        access_token: access_token,
        app: 'Wcard',
        link: link,
        message: message
    };

	// Send the request
    request.post({url: url, qs: params}, function(err, resp, body) {
      // Handle any errors that occur
      if (err) return console.error("Error occured: ", err);
      body = JSON.parse(body);
      if (body.error) return console.error("Error returned from facebook: ", body.error);
    });
}

exports.postMessage = postMessage;