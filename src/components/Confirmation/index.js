import './confirmation.css';
import { FaCircleCheck } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

function Confirmation() {
    return (
        <div className='confirmContainer'>
            <div className='confirmFlex'>
                <h2>Confirmar Asistencia</h2>
                <div className='form'>
                    <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSchIxlZMHSaaZaAwsvN2LZqJsQjp3r3j_Iy7OFC8uTt2hRmag/viewform?embedded=true" 
                    width="640" 
                    height="800" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0">Cargando…</iframe>
                </div>
            </div>
        </div>
    );
  }
  
  export default Confirmation;