import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';

const EXERCISE_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const BODY_PARTS_URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(BODY_PARTS_URL, exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
      console.log(...bodyPartsData);
    }
    // fetchExerciseData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(EXERCISE_URL, exerciseOptions);
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      console.log(search);
      console.log(searchedExercises);
      setSearch('')
      setExercises(searchedExercises)
    }
    // console.log(search);
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }} mb="50px" textAlign='center'>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField sx={{
          input: { fontWeight: '600', fontSize: '18px' },
          width: { lg: '800px', xs: '350px' },
          backgroundColor: 'fff', borderRadius: '40px'
        }} height='76px' value={search} onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          placeholder='Search Exercises' type='text' />
        <Button className='search-btn' onClick={handleSearch}
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px', position: 'absolute', right: 1, top: 1
          }}>Search</Button>
      </Box>
      <Box sx={{ position:'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises