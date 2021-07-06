import React from 'react'
import './style.css'

const PalletDetail = (props) => {

    const detail = Object.keys(props).map(key => {
        return { key, value: props[key] }
    })

    return (
        <div className='pallet__detail' >
            <Detail list={detail} />
        </div>
    )
}

export default PalletDetail

const Detail = ({ list }) => {
    return (
        <table>
            {list.map(li => {
                return (
                    <tr>
                        <td>{li.key}</td>
                        <td>{li.value}</td>
                    </tr>
                )
            })
            }
        </table >
    )
}