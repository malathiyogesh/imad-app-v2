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
    
    //Make the request
    request.Open('GET', 'http://malathiyogesh.imad.hasura-app.io/counter');
    request.send(null);
};

//Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
   //Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list ='';
                for(var i=0; i < names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
            var ul = document.getElementById('namelist');
            ul.innerHtml = list;
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    //Make the request
    request.Open('GET', 'http://malathiyogesh.imad.hasura-app.io/submit-name?name=' + name , true);
    request.send(null);
    
    //Capture the list of names and render it as  a list
   

};