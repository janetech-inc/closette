import Page from "../layouts/page";

import { AboutWrapper, 
    WelcometWrapper, 
    TextWrapper, 
    ContactWrapper,
    EmailWrapper
 } from "./about-styles";


const About = props => {

    return (
        <Page title={props.title}>
            <AboutWrapper>
                <WelcometWrapper>Welcome to the show.</WelcometWrapper>
                <TextWrapper>theCxn is a beautifully curated, interactive, virtual designer showroom that connects buyers and designers.</TextWrapper>
                <TextWrapper>We are a complete digital solution for brands and designer showrooms to amplify their wholesale business with a curated, human experience that is both efficient and emotional.</TextWrapper>
                <ContactWrapper>Contact Us</ContactWrapper>
                <EmailWrapper>solutions@cxnfashion.com</EmailWrapper>
            </AboutWrapper>
        </Page>
    )
}

About.getInitialProps = async => {
    return { title: "About Us"};
};

export default About;