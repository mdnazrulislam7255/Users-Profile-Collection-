import React from 'react';
import { Row ,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit,faFunnelDollar } from '@fortawesome/free-solid-svg-icons'

const SalaryCart = (props) => {
    const cart=props.cartpeople;//cart
    //console.log(cartpeople);
    let s=0;
    for( let i=0 ; i < cart.length ; i++){
        const PeopleSalary=cart[i];
        s= s + PeopleSalary.salary;
        //console.log(s);
    }
    return (
        <div className="cart">
            <Row  >
                <Col md="6 mt-4">
                <p style={{float:"right"}}><FontAwesomeIcon icon={faUserEdit} /> <b>{cart.length}</b> People are added</p> 
                </Col>
                <Col md="6 mt-4">
                    <p style={{float:"left"}}><FontAwesomeIcon icon={faFunnelDollar} /> Total Salary: <b>${s}</b></p>
                </Col>
            </Row>
        </div>
    );
};

export default SalaryCart;