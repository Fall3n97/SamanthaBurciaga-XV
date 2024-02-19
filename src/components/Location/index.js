import React from 'react';
import { Col } from 'antd';
import { IconContext } from "react-icons";
import { FaMapPin } from "react-icons/fa";
import { MdChurch } from "react-icons/md";
import { GiRose } from "react-icons/gi";
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
      <IconContext.Provider value={{ 
                className: "iconLocation", 
                size: '2em',
                }}>
            <FaMapPin />
            </IconContext.Provider>
          <div className='title'>
            <h2>Ubicación</h2>
          </div>
          <div className='locationDetails'>
          <div style={{ padding: '0'}}>
              <Col>
                <div className='locationInfo'>
                  <h2>Ceremonia</h2>
                  <MdChurch style={{fontSize: '2.5em', marginBottom: '0.2em', color: '#082c63'}}/>
                  <h3>Lugar</h3>
                  <p>Templo de Nuestra Señora de Los Ángeles</p>
                  <h3>Hora</h3>
                  <p>7pm</p>
                  <h3>Dirección</h3>
                  <p>C. Aquiles Serdan 1380, Col. Los Ángeles, 34076</p>
                  <div className='locationMap'>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.1332031362326!2d-104.68333231191714!3d24.026367492739258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc83f7be524b5%3A0x50869104f05e26f0!2sC.%20Aquiles%20Serdan%201380%2C%20Predio%20Canoas%2C%2034077%20Durango%2C%20Dgo.!5e0!3m2!1ses-419!2smx!4v1708285296299!5m2!1ses-419!2smx" 
                        width="400" 
                        height="300" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                  </div>
                </div>
              </Col>
          </div>
          <div>
              <Col>
              <div className='locationInfo'>
                  <h2>Recepción (Puntual)</h2>
                  <GiRose style={{fontSize: '2.5em', marginBottom: '0.2em', color: '#082c63'}}/>
                  <h3>Lugar</h3>
                  <p>Casa Club Campestre</p>
                  <h3>Hora</h3>
                  <p>9pm</p>
                  <h3>Dirección</h3>
                  <p>Ex, Calle Hacienda Sta Cruz S/N, Campestre de Durango, 34196 Durango, Dgo.</p>
                  <div className='locationMap'>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14583.306700287865!2d-104.6694974074707!3d23.966568430616064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb872acdb686d%3A0x2d13d7472113edad!2sClub%20Campestre%20de%20Durango!5e0!3m2!1ses-419!2smx!4v1708285218542!5m2!1ses-419!2smx" 
                    width="400" 
                    height="300" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  </div>
                </div>
              </Col>
          </div>
          </div>
      </div>
    </div>
    );
  }
  
  export default Location;