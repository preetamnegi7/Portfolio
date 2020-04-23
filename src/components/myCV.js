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
import { Divider, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "7rem auto",
    width: "1260px auto",
    height: "1880px auto",
    borderRadius: "8px",
    maxWidth: "100%",
    backgroundColor: "lightgrey",
    textTransform: "uppercase",
  },
  media: { height: "1420px" },
  downlo: {
    color: "white",
    backgroundColor: "#505051",
    position: "center",
    objectFit: "cover",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Divider />
      <Grid item xs-12 sm-12 xl-12 md-12 justify="center">
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
      </Grid>
    </>
  );
}
