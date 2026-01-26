import { useState } from 'react';
import './App.css'
import Button from './components/Button'
import Alert from './components/Alert';
// import ProductCart from './components/ProductCard'
function App() {
  const [alertType, setAlertType] = useState<'success' | 'warning' | 'error' | null>(null);
  return (
    <div>
      {/* <ProductCart></ProductCart> */}
      <div onClick={() => setAlertType('success')}>
        <Button type="success" label="Hiện Success" />
      </div>
      <div onClick={() => setAlertType('warning')}>
          <Button type="primary" label="Hiện Warning" />
      </div>
      <div onClick={() => setAlertType('error')}>
          <Button type="danger" label="Hiện Error" />
      </div>

      <Alert type={alertType} onClose={() => setAlertType(null)} />
    </div>
  )
}

export default App
