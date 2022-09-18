import React from 'react';
import { SvgXml } from 'react-native-svg';
import Icon from '@svgr-iconkit/entypo';

import { Colors } from '../constants/theme';
import styles from '../styles';
  

export const LinkedIn = () =>{
    let linkedIn = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
    `
    return(
        <SvgXml xml={linkedIn} width="30" height="30" style={{color: "gray"}} />
    )
}

export const Search = () =>{
    let searchIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
        </svg>
    `
    return(
        <SvgXml xml={searchIcon} width="16" height="16" style={{color: "gray", alignSelf: "center"}} />
    )
}

export const Message = () =>{
    let message = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
        </svg>
    `
    return(
        <SvgXml xml={message} width="30" height="30" style={{color: "gray"}} />
    )
}

export const Home = () =>{
    let home = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
        </svg>
    `
    return(
        <SvgXml xml={home} width="30" height="30" style={{color: "gray"}} />
    )
}

export const People = () =>{
    let people = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z">
            </path>
        </svg>
    `
    return(
        <SvgXml xml={people} width="30" height="30" style={{color: "gray"}} />
    )
}

export const PlusIcon = () =>{
    return(
        <Icon name="squared-plus" color="gray" size={30} />
    )
}

export const Jobs = () =>{
    let jobs = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
        </svg>
    `
    return(
        <SvgXml xml={jobs} width="30" height="30" style={{color: "gray"}} />
    )
}

export const Notifications = () =>{
    let notifications = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
        </svg>
    `
    return(
        <SvgXml xml={notifications} width="30" height="30" style={{color: "gray"}} />
    )
}

export const BaseIcon = ({icon, iconColor}) =>{
    return(
        <Icon name={icon} color={iconColor} size={20} />
    )
}

export const SmallIcon = ({icon}) =>{
    return(
        <Icon style={styles.smallIcon}
         name={icon} color="gray" size={12} />
    )
}

export const Like = ({style}) =>{
    let icon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="like-consumption-small" data-supported-dps="16x16">
        <g>
            <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none"/>
            <circle cx="8" cy="8" r="7" fill="#378fe9"/>
            <path d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.13 7.13 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.78.78 0 00-.67.81c0 .14.07.63.1.8a7.54 7.54 0 001 2.2H4.12a.88.88 0 00-.65.28.84.84 0 00-.23.66.91.91 0 00.93.85h.16a.82.82 0 00-.55.24.77.77 0 00-.21.54.81.81 0 00.74.8.8.8 0 00.33 1.42.76.76 0 00-.09.55.87.87 0 00.85.63h2.29a3.8 3.8 0 00.89-.11l1.42-.4h1.9c1.02-.04 1.29-4.64.03-4.64z" fill="#d0e8ff" fill-rule="evenodd"/>
            <path d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .92.92 0 00.93.84h.16a.82.82 0 00-.55.24.77.77 0 00-.21.56.83.83 0 00.74.81.81.81 0 00-.31.63.81.81 0 00.65.8.78.78 0 00-.09.56.86.86 0 00.85.62h2.29a3.8 3.8 0 00.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0s-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.08 7.08 0 01-1.7-2.25 2.14 2.14 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.71 1.71 0 00-.09.3 2.38 2.38 0 00.07.84 4.12 4.12 0 00.27.84 6.65 6.65 0 00.66 1 .18.18 0 01.07.08" fill="none" stroke="#004182" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    `

    return(
        <SvgXml style={style}
         xml={icon} width="20" height="20" />
    )
}

export const Support = ({style}) =>{
    let icon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="16" viewBox="0 0 17.5 16" id="support-consumption-small" data-supported-dps="16x16">
            <defs>
            <mask id="reactions-support-consumption-small-a" x="0" y="0" width="17.5" height="16" maskUnits="userSpaceOnUse">
                <path d="M8 15a7 7 0 10-7-7 7 7 0 007 7z" fill="#fff"/>
            </mask>
            </defs>
            <g mask="url(#reactions-support-consumption-small-a)">
            <circle cx="8" cy="8" r="8" fill="none"/>
            <path d="M8 15a7 7 0 10-7-7 7 7 0 007 7z" fill="#d8d8d8"/>
            <path d="M8 15a7 7 0 10-7-7 7 7 0 007 7z" fill="#bba9d1"/>
            <path d="M6.55 10.62h-.21c-.23-.09-1.38-.53-2.15-.74A.25.25 0 014 9.67a.67.67 0 01.11-.5.39.39 0 01.34-.17.69.69 0 01.2 0 1.79 1.79 0 01.42.25l.36.25.33.24.84.33c.11 0 .58.26.55.38s-.53.11-.64.11z" fill="#fef2ff"/>
            <path d="M15.47 14.07a23.68 23.68 0 01-3.56-.33h-.06a21.22 21.22 0 01-2.64-.51c-.77-.22-1.53-.5-2.26-.77l-.33-.12c-.7-.25-1.26-.47-1.77-.67l-.2-.07a9.1 9.1 0 01-.9-.4c-.4-.22-.53-.5-.35-.84A.6.6 0 014 10h.2a21.93 21.93 0 012.86.86h1.19L11 11a5.08 5.08 0 00-2-.8c-.25-.06-.48-.13-.53-.29a.66.66 0 01.24-.72 1.09 1.09 0 01.56-.12 3.27 3.27 0 01.7.08l.36.1a4.25 4.25 0 00.86.18 8.87 8.87 0 011.43.3 2.43 2.43 0 012 1.51c-.06-.18 0-.05 0-.11v-.06h.99c.13 0 .7-.14.7 0a5.45 5.45 0 01-.67 3 .17.17 0 01-.14.1z" fill="#eae2f3"/>
            <path d="M13.2 10a.09.09 0 00.1 0z" fill="#d67676"/>
            <path d="M6.14 3.57a1.43 1.43 0 00-2 0 1.5 1.5 0 000 2.1L6.3 7.92l2.22-2.25a1.5 1.5 0 000-2.1 1.44 1.44 0 00-2 0l-.17.17z" fill="#ecaa96" fill-rule="evenodd"/>
            <path d="M16.92 11.25a2.58 2.58 0 01-.13 1.62 5.29 5.29 0 01-1.21 1.69c-.13.12-4.85-.52-6-.69a58.16 58.16 0 01-6.49-2.7c-.21-.11-.22-.9.37-1.06s2.85.8 3.8.88 2.54.18 3.67.18-1.3-.68-1.7-.82-1-.31-1.08-.64S8.63 9 9 9a6.57 6.57 0 012 .35 13.35 13.35 0 012.45.5A3.1 3.1 0 0115 11c.11.2 1.81.17 1.92.25z" fill="none" stroke="#493d57"/>
            <path d="M4.07 10.09A.75.75 0 014.59 9c.4-.08 1.18.42 1.72.91a5.73 5.73 0 001.89 1.14" fill="none" stroke="#493d57"/>
            <path d="M6.22 3.37A1.58 1.58 0 004 5.6L6.4 8l2.42-2.4a1.59 1.59 0 00.43-1.38 1.54 1.54 0 00-.86-1.15 1.52 1.52 0 00-.69-.16 1.58 1.58 0 00-1.12.47l-.18.17z" fill="none" stroke="#77280c" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    `

    return(
        <SvgXml style={style}
         xml={icon} width="20" height="20" />
    )
}

export const Light = ({style}) =>{
    let icon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="interest-consumption-small" data-supported-dps="16x16">
        <g>
        <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none"/>
        <circle cx="8" cy="8" r="7" fill="#f5bb5c"/>
        <path d="M8.82 13.4h-1.6a.54.54 0 01-.54-.54v-1.33h2.68v1.33a.54.54 0 01-.54.54z" fill="#ffe1b2" fill-rule="evenodd"/>
        <path d="M6.69 11.79v-.26a3.08 3.08 0 00-.16-1A3.46 3.46 0 006 9.75a3.24 3.24 0 01-1.19-2.49 3.21 3.21 0 016.42 0A3.38 3.38 0 0110 9.8c.07-.05-.08.06-.18.2a1.71 1.71 0 00-.23.47 3.37 3.37 0 00-.15 1v.26" fill="#fcf0de" fill-rule="evenodd"/>
        <path d="M7.46 4.78a2.21 2.21 0 00-1.22.65 2.43 2.43 0 00-.68 1.22" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M8.82 13.4h-1.6a.54.54 0 01-.54-.54v-1.33h2.68v1.33a.54.54 0 01-.54.54z" fill="none" stroke="#5d3b01" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.68 11.79v-.26a3.37 3.37 0 00-.15-1 2 2 0 00-.26-.47 2.54 2.54 0 00-.37-.43 3.41 3.41 0 01-.37-.39 3.16 3.16 0 01-.72-2h0a3.21 3.21 0 016.42 0 3.25 3.25 0 01-.73 2 3.84 3.84 0 01-.57.57l-.2.21a1.68 1.68 0 00-.22.47 3.37 3.37 0 00-.15 1v.26M4.6 2.64l.61.79M11.42 2.63l-.61.8M8 1.5v1.26" fill="none" stroke="#5d3b01" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>
    `

    return(
        <SvgXml style={style}
         xml={icon} width="20" height="20" />
    )
}

export const Love = ({style}) =>{
    let icon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="empathy-consumption-small" data-supported-dps="16x16">
        <g>
            <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none"/>
            <circle cx="8" cy="8" r="7" fill="#df704d"/>
            <path d="M7.71 5A2.64 2.64 0 004 8.75l4 4 4-4A2.64 2.64 0 0012 5a2.61 2.61 0 00-1.85-.77h0A2.57 2.57 0 008.3 5l-.3.3z" fill="#fff3f0" stroke="#77280c" fill-rule="evenodd"/>
            <path d="M11.43 5.18a2 2 0 01.53.63c.9 1.67-.6 2.72-1.54 3.67-.6.61-1.22 1.22-1.85 1.8M5.79 4.81a2.1 2.1 0 00-.79.11 1.8 1.8 0 00-1 .82A2.6 2.6 0 003.77 7v.09" fill="none"/>
            <path d="M7.71 5A2.6 2.6 0 004 5a2.66 2.66 0 000 3.7l4 4 4-4A2.66 2.66 0 0012 5a2.58 2.58 0 00-1.85-.78h0A2.58 2.58 0 008.3 5l-.3.25z" fill="none" stroke="#77280c" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>
    `

    return(
        <SvgXml style={style}
         xml={icon} width="20" height="20" />
    )
}

export const Celebrate = ({style}) =>{
    let icon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="praise-consumption-small" data-supported-dps="16x16">
            <defs>
                <mask id="reactions-praise-consumption-small-a" x="0" y="0" width="16" height="16" maskUnits="userSpaceOnUse">
                <path d="M8 1a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7z" fill="#fff" fill-rule="evenodd"/>
                </mask>
            </defs>
            <g>
                <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none"/>
                <g>
                <path d="M8 1a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7z" fill="#d8d8d8"/>
                </g>
                <g mask="url(#reactions-praise-consumption-small-a)">
                <circle cx="8" cy="8" r="7" fill="#6dae4f"/>
                <path d="M8 1a7 7 0 11-7 7 7 7 0 017-7zm0-1a8 8 0 105.66 2.34A8 8 0 008 0z" fill="#fff"/>
                <path d="M12.13 9.22a9.19 9.19 0 00-.36-2.32A4.29 4.29 0 0110.44 5c-.16-.53-.27-.72-.74-.73a.74.74 0 00-.65.8c0 .24 0 .49.06.72a11.5 11.5 0 00.58 1.92l-4.5-3.38a.75.75 0 00-1.11.07.73.73 0 00.27 1L6.6 7.1l.59.56L3.62 5a.71.71 0 00-.75-.16.69.69 0 00-.46.61.71.71 0 00.36.67L5 7.77l1.35 1-2.9-2.19a.79.79 0 00-.57-.21.8.8 0 00-.54.28c-.31.4-.06.81.26 1.06L4.85 9.4l1.15.85-2.27-1.7a.74.74 0 00-1.09 0 .76.76 0 00.24 1.09l4.1 3c.6.45 2.07.84 2.72.27" fill="none" stroke="#165209" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path d="M12.61 9.9l-.42-.37a6.69 6.69 0 00-.51-2.14A5.73 5.73 0 0110.47 5c-.16-.53-.27-.72-.74-.73a.74.74 0 00-.65.8c0 .24 0 .49.06.72a8.88 8.88 0 00.55 1.84l-.19-.1-4.31-3.31a.75.75 0 00-1.11.07.73.73 0 00-.1.59.71.71 0 00.37.47L6.55 7l.64.51-3.57-2.67a.74.74 0 00-.57-.21.77.77 0 00-.54.27.77.77 0 00-.1.59.74.74 0 00.36.51L5 7.66l1.35 1-2.9-2.18a.75.75 0 00-.57-.22.76.76 0 00-.54.28.73.73 0 00.26 1.06l2.25 1.69 1.15.85-2.27-1.69a.73.73 0 00-.54-.25.77.77 0 00-.55.25.74.74 0 00.24 1.08L7 12.64a2.68 2.68 0 002.08.51 1.15 1.15 0 001.41 0c.6-.46.41-.51.85-1.13a10.92 10.92 0 001.27-2.12z" fill="#dcf0cb" fill-rule="evenodd"/>
                <path d="M12.13 9.22a9.19 9.19 0 00-.36-2.32A4.29 4.29 0 0110.44 5c-.16-.53-.27-.72-.74-.73a.74.74 0 00-.65.8c0 .24 0 .49.06.72a11.5 11.5 0 00.58 1.92l-4.5-3.38a.75.75 0 00-1.11.07.73.73 0 00.27 1L6.6 7.1l.59.56L3.62 5a.71.71 0 00-.75-.16.69.69 0 00-.46.61.71.71 0 00.36.67L5 7.77l1.35 1-2.9-2.19a.79.79 0 00-.57-.21.8.8 0 00-.54.28c-.31.4-.06.81.26 1.06L4.85 9.4l1.15.85-2.27-1.7a.74.74 0 00-1.09 0 .76.76 0 00.24 1.09l4.1 3a4.48 4.48 0 002.72.62" fill="none" stroke="#165209" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M14.77 11.39a2.23 2.23 0 01-.46-.75 3.65 3.65 0 00-.1-.65 2.39 2.39 0 00-.36-1.08 5.85 5.85 0 01-1.21-2.38c-.16-.53-.27-.72-.74-.73a.74.74 0 00-.5.26.73.73 0 00-.15.54 4.37 4.37 0 00.06.72c.18.92.37 1.68.39 1.73L7.41 5.84a.76.76 0 00-.57-.22.72.72 0 00-.54.29.73.73 0 00.26 1l2.25 1.7.68.56-3.6-2.71a.76.76 0 00-.57-.22A.71.71 0 005 7.58l2.25 1.7 1.35 1-2.89-2.19a.73.73 0 00-1.1.08c-.31.4-.07.81.26 1.06l2.25 1.68 1.12.85L6 10.06a.72.72 0 00-1 0 .7.7 0 00-.14.58.74.74 0 00.34.49l4 3a2.74 2.74 0 001.13.5l.58.09a2.48 2.48 0 01.87.29.83.83 0 00.6 0 3.87 3.87 0 001.77-1.29 3.8 3.8 0 00.7-2 1 1 0 000-.42z" fill="none" stroke="#165209" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path d="M14.81 11.34l-.45-.34a6.57 6.57 0 00-.51-2.14 5.85 5.85 0 01-1.21-2.38c-.16-.53-.27-.72-.74-.73a.74.74 0 00-.5.26.73.73 0 00-.15.54 4.37 4.37 0 00.06.72c.18.93.37 1.69.39 1.73L7.41 5.79a.75.75 0 00-1.11.07c-.31.41-.06.81.26 1.06l2.25 1.69.68.56-3.6-2.76a.75.75 0 00-1.11.07c-.31.4-.06.81.26 1.06l2.25 1.69 1.35 1L5.71 8a.72.72 0 00-.57-.21.7.7 0 00-.53.28.72.72 0 00-.12.59.74.74 0 00.38.47l2.25 1.69 1.12.85L6 10a.7.7 0 00-1 0 .71.71 0 00-.16.6.72.72 0 00.36.51l4 3a4.23 4.23 0 002 .59 6.68 6.68 0 00.8.41 3.23 3.23 0 002-1.26 4.93 4.93 0 00.86-2.57z" fill="#ddf6d1" fill-rule="evenodd"/>
                <path d="M5.14 10.32c.57.43 4.43 3.43 4.89 3.59a2.18 2.18 0 001.47 0 1.6 1.6 0 00.5-.31" fill="none"/>
                <path d="M14.77 11.39a2.23 2.23 0 01-.46-.75 3.65 3.65 0 00-.1-.65 2.39 2.39 0 00-.36-1.08 5.85 5.85 0 01-1.21-2.38c-.16-.53-.27-.72-.74-.73a.74.74 0 00-.5.26.73.73 0 00-.15.54 4.37 4.37 0 00.06.72c.18.92.37 1.68.39 1.73L7.41 5.84a.76.76 0 00-.57-.22.72.72 0 00-.54.29.73.73 0 00.26 1l2.25 1.7.68.56-3.6-2.71a.76.76 0 00-.57-.22A.71.71 0 005 7.58l2.25 1.7 1.35 1-2.89-2.19a.73.73 0 00-1.1.08c-.31.4-.07.81.26 1.06l2.25 1.68 1.12.85L6 10.06a.72.72 0 00-1 0 .7.7 0 00-.14.58.74.74 0 00.34.49l4 3a2.74 2.74 0 001.13.5l.58.09a2.48 2.48 0 01.87.29.83.83 0 00.6 0 3.87 3.87 0 001.77-1.29 3.8 3.8 0 00.7-2 1 1 0 000-.42z" fill="none" stroke="#165209" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M8.83 2.82l-.73.92" fill="none" stroke="#165209" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.49 1.62l.07 1.2" fill="none" stroke="#165209" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.54 1.63l-.65 1.56" fill="none" stroke="#165209" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </g>
        </svg>
    `

    return(
        <SvgXml style={style}
         xml={icon} width="20" height="20" />
    )
}

export const LikeIcon = () =>{
    let icon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
        </svg>
    `

    return(
        <SvgXml xml={icon} width="20" height="20" color="gray" />
    )
}

export const CommentIcon = () =>{
    let icon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
        </svg>
    `

    return(
        <SvgXml xml={icon} width="20" height="20" color="gray" />
    )
}

export const ShareIcon = () =>{
    let icon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
        </svg>
    `

    return(
        <SvgXml xml={icon} width="20" height="20" color="gray" />
    )
}

export const SendIcon = () =>{
    let icon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
        </svg>
    `

    return(
        <SvgXml xml={icon} width="20" height="20" color="gray" />
    )
}
