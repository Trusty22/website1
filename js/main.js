/* 
    printing a tree learning about JS

*/
const tree = (size) => {
    const length = size; // next step print this on website and allow to change via web prompt
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

        output += "\t\t" + "space: " + space + " star: " + (star + 1) + " sum: " + (space + star + 1) + " i: " + (length - size + 1) + "\n";
    }

    document.querySelector('h2').innerHTML = (output + line(length));
}
const line = (num) => {
    let out = "";
    for (let i = 0; i < (2 * num) + 1; i++) {
        out += "-"
    }
    out += "\n";
    return out;
}

const hello = () => {

    if (document.querySelector('h1').innerHTML == 'Goodbye') {
        document.querySelector('h1').innerHTML = 'hello';
    } else {
        document.querySelector('h1').innerHTML = 'Goodbye';
    }

}