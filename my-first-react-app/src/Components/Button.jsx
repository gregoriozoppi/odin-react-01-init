function ButtonComponent({ color, fontSize, text, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>{text}</button>
    );
}

export default function ButtonApp() {
    return (
        <div>
            <ButtonComponent text="Click Me!" color="blue" fontSize={16} handleClick={() => { console.log('Click Me! clicked!') }} />
            <ButtonComponent text="Submit" color="green" fontSize={18} handleClick={() => { console.log('Submit clicked!') }} />
            <ButtonComponent text="Cancel" color="red" fontSize={14} handleClick={() => { console.log('Cancel clicked!') }} />
        </div>
    );
}