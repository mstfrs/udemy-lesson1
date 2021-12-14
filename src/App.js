
import AraKatman from './AraKatman'
import React, { Component } from 'react'

 class App extends Component {
  render() {
    const dizim=[{
      id:1,
      ad:"Mustafa",
      soyad:"ÖRS"
    },
    {
      id:2,
      ad:"Murat",
      soyad:"Öz"
    },{
      id:3,
      ad:"Mehmet",
      soyad:"BOZ"
    }
  ]
    return (
      <div>
        <AraKatman dizim={dizim}/>
        {/* <AraKatman isim={this.props.ad} soyisim={this.props.soyad}/> */}
      </div>
    )
  }
}
export default App