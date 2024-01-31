import React,{useState} from "react";

function Calculator(){
    const [count, setCount] = useState("");

    const mathematicalCalculation = ()=>{
        setCount(eval(count));
    }
     
       
    return(<div className="calculator-container">
                <input type="text" className="input-box" placeholder="0" value={count} />
                <div className="first line">
                    <input type="button" value={"1"} className= "button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"2"} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"3"} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"+"} className="special-button" onClick={e=>setCount(count + e.target.value)}/>
                   
                </div>
                <div className="second line">
                    <input type="button" value={"4"} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"5"} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"6"} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"-"} className="special-button" onClick={e=>setCount(count + e.target.value)}/>
                </div>
                <div className="third line">
                    <input type="button" value={"7"} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"8"} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"9"} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"*"} className="special-button" onClick={e=>setCount(count + e.target.value)}/>
                </div>
                <div className="fourth line">
                    <input type="button" value={"0"} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"."} className="button" onClick={e=>setCount(count + e.target.value)}/>
                    <input type="button" value={"="} className="button" onClick={mathematicalCalculation} />
                    <input type="button" value={"/"} className="special-button" onClick={e=>setCount(count + e.target.value)}/>
                </div>
                <div className="fifth-line">
                <input type="button" value={"Clear"} className="clear-button" onClick={e => setCount("")} />
                <input type="button" value={"DE"} className="delete-button" onClick={e => setCount(count.slice(0,-1))} />
                </div>
             </div>)
}
export default Calculator;