import React from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { Box, Pagination, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  console.log(exercises);
  return (
    <Box id='exercises' sx={{
      mt: { lg: '110px' }
    }} mt='50px' p='20px'>
      <Typography variant='h4' mb='46px' textAlign='center' >
        Showing Results
      </Typography>
      <Stack direction='row' sx={{
        gap:{lg:'110px', xs:'50px'}
      }} flexWrap='wrap' justifyContent='center' >
        {exercises.map((exercise,index)=>{
          return(
            <ExerciseCard key={index} exercise={exercise} />
          )
        })}
      </Stack>
    </Box>
  )
}

export default Exercises