import React,{useReducer,useRef} from 'react';
function Content (){
    // b1 tạo init (giá trịnh mặt định)
   const InitState = 0;
   // b2 tạo action (hành động thực thi )

   const DOW_ACTION = 'dow';
   const UP_ACTION = 'up';
   // b3 tạo hàm render (thực thi hành động)
   const render =(state ,action)=>{
       switch(action){
           case DOW_ACTION:
               return state + 1
           case UP_ACTION:
               return state -1
           default :
             return new Error(' Invalid action');
       }
   }
   //
   const inputRef =  useRef()
   const InitSateJob = {
      job : ' ',
      jobs : []
   }
   const JOB_ACTION ='job'
   const DELETE_ACTION ='delete';
   const UPDATE_ACTION ='update';
   const setJob = payload =>{
    return{
        payload ,
        type : JOB_ACTION
    }
   }
   const addJob = payload=>{
    return{
        payload, 
        type : UPDATE_ACTION
    }
   } 
   const renderJobs =(state , action)=>{
    let newState;
       switch(action.type){
         case JOB_ACTION : 
          newState = {
                ...state,
                job: action.payload
            }
             break;
          case UPDATE_ACTION :
            newState ={
                ...state,
                jobs: [...state.jobs,action.payload]
            }
            break;
          default :
              return new Error("Invalid action type");
       }
       return newState;
   }
   

  
//    const [count , dispatch] = useReducer(render,InitState)
   const [state ,dispatch] = useReducer(renderJobs ,InitSateJob)
   const {job,jobs}=state
   console.log(jobs)
   const handleSubmit = ()=>{
    if(job !=''){
        dispatch(addJob(job))
    }
     dispatch(setJob(''))
    inputRef.current.focus()
    }
    return (
        <div id={'main'}> 
            <input
            ref={inputRef}
                value={job} 
                onChange={(e)=>{
                  dispatch(setJob(e.target.value));
               }}/> 
               <button onClick={handleSubmit}>Up Date</button>
            <ul>
                {jobs.map((job,index)=>
                 <li key={index}>{job}</li>   
                )}
            </ul>
        </div>
    )
}
export default Content;