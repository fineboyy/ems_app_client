import React from 'react'
import { SettingsNav } from '../../SettingsNav/SettingsNav'

import './EditPermissions.css'
export const EditPermissions = () => {
  return (
    <div>
        <SettingsNav directories={["Permissions", "Edit"]} />

        <div className="EditPermissions setting-wrapper">
            <p className='fw-500 primary'>Edit Permissions</p>

            <div>
              <p>Role:</p>
              <p><b>Super Admin</b></p>
            </div>

            <table>
              <thead>
                <tr>
                  <th><p> Entities </p> </th>
                  <th><p> can-list </p> </th>
                  <th><p> can-view </p> </th>
                  <th><p> can-add </p> </th>
                  <th><p> can-edit </p> </th>
                  <th><p> can-delete </p> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>Employee</p></td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                </tr>
                <tr>
                  <td><p>Department</p></td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                </tr>
                <tr>
                  <td><p>Leave</p></td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                </tr>
                <tr>
                  <td><p>Role</p></td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                </tr>
                <tr>
                  <td><p>User</p></td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                  <td> <div><input type="checkbox" name="" id="" defaultChecked /></div> </td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
  )
}
