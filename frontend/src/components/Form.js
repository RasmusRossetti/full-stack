import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { RefreshContext } from "../contexts/RefreshContext.js";

/**
 * creating object states for the input values
 */

const initialState = {
  name: "",
  email: "",
  contact: "",
};

/**
 *  Form is a functional component  that displays the add user inputs
 * @author Rasmus Rossetti
 * @returns  Form for adding a user to the table
 */

const Form = () => {
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;
  const [errorMessage, setErrorMessage] = useState("");
  const { refresh, setRefresh } = useContext(RefreshContext);

  /**
   * handleSubmit is a arrow function that handles the onSubmit request in the form
   * @param {event} e event to prevent default action
   */
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  /**
   * addUser function that adds a user and using the POST request
   * @param {object} data variable that contains the states from input values
   * @async
   */
  const addUser = async (data) => {
    const response = await axios.post("http://localhost:5000/user", data);
    if (response.status === 200) {
      /**
       * refresh using the global variable refresh for setting it to the opposite boolean value and for refreshing the table when a user is added
       */
      setRefresh(!refresh);
      toast.success(response.data);
    }
  };

  /**
   * handleSubmit arrow function that handles the submit request and validates input field and displaying error message
   * @param {event} e event that prevent default actions
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please provide value in each input field");
      setErrorMessage("*");
    } else {
      addUser(state);
      setErrorMessage("");
      setState(initialState);
    }
  };
  return (
    <>
      <form className='w-7/12 m-auto' onSubmit={handleSubmit}>
        <h1 className='pt-5 pb-5 ml-3 block mb-2 text-4xl font-medium text-gray-900 dark:text-gray-300'>
          Create a new user
        </h1>
        <label
          htmlFor='name'
          className='ml-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Name
        </label>
        <input
          className='m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='text'
          id='name'
          name='name'
          placeholder='Enter Name...'
          value={name}
          onChange={handleInputChange}
        />
        <p className='pl-3 text-red-700'>{errorMessage}</p>
        <label
          htmlFor='email'
          className='m-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Email
        </label>
        <input
          className='m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='email'
          id='email'
          name='email'
          placeholder='Enter Email...'
          value={email}
          onChange={handleInputChange}
        />
        <p className='pl-3 text-red-700'>{errorMessage}</p>
        <label
          htmlFor='contact'
          className='m-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Contact
        </label>
        <input
          className='appearance-none m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          id='contact'
          name='contact'
          placeholder='Enter Contact No. ...'
          value={contact}
          onChange={handleInputChange}
          type='number'
        />
        <p className='pl-3 text-red-700'>{errorMessage}</p>
        <button
          type='submit'
          className=' m-3 text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          {" "}
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
