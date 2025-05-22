import { useState } from 'react'

import './App.css'

function App() {
  const [actions, setActions] = useState([]);
  const [newAction, setNewAction] = useState('');

  const addAction = () => {
    if(!newAction.trim()){
      return
    }
    setActions([...actions, {text: newAction, completed: false}]);
    setNewAction('');
  }

  const toggleAction = (index) => {
    const updatedActions = actions.map((action, i) => i === index ? {...action, completed: !action.completed} : action);
    setActions(updatedActions);
  };

  const deleteAction = (index) => {
    const updateAction = actions.filter((_, i) => i !== index);
    setActions(updateAction);
  }
  

  return (
    <>
    <div className='container'>
     <h1>To Do list</h1>
     <div className='add-container'>
     <input
     className='input-bar'
     type='text'
     placeholder='What needs to get done?'
     value={newAction}
     onChange={(e) => setNewAction(e.target.value)}
     onKeyDown={(e) => e.key === 'Enter' && addAction()}
     />
     <button onClick={addAction}>Add</button>

     </div>
    
     <div>
      {actions.map((action, index) => (
        <li
        className='list-deco'
        key={index}
        
        >
          <span
          onClick={() => toggleAction(index)}
          >
            {action.text}
          </span>
          
          <button className='delete-btn' onClick={() => deleteAction(index)}>Delete</button>
        </li>
      ))}
     </div>
    </div>
      
    </>
  )
}

export default App
