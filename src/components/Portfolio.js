import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/react-redux.jpg";
import project3 from "../images/react.png";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/ptc_creo.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#253A4B",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  cardContainerSkills: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  cardContainerDivider: {
    maxWidth: "auto",
    margin: "1rem auto",
    color: "white",
  },
});
const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />

      <Typography
        variant="h3"
        style={{ color: "white" }}
        textAlign="center"
        align="center"
        className={classes.cardContainerSkills}
      >
        My Skills
      </Typography>
      <Divider className={classes.cardContainerDivider} />
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project2}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project3}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project4}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* {project5}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project5}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project5}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project5}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project5}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project5}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project5}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {project5}  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  project5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem explicabo qui laudantium, incidunt possimus a
                  eius rerum aliquam molestiae harum ipsum distinctio soluta
                  laborum? Quae reprehenderit expedita minus beatae ipsam.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
