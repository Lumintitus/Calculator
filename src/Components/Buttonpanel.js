import '../Styles/Button.css'

export default function Buttonpanel(props) {
    return (
        <div className="grid">
            {
                <div className="container">
                    <div className="mx-w calculater">
                        <div className="number">
                            <button className='button' onClick={() => { props.send("1") }}>1</button>
                            <button className='button' onClick={() => { props.send("2") }}>2</button>
                            <button className='button' onClick={() => { props.send("3") }}>3</button>
                            <button className='button' onClick={() => { props.send("clr") }}>clr</button>
                            <button className='button' onClick={() => { props.send("4") }}>4</button>
                            <button className='button' onClick={() => { props.send("5") }}>5</button>
                            <button className='button' onClick={() => { props.send("6") }}>6</button>
                            <button className='button operator' onClick={() => { props.send("+") }}>+</button>
                            <button className='button' onClick={() => { props.send("7") }}>7</button>
                            <button className='button' onClick={() => { props.send("8") }}>8</button>
                            <button className='button' onClick={() => { props.send("9") }}>9</button>
                            <button className='button  operator' onClick={() => { props.send("-") }}>-</button>
                             <button className='button' onClick={() => { props.send("0") }}>0</button>
                            <button className='button  operator' onClick={() => { props.send("*") }}>*</button>
                           
                            <button className='button  operator' onClick={() => { props.send("/") }}>/</button>
                            <button className='button equalBtn' onClick={() => { props.send("test") }}>=</button>
                            
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}