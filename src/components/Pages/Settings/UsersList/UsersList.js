import React from 'react'
import { SettingsNav } from '../SettingsNav/SettingsNav'

export const UsersList = () => {

    const dummyUsers = [
        "John Stones",
        "Harvey Barnes",
        "Dani Olmo",
        "Xavi Hernandez",
    ]
    const dummyRoles = [
        "Super Admin",
        "Admin",
        "HR Personnel",
        "Executive Management",
    ]
  return (
    <div className="PermissionsList">
      <SettingsNav />

      <section className="setting-wrapper">
        <p className="primary fw-500">Users</p>

        <div className="top-btns">
          <div className="btn">
            <span className="material-symbols-sharp primary">
              add 
            </span>
            <p>Add New User</p>
          </div>
        </div>

        <div className="roles">
          <div className="role">
            <div className="side left">
              <div>
                <p>#</p>
              </div>
              <div>
                <p>Name</p>
              </div>
              <div>
                <p>Role</p>
              </div>
            </div>
            <div className="side right">
            </div>
          </div>
          {dummyUsers.map((user, i) => (

          <div className="role">
            <div className="side left">
              <div>
                <p>{i + 1}</p>
              </div>
              <div>
                <p>{user}</p>
              </div>
              <div>
                <p>{dummyRoles[i]}</p>
              </div>
            </div>
            <div className="side right">
              <span className="material-symbols-sharp primary">edit</span>
              <span className="material-symbols-sharp danger">delete</span>
            </div>
          </div>
          ))}
        </div>
      </section>
    </div>
  )
}
