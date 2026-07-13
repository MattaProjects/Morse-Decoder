
function Header( {setMode} ){
    return (
        <div className="flex px-16 py-2 text-black font-medium text-2xl">
            <p className="flex justify-start">Morse Decoder</p>
            <header className="flex flex-1 flex-row gap-16 justify-end">
                <button onClick={() => setMode("encode")}>Encode</button>
                <button onClick={() => setMode("decode")}>Decode</button>
            </header>
        </div>
    );
}

export default Header