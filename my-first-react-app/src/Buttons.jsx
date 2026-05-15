function Button({ color, fontSize, text, handleClick }) {
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
            <Button text="Click Me!" color="blue" fontSize={16} handleClick={() => { console.log('Click Me! clicked!') }} />
            <Button text="Submit" color="green" fontSize={18} handleClick={() => { console.log('Submit clicked!') }} />
            <Button text="Cancel" color="red" fontSize={14} handleClick={() => { console.log('Cancel clicked!') }} />
        </div>
    );
}