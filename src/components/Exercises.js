import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const EXERCISE_URL = 'https://exercisedb.p.rapidapi.com/exercises?limit=70';

const Exercises = ({ setExercises, bodyPart, exercises }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(()=>{
    const fetchExercisesData=async()=>{
      let exercisesData=[];
      if(bodyPart==='all'){
        exercisesData=await fetchData(EXERCISE_URL, exerciseOptions);
      } else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=70`,
         exerciseOptions);
      }
      console.log(exercisesData);
      setExercises(exercisesData)
    }

    fetchExercisesData()
  },[bodyPart])

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "20px" },
      }}
      mt="20px"
      p="20px"
    >
      {currentExercises.length > 0 && (
          <Typography variant="h4" mb="40px" textAlign="center">
            Showing Results
          </Typography>
        )}
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => {
          return <ExerciseCard key={index} exercise={exercise} />;
        })}
      </Stack>
      <Stack mt="50px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
