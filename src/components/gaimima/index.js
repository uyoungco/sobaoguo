import React from 'react';
import { Link } from 'react-router-dom'

class Gmima extends React.Component {
  constructor(props) {
    super(props)
    console.log('Gmima 初始化')
  }
  
  render() {
    console.log( 'Gmima' ,this.props)
    return (
      <div>
        Gmima
      </div>
    )
  }
}

export default Gmima