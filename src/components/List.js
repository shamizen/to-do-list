import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const List = ({ id, title, removeItem, editItem }) => {
  return (
    <div className='list-item'>
      <p className='title'>{title}</p>
      <div className='button-container'>
        <AiOutlineEdit className='btn' onClick={() => editItem(id)} />
        <AiOutlineDelete className='btn' onClick={() => removeItem(id)} />
      </div>
    </div>
  )
}

export default List
