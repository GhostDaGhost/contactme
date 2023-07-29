import logo from '../../assets/images/logo.png';
import { centeringStyle } from '../../styles/styles';

const logoStyle: any = {
    width: '100px',
    height: '100px'
};

const Logo: React.FC = () => {
    return (
        <div style={centeringStyle} className="mb-3">
            <img src={logo} style={logoStyle} loading="lazy" alt="logo" draggable="false" />
        </div>
    )
}

export default Logo;
