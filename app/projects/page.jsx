import {
  Container,
  Box,
  Stack,
  Chip,
  Paper,
  Grid,
  Fab,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { ProjectsInfo } from "@/Components/home/projectInfo";

const Projects = () => {
  return (
    <>
      <div className="">
        <div className="info">
          <p className="info_name">my projects</p>
        </div>
      </div>
      <Box className="landingpage">
        <Paper sx={{ marginTop: 3 }}>
          {ProjectsInfo.map((project, index) => {
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
          ></Box>
        </Paper>
      </Box>
    </>
  );
};
export default Projects;
