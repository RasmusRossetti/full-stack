import axios from "axios";
import React, { useContext, useState } from "react";
import { RefreshContext } from "../contexts/RefreshContext.js";
import useFetch from "../hooks/useFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal.js";
toast.configure();
/**
 * Table is a functional component for the output user table
 * @author Rasmus Rossetti
 * @returns table that displays users
 */
const Table = () => {
  /**
   * global hook for refreshing table
   */
  const { refresh, setRefresh } = useContext(RefreshContext);
  /**
   * hooks from our custom hook that fetches data
   */
  const { data, loading, error } = useFetch("http://localhost:5000/users");
  /**
   * hook retreiving data from input
   */
  const [searchInput, setSearchInput] = useState("");
  /** toggling the modal
   * @param {boolean}
   */
  const [showModal, setShowModal] = React.useState(false);

  if (error) {
    console.log(error);
  }
  /**
   * deleteUser function delete a user onclick
   * @param {string} id the id from a certain user to delete
   */
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete user?")) {
      const response = await axios.delete(`http://localhost:5000/user/${id}`);
      if (response.status === 200) {
        toast.dark(response.data, {
          autoClose: 1000,
        });
        /**
         * setting the global boolean variable refresh not equal to trigger refreshing the table
         */
        setRefresh(!refresh);
      }
    }
  };

  return (
    <>
      <div className='mt-28 w-8/12 m-auto relative overflow-x-auto shadow-md sm:rounded-lg'>
        <label
          htmlFor='search'
          className='ml-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Search user by name
        </label>
        <input
          className='m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='text'
          id='name'
          name='name'
          placeholder='Enter Name...'
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Contact
              </th>
              <th scope='col' className='px-6 py-3'>
                Id
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Edit</span>
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data && (
              <>
                {loading ? (
                  <div className='text-2xl'>...loading</div>
                ) : (
                  data
                    .filter((val) => {
                      if (searchInput === "") {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(searchInput.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((item) => (
                      <tr key={item.id} className='bg-white dark:bg-gray-800'>
                        <th
                          scope='row'
                          className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                        >
                          {item.name}
                        </th>
                        <td className='px-6 py-4'>{item.email}</td>
                        <td className='px-6 py-4'>+{item.contact}</td>
                        <td className='px-6 py-4'>{item.id}</td>
                        <td className='px-6 py-4 text-right'>
                          <Modal item={item} />
                        </td>
                        <td className='px-6 py-4 text-right'>
                          <button
                            onClick={() => deleteUser(item.id)}
                            className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
