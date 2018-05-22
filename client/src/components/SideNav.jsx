import React from 'react';
import SideNav from 'react-simple-sidenav';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';



const Nav = (props) => {
    
    if(props.user)
    return (
        props.user.isAuth ?
            <SideNav showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{ background: '#2b2b2b' }}
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
                <Link to="/profile" className="navItem">
                    <FontAwesome name="file"
                        style={{
                            padding: '10px',
                            color: '#868585',
                            cursor: 'pointer'
                        }}
                    />
                    My Profile
            </Link>
                <Link to="/userbooks" className="navItem">
                    <FontAwesome name="file"
                        style={{
                            padding: '10px',
                            color: '#868585',
                            cursor: 'pointer'
                        }}
                    />
                    My Reviews
            </Link>
                <Link to="/addbook" className="navItem">
                    <FontAwesome name="file"
                        style={{
                            padding: '10px',
                            color: '#868585',
                            cursor: 'pointer'
                        }}
                    />
                    Add Reviews
            </Link>
                <Link to="/logout" className="navItem">
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
            :
            <SideNav showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{ background: '#2b2b2b' }}
            >
                <Link to="/register" className="navItem">
                    <FontAwesome name="file"
                        style={{
                            padding: '10px',
                            color: '#868585',
                            cursor: 'pointer'
                        }}
                    />
                    Register
            </Link>
                <Link to="/login" className="navItem">
                    <FontAwesome name="file"
                        style={{
                            padding: '10px',
                            color: '#868585',
                            cursor: 'pointer'
                        }}
                    />
                    Login
            </Link>
            </SideNav>
            
    )
    else 
    return (
        <div></div>
    )
}

export default Nav;