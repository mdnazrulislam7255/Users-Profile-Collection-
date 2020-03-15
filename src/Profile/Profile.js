import React, { useState } from 'react';
import fakeData from '../fakeData';
import { Container, Row,Col } from 'react-bootstrap';
import UserInfo from '../UserInformation/UserInfo';
import './Profile.css';
import SalaryCart from '../SalaryCart/SalaryCart';
const Profile = () => {
    const user=fakeData.slice(0,);
    const [users, setUsers]=useState(user);
    const [cartpeople,setPeople]=useState([]);//cart

    const addPeople=(usr)=>{
       // console.log(usr);
    const newPeople=[...cartpeople,usr];
    setPeople(newPeople);
    }
    return (
        <Container>
            <Row>
                <Col md="12">
                    <div className="cart">
                        <SalaryCart cartpeople={cartpeople}></SalaryCart>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                        {
                            users.map(user=><UserInfo addPeople={addPeople} usr={user}></UserInfo>)
                        }
                </Col>
            </Row>
        <footer>
           <p>©2020 Copyright: Nazrul Islam</p>
       </footer>
        </Container>
    );
};

export default Profile;