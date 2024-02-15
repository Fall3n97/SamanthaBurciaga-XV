import React from 'react';
import { Descriptions } from 'antd';
import { LineOutlined, PushpinFilled } from '@ant-design/icons';
import './location.css'

const itemsCeremonia = [
  {
    key: '1',
    label: 'Lugar',
    children: <p>Catedral</p>,
  },
  {
    key: '2',
    label: 'Hora',
    children: <p>6pm</p>,
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
    children: <p>Salón Campestre</p>,
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
            <Descriptions title="Ceremonia" items={itemsCeremonia} layout='vertical'/>
            <Descriptions title="Recepción" items={itemsFiesta} layout='vertical'/>
          </div>
          <div className='locationMap'>
          </div>
      </div>
    </div>
    );
  }
  
  export default Location;