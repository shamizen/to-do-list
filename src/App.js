import './App.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import List from './components/List'
import Alert from './components/Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])

  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const [checkEditItem, setCheckEditItem] = useState(false)
  const [editId, setEditId] = useState(null)

  const submitData = (e) => {
    e.preventDefault()
    if (!name) {
      setAlert({ show: true, msg: 'Invalid DATA!!', type: 'error' })
    } else if (name && checkEditItem) {
      const result = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item
      })
      setList(result)
      setCheckEditItem(false)
      setName('')
      setEditId(null)
      setAlert({ show: true, msg: ' Successfully edited a list.', type: 'success' })
    } else {
      const newItem = {
        id: uuidv4(),
        title: name
      }
      setList([...list, newItem]) // add new item to list
      setName('') // reset value to initial state
      setAlert({ show: true, msg: ' Successfully added a new list.', type: 'success' })
    }
  }

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
    setAlert({ show: true, msg: ' Successfully deleted a list.', type: 'error' })
  }

  const editItem = (id) => {
    setCheckEditItem(true)
    console.log(list.find((item) => item.id))
    const searchItem = list.find((item) => item.id === id)
    setName(searchItem.title)
    setEditId(id)
  }

  return (
    <section className='container'>
      <h1>Todo-List App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list} />}
      <form className='form-group' onSubmit={submitData}>
        <div className='form-control'>
          <input type='text' className='text-input' onChange={(e) => setName(e.target.value)} value={name} />
          <button type='submit' className='submit-btn'>
            {checkEditItem ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
      <section className='list-container'>
        {list.map((data, index) => {
          return <List key={index} {...data} removeItem={removeItem} editItem={editItem} />
        })}
      </section>
    </section>
  )
}

export default App
