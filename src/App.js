import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

const googleFont = "'Nunito', sans-serif";

const theme = createTheme({
    typography: {
        fontFamily: googleFont
    }
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto" >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail />} />
                </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
    )
}

export default App;