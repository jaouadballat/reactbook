import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import Nav from './SideNav';

class Header extends React.Component {

    state = {
        showNav: false
    }

    onHideNav = () => this.setState({showNav: false});


    render() {
        return (
            <div>
                <header style={{ backgroundColor: '#5481a9' }}>
                    <FontAwesome name="bars"
                        style={{
                            padding: '10px',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                        onClick={()=>this.setState({showNav: true})}
                    />
                    <Link to="/" style={{
                        textDecoration: 'none',
                        fontSize: '20px',
                        color: '#fff'

                    }}>The Book Store</Link>
                </header> 
                <Nav showNav={this.state.showNav}
                    onHideNav={this.onHideNav}
                    user={this.props.userAuth}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userAuth: state.users.user
    }
}


export default connect(mapStateToProps)(Header);