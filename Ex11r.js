
function removeEgg(Foods){

   const result = [];
    for(i =0; i<Foods.length;i++){
        let food = Foods[i];
        if(food === "egg"){
            continue;
        } 
    result.push(food);  
    }

    return result;
}

Foods = ["egg","apple","egg","ham"];

console.log(removeEgg(Foods))