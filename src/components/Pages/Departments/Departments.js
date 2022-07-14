import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Sidebar from '../../Sidebar/Sidebar'
import TopBar from '../../TopBar/TopBar'
import DepartmentCard from './DepartmentCard/DepartmentCard'

import { getAllDepartments } from '../../../actions/departments'

import './Departments.css'
export const Departments = ({sidebarVisible, setSidebarVisible}) => {
  document.title = "Departments | Div.co Human Resource Management System";

  const departments = useSelector((state)=> state.departments)
  const dispatch = useDispatch()

  // const activeDepartments = departments.filter(department => department.status = "active")
  // const activeDepartments = departments.filter(department => department.status = "inactive")

  useEffect(() => {
      dispatch(getAllDepartments)
  }, [dispatch])

    return (
        <div className="Departments container">
        <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}  />

      <main>
        <TopBar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} pageName={"Departments"}/>

        <div className="info-cards-wrapper">
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className='material-symbols-sharp primary'>full_stacked_bar_chart</span>
              </div>
            </div>
            <div className="right">
              <h2>{departments.length}</h2>
              <p>Total Deparments</p>
            </div>

          </div>
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className='material-symbols-sharp success'>leaderboard</span>
              </div>
            </div>
            <div className="right">
              <h2>9</h2>
              <p>Total Active</p>
            </div>

          </div>
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className='material-symbols-sharp danger'>leaderboard</span>
              </div>
            </div>
            <div className="right">
              <h2>3</h2>
              <p>Total Inactive</p>
            </div>

          </div>
        </div>

        <div className="departments-list-wrapper">
          <div className="departments-list">
            <div className="button-wrapper">
            <h2>Departments List</h2>
            <div className="add-button">
              <span className='material-symbols-sharp'>add</span>
              Add Department
            </div>
            </div>

            {departments.map((department) => (
              <DepartmentCard department={department} />
            ))}
          </div>
          <div className="idk-yet"></div>
        </div>
        
      </main>
    </div>
    )
}