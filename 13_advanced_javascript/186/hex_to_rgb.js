/*
Write a function that converts HEX to RGB. Then Make that function
auto-dect the formats so that if you enter HEX color format it returns 
RGB and if you enter RGB color format it returns HEX.
*/

function convertColorFormat(input) {
    let result;

    if (input.startsWith("#")) {
        let hex = input.substring(1);
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        result = `rgb(${r}, ${g}, ${b})`;
    } else if (input.startsWith("rgb")) {
        let rgb = input.substring(4, input.length - 1).split(",");
        let r = Number(rgb[0]).toString(16).padStart(2, "0");
        let g = Number(rgb[1]).toString(16).padStart(2, "0");
        let b = Number(rgb[2]).toString(16).padStart(2, "0");
        result = `#${r}${g}${b}`;
    } else {
        result = null;
    }

    return result;
}

let hex = "#ff9933";
let rgb = "rgb(255, 153, 51)";

console.log(convertColorFormat(hex)); // "rgb(255, 153, 51)"
console.log(convertColorFormat(rgb)); // "#ff9933"