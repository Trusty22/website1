/* 

printing a tree learning about JS
*/
tree = () => {
    const length = 10;
    let output = '';

    output += line(length);

    for (let size = length; size > 0; size--) {

        let star = length - size;
        let space = length - star - 1;

        for (let i = 0; i < space + 1; i++) {
            output += " ";
        }
        for (let i = 0; i < star + 1; i++) {
            output += "*";
        }
        for (let i = 0; i < star; i++) {
            output += "*";
        }
        for (let i = 0; i < space; i++) {
            output += " ";
        }

        output += "\t\t" + "space: " + space + " star: " + star + " sum: " + (space + star) + " i: " + (10 - size + 1) + "\n";
    }
    return output + line(length);
}
line = (num) => {
    let out = "";
    for (let i = 0; i < (2 * num) + 1; i++) {
        out += "-"
    }
    out += "\n";
    return out;
}

console.log(tree());