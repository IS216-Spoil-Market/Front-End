import { Container, Box, Typography, Grid, Button, Divider } from "@mui/material";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { injectProfile } from "../axios/client";
import AppBar from "../components/common/nav/AppBar";
import Banner from "../assets/images/home/hero-banner.jpg";
import Logo from "../assets/images/logo/black.png";
import Section1 from "../assets/images/home/details-section-images/1.jpg";
import Section2 from "../assets/images/home/details-section-images/2.jpg";
import Section3 from "../assets/images/home/details-section-images/3.jpg";
import WebDesignImage from "../assets/images/home/skill/web-design.jpg";
import CopywritingImage from "../assets/images/home/skill/copy-writing.jpg";
import SalesImage from "../assets/images/home/skill/sales.jpg";
import VideoEditingImage from "../assets/images/home/skill/video-editing.jpg";
import MobileAppDevImage from "../assets/images/home/skill/mobile-app-development.jpg";
import UXDesignImage from "../assets/images/home/skill/ux-design.jpg";
import CybersecurityImage from "../assets/images/home/skill/cybersecurity.jpg";
import DataAnalysisImage from "../assets/images/home/skill/data-analysis.jpg";
import GraphicDesignImage from "../assets/images/home/skill/graphic-design.jpg";
import MachineLearningImage from "../assets/images/home/skill/machine-learning.jpg";
import ProjectManagementImage from "../assets/images/home/skill/project-management.jpg";
import SEOImage from "../assets/images/home/skill/search-engine-optimization.jpg";
import SocialMediaMarketingImage from "../assets/images/home/skill/social-media-marketing.jpg";

const Skills = [
    {name: 'Web Design', image: WebDesignImage},
    {name: 'Copywriting', image: CopywritingImage},
    {name: 'Sales', image: SalesImage},
    {name: 'Video Editing', image: VideoEditingImage},
    {name: 'Mobile App Development', image: MobileAppDevImage},
    {name: 'UX Design', image: UXDesignImage},
    {name: 'Cybersecurity', image: CybersecurityImage},
    {name: 'Data Analysis', image: DataAnalysisImage},
    {name: 'Graphic Design', image: GraphicDesignImage},
    {name: 'Machine Learning', image: MachineLearningImage},
    {name: 'Project Management', image: ProjectManagementImage},
    {name: 'Search Engine Optimization', image: SEOImage},
    {name: 'Social Media Marketing', image: SocialMediaMarketingImage},
]

