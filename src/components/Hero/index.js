import './hero.css';
import React from 'react';
import { Col, Statistic } from 'antd';
const { Countdown } = Statistic;
const deadline = new Date("Mar 2, 2024 18:00:00").getTime();

function Hero() {
    return (
      <div className='Hero'>
      <div className='heroMask'>
        <div className='textContainer'>
          <div className='textInvite'>
                <h4>Mis XV's</h4>
          </div>
          <div className='partyName'>
                <h1>Samantha Burciaga</h1>
          </div>
          <div className='counter'>
              <Col
                span={24}>
                     <Countdown value={deadline} format="DD [Días] | HH [Horas] | mm [Minutos] | ss [Segundos]" style={{fontWeight: 400, fontSize: '0.9em'}}/>
              </Col>
          </div>
          <div className='date'>
                <h3>2 de Marzo del 2024</h3>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default Hero;