//exports.greet = function greet(name,theDate) {
export let greet = (name) => {
    if(typeof name == 'string'){
        return 'Hello, ' + name;
    } else {
        return 'Please provide your name.';
    }

};
