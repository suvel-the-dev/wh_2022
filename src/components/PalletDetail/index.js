import React from 'react'
import './style.css'

const PalletDetail = () => {
    return (
        <div className='pallet__detail' >
            <Detail list={
                [
                    {
                        "key": "LOC",
                        "value": "CP25042A01"
                    },
                    {
                        "key": "SKU",
                        "value": "5000359888"
                    },
                    {
                        "key": "SKU_DESC",
                        "value": "KEUR BRWR KSLCT GRAPHITE"
                    },
                    {
                        "key": "EXPIRY",
                        "value": "2030/10/20"
                    },
                    {
                        "key": "TOBEPICK",
                        "value": "40"
                    },
                    {
                        "key": "DAYS_LAST_PICK",
                        "value": "1"
                    },
                    {
                        "key": "VELOCITY",
                        "value": "C"
                    }
                ]
            } />
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