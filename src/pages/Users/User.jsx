import { useState } from "react"
import { Modal } from "../../components/Modal/Modal"

export const Users = () => {
  const [userModal , setUserModal] =useState(false)
    return (
      <div>
        <h2>Users</h2>
        <button onClick={() => setUserModal(true)} className="btn btn-primary">Modal</button>
        {
          userModal ? <Modal title={'User Modal'} modal={userModal} setModal={setUserModal} >
            <h3 > Welcome to the User Modal</h3>
          </Modal> : ""
        }
      </div>
    )
  }