// Image view that has a number of navigation buttons based on a list
// Each item in the list should have a string value and image location
// On hover of the Navigation button, the pane will view the corresponding image
// When no longer hovering a navigation button, the default image will display
import React, { type MouseEvent, useState } from 'react';

function NavigationImagePane() {
    const defaultImage = '../images/SAFGC_sticker_logo.png'
    const myHoverImage = '../images/white_safgc-2025_logo.png'
    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Change something to use another image
    };
    const [image, setImage] = useState(defaultImage);

    const navButtons = [        {
            text: "",
            hoverImage: '',
            link: ''
        },
        {
            text: "ABOUT",
            hoverImage: '../images/white_safgc-2025_logo.png',
            link: ''
        },
        {
            text: 'CONTACT',
            hoverImage: '../images/SAFGC_logo_2023_colored.png',
            link: ''
        },
        {
            text: 'EVENTS', hoverImage: '../images/safgc_y2k2024_logo.png',
            link: ''
        },{
            text: "",
            hoverImage: '',
            link: ''
        }]

    return (
        <>
            <div style={{ width: "100%", height:"100%", display: "inline-flex", flexDirection: "row", justifyContent: "left", alignItems: "center" }}>
                <div style={{ alignItems: "start" }}>
                    {navButtons.map(({ text, hoverImage }) => (
                        <p>
                            <button onMouseEnter={() => setImage(hoverImage)} onMouseOut={() => setImage(defaultImage)}>
                                <p style={{ fontSize: "30px" }}>{text}</p></button>
                        </p>
                    ))}
                </div>
                <div style={{  width: "100%", height:"500px",display: "inline-flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <img src={image} />
                </div>
            </div>
        </>
    );
};
export default NavigationImagePane;
