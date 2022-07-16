import React from 'react'

export const InfoCards = () => {
  return (
    <div className="info-cards-wrapper">
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className="material-symbols-sharp primary">list_alt</span>
              </div>
            </div>
            <div className="right">
              <h2>20</h2>
              <p>Applications</p>
            </div>
          </div>
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className="material-symbols-sharp success">
                  check_circle
                </span>
              </div>
            </div>
            <div className="right">
              <h2>12</h2>
              <p>Accepted</p>
            </div>
          </div>
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className="material-symbols-sharp warning">
                  pending_actions
                </span>
              </div>
            </div>
            <div className="right">
              <h2>6</h2>
              <p>Pending</p>
            </div>
          </div>
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className="material-symbols-sharp danger">cancel</span>
              </div>
            </div>
            <div className="right">
              <h2>2</h2>
              <p>Rejected</p>
            </div>
          </div>
        </div>
  )
}
