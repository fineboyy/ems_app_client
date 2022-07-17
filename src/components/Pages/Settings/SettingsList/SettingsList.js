import React from 'react'
import { Link } from 'react-router-dom'

export const SettingsList = () => {
  return (
    <div className="settings-list">
            <Link className="list-item" to={"user"}>
              <div className="left-side">
                <span className="material-symbols-sharp">
                  admin_panel_settings
                </span>
                <p>Manage User Info</p>
              </div>
              <span className="material-symbols-sharp arrow">
                arrow_forward_ios
              </span>
            </Link>
            <Link className="list-item" to={"permissions"}>
              <div className="left-side">
                <span className="material-symbols-sharp">safety_check</span>
                <p>Manage Permissions</p>
              </div>
              <span className="material-symbols-sharp arrow">
                arrow_forward_ios
              </span>
            </Link>
            <Link className="list-item" to={"notifications"}>
              <div className="left-side">
                <span className="material-symbols-sharp">notifications</span>
                <p>Notifications</p>
              </div>
              <span className="material-symbols-sharp arrow">
                arrow_forward_ios
              </span>
            </Link>
            <Link className="list-item" to={"users"}>
              <div className="left-side">
                <span className="material-symbols-sharp">person</span>
                <p>Users</p>
              </div>
              <span className="material-symbols-sharp arrow">
                arrow_forward_ios
              </span>
            </Link>
            <Link className="list-item" to={"preferences"}>
              <div className="left-side">
                <span className="material-symbols-sharp">
                  temp_preferences_custom
                </span>
                <p>Preferences</p>
              </div>
              <span className="material-symbols-sharp arrow">
                arrow_forward_ios
              </span>
            </Link>
            <Link className="list-item" to={"organization"}>
              <div className="left-side">
                <span className="material-symbols-sharp">corporate_fare</span>
                <p>Organization</p>
              </div>
              <span className="material-symbols-sharp arrow">
                arrow_forward_ios
              </span>
            </Link>
            <Link className="list-item" to={"about-software"}>
              <div className="left-side">
                <span className="material-symbols-sharp">code</span>
                <p>Software Information</p>
              </div>
              <span className="material-symbols-sharp arrow">
                arrow_forward_ios
              </span>
            </Link>
          </div>
  )
}
