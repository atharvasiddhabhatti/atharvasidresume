import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_RegStamps from "../../assets/img/projects/regstamps.png"
import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.webp";
import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_IotProject from "../../assets/img/projects/iotproject.png"
import L_ARRESUME from "../../assets/img/projects/arresume.jpeg"

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_PHP from "../../assets/img/skills/php.svg"
import L_MYSQL from "../../assets/img/skills/mysql.png"
import L_SPRINGBOOT from "../../assets/img/skills/spring-boot.png"
import L_RESTAPI from "../../assets/img/skills/rest-api.jpg"
import L_VIROREACT from "../../assets/img/skills/viroreact.png"

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Homeautomation and Temperature Monitoring Using IOT */}
        <ImageEvent
            date="05/03/2018"
            className="text-center"
            text="Homeautomation and Temperature Monitoring Using IOT"
            src={L_IotProject}
            alt="Homeautomation and Temperature Monitoring Using IOT"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Using Raspberry pi to control the electronic devices or light. Relay as a hardware was used. To monitor the temperature DHT11 is
                        used all this data was show on a web page. The temperature was stored in database and last 12hrs temperature was shown on the
                        webpage...

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Control any device connected to the relay</li>
                          <li>Powered by HTML, CSS, PHP, MYSQL</li>
                          <li>Used Internet Of Things</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MYSQL}
                                alt="MySQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MySQL
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://akjha96.github.io/Todo-List-React/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                {/* <UrlButton
                  href="https://github.com/akjha96/Todo-List-React"
                  target="_blank"
                >
                  FrontEnd Code
                </UrlButton>
                <UrlButton
                  href="https://github.com/akjha96/Todo-List-React"
                  target="_blank"
                >
                  BackEnd Code
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/atharvasiddhabhatti/homeautomationiot"
                  target="_blank"
                >
                  Code
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


{/* Project: Connecting people with Department of Registration and Stamps*/}
<ImageEvent
            date="16/09/2020"
            className="text-center"
            text="Connecting people with Department of Registration and Stamps"
            src={L_RegStamps}
            alt="Connecting people with Department of Registration and Stamps"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Buying and selling requires lots of paperwork also the procedure in the system is not in
                        a organised way to overcome this problem we came up with the solution to digitize these
                        entire procedure which will become more user-friendly, transparent, easy to use as well as
                        require less paper work. This process is preformed with complete security in organized
                        manner.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Used Spring Boot- RestAPI- Microservice Architecture</li>
                          <li>Buy or Sell your land,flat or house</li>
                          <li>Admin Controlled- Login and Sign Up</li>
                          <li>Verfication of details and  documents added by buyer or seller by admin. </li>
                          <li>Styled with  ReactJS, React-Bootstrap</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SPRINGBOOT}
                                alt="SpringBoot"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              SpringBoot
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_RESTAPI}
                                alt="RestAPI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              RestAPI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/atharvasiddhabhatti/Reg-Stamps-UI"
                  target="_blank"
                >
                  FrontEnd Code
                </UrlButton>
                <UrlButton
                  href="https://github.com/atharvasiddhabhatti/regi-stamps"
                  target="_blank"
                >
                  BackEnd Code
                </UrlButton>
                {/* <UrlButton
                  // href=""
                  target="_blank"
                >
                  Live Demo
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

          {/* AR Resume*/}
            <ImageEvent
            date="05/02/2021"
            className="text-center"
            text="AR Resume"
            src={L_ARRESUME}
            alt="AR Resume"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Resume is one of the very important document to get a job.
                        It shows the complete Profile of yourself, staring from the academic to skills to work experince you have. 
                        Making this document a user interactive can really showcase your skills in a better way. 
                         
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Scan the Physical resume and show different AR component such as buttons poster which a user can interact with.</li>
                          <li>Each component is Hyperlinked to their particular content such as certificates, Project github links etc.</li>
                          <li>App also provide a link to download the latest version of the resume.</li>
                          <li>Resume also has the QR code which scanned will direct link you to the App which is available on the Google Play Store.</li>
                          <li>Powered by React-Native, ViroReact</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_VIROREACT}
                                alt="ViroReact"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ViroReact
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/atharvasiddhabhatti/AR_Resume"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
                <UrlButton
                  href="https://play.google.com/store/apps/details?id=com.atharvasidresume"
                >
                  Download App
                </UrlButton>
                {/* <UrlButton
                  // href=""
                  target="_blank"
                >
                  Live Demo
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
