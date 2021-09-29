import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [ text, setText ] = useState('')
  const [ day, setDay ] = useState('')
  const [ important, setImportant ] = useState(false)

const onSubmit = (e) => {
  e.preventDefault() //wyłącza domyślne ustwienia
  if(!text) { alert('Please add task')
    return
  }
  onAdd({ text, day, important })

  setText('')
  setDay('')
  setImportant(false)
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text"
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text"
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set important</label>
        <input type="checkbox"
          checked={important}
          value={important}
          onChange={(e)=> setImportant(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask;
