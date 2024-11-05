import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength]= useState(8);
  const [numberAllowed, setnumberAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
const [password, setPassword] =useState('')

//Callback hook is used to implement cache based implmentation and cache is depended on the dependencies which are passed 
//usecallback memorize the  function as much as possible, its parts its memory or its threads etc 
const passwordRef=useRef(null);
const passwordGenerator= useCallback(()=>{
  let pass='';
  let str='ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz';
if(numberAllowed) str+='0123456789';
if(charAllowed) str+='!@#$%^&*(){}-_=+":;[].,><~`';
for(let i=1;i<=length;i++){
  // eslint-disable-next-line no-undef
  let char= Math.floor(Math.random()*str.length+1);
  pass+=str.charAt(char)
  console.log(pass);
}
setPassword(pass)
},[length, numberAllowed, charAllowed,setPassword]);

//Use Effect is meant to execute a particular line whenever there is change in the dependencies which are passed 
useEffect(()=>{
  passwordGenerator()

},[length,numberAllowed,charAllowed,passwordGenerator]);

//function 
const copyPasswordToClip = useCallback(()=>{
  //way1(for better Ui experience)
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,12);

  //way2
    window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
  
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 text-center bg-gray-600">
   <h1 className='text-white text-4xl text-center my-3'>Password Generator</h1>
   <div className='flex shadow rounded-lg gap-2 overflow-hidden mb-4'>
    <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 rounded-xl my-2'
        placeholder='Password'
        readOnly
        ref={passwordRef}
     />
     
     <button onClick={copyPasswordToClip}                className='outline-none bg-blue-700 text-white px-4 py-[0] my-1 shrink- rounded-lg'>copy</button>
     </div>
     <div className="flex text-md gap-x-3 py-3">
      <div className="flex items-center gap-x-1">
        <input 
        type="range" 
        min={0}
        max={100}
        value={length} 
        className='cursor-pointer'
        onChange={(e) =>{setlength(e.target.value)}}/>
        <label >Length: {length}</label>
        
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setnumberAllowed((prev)=>!prev);
        }} />
        <label htmlFor="numberInput"> Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev);
        }} />
        <label htmlFor="charInput"> Characters</label>
      </div>


     </div>
   </div>
   </>
  )
}

export default App