const Home: React.FC = () => {
    const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            getAccessTokenSilently().then((token) => injectProfile(token, user?.email));
        }
    }, [isAuthenticated]);

    return (
        <>
            <Box sx={{ height: 600, 
                backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 100%),
                url(${Banner})`, 
                backgroundSize: "cover", 
                color: "white", 
                textAlign: 'left', 
                position: 'relative',
                pointerEvents: "none" 
                }}>
                <Box sx={{ 
                    position: "relative", 
                    top: 0, 
                    left: 0, 
                    width: "100%", 
                    pointerEvents: "auto"
                    }}>
                    <AppBar invisBg />
                </Box>

                <Box sx={{ 
                    pl: 3, 
                    position: 'absolute', 
                    top:5,
                    bottom:5,
                    paddingX: 5, 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                    }}>
                    <Typography variant="h1">
                        Swap • Grow • Thrive
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, maxWidth: 650, mx:'auto' }}>
                        Exchange skills, not money! Our platform empowers you to trade 
                        talents, learn from others and grow your expertise — all while building a 
                        collaborative community where everyone benefits. Skill up, share, and 
                        succeed together in a cash-free, knowledge-driven economy. Your 
                        skills are your currency!
                    </Typography>
                </Box>
            </Box>

            {/* What's Swaply Section */}
            <Container maxWidth="lg" sx={{ textAlign: 'center', my: 8, paddingX: { xs: 2, md: 8 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h2">X</Typography>
                    <Typography variant="h1" fontSize={60}>What's</Typography>
                    <img src={Logo} alt="Swaply Logo" style={{ width: 300, margin: '16px 0' }}/>
                    <Typography variant="h2">X</Typography>
                </Box>
            
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={6}>
                        <img src={Section1} alt="Image1" 
                        style={{ width: '100%', height: 'auto', maxWidth: 300, margin: '0 auto', display: "block" }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: {xs: 'center', md: 'left'}, 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center" }}>
                        
                        <Typography variant="body1" fontSize={16}>
                            <strong>Swaply</strong> is an innovative skill bartering app that reimagines the way people 
                            exchange services by eliminating the need for monetary transactions. Designed for 
                            individuals who want to leverage their talents and expertise, Swaply provides a 
                            dynamic platform where users can trade skills directly with one another. Whether 
                            you're a web developer in need of a logo design, a language tutor looking for coding 
                            lessons, or someone who can offer cooking classes in exchange for fitness 
                            coaching, Swaply makes it easy to connect with others who have complementary
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: {xs: 'center', md: 'left'},
                    order: {xs: 2, md: 1},
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center" }}>
                        <Typography variant="body1" fontSize={16}>
                        By fostering a culture of collaboration and mutual benefit, Swaply promotes the idea 
                        of community-driven self-improvement. It empowers users to reach their personal 
                        and professional goals without financial limitations, making skill-building accessible to 
                        a broader audience. Whether you're looking to enhance your own abilities or find 
                        help with a specific project, Swaply creates a win-win environment where everyone 
                        can grow and succeed through the power of skill sharing.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                    display: { xs: "block", md: "flex" },
                    justifyContent: "center",
                    order: {xs: 1, md: 2} }}>
                        <img src={Section2} alt="Image2" 
                        style={{ width: '100%', height: 'auto', maxWidth: 300, margin: '0 auto', display: "block" }} />
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={6}>
                        <img src={Section3} alt="Image3" 
                        style={{ width: '100%', height: 'auto', maxWidth: 300, margin: '0 auto', display: "block" }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: {xs: 'center', md: 'left'},
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center" }}>
                        <Typography variant="body1" fontSize={16}>
                        Users can create detailed profiles showcasing their skills, qualifications, and
                        availability, allowing for seamless matchmaking based on needs and interests. 
                        The app features an intuitive search function that helps users quickly find potential 
                        barter partners based on skill categories, location, or user ratings. Swaply's secure 
                        messaging system ensures that users can communicate, negotiate, and finalize 
                        agreements within the app. It also includes a review and rating feature that builds 
                        trust within the community, ensuring transparency and accountability in every transaction.                        
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            <Divider variant="middle" sx={{ my: 4, width:'90%', margin: '0 auto' }}/>


            {/* Features Section */}
            <Box sx={{ textAlign: 'center', py: 8 }}>
                <Box sx={{
                    overflowX: "auto", 
                    display: "flex", 
                    flexWrap: "nowrap",
                    padding: 0,
                    margin: 0,
                    gap: 3, 
                    alignItems: "center",
                    
                    }}>
                    {Skills.map((feature, index) => (
                        <Grid item key={index} sx={{ px: 2, textAlign: 'center', minWidth: 150, flex: "0 0 auto" }}>
                            <img src={feature.image} alt={feature.name} 
                            style={{ width: 200, height: 'auto', borderRadius: '50%', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} />
                            <Typography variant="subtitle1" sx={{ mt: 2 }}>{feature.name}</Typography>
                        </Grid>
                    ))}
                </Box>
                <Typography variant="h6" paddingTop={5}>Discover the mentor for the skill you are looking for here!</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 4 }}>
                    Discover Mentor
                </Button>
            </Box>


            {/* <Heading3>Heading 3</Heading3>
            <Heading4>Heading 4</Heading4>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="body1">Body 1</Typography>
            <Typography variant="body2">Body 2</Typography>
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>
            <Typography variant="caption">Caption</Typography>
            <Typography variant="overline">Overline</Typography> */}
        </>
  
        
    );
};

export default Home;
