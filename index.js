< !doctype html >
    <
    html >

    <
    head >
    <
    meta charset = "utf-8" >
    <
    title > < /title> <
    meta name = "description"
content = "" >
    <
    meta name = "viewport"
content = "width=device-width" >
    <
    link rel = "stylesheet"
href = "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" / >
    <
    link rel = "stylesheet"
href = "styles/main.css" >
    <
    /head>

<
body ng - app = "chattyApp" >

    <!-- Add your site or application content here -->
    <
    div ng - repeat = "message in messages track by $index" > {
        { message.message } }: {
        { message.time } } <
    /div>


<
div class = "container"
ng - include = "'views/main.html'"
ng - controller = "MainCtrl" > < /div>

<
script src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" > < /script> <
    script src = "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.js" > < /script> <
    script src = "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js" > < /script>

<
script src = "scripts/app.js" > < /script> <
    script src = "scripts/controllers/main.js" > < /script> <
    script src = "scripts/controllers/message.js" > < /script> <
    script src = "scripts/services/messageService.js" > < /script> <
    /body>

<
/html>







//This always be the very last thing in your index.js file everytime


app.listen(3000, function() {
    console.log('Listening on Port 3000')
});