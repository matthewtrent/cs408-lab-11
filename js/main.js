window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    document.getElementById("load-data").onclick = loadData;
    document.getElementById("delete-data").onclick  = deleteData;
    document.getElementById("send-data").onclick = sendData;
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
function sayHello() {
    return 'hello';
}

function loadData() {
    let lambda = document.getElementById("lambda-info");
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        lambda.innerHTML = xhr.response;
    });
    xhr.open("GET", "https://wa61ootuak.execute-api.us-east-2.amazonaws.com/items");
    xhr.send();
}

function deleteData() {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://wa61ootuak.execute-api.us-east-2.amazonaws.com/items/11111");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function sendData() {
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://wa61ootuak.execute-api.us-east-2.amazonaws.com/items");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "id": "11111",
        "price": 19,
        "name": "test put value"
    }));
}
