import '../Styles/Button.css'
import '../Components/Display'

export default function Buttonpanel(props) {
    return (
        <div className="grid">
            {
                <div className="container">
                    <div className="mx-w calculator-body">
                        <div className='display'>
                            <h1>{props.display}</h1>
                        </div>
                        <div className="keys">
                            <button className='key'onClick={() => { props.send("1") }}>1</button>
                            <button className='key'onClick={() => { props.send("2") }}>2</button>
                            <button className='key'onClick={() => { props.send("3") }}>3</button>
                            <button className='key'onClick={() => { props.send("clr") }}>clr</button>
                            <button className='key'onClick={() => { props.send("4") }}>4</button>
                            <button className='key'onClick={() => { props.send("5") }}>5</button>
                            <button className='key'onClick={() => { props.send("6") }}>6</button>
                            <button className='key sign' onClick={() => { props.send("+") }}>+</button>
                            <button className='key'onClick={() => { props.send("7") }}>7</button>
                            <button className='key'onClick={() => { props.send("8") }}>8</button>
                            <button className='key'onClick={() => { props.send("9") }}>9</button>
                            <button className='key sign' onClick={() => { props.send("-") }}>-</button>
                             <button className='key'onClick={() => { props.send("0") }}>0</button>
                            <button className='key sign' onClick={() => { props.send("*") }}>*</button>
                           
                            <button className='key sign' onClick={() => { props.send("/") }}>/</button>
                            <button className='key sign equal' onClick={() => { props.send("test") }}>=</button>
                            
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}