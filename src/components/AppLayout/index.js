import './style.css';
import logo from '../../asset/band/logo.png';
import SearchBar from '../SearchBar';
import LocationList from '../LocationList';
import Warehouse3d from '../Warehouse3d'

const AppLayout = () => {
    return (
        <div class="grid-container">
            <div class="header">
                <img
                    className='brand-logo'
                    src={logo}
                    width={165}
                    height={38}
                />
            </div>
            <div class="location">
                <SearchBar />
                <LocationList />
            </div>
            <div class="location3d">
                <Warehouse3d />
                <div class="loc3dconsole"></div>
            </div>
            <div class="footer">
                <span>dhl@20201</span>
            </div>
        </div>
    )
}

export default AppLayout;