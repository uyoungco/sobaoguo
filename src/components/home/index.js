import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  handleRouter = () => {
      console.log(this.props)
  }
  render() {
    return (
      <div>
        Home
        <Link to='/home/item_data'>跳转</Link>
        <button onClick={() => this.handleRouter()}> 跳转 </button>
      </div>
    )
  }
}

export default Home