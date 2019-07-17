import React from 'react'
import Color from './Color'

const ColorList = ({ colors=[] }) =>
    <div className="color-list">
        {colors.length === 0 ?
            <p>No colors Listed. (Add a color)</p> :
            colors.map(color =>
                <Color key={color.id} {...color}/>
            )
        }
    </div>

export default ColorList