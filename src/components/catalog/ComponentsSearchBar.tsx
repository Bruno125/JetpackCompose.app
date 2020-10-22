import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { RouteComponentProps } from "@reach/router";
import React from "react";
import TextField from "@material-ui/core/TextField";

interface ComponentsSearchBarProps {
  onChangeHandler: (value: string[]) => void;
  componentCategories: string[];
}

export default function ComponentsSearchBar(props: ComponentsSearchBarProps) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#33691e",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={props.componentCategories}
          getOptionLabel={(option) => option}
          onChange={(event, value, reason, details) => {
            let valueArray = value.map((elem) => elem);
            props.onChangeHandler(valueArray);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Filter Categories"
              placeholder="Example: Animation"
            />
          )}
        />
      </ThemeProvider>
    </>
  );
}
