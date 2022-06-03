import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Loading...';
      case false:
        return <li><a href="http://localhost:3001/auth/google">Login with Google</a></li>;
      default:
        return <li><a href="http://localhost:3001/api/logout">logout</a></li>;

    }
  }

  render() {
    return (
      console.log('Yo' +JSON.stringify(this.props)),
      <nav>
        <div className="nav-wrapper">
          
          <p>Header element</p>
            {/* <Link to={this.props.auth ? '/surveys' : '/'}></Link> */}
             <ul>
              {this.renderContent()}
             </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);