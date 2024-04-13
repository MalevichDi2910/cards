import { Provider } from 'react-redux'

import { Router } from '@/common/router'
import { store } from '@/common/services/store'
import { Toast } from '@/components/ui/toast/toast'

export function App() {
  return (
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  )
}
