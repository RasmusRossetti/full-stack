import Form from "./components/Form"
import Table from "./components/Table"
import { RefreshContext } from "./contexts/RefreshContext.js"
import { useState } from "react"
/**
 * App is a functional parent component
 * @author Rasmus Rossetti
 * @returns Parent component returns all the other components
 */
function App() {
  /**
   *@type {refresh} the global state is created here for the refresh of the table
   */
  const [refresh, setRefresh] = useState(false)
  return (
<<<<<<< HEAD
    <div className='pb-5 bg-gray-900 min-h-screen'>
      {/* /** RefreshContext.Provider is the provider for the refresh state to all
=======
    <div className="pb-5 bg-gray-900 min-h-screen">
      {/* RefreshContext.Provider is the provider for the refresh state to all
>>>>>>> 4201d80a7e4e3168a3085de84f1e2760d865da04
      the other components */}
      <RefreshContext.Provider value={{ refresh, setRefresh }}>
        <Form />
        <Table />
      </RefreshContext.Provider>
    </div>
  )
}

export default App
