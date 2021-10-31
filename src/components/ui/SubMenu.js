import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const SideBarLink = styled(Link)`
    display:flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    list-style: none;
    height: 60px;
    text-decoration:none;
    font-size: 18px;

    &:hover {
        background: #31A9C1;
        border-left: 4px solid skyblue;
        cursor: pointer;
    }
`; 

const SideBarLabel = styled.span`
    margin-left: 20px;
`;


export const SubMenu = ({item}) => {
    return (
        <>
        <SideBarLink to= {item.path} >
            <div>
                {item.icon}
                <SideBarLabel>
                    {item.title}
                </SideBarLabel>
            </div>

        </SideBarLink>
        </>
                
    );
}

