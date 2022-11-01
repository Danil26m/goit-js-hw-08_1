import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
function textInput (){
    const serializedState = localStorage.getItem("feedback-form-state"); 
    const formsLS = JSON.parse(serializedState) || {};
    if (!formsLS) {
        return;
    }
     const keys = Object.keys(formsLS);
     console.log(keys);
     for (const key of keys) {
        form[key].value = formsLS[key];
     }

}
function addLS ({target}){
    const serializedState = localStorage.getItem("feedback-form-state"); 
    const addFormLS = JSON.parse(serializedState) || {};
    addFormLS[target.name] = target.value;
    localStorage.setItem("feedback-form-state",JSON.stringify(addFormLS));
    console.log(serializedState);
}
function removeForm (even) {
    even.preventDefault();
    even.target.reset();
    localStorage.removeItem("feedback-form-state");
    }
    
    form.addEventListener('input', throttle(addLS,500));
    form.addEventListener('submit', removeForm);
    textInput(form);
    