import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../scss/abstract.scss'

class Layout extends React.Component {

  componentDidUpdate() {
    window.location.reload(false);
  }


  render() {

    const { children } = this.props
    
    

    return (
      <div id="main">
        <Navbar scroll={this.props.isHome ? true : false} sections={this.props.sections} />
        <div>
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
