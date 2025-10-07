function removeEgg(Foods){
    const result = [];
    let eggsremove = 0;

    for(i=0;i<Foods.length;i++){
        if(Foods[i] == "egg" && eggsremove <2){
            eggsremove++;
            continue;
        }

        result.push(Foods[i]);
    }

    return result.reverse();
}

console.log(removeEgg(["egg","egg","apple","egg","ham"]))