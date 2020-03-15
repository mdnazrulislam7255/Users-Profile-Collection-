import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import './UserInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const UserInfo = (props) => {
    const {img,name,address,phone,designation,email,salary}=props.usr;
    return (
    <Container style={{marginTop:'30px'}}>
       <Row>
        <Col md={12}>
            <div className="users mt-2">
                <div>
                    <img style={{height:'286px',width:'286px'}} src={img} alt=""/>
                </div>
                <div className="users-details ">
                <h5>{name} |<p style={{color:"#383838",fontSize:"12px",display:"inline",marginLeft:"5px"}}>{designation}</p></h5>
                <p className="address">
                                Email: {email}
                            </p >
                            <p className="address">
                                Phone: {phone}
                            </p>
                            <p className="address">
                                <b>Address:</b>
                            </p>
                            <p className="address">
                                Street: {address.street}
                            </p>
                            <p className="address">
                                City: {address.city}
                            </p>
                            <h5 className="salary">
                                Annual Salary: ${salary}
                            </h5>
                            <Button style={{marginTop:"5px"}}  onClick={()=> props.addPeople(props.usr)} variant="primary">
                            <FontAwesomeIcon icon={faPlus} /> Add People </Button>
                   </div>
            </div>
            </Col>
        </Row> 
    </Container>
    
       
    );
};

export default UserInfo;