import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Home',
                path: '/home/usuarios',
                icon: <IoIcons.IoIosPaper/>
            }
        ]
    },
    {
        title: 'Usuario',
        path: '/Usuario',
        icon: <AiIcons.AiFillEnvironment />,
        iconClosed: <RiIcons.RiArrowDownFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Compras',
        path: '/compras',
        icon: <AiIcons.AiFillEnvironment />,
        iconClosed: <RiIcons.RiArrowDownFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    }

]
 