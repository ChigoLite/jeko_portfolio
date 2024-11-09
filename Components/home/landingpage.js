import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Paper,
  CardContent,
  CardActions,
  Button,
  Container,
  Box,
  Stack,
  Chip,
  Fab,
  Divider,
} from "@mui/material";
import portfolio from "./assets/Portfolio.jpg";
import { FaGithub, FaLinkedin, FaLiraSign } from "react-icons/fa";
import Image from "next/image";
import { WorkEx } from "./workEx";
import { ProjectsInfo } from "./projectInfo";
import Link from "next/link";
const Landingpage = () => {
  let result = ProjectsInfo.reduce((acc, user) => {
    if (user.rank >= 20) {
      acc.push(user);
    }
    return acc;
  }, []);
  return (
    <>
      <div className="landingpage">
        {/* <Container> */}
        <Card>
          <div className="introCont">
            <Paper>
              <CardMedia sx={{ width: 400 }} title="AKA CHRISTIAN ONYEKACHUKWU">
                <Box
                  sx={{
                    width: 400,
                    height: 360,
                    overflow: "hidden",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={portfolio}
                    width={400}
                    objectPosition="contain"
                    alt="christian"
                    height={320}
                    layout="responsive"
                  />
                </Box>
              </CardMedia>
              <CardContent>
                <Typography
                  sx={{ fontFamily: "sans_bold" }}
                  variant="h5"
                  component="div"
                >
                  AKA CHRISTIAN ONYEKACHUKWU{" "}
                </Typography>
                <Typography
                  sx={{ fontFamily: "sans_regular" }}
                  variant="body2"
                  color="text.secondary"
                >
                  07066091570 | chrisonyeeofficial@gmail.com{" "}
                </Typography>
              </CardContent>
            </Paper>

            <Paper
              sx={{
                display: "flex",
                alignItem: "center",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "sans_regular",
                  padding: 5,
                  lineHeight: "32px",
                }}
              >
                My Aim: To secure a responsible career opportunity to fully
                utilize my training and, while making a significant contribution
                to the success of the company
              </Typography>
            </Paper>
          </div>
        </Card>

        <Paper>
          <h3 className="workEx">my work experience</h3>
          <WorkEx />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              textTransform: "capitalize",
              marginTop: "12px",
            }}
          >
            <Button variant="contained" size="large" color="tertiary">
              <Link href="/experience">
                <Typography
                  sx={{ fontFamily: "sans_BoldItalic", color: "white" }}
                >
                  View in Details.
                </Typography>
              </Link>
            </Button>
          </Box>
        </Paper>
        <Box>
          <Paper sx={{ paddingLeft: 3, marginTop: 3 }}>
            <h3>Highlighted Projects</h3>
            {result.map((project, index) => {
              return (
                <Box key={index}>
                  <hr />

                  <ul>
                    <h4>{project.name}</h4>
                    {project.category.map((name, index) => {
                      return <li key={index}>{name}</li>;
                    })}
                  </ul>
                  <div className="langs"></div>
                </Box>
              );
            })}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                textTransform: "capitalize",
                marginTop: "12px",
              }}
            >
              <Button variant="contained" color="tertiary">
                <Link href="/projects">
                  <Typography
                    sx={{ fontFamily: "sans_BoldItalic", color: "white" }}
                  >
                    view all projects.
                  </Typography>
                </Link>
              </Button>
            </Box>
          </Paper>
        </Box>
        {/* </Container> */}
      </div>
    </>
  );
};

export default Landingpage;
