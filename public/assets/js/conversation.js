function call(http, method, body) {
    var id = "null";
    try {
        id = body["id"];
    }
    catch (e) {

    }

    var url = 'http://localhost:8080/conversation?id=' + id;
    console.log(url);
    http.open(method, url, false);
    let value = "application/json; charset=utf-8;";
    http.setRequestHeader('Accept', value);
    http.setRequestHeader('Content-Type', value);
    if (body === null) {
        http.send();
    }
    else {
        var stringify = JSON.stringify(body);
        http.send(stringify);
    }
    let responseText = null;
    try {
        responseText = JSON.parse(http.responseText);
    }
    catch (e) {

    }
    return responseText;
}

function load() {
    console.log('attempting to make call ');
    let http = new XMLHttpRequest();
    let responseText = call(http, 'GET', null);
    console.log('printing text');
    console.log(responseText);
    return responseText
}
function setText(element, load1) {
    console.log("about to place value in area");
    var elementById = document.getElementById("message");
    console.log(load1);
    var messages = "";
    var length = 0;
    var boolean = load1["messageItem"].length > 0;
    console.log("value is " + boolean);
    if (boolean) {
        length = load1["messageItem"].length;
        for (var i = 0; i < length; i++) {
            messages += "[You]\r\n" + load1["messageItem"][i].message + "\r\n";
        }
    }
    console.log("message is " + messages);
    elementById.innerHTML = messages;
    return elementById
}

function makePostCall(elementById, load1, responseText) {
    if (elementById !== 'say something') {
        console.log("makingPost call");
        let http = new XMLHttpRequest();
        load1["messageItem"][0].message = elementById.value;
        load1["messageItem"][0].user = "You";
        console.log(load1);
        // const url='http://localhost:8080/conversation?id=null';
        responseText = call(http, 'POST', load1);
    }
    return responseText;
}

function show(element) {
    var load1 = load();
    var elementById = document.getElementById('yourMessage');
    let responseText = load1;
    responseText = makePostCall(elementById, load1, responseText);
    setText(element, responseText);
}