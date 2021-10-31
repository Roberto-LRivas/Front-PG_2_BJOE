import React, { useContext } from 'react'
import { NavBar } from "../components/ui/NavBar";
import {
    //BrowserRouter as Router,
    Switch,
    Route, Redirect
    
  } from "react-router-dom";
import styled from 'styled-components';
import { Main } from "../components/main/Main";
import { SideBar } from "../components/ui/SideBar";
import { AuthContext } from '../Auth/AuthContext';


const SideBarNav = styled.div`
    
    margin-left: ${({ sidebar }) => (sidebar ? '250px' : '0px') };
    transition: 350ms;
`;

export const NavBarRouters = () => {

    const {showBar} = useContext(AuthContext);
    console.log(showBar);

    return (
        <>
           {/*  <NavBar/> */}
            <SideBar />

            <SideBarNav sidebar = {showBar} >
                <div className = "container mt-2">

                    <Switch>
                        <Route exact path = "/main" component = {Main} />

                        <Redirect to = "/main" />
                    </Switch>
                </div>
            </SideBarNav>
            
        </>
    )
}