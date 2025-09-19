import { useState } from "react"
import './PRACTICAL4.css'

const Practical4 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName: '', lastName: ''});
    
    const increment5 = () => {
        setCount(count + 5);
    }
    
    return(
        <div className="container">
            <h1>React Hooks Demo</h1>
            
            <div className="counter-section">
                <h2>Counter: {count}</h2>
                <div className="buttons">
                    <button onClick={() => setCount(count + 1)}>+1</button>
                    <button onClick={() => setCount(count - 1)}>-1</button>
                    <button onClick={() => setCount(0)}>Reset</button>
                    <button onClick={increment5}>+5</button>
                </div>
            </div>
            
            <div className="form-section">
                <h2>Name Form</h2>
                <div className="input-group">
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        value={name.firstName} 
                        onChange={e => setName({...name, firstName: e.target.value})}
                        placeholder="Enter first name"
                    />
                </div>
                <div className="input-group">
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        value={name.lastName} 
                        onChange={e => setName({...name, lastName: e.target.value})}
                        placeholder="Enter last name"
                    />
                </div>
                
                {(name.firstName || name.lastName) && (
                    <div className="output">
                        <p>Hello, {name.firstName} {name.lastName}!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Practical4