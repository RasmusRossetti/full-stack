import axios from "axios"
import React, { useState, useContext } from "react"
import { RefreshContext } from "../contexts/RefreshContext.js"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
/**
 * npm package for messages is configured
 */
toast.configure()
/**
 * creating object states for the input values
 */
const initialState = {
  name: "",
  email: "",
  contact: "+"
}
/**
 *  Modal is a functional component  that displays the modal when user is editing a user
 * @author Rasmus Rossetti
 * @param  item a prop variable containing the fetched data
 * @param setShowModal boolean prop for displaying the modal
 * @returns  Modal for the editing a user
 */
const Modal = ({ item }) => {
  /**
   * variable hooks for containing the initialState
   */
  const [state, setState] = useState(initialState)
  /**
   * destructering the variables states
   */
  const { name, email, contact } = state
  /**
   * hooks for displaying error messages
   */
  const [errorMessage, setErrorMessage] = useState("")
  /**
   * global hooks for refreshing the table
   */
<<<<<<< HEAD
  const { refresh, setRefresh } = useContext(RefreshContext);

  const [showModal, setShowModal] = React.useState(false);
=======
  const { refresh, setRefresh } = useContext(RefreshContext)
>>>>>>> 4201d80a7e4e3168a3085de84f1e2760d865da04
  /**
   * handleInputChange is an arrow function for the onchange event and putting the values in the variables
   * @param {event} e event for the values
   */
  const handleInputChange = (e) => {
    let { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }
  /**
   * updateUser is a asynchronous Arrow function that update the user information
   * @async
   * @param {string} id unique id to change the clicked user
   * @returns error message || success message and the PUT request
   */
  const updateUser = async (id) => {
    if (!name || !email || !contact) {
      toast.error("Please provide value in each input field")
      setErrorMessage("*")
      return
    } else {
      const response = await axios.put(
        `http://localhost:5000/user/${id}`,
        state
      )
      if (response.status === 200) {
        setRefresh(!refresh)
        toast.dark(response.data)
      }
    }
  }
  /**
   * handleSubmit is a arrow function that handles the onSubmit request in the form
   * @param {event} e event to prevent default action
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    // updateUser();
  }

  return (
    <>
<<<<<<< HEAD
      <button
        key={item.id}
        onClick={() => setShowModal(true)}
        className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
      >
        Edit
      </button>
      {showModal ? (
        <div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
          <div className='xs:w-5/6 sm:w-2/3 w-1/3  relative w-4/5 w-auto my-6 mx-auto max-w-3xl'>
            <div className=' bg-gray-600 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
              <div className='bg-gray-600 flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                <h3 className='text-3xl text-gray-300 font-semibold'>
                  Edit user
                </h3>
              </div>

              <div className='bg-gray-600  p-6 flex-auto'>
                <form
                  onSubmit={handleSubmit}
                  className='bg-gray-600 w-10/12 m-auto'
                >
                  <label
                    htmlFor='name'
                    className=' text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Name
                  </label>
                  <input
                    className='m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    type='text'
                    id='name'
                    name='name'
                    placeholder={item.name}
                    onChange={handleInputChange}
                    value={name}
                  />

                  <p className='pl-3 text-red-700'>{errorMessage}</p>
                  <label
                    htmlFor='email'
                    className='  text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Email
                  </label>
                  <input
                    className='m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    type='email'
                    id='email'
                    name='email'
                    placeholder={item.email}
                    onChange={handleInputChange}
                    value={email}
                  />
                  <p className='pl-3 text-red-700'>{errorMessage}</p>
                  <label
                    htmlFor='contact'
                    className=' text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Contact
                  </label>
                  <input
                    className='m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    id='contact'
                    name='contact'
                    placeholder={item.contact}
                    onChange={handleInputChange}
                    value={contact}
                  />
                  <p className=' pl-3 text-red-700'>{errorMessage}</p>
                  <button
                    onClick={() => updateUser(item.id)}
                    type='submit'
                    className='m-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 '
                  >
                    {" "}
                    Save changes
                  </button>
                </form>
              </div>
              {/*footer*/}
              <div className='bg-gray-600 flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                <button
                  className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={() => setShowModal(false)}
=======
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="xs:w-5/6 sm:w-2/3 w-1/3  relative w-4/5 w-auto my-6 mx-auto max-w-3xl">
          <div className=" bg-gray-600 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="bg-gray-600 flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-gray-300 font-semibold">
                Edit user
              </h3>
            </div>

            <div className="bg-gray-600  p-6 flex-auto">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-600 w-10/12 m-auto"
              >
                <label
                  htmlFor="name"
                  className=" text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder={item.name}
                  onChange={handleInputChange}
                  value={name}
                />

                <p className="pl-3 text-red-700">{errorMessage}</p>
                <label
                  htmlFor="email"
                  className="  text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder={item.email}
                  onChange={handleInputChange}
                  value={email}
                />
                <p className="pl-3 text-red-700">{errorMessage}</p>
                <label
                  htmlFor="contact"
                  className=" text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Contact
                </label>
                <input
                  className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="contact"
                  name="contact"
                  type="number"
                  placeholder={item.contact}
                  onChange={handleInputChange}
                  value={contact}
                />
                <p className=" pl-3 text-red-700">{errorMessage}</p>
                <button
                  onClick={() => updateUser(item.id)}
                  type="submit"
                  className="m-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
>>>>>>> 4201d80a7e4e3168a3085de84f1e2760d865da04
                >
                  Close
                </button>
<<<<<<< HEAD
              </div>
            </div>
          </div>
        </div>
      ) : null}
=======
              </form>
            </div>
            {/*footer*/}
            <div className="bg-gray-600 flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
>>>>>>> 4201d80a7e4e3168a3085de84f1e2760d865da04
    </>
  )
}

export default Modal
