import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { initTasks } from './ducks/actions/taskAction';

const App = () =>{
 const dispatch = useDispatch()

useEffect(() => {
  dispatch (initTasks)
},[dispatch])

 return (
  <div className='App'>
    TodoApp
  </div>
)
}


export default App;
