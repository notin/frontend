
function load()
{
    console.log('attempting to make call ');
    const http = new XMLHttpRequest();
    const url='http://localhost:8080/conversation?id=null';
    http.open('GET', url, false);
    let value = "application/json; charset=utf-8;";
    http.setRequestHeader('Accept', value );
    http.setRequestHeader('Content-Type', value );
    http.send();

    let responseText = null;
    try {
         responseText = JSON.stringify(http.responseText);
    }
    catch (e) {

    }
    console.log('printing text');
    console.log(responseText);
    return responseText
}
function setText(element, load1) {
    var elementById = document.getElementById('message');
    console.log(load1);
    elementById.text = load1;
    return elementById
}
function show(element) {
    var load1 = load();
    setText(element, load1);
}