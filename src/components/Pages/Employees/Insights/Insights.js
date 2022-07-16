import React from 'react'

export const Insights = ({employees, femaleEmployeeNumber, maleEmployeeNumber}) => {
  return (
    <div className="insights">
          <div className="card">
            <span className="material-symbols-sharp"> badge </span>
            <div className="right-side">
              <p>Total Employees</p>
              <h1>{employees.length}</h1>
              <progress
                id="whatever"
                value={
                  Math.floor((employees.length / employees.length) * 10) || 0
                }
                min="0"
                max="10"
              ></progress>
            </div>
          </div>
          <div className="card">
            <span className="material-symbols-sharp"> person_2 </span>
            <div className="right-side">
              <p>Total Females</p>
              <h1>{femaleEmployeeNumber}</h1>
              <progress
                id="whatever"
                value={
                  Math.floor((femaleEmployeeNumber / employees.length) * 10) ||
                  0
                }
                min="0"
                max="10"
              ></progress>
            </div>
          </div>
          <div className="card">
            <span className="material-symbols-sharp"> person </span>
            <div className="right-side">
              <p>Total Males</p>
              <h1>{maleEmployeeNumber}</h1>
              <progress
                id="whatever"
                value={
                  Math.floor((maleEmployeeNumber / employees.length) * 10) || 0
                }
                min="0"
                max="10"
              ></progress>
            </div>
          </div>
        </div>
  )
}
