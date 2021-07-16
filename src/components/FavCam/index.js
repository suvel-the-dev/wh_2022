import React, { useContext } from 'react'
import './style.css'
import ControlContext from '../../context/ControlContext'

const FavCam = () => {
    const { control, setControl, orbitRef } = useContext(ControlContext)

    const handelFavCam = () => {
        if (!orbitRef?.current) return;
        const target = orbitRef.current.target;
        const position = orbitRef.current.object.position
        const cameraPosition = [position.x, position.y, position.z];
        const orbitTarget = [target.x, target.y, target.z];

        const favCams = [
            ...control.favCams,
            {
                cameraPosition,
                orbitTarget,
            }
        ]
        localStorage.setItem("favCams", JSON.stringify(favCams));
        setControl({
            ...control,
            favCams
        })

    }

    return (
        <div className='opt_cam__container'>
            {control.favCams.map((cam, index) => {
                return (
                    <button
                        onClick={() => {
                            setControl({
                                ...control,
                                ...cam
                            })
                        }}
                    >
                        {`Fav Cam ${index + 1}`}
                    </button>)
            })}
            <button
                onClick={handelFavCam}
            >Add Fav Cam</button>
        </div>
    )
}

export default FavCam
