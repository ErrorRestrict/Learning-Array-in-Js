function removeEgg(Foods){
    result = [];
    eggsemove = 0;

    for(i=0;i<Foods.length;i++){
        if(Foods[i] === "egg" && eggsemove < 2){
            eggsemove++;
            continue;
        }

        result.push(Foods[i])
    }
        console.log( result);
        const update = result.reverse();
    // const copy = update.slice(0,3);
        return update;
} 

const Foods = ["egg","egg","apple","egg","ham"]
console.log(removeEgg(Foods));
console.log(Foods)