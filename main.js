//Listen for form submit
document.getElementById('question').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
    //get values
    var question- getInputVal('question');
}

//function to get values
function getInputVal(id){
   return document.getElementById(id).value;
}
