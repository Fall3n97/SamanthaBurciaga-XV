import './footer.css';
import { GithubOutlined } from '@ant-design/icons';
import LogoXV from '../../img/Samantha Logo-BLK.png'

function Footer() {
    return (
    <>
        <div className='footerContainer'>
            <div className='footerFlex'>
                <img src={LogoXV} width={220} />
            </div>
        </div>
        <div className='signature'>
        <p>Desarrollado por <strong>Ian Badillo</strong> © 2024</p>
        <a href='https://github.com/Fall3n97' target='_blank'><GithubOutlined style={{fontSize: '1.5em', cursor: 'pointer'}} /></a>
        </div>
    </>
    );
  }
  
  export default Footer;