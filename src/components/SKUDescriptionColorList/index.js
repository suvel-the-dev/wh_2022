import { useContext, useState } from 'react'
import SKUColorMapContext from '../../context/SKUColorMapContext'
import ControlContext from '../../context/ControlContext'
import './style.css'

const SKUDescriptionColorList = ({ show }) => {

    const [searchDesc, setSearchDesc] = useState('')

    const { skuDescColorMap } = useContext(SKUColorMapContext);
    const { control, setControl } = useContext(ControlContext);

    const skuList = Object.keys(skuDescColorMap).map(skuDesc => {
        return ({ id: skuDesc, color: skuDescColorMap[skuDesc] })
    })

    const filteredList = skuList.filter(sku => sku.id.includes(searchDesc))

    return (show &&
        <div>
            <input
                value={searchDesc}
                onChange={e => setSearchDesc(e.target.value)}
            />
            <button
                onClick={() => setControl({ ...control, displacedDesc: undefined })}
            >reset</button>
            <ul className='sku_list'>
                {filteredList.map(sku => {
                    const selected = sku.id == control.displacedDesc;
                    return (
                        <li className={selected ? `sku_list-selected` : ''}
                            onClick={() => setControl({ ...control, displacedDesc: sku.id })}
                        >
                            <div className='sku_color' style={{ background: sku.color }} />
                            {sku.id}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SKUDescriptionColorList
