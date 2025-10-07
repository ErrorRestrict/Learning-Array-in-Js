function removeEgg(Foods){
    result = [];
    eggsremoved = 0
    for (i=0; i<Foods.length;i++){
        if(Foods[i] === "egg" && eggsremoved < 2){
            eggsremoved++;
            continue;
        }

        result.push(Foods[i]);
    }

    return result;
}

console.log(removeEgg(["egg", "egg","apple","egg","ham"]))