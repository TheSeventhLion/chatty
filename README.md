var bodyParser = require('body-parser');
var express = require('express');


var app = express();

app.use(express.static('assets'))
app.use(bodyParser.json())

//This is acting as a temp storage, but is usually not involved in full scales apps // 
// var messages = [];
//This is acting as a temp storage, but is usually not involved in full scales apps // 

//Step 5// lets change our `messages` array — from an array of strings to an array of objects.
messages.push({ message: req.body.message, time: new Date() });
//Step 5//

console.log(app)

app.get('/messages', function(req, res, next) {
    res.status(200).json({ messages: messages });
});

app.post('/messages', function(req, res, next) {
    messages.push(req.body);
    res.status(200).json({ messages: messages });
});













//This always be the very last thing in your index.js file everytime


app.listen(3000, function() {
    console.log('Listening on Port 3000')
});s create our endpoint to POST a new message. This will be structured similarly to our GET endpoint. Let's start by logging `req.body`.
```javascript
app.post('/messages', function (req, res, next) {
  console.log(req.body);
});
```

Let's test this out in Postman

1. Select 'POST' from the request method dropdown next to your URL

1. Set the Content-Type of the request
  1. Select the 'Body' tab
  1. Select the 'raw' radio button
  1. Select 'JSON (application/json)' in the dropdown menu to the right of the radio buttons

1. Add some JSON data to the text-area in this tab. Let's start with something like:
  ```json
  {
    "message": "Wubba Dubba Lub Dub!"
  }
  ```

1. Smash the 'Send' button!

Check to see that our `console.log(req.body)` code logged something to the terminal. It should look something like `{ message: 'Wubba Dubba Lub Dub!' }`. If you are getting errors, check the formatting of your JSON. It is important to use double quotes around both the key and the value.

Brilliant. Let's finish up this endpoint.

1. Add the message from `req.body` to our array of `messages`.

1. End the response using the `status` and `json` methods to send back that our full array of messages just like we did for the GET endpoint. It will look similar to this:
  ```javascript
  app.post('/messages', function (req, res, next) {
    messages.push(req.body.message);
    res.status(200).json({ messages: messages });
  });
  ```

1. Test this out again in Postman! You should get a response this time.

### Step 4: Test the client-side code
Go to http://localhost:3000 in your browser. The app should be up and running!

Take a few minutes to browse through the client-side code provided. It should all be very familiar.

### Step 5: Timestamps
Now that we have basic functionality, let's do some server-side data manipulation. We want to add a timestamp to each message and display it.

First, lets change our `messages` array — from an array of strings to an array of objects. This way, we can assign multiple properties to each message: `time` and `message`. Let's do this by pushing a newly created object to our array instead of just the message sent to us.
```javascript
messages.push({ message: req.body.message, time: new Date() });
```

Second, we need to make a small adjustment to our client-side code to handle this new data structure. The ng-repeat over our messages will need to look similar to this:
```html
<div ng-repeat="message in messages track by $index">
  {{message.message}} : {{message.time}}
</div>
```

As easy as that, we've added new server-side data and passed it back to our client-side code. You may have noticed that the date is displaying poorly. Look up the Angular documentation for the 'date' filter and try to set it up so that it shows something along the lines of '5:22 PM'.

### Step 6 (Black Diamond): Adding more data
Try adding some more sophistication to your chat client, such as a username or profile picture. Allow the user to specify their username when posting a message.

## Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
