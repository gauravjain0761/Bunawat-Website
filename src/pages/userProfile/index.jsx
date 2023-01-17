import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventsClubModule from '../../components/userProfile/eventsClubModule';
import SavedAddressModule from '../../components/userProfile/savedAddressModule';
import UserProfileModule from '../../components/userProfile/userProfileModule';
import "./userProfile.css";

const UserProfile = () => {
  return (
    <div id='userProfile'>
      <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="userProfile">
        <Row>
            <Col xs={12} md={5}>
               <div className='userProfile_man'>
                <h3>Hello Jemma</h3>
                <p>This is your space. Track events & orders and update your saved details from here.</p>
               </div>
               <div className='userProfile_menu'>
                 <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Link to="/userProfile">
                      <Nav.Link eventKey="userProfile" className='userProfile_menu_list'>
                            <img src="../img/ordersshop.png" alt='ordersshop' height="20" style={{marginRight: "8px"}} />
                            Orders & Shop
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/userProfile">
                      <Nav.Link eventKey="eventsClub" className='userProfile_menu_list'>
                            <img src="../img/eventsclub.png" alt='eventsclub' height="20" style={{marginRight: "8px"}} />
                            Events & Club
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/userProfile">
                      <Nav.Link eventKey="savedAddress" className='userProfile_menu_list'>
                        <img src="../img/shippingto.png" alt='Saved Address' height="20" style={{marginRight: "8px"}} />
                        Saved Address
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                 </Nav>
                 
                 <div className='userProfile_menu_list_third'>
                    <h6>
                    <img src="../img/storecredit.png" alt='Store credit' height="20" style={{marginRight: "8px"}} />
                    Store credit
                    </h6>
                    <h4>₹3,500 </h4>
                 </div>
               </div>
            </Col>
            <Col xs={12} md={7}>
                <Tab.Content>
                  <Tab.Pane eventKey="userProfile">
                    <Container>
                      <UserProfileModule />
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eventsClub">
                    <Container>
                      <EventsClubModule />
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="savedAddress">
                    <Container>
                      <SavedAddressModule />
                    </Container>
                  </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default UserProfile;
