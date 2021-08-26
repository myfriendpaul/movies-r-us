import React from "react";
import "./SearchForm.css";
import { Button, TextField } from "@material-ui/core";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#264653",
      secondary: "#2A2F3D",
      info: "#FFFFFF",
    },
    text: {
      main: "#FFFFFF",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    alignItems: "center",
    margin: "1em",
  },
  input: {
    width: "25vw",
    marginRight: "1em",
  },
  textFieldLabel: {
    // this will be applied when input focused (label color change)
    color: theme.palette.primary.main,
  },
  textFieldRoot: {
    // this will be applied when hovered (input text color change)
    color: theme.palette.primary.info,
  },
}));

function SearchForm(props) {
  const { results, movies, setMovies, handleSubmit } = props;
  const classes = useStyles();
  return (
    <div className="searchform-container">
      <div className="search-container">
        <Container>
          <form className="form-container" onSubmit={handleSubmit}>
            <TextField
              className={classes.input}
              id="standard-basic"
              label="Search Hollywood"
              InputLabelProps={{
                classes: {
                  root: classes.textFieldLabel,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.textFieldRoot,
                },
              }}
              value={movies}
              type="text"
              onChange={(e) => setMovies(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.root}
              type="submit"
            >
              Search
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
}
export default SearchForm;
