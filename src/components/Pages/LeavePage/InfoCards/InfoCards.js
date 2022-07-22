import React from 'react'

export const InfoCards = ({total, pending, rejected, approved}) => {
  return (
    <div className="info-cards-wrapper">
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className="material-symbols-sharp primary">list_alt</span>
              </div>
            </div>
            <div className="right">
              <h2>{total?.length ? total.length : 0}</h2>
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
              <h2>{ approved.length ?  approved.length : 0 }</h2>
              <p>Approved</p>
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
              <h2>{pending?.length ?  pending?.length : 0 }</h2>
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
              <h2>{rejected?.length ?  rejected.length : 0 }</h2>
              <p>Rejected</p>
            </div>
          </div>
        </div>
  )
}
