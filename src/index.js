const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decode_msg = ''; //it will be result
    let letter = " "
    let splitMsg = expr.match(/.{1,10}/g); //divide the binary string by 10 characters 
    let splitMsg_order_number = 0; // initial counter value
    for (let i = 0; i < splitMsg.length; i += 1) {
        letter = (((splitMsg[splitMsg_order_number].replace(/10/g, ".").replace(/11/g, "-").replace(/00/g, "")))); //get rid of the extra zeros and convert the binary record to " dot-dash"
        if (letter == "**********") {
            decode_msg += ' '//check for spaces
        } else {
            decode_msg += MORSE_TABLE[letter];//replace with the value from the dictionary
        }
        splitMsg_order_number += 1;//increase counter

    }
    return decode_msg;//here morse-decoded string
}
module.exports = {
    decode
}