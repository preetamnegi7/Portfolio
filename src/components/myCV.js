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
import { Divider, Grid, Container } from "@material-ui/core";
import { Block } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    margin: "7rem auto",
    borderRadius: "8px",

    backgroundColor: "lightgrey",
    textTransform: "uppercase",
  },
  media: {
    height: "83rem",
    width: "100%",
  },
  downlo: {
    color: "white",
    backgroundColor: "#505051",
    position: "center",
    margin: "auto",
    height: "100%",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Divider />
      <Grid
        container
        spacing={5}
        margin=" rem"
        direction="row"
        justify="space-evenly"
        alignContent="center"
      >
        <Grid item xs={11} sm={11} xl={6} md={11} position="center">
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
      </Grid>
    </>
  );
}
