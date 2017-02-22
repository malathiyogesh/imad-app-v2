//Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
    //Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                 var counter = request.responseText;
                 //Render the variable in the correct span
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
    };
    
    //Mkae the request
    request.Open('GET', 'http://malathiyogesh.imad.hasura-app.io/counter');
    request.send(null);
  
    
    
};
