import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/taskSlice';


const ListAdder = () => {
    const [input,setInput]=useState({toDo:"",taskComplete:false})
    const dispatch=useDispatch()

    function handleChange(e)
    {
        e.preventDefault();
        let todotask=e.target.name;
        let value=e.target.value;

        setInput((previous)=>{
            switch (todotask) {
                case "todo":
                    return{
                        toDo:value,
                        taskComplete:previous.taskComplete
                    }
            
                
            }
        })
    }

    function sendTask(e)
    {
        e.preventDefault();
        dispatch(add(input))
        setInput({toDo:"",taskComplete:false})
    }
  return (
    <div className='py-1 border-b-2 border-gray-700  w-full md:w-[98%] mx-auto'>
        <form onSubmit={(e)=>sendTask(e)} className=' h-[70px] flex justify-center items-center gap-5 '>
            <input type="text" name={"todo"} value={input.toDo} onChange={(e)=>handleChange(e)} className='w-[70%] md:w-[50%] ng:w-[40%] py-2 px-2 bg-gray-600 text-gray-100 rounded-xl task-input' maxLength={35}/>
            <button className='text-white bg-violet-600 px-4 py-2 rounded-xl hover:outline hover:outline-2 hover:outline-violet-600 hover:outline-offset-2'>Add</button>
        </form>
    </div>
  )
}

export default ListAdder;