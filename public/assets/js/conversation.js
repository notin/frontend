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
        http.send(body);
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
    const http = new XMLHttpRequest();
    let responseText = call(http, 'GET', null);
    console.log('printing text');
    console.log(responseText);
    return responseText
}
function setText(element, load1) {
    console.log("about to place value in area");
    var elementById = document.getElementById('message');
    console.log(load1);
    elementById.innerText = "[You]\r\n" + load1.messageItem.message + "\r\n";
    return elementById
}
function show(element) {
    var load1 = load();
    var elementById = document.getElementById('yourMessage');
    if (elementById !== 'say something') {
        console.log("sending");
        const http = new XMLHttpRequest();
        load1.messageItem.message = elementById.innerText
        // const url='http://localhost:8080/conversation?id=null';
        let responseText = call(http, 'POST', JSON.stringify(load1));
    }
    setText(element, load1);
}