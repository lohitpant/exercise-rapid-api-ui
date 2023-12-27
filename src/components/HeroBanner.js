import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '130px', xs: '50px' }, ml: { sm: '50px' } }} p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Sweat, Smile <br />
                And Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px">
                Check out the most effective exercises personalized to you
            </Typography>
            <Button variant='contained' color='error' href='#exercises' sx={{
                backgroundColor: '#ff2625', padding: '10px', mt: '10px'
            }}>
                Explore Exercises
            </Button>
            <Typography fontWeight={600} color="#FF2625" sx={{
                opacity: '0.1', mt:'40px',
                display: { lg: 'block', xs: 'none' }, fontSize: '200px'
            }}>
                Exercises
            </Typography>
            <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner;