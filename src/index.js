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

const CODE_TABLE = {
    '10': '.',
    '11': '-',
    '**': ' ',
}

function decode(expr) {
    let mas = [];      
    let res = [];

    for (let i = 0; i < expr.length; ) {
        mas.push(expr.slice(i, i += 10).replace(/^0+/, ''));
    }
    
    mas.forEach(item => {
        let arr = [];

        for (let i = 0; i < item.length; ) {
            arr.push(CODE_TABLE[item.slice(i, i += 2)]);
        }

        res.push(MORSE_TABLE[arr.join('')] || ' ');
    });
   
    return res.join('');
  } 

module.exports = {
    decode
}