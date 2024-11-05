
import {useState} from 'react'
function App() {
  
const [color,setColor]=useState('olive')

  return (
 <div className="w-full h-screen duration-200"
 style={{backgroundColor: color}}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button className='bg-red-700 px-4 py-2 rounded-2xl' onClick={()=>setColor('red')}>Red</button>
      <button className='bg-blue-700 px-4 py-2 rounded-2xl' onClick={()=>setColor('blue')}>Blue</button>
      <button className='bg-green-700 px-4 py-2 rounded-2xl' onClick={()=>setColor('green')}>Green</button>
      <button className='bg-yellow-300 px-4 py-2 rounded-2xl' onClick={()=>setColor('yellow')}>Yellow</button>
      <button className='bg-pink-400 px-4 py-2 rounded-2xl' onClick={()=>setColor('pink')}>Pink</button>
      <button className='bg-black px-4 text-white py-2 rounded-2xl' onClick={()=>setColor('black')}>Black</button>
    </div>
  </div>

 </div>
  )
}

export default App
