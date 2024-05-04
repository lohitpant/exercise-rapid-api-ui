import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } =
    exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h4"
          sx={{
            textTransform: "capitalize",
          }}
        >
          {name}
        </Typography>
        <Typography variant="h6">How to do it:</Typography>
        <Typography variant="p">
          <ol>
            {instructions && instructions.map((row) => {
              return <li>{row}</li>;
            })}
          </ol>
        </Typography>
        {extraDetail && extraDetail.map((item) => {
          return (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  borderRadius: "50%",
                  width:'70px',
                  height:'70px'
                }}
              >
                <img src={item.icon} alt={item.name} />
              </Button>
              <Typography variant="h6">{item.name}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
