import { ToastContainer, Zoom } from 'react-toastify'

export const Toast = () => {
  return (
    <ToastContainer
      autoClose={2000}
      closeOnClick
      draggable
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position={'top-center'}
      rtl={false}
      theme={'colored'}
      transition={Zoom}
    />
  )
}
