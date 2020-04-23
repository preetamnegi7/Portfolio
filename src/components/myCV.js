import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";
import meraCV from "./cv.png";
import SaveIcon from "@material-ui/icons/Save";
import { Divider } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    margin: "7rem auto",
    width: "1260px",
    height: "1880px",
    borderRadius: "8px",
    maxWidth: "100%",
    backgroundColor: "lightgrey",
    textTransform: "uppercase",
  },
  media: { height: 1810 },
  downlo: {
    color: "white",
    backgroundColor: "#505051",
    position: "center",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Divider />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={meraCV} />
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            className={classes.downlo}
            variant="contained"
            startIcon={<SaveIcon />}
            href="https://github.com/preetamnegi7/Portfolio/raw/master/src/cv.pdf"
          >
            Download Resume
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
