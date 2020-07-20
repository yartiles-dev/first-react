import React from "react";
// import {HeartOutlined} from "@ant-design/icons/lib";
// import Icon from '@ant-design/icons'
// import { ReactComponent as MessageSvg } from '@ant-design/icons-svg/inline-svg/outlined/message.svg';
import '../../../icons-font/styles.css'
import '../StyleSAppCss/main.scss'
import SectionAbout from "./SectionAbout";
import SectionFeatures from "./SectionFeatures";
import SectionTours from "./SectionTours";
import SectionStories from "./SectionStories";
import SectionBook from "./SectionBook";

//Utilizar iconos svg con ANTDESIGN
// const BasicWorldSVG = () => (
//     <svg version="1.1" id="Layer_1" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
//         <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M32.001,0.887c17.184,0,31.113,13.929,31.112,31.113
// 	     C63.114,49.185,49.184,63.115,32,63.113C14.815,63.114,0.887,49.185,0.888,32.001C0.885,14.816,14.815,0.887,32.001,0.887z"/>
//         <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="32" y1="1" x2="32" y2="63"/>
//         <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="63" y1="32" x2="1" y2="32"/>
//         <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M30,1c0,0-14,11-14,31s14,31,14,31"/>
//         <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M34,1c0,0,14,11,14,31S34,63,34,63"/>
//         <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M8,12c0,0,5,10,24,10s24-10,24-10"/>
//         <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M8,52c0,0,5-10,24-10s24,10,24,10"/>
// </svg>
// )
//
// const BasicWorld = props => <Icon component={BasicWorldSVG} {...props} />;

const Main = () => {
    return (
        <main>
            <SectionAbout/>
            <SectionFeatures/>
            <SectionTours/>
            <SectionStories/>
            <SectionBook/>
        </main>
    )
}

export default Main