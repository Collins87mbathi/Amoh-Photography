import React from 'react';
import { Link } from "react-router-dom";
import { Home, InfoContainer, Name, HomeButton, Paragraph, Profession } from "../styles/HomePage-style";
import Icons from "../styles/Icons"
import Navigation from "./Navigation";
import Media from 'react-media';

function HomePage() {
    return (
        <Media query="(min-width: 1024px) and (orientation: landscape)" >
            {matches => (
                matches ? <Home>
                    <Navigation />
                    <InfoContainer>
                        <Name>Amoh Photography</Name>
                        <Profession>photographer</Profession>
                        <Paragraph>Photography is my passion. I want to share it with everyone because everyone can see the world through different eyes.</Paragraph>
                        <Link to="/gallery"> <HomeButton>GALLERY</HomeButton></Link>
                    </InfoContainer>
                    <Icons home>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <Link to="/contact"><i className="far fa-envelope"></i></Link>
                    </Icons>
                </Home > :
                    <Home>
                        <Navigation />
                        <InfoContainer>
                            <Name>Amoh Photography</Name>
                            <Profession>photographer</Profession>
                            <Paragraph>Photography is my passion. I want to share it with everyone because everyone can see the world through different eyes.</Paragraph>
                            <Icons home>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <Link to="/contact"><i className="far fa-envelope"></i></Link>
                            </Icons>
                        </InfoContainer>
                    </Home >
            )}
        </ Media>
    )
}
export default HomePage