import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { check, deleteTask } from "../store/taskSlice"
import tick from "../assets/tick-svgrepo-com.svg"
import reduxLogo from "../assets/redux-svgrepo-com.svg"
import { motion, AnimatePresence } from 'framer-motion'



const motionVariable = {
    start: {
        x: "100vw",
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1,
        
        transition: { duration: 0.2,type:"spring",stiffness:50 }
    },
    exit: {
       
        opacity: 0,
        transition: { duration: 0.6}
    }
}

const ListDisplay = () => {
    let items = useSelector(state => state.tasks)
    let dispatch = useDispatch()
    const [complete, changeComplete] = useState(false)
    // console.log(items)

    function handleCheck(e, index, status) {
        e.preventDefault();
        dispatch(check({ index, status }))
        changeComplete(!complete)
    }
    function handleDelete(task) {
        dispatch(deleteTask(task))
    }
    return (
        <div className='w-full flex flex-col justify-center items-center gap-4 py-4 overflow-x-clip' >
            <AnimatePresence >
                {
                    items.map((task, index) => {
                        let { toDo, taskComplete } = task;
                        return (
                            <motion.div
                                variants={motionVariable}
                                initial="start"
                                animate="end"
                                exit="exit"
                                key={index}
                                className="w-[90%] h-[60px] md:w-[70%] lg:w-[45%]  rounded-xl flex justify-between items-center text-white px-2 task-display">


                                <div className=' w-[70%] flex gap-4 cursor-pointer' onClick={(e) => handleCheck(e, index, !complete)} >
                                    <div className={taskComplete ? "tick-box tick-box-checked" : "tick-box"}>
                                        <img src={tick} alt="" className={(taskComplete) ? "w-full h-full object-cover" : "hidden"} />
                                    </div>
                                    <p className={taskComplete ? "strike-line" : "task-title"}>{toDo}</p>
                                </div>

                                <button className='delete-btn' onClick={() => handleDelete(toDo)}>delete</button>
                            </motion.div>
                        )
                    })
                }
            </AnimatePresence>

            <div className='task-logo' >
                <img src={reduxLogo} alt="" className='w-full h-full object-contain' />
            </div>
        </div>
    )
}

export default ListDisplay