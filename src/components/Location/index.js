import React from 'react';
import { Descriptions, Card, Col, Row } from 'antd';
import { LineOutlined, PushpinFilled } from '@ant-design/icons';
import './location.css'

const itemsCeremonia = [
  {
    key: '1',
    label: 'Lugar',
    children: <p>Iglesia de Los Angeles</p>,
  },
  {
    key: '2',
    label: 'Hora',
    children: <p>7pm</p>,
  },
  {
    key: '3',
    label: 'Dirección',
    children: <p>Av. 20 de Noviembre s/n, Zona Centro, 34000 Durango, Dgo.</p>,
  },
];

const itemsFiesta = [
  {
    key: '1',
    label: 'Recepción (Puntual)',
    children: <p>Casa Club Campestre</p>,
  },
  {
    key: '2',
    label: 'Hora',
    children: <p>9pm</p>,
  },
  {
    key: '3',
    label: 'Dirección',
    children: <p>Campestre</p>,
  },
];

function Location() {
    return (
    <div className='locationContainer'>
      <div className='locationFlex'>
          <div className='title'>
            <h2>Fecha y Ubicación</h2>
            <p><LineOutlined/><PushpinFilled /><LineOutlined/></p>
          </div>
          <div className='locationDetails'>
          <Row style={{ borderBottom: '1px solid beige'}}>
              <Col>
                <div className='locationInfo'>
                  <h2>Ceremonia</h2>
                  <h3>Lugar</h3>
                  <p>Iglesia de los Angeles</p>
                  <h3>Hora</h3>
                  <p>7pm</p>
                  <h3>Dirección</h3>
                  <p>Av. 20 de Noviembre s/n, Zona Centro, 34000 Durango, Dgo.</p>
                </div>
              </Col>
          </Row>
          <Row>
              <Col>
              <div className='locationInfo'>
                  <h2>Recepción (Puntual)</h2>
                  <h3>Lugar</h3>
                  <p>Casa Club Campestre</p>
                  <h3>Hora</h3>
                  <p>9pm</p>
                  <h3>Dirección</h3>
                  <p>Av. 20 de Noviembre s/n, Zona Centro, 34000 Durango, Dgo.</p>
                </div>
              </Col>
          </Row>
          </div>
          <div className='locationMap'>
          </div>
      </div>
    </div>
    );
  }
  
  export default Location;