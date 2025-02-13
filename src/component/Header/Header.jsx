import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase, ToolbarContainer } from "./styles";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Travel Advisor
        </Typography>
        <ToolbarContainer>
          <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
            Explore New Places
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search" />
          </Search>
        </ToolbarContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
