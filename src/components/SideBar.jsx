import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      alignItems={{ sx: "center" }}
      sx={{
        width: "100%",
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        scrollbarWidth: "thin", // For Firefox
        msOverflowStyle: "none", // For Internet Explorer
        "&::-webkit-scrollbar": {
          width: "0.5em",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#000000",
        },
      }}
    >
      {categories.map((category) => (
        <Button
          className="category-btn"

          onClick={() => setSelectedCategory(category.name)}
          
          style={{
            background:
              category.name === selectedCategory ? "#FC1503" : "#000000",
              borderRadius: "8px", // Add border radius
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "20px",
          }}
          key={category.name}
        >
          <Typography
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "1px",
            }}
          >
            {category.icon}
          </Typography>
          <Typography
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8", color: '#ffffff',
            }}
          >
            {category.name}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
};

export default SideBar;
