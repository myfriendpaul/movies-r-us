import { useState } from "react";
import { Link, Route } from "react-router-dom";
import { airtableBaseURL, config } from "../services";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import "./CreateaMovie.css";

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
    margin: "1.5em",
    textDecoration: "none",
  },
  input: {
    width: "25vw",
    padding: "1em",
  },
  textFieldLabel: {
    // this will be applied when input focused (label color change)
    color: theme.palette.primary.main,
    padding: "1em",
  },
  textFieldRoot: {
    // this will be applied when hovered (input text color change)
    color: theme.palette.primary.info,
  },
}));

function CreateaMovie() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const classes = useStyles();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const addMovie = {
      title,
      poster,
    };
    await axios.post(airtableBaseURL, { fields: addMovie }, config);
  };

  return (
    <div className="createamovie-container">
      <div className="create-container">
        <Container>
          <form className="form-container" onSubmit={handleSubmit}>
            <TextField
              className={classes.input}
              id="standard-basic"
              label="Create Your Movie"
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
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <TextField
              className={classes.input}
              id="standard-basic"
              size="medium"
              label="Add Poster URL"
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
              value={poster}
              type="text"
              onChange={(e) => setPoster(e.target.value)}
            />
            <br />
            <Link to={`/watchlist`} className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                // className={classes.root}
                type="submit"
              >
                Send to Hollywood
              </Button>
              {/* <button type="submit">Send to Hollywood</button> */}
            </Link>
            <Route path={`/watchlist`}></Route>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default CreateaMovie;
