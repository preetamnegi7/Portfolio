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
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Navbar from "./Navbar";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/react-redux.jpg";
import project3 from "../images/reactjs.png";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/ptcCreo.jpg";
import project6 from "../images/autocad.png";
import project7 from "../images/solidEdge.jpg";
import project8 from "../images/catiaV5.png";
import project9 from "../images/keyShot.png";
import project10 from "../images/ptcMathcad.png";
import project11 from "../images/solidworks.png";
import project12 from "../images/nx.png";
import project13 from "../images/arena.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#253A4B",
    height: "100%",
  },
  buttonContainer: {
    allign: "bottom",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    height: "450px",
  },
  cardContainerSkills: {
    maxWidth: "100%",
    margin: "3rem auto",
    padding: "1rem",
    backgroundColor: "#253A4B",
    textTransform: "uppercase",
  },
  h5Headings: {
    textTransform: "uppercase",
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  cardContainerDivider: {
    margin: "1.5rem auto",
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
        MECHANICAL
      </Typography>
      <Divider className={classes.cardContainerDivider} />
      <Grid container justify="center">
        {/* {PTC CREO}  */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  experience - 7 years
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Parametric and Non Parametric modelling, Advance Assembly,BMX
                  Behraviour Modelling, Sheetmetal, ISDX Surfacing, Mold Design,
                  Reverse Engineering, Advance Framework Works, Detailing and
                  MBD. Analysis : kinematic and dynamic, FEM Thermal & CFD,
                  Multibody, Topology optmization, AR. Delivered training in
                  more then 30 Companies.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                className={classes.buttonContainer}
              >
                SKILL LEVEL: EXPERT
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {AutoCAD}  */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project6}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  experience - 2 years
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>2 years of working experiece in Industry.</p>
                  <p>2D Drafting and 3D Modelling.</p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                className={classes.buttonContainer}
              >
                SKILL LEVEL: Advance
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {Solid Edge}  */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project7}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  experience - 3 years
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>3 years of working experiece in Industry.</p>
                  <p>
                    3D Modelling, Assembly, Drawing, Worked in Sysnchronous and
                    Ordered Environment. Used tools such as ERA(Exploded Render
                    and Animate).
                  </p>
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                className={classes.buttonContainer}
              >
                Skill Level : Advance
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {Catia}  */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project8}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  Experience : 3 months
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Industrial Experience of modelling and drafing in Catia V5.
                  Occasional use of the sofware in parametric environment, with
                  understanding of workflow and modules.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Skill Level : Basic
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {KeyShot}  */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project9}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  Experience : 1 Year
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Photorealisting Rendering, Use of Material,Environment, Camera
                  Positioning, Application of Labels, images, Exploded Views,
                  Animation
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Skill Level : Advance
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {MAthCAD}  */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 10"
                height="140"
                image={project10}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  experience : 1 Year
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  MathCad WorkSheet, Defining Templates, Using Operators, Using
                  Local and Global Variables, Symbolics & Solving, Use of
                  Advance functions such as montecarlo Simluations.use with
                  other softwares like Microsoft Excel, Ptc Creo parametric. Use
                  of 2D and 3D Plots with equations and qunatitative values.
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Skill Level : Advance
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {Solid Works}  */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 11"
                height="140"
                image={project11}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  Experience : 3 Months
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Industrial Experience of modelling and drafing in Solidworks.
                  Occasional use of the sofware in parametric environment, with
                  understanding of workflow and modules.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Skill Level : Medium
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* {Unigraphics}  */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 12"
                height="140"
                image={project12}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  experience : 4 Months
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Industrial Experience of modelling and drafing in Solidworks.
                  Occasional use of the sofware in parametric environment, with
                  understanding of workflow and modules.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Skill Level : medium
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* {Arena}  */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 12"
                height="140"
                image={project13}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  experience : 4 Months
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Experience of modelling and simulation of processes, use of
                  basic as well as advance tools. how to animated the production
                  process, understanding of workflow and modules.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Skill Level : medium
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      {/* Computer Skills*/}
      <Divider className={classes.cardContainerDivider} />
      <Typography
        variant="h3"
        style={{ color: "white" }}
        textAlign="center"
        align="center"
        className={classes.cardContainerSkills}
      >
        Web Development
      </Typography>
      <Divider className={classes.cardContainerDivider} />
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  Skill Level : Basic
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
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  Skill Level : Basic
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
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  Skill Level : medium
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
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protect 2"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.h5Headings}
                >
                  Skill Level : Basic
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
