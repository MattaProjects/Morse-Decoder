
function Header(){
    return (
        <div className="flex px-16 py-2 text-black font-bold text-2xl">
            <p className="flex justify-start">Morse Decoder</p>
            <header className="flex flex-1 flex-row gap-16 justify-end">
                <ol>Encode</ol>
                <ol>Decode</ol>
                <ol>Support</ol>
            </header>
        </div>
    );
}

export default Header