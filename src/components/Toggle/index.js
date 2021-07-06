import Switch from "react-switch";
import './style.css'

const Toggle = ({ label, checked, setChecked }) => {
    return (
        <div className='toggle'>
            <div className='toggle-btn'>
                <Switch
                    handleDiameter={10}
                    height={20}
                    width={40}
                    onChange={(chk) => setChecked(chk)}
                    checked={checked}
                    onColor={"#ffcc00"}
                />
            </div>
            <div className='toggle-label'>
                <span>
                    {
                        label
                    }
                </span>
            </div>

        </div>
    )
};

export default Toggle;