import React from 'react';
import { Link } from 'react-router-dom'

class Itemdata extends React.Component {
  constructor(props) {
    super(props)
    console.log('Itemdata 初始化')
  }
  
  render() {
    console.log( 'Itemdata' ,this.props)
    return (
      <div>
        Itemdata
      </div>
    )
  }
}

export default Itemdata