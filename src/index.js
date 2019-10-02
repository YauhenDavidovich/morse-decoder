const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {    
    let decode_msg = '';
    let binary_converted_msg = ' '; 
    let morse_type_list = [];
    let letter_order_number = 0;  
    for (let i = 0; i < expr.length; i += 10) { 
        binary_converted_msg = binary_converted_msg.replace(/00/g, "");          
        binary_converted_msg = binary_converted_msg.replace(/10/g, ".");
        binary_converted_msg = binary_converted_msg.replace(/11/g, "-");
        morse_type_list.push(binary_converted_msg);
        if (morse_type_list[letter_order_number] === "**********") {
            decode_msg += ' '
        } else {
            decode_msg += MORSE_TABLE[morse_type_list[letter_order_number]];
        } 
        letter_order_number += 1            
    } 
    return decode_msg;          
}
module.exports = {
    decode
}

