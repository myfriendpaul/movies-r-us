import { useState } from "react";
import { useHistory, Route } from "react-router-dom";
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
    textAlign: "center",
  },
  input: {
    width: "50vw",
    padding: "1em",
  },
  textFieldLabel: {
    // this will be applied when input focused (label color change)
    color: theme.palette.primary.main,
    width: "50vw",
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
  let history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const addMovie = {
      title,
      poster_path: poster,
    };
    await axios.post(airtableBaseURL, { fields: addMovie }, config);
    history.push("/watchlist");
  };

  return (
    <div className="createamovie-container">
      <div className="create-container">
        <Container>
          <form className="form-container3" onSubmit={handleSubmit}>
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
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
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
              onChange={(e) => setPoster(e.currentTarget.value)}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.root}
            >
              Send to Hollywood
            </Button>
            <Route path={`/watchlist`}></Route>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default CreateaMovie;

{
  /* <form className="form-container" onSubmit={handleSubmit}>
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
  onChange={(e) => setTitle(e.currentTarget.value)}
/> */
}
