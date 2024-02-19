import React from 'react';
import './dressing.css';
import DressCode from '../../img/dress-code.png';

function Dress() {
    return (
        <div className='dressingContainer'>
            <div className='dressingFlex'>
                <h2>Código de Vestimenta</h2>
                <div className='icons'>
                    <img src={DressCode} width={100}/>
                {/* <FaUserTie style={{marginRight: '30px'}} /><GiAmpleDress /> */}
                </div>
                <p>Formal</p>
            </div>
        </div>
    );
  }
  
  export default Dress;