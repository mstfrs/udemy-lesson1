import React, { Component } from 'react'

 class Can extends Component {
     
    render() {
        const {isim,soyisim}= this.props
        return (
            <div>
                
                <h1>Benim Adım {isim}, Soyadım {soyisim}</h1>
                
            </div>
        )
    }
}

export default Can