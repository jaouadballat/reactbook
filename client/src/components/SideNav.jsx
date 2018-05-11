import React from 'react';
import SideNav from 'react-simple-sidenav';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <SideNav showNav={props.showNav} 
            onHideNav={props.onHideNav}
            navStyle={{background:'#2b2b2b'}}
        >
            <Link to="/" className="navItem">
                <FontAwesome name="home"
                    style={{
                        padding: '10px',
                        color: '#868585',
                        cursor: 'pointer'
                    }}
                />
                Home
            </Link>
            <Link to="/user" className="navItem">
                <FontAwesome name="file"
                    style={{
                        padding: '10px',
                        color: '#868585',
                        cursor: 'pointer'
                    }}
                />
                My Profile
            </Link>
            <Link to="/" className="navItem">
                <FontAwesome name="file"
                    style={{
                        padding: '10px',
                        color: '#868585',
                        cursor: 'pointer'
                    }}
                />
                Add Admin
            </Link>
            <Link to="/" className="navItem">
                <FontAwesome name="file"
                    style={{
                        padding: '10px',
                        color: '#868585',
                        cursor: 'pointer'
                    }}
                />
                Login
            </Link>
            <Link to="/" className="navItem">
                <FontAwesome name="file"
                    style={{
                        padding: '10px',
                        color: '#868585',
                        cursor: 'pointer'
                    }}
                />
                My Reviews
            </Link>
            <Link to="/" className="navItem">
                <FontAwesome name="file"
                    style={{
                        padding: '10px',
                        color: '#868585',
                        cursor: 'pointer'
                    }}
                />
                Add Reviews
            </Link>
            <Link to="/" className="navItem">
                <FontAwesome name="file"
                    style={{
                        padding: '10px',
                        color: '#868585',
                        cursor: 'pointer'
                    }}
                />
                Logout
            </Link>
        </SideNav>
            
    )
}

export default Nav;