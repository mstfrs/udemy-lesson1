import React, { Component } from 'react'
import Can from './Can'

 class AraKatman extends Component {
    render() {
        return (
            <div>
                {
                    this.props.dizim.map(dizim=>
                        <Can isim={dizim.props.ad} soyisim={dizim.props.soyad}/>
                    )
                }
            </div>
        )
    }
}
export default AraKatman