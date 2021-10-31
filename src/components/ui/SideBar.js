import React, { useContext, useState,useEffect } from 'react'
import { SidebarData } from './SideBarData';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { AuthContext } from '../../Auth/AuthContext';
import { SubMenu } from './SubMenu';

const Nav = styled.div`
    background: #5E62CA;
    height: 50px;
    justify-content: flex-start;
    align-items: center;
    z-index: 3;
`;

const NavIcon = styled.div`
    margin-left: 2rem;
    font-size: 1.5rem;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    a.skip-link: hover color:#1717FF;

`;

const SideBarNav = styled.nav`
    background: #F8F9F9;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${ ({ sidebar }) => (sidebar ? '0' : '-100%') };
    transition: 350ms;
    z-index: 10;
    margin-top: 50px;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

export const SideBar = () => {

    const {showBar,setShowBar} = useContext(AuthContext);

    const showSideBar = () => setShowBar(!showBar);
    
    return (
        <>
            <Nav> 
                <NavIcon to = '#'>
                    {
                        (showBar)
                        ?
                        <RiIcons.RiMenuFoldFill 
                            onClick = {showSideBar} 
                            className='changeColor animate__animated animate__flipInX'
                            onMouseOver={({target})=>target.style.color="black"}
                            onMouseOut={({target})=>target.style.color="white"}/>
                        :
                        <RiIcons.RiMenuUnfoldFill 
                            onClick = {showSideBar} 
                            className='changeColor animate__animated animate__flipInX'
                            onMouseOver={({target})=>target.style.color="black"}
                            onMouseOut={({target})=>target.style.color="white"}
                        />  
                    }
                </NavIcon> 
            </Nav>

            <SideBarNav className = 'animate__animated animate__fadeIn' sidebar = {showBar} >
                <SidebarWrap>
                    { SidebarData.map ( (item, index) => {
                        return <SubMenu item={item} key={index} />;

                    }) }
                </SidebarWrap>
            </SideBarNav>
        </>
    );
}

