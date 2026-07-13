import { useState, useEffect } from "react"

function Box( {mode} ) {
    const morseCode = {
        // Letters
        A: '.-',    B: '-...',  C: '-.-.',  D: '-..',   E: '.',
        F: '..-.',  G: '--.',   H: '....',  I: '..',    J: '.---',
        K: '-.-',   L: '.-..',  M: '--',    N: '-.',    O: '---',
        P: '.--.',  Q: '--.-',  R: '.-.',   S: '...',   T: '-',
        U: '..-',   V: '...-',  W: '.--',   X: '-..-',  Y: '-.--',
        Z: '--..',

        // Numbers
        0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-',
        5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.',

        // Punctuation & symbols
        '.': '.-.-.-',   ',': '--..--',   '?': '..--..',   "'": '.----.',
        '!': '-.-.--',   '/': '-..-.',    '(': '-.--.',    ')': '-.--.-',
        '&': '.-...',    ':': '---...',   ';': '-.-.-.',   '=': '-...-',
        '+': '.-.-.',    '-': '-....-',   '_': '..--.-',   '"': '.-..-.',
        '$': '...-..-',  '@': '.--.-.',

        // Special
        ' ': '/' // word separator (common convention)
    };
    const reverseMorseCode = Object.fromEntries(Object.entries(morseCode).map(([letter, code]) => [code, letter]));

    const [inputText, updateInputText] = useState("");
    const [outputText, updateOutputText] = useState("");

    useEffect(() => {
        updateInputText("");
        updateOutputText("");
    }, [mode]);

    const buttonLabel = mode === "encode" ? "encode" : "decode";
    const handleClick = mode === "encode" ? () => updateOutputText(encoder(inputText)) : () => updateOutputText(decoder(inputText));

    function encoder(sentence) {
        return sentence.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
    }

    function decoder(sentence){
        return sentence.trim().split(' / ').map(word => word.split(' ').map(code => reverseMorseCode[code] || '').join('')).join(' ')
    }

    return (
        <>
            <div className="flex flex-row justify-evenly items-center py-8">
                <div className="flex flex-col gap-2">
                    <p>Language: {buttonLabel === "encode" ? "English" : "Morse Code"}</p>
                    <textarea
                        id="inputBox"
                        cols={50}
                        rows={15}
                        placeholder="Type here..."
                        className="border-2 rounded-sm px-1 resize-none text-xl"
                        value={inputText}
                        onChange={(e) => updateInputText(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Language: {buttonLabel === "encode" ? "Morse Code" : "English"}</p>
                    <textarea
                        id="Box"
                        cols={50}
                        rows={15}
                        placeholder="Sample Text"
                        className="border-2 rounded-sm px-1 resize-none text-xl"
                        value={outputText}
                        readOnly
                    ></textarea>
                </div>
            </div>
            <div className="flex justify-center items-center pt-5 pb-20">
                <button className="bg-[#d6ccc2] rounded-xl py-2 px-8 font-medium" onClick={handleClick}>
                    Click to <span className="font-bold" onClick={handleClick}>{buttonLabel}</span>
                </button>
            </div>
        </>
    );

    }

export default Box