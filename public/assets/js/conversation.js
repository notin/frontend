function call(http, method, body)
{
    var id = "null";
    try
    {
        id = body["id"];
    }
    catch (e)
    {

    }

    var url = 'http://localhost:8080/conversation?id=' + id;
    console.log(url);
    http.open(method, url, false);
    let value = "application/json; charset=utf-8;";
    http.setRequestHeader('Accept', value);
    http.setRequestHeader('Content-Type', value);
    if (body === null)
    {
        http.send();
    }
    else
    {
        var stringify = JSON.stringify(body);
        http.send(stringify);
    }
    let responseText = null;
    try
    {
        responseText = JSON.parse(http.responseText);
    }
    catch (e)
    {

    }
    return responseText;
}

function load()
{
    console.log('attempting to make call ');
    let http = new XMLHttpRequest();
    let responseText = call(http, 'GET', null);
    console.log('printing text');
    console.log(responseText);
    return responseText
}

function concatMessages(boolean, length, load1, messages)
{
    if (boolean)
    {
        length = load1["messageItem"].length;
        for (var i = 0; i < length; i++)
        {
            messages += "[" + load1["messageItem"][i] + "]\r\n" + load1["messageItem"][i].message + "\r\n";
        }
    }
    return messages;
}

function setText(element, load1)
{
    console.log("about to place value in area");
    var elementById = document.getElementById("message");
    console.log(load1);
    var messages = "";
    var length = 0;
    var boolean = load1["messageItem"].length > 0;
    console.log("value is " + boolean);
    messages = concatMessages(boolean, length, load1, messages);
    console.log("message is " + messages);
    elementById.innerHTML = elementById.innerText += messages;
    return elementById
}

function makePostCall(elementById, load1, responseText)
{
    if (elementById !== 'say something')
    {
        console.log("makingPost call");
        let http = new XMLHttpRequest();
        var load1ElementElement = load1["messageItem"];
        for (var i = 0; i < load1ElementElement.length; i++)
        {

            var load1ElementElementElement = load1ElementElement[i];
            load1ElementElementElement.message = elementById.value;
            if (load1ElementElementElement.user === null || load1ElementElementElement.user == "")
            {
                load1ElementElementElement.user = "You";
            }
            console.log(load1);
        }
        responseText = call(http, 'POST', load1);
    }
    return responseText;
}

function show(element)
{
    var load1 = load();
    var elementById = document.getElementById('yourMessage');
    let responseText = load1;
    responseText = makePostCall(elementById, load1, responseText);
    setText(element, responseText);
}