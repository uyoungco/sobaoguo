import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  handleRouter = () => {
      console.log(this.props)
    this.props.history.push('/home/item/_data')
  }
  render() {
    return (
      <div>
        Home
        <Link to='/home/item/_data'>跳转</Link>
        <button onClick={() => this.handleRouter()}> 跳转 </button>
      </div>
    )
  }
}

export default Home