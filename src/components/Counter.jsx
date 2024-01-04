import React, { useState } from 'react'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'



function Counter() {
    const [amount,setamount]=useState('')
    const dispatch=useDispatch()
    const count =useSelector((state)=>state.counterSlice.count)
    const handleIncrementByAmount=()=>{
        if (amount>0){
        dispatch(incrementByAmount(+amount))
        setamount('')
        }
        else{
            alert('Enter a valid amount')
        }
    }
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}>
            <div style={{width:'min(100%,400px)',display:'flex',flexDirection:'column',margin:'auto',alignItems:'center',justifyContent:'space-evenly',border:'solid 2px red',margin:'10px',padding:'20px'}}>
                <h1>Counter</h1>
                <h1>{count}</h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly',width:'100%',margin:'10px'}}>
                    <button onClick={()=>dispatch(decrement())}>Decrement</button>
                    <button onClick={()=>dispatch(reset())}>Reset</button>
                    <button onClick={()=>dispatch(increment())}>Increment</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly',width:'100%' }}>
                    <input type='number' onChange={e=>setamount(e.target.value)} value={amount} placeholder='Enter the amount to increment' className='form-controll'/>
                    <button onClick={handleIncrementByAmount}>Increment by amount</button>
                </div>
            </div>
        </div>
    )
}
 
export default Counter