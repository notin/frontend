function call(http, method, body)
{
    var url = 'http://localhost:8080/roomprovider';
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
        console.log(e)
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

function buildList(boolean, length, load1)
{
    var container = document.getElementById("listOfRooms");
    if (boolean)
    {
        length = load1["provider"].length;
        for (var i = 0; i < length; i++)
        {
            console.log("appending element");
            var li = document.createElement("li");
            var load1ElementElementElement = load1["provider"][i]["location"];
            if (load1ElementElementElement == null || load1ElementElementElement == "")
            {
                load1ElementElementElement = "unavailable"
            }
            li.innerText = load1ElementElementElement;
            container.appendChild(li);
        }
    }
    return messages;
}

function setText(load1)
{
    console.log("about to place value in area");
    console.log(load1);
    var length = 0;
    var boolean = load1["provider"].length > 0;
    console.log("value is " + boolean);
    messages = buildList(boolean, length, load1);
    console.log("message is " + messages);
    return elementById
}

function makePostCall(elementById, load1, responseText)
{
    if (elementById !== 'say something')
    {
        console.log("makingPost call");
        let http = new XMLHttpRequest();
        load1["messageItem"][0].message = elementById.value;
        load1["messageItem"][0].user = "You";
        console.log(load1);
        responseText = call(http, 'POST', load1);
    }
    return responseText;
}

function show()
{
    var load1 = load();
    setText(load1);
}