import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="search_bar">
          <input type="text" placeholder="Search.." name="search" />
          <i className="fa-solid fa-microphone voiceIcon"></i>
        </div>
        <div className="right_nav">
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
              <Popover
                id={`popover-positioned-bottom`}
                className="notificationBox"
              >
                <Popover.Header as="h3" className="notificationHeader">
                  Notifications
                </Popover.Header>
                <Popover.Body>
                  <div className="notificationBody">
                    <div className="notifyTabs">
                      <p>Action</p>
                      <p className="information">Information</p>
                      <p>Announcements</p>
                    </div>
                    <div className="informationBody">
                      <div className="notify">
                        <span>12/10/2022</span>
                        <p className="specialNotify">
                          Reminder: Your Infosys Global Agile Developer
                          Certification will expire on 12/25/2022. Please
                          attempt all the required certifications to bag SDET
                          skill tag.
                        </p>
                      </div>
                      <div className="notify">
                        <span>12/08/2022</span>
                        <p>
                          You have completed the Course - Automation Foundation
                        </p>
                      </div>
                      <div className="notify">
                        <span>12/05/2022</span>
                        <p>
                          You have completed the Course - Automation Foundation
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Body>
              </Popover>
            }
          >
            <i className="far fa-bell nav_icon"></i>
          </OverlayTrigger>
          {/* <i className="far fa-bell nav_icon"></i> */}
          <i className="fas fa-user-circle nav_icon user_icon"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
