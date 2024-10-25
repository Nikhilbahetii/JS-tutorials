(function chai(){
    // named IIFE
    console.log(`DB Connected`);
    
})();
// to end the above code we used " ;" 
// GLobal scope se pollution hoti h so IIFE (Immediately Invoked Function Expression) use karte h

( (name) => {
    // Unnamed IIFE
    console.log(`DC connected too ${name}`);
    
})('zedd')