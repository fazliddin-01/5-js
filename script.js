let num = +prompt("son kiritng")
let box = ''

for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        if (j==0 || i==0 || j==num-1 || i==num-1 || i + j ==num - 1 || j == i ) {
            box += "◼️"
        }        
        else{
            box+="◻️"
        }
    }
    console.log(box);
    box=""
    
}