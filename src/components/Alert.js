import { useEffect } from 'react'

const Alert = ({ show, msg, type, setAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false, msg: '', type: '' })
    }, 1000)
    return () => clearTimeout(timeOut)
    // eslint-disable-next-line
  }, [list])

  return (
    <div>
      <p className={`alert ${type}`}>{msg}</p>
    </div>
  )
}

export default Alert
