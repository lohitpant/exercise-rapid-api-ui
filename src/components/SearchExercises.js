import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const EXERCISE_URL = "https://exercisedb.p.rapidapi.com/exercises?limit=70";
const BODY_PARTS_URL =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(BODY_PARTS_URL, exerciseOptions);
      setBodyParts(["all", ...bodyPartsData]);
      console.log(...bodyPartsData);
    };
    fetchExerciseData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(search);
    if (search) {
      const exercisesData = await fetchData(EXERCISE_URL, exerciseOptions);
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1000, left: 100, behavior: "smooth" });
      console.log(searchedExercises);
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="20px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "40px", xs: "28px" },
        }}
        mb="30px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="70px">
        <form onSubmit={handleSearch}>
          <TextField
            sx={{
              input: { fontWeight: "600", fontSize: "18px" },
              width: { lg: "700px", xs: "330px" },
              backgroundColor: "fff",
              borderRadius: "40px",
              height:"50px",
            }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            type="submit"
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: 1,
              top: 1,
            }}
          >
            Search
          </Button>
        </form>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
