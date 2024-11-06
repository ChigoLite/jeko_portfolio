import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <Box sx={{}}>
        <Box
          className="contactBox"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "center",
            position: "relative",
          }}
        >
          <Box>
            <Typography
              className="contactName"
              sx={{
                color: "black",
                fontFamily: "sans_bold",
                paddingTop: "12px",
              }}
            >
              Certifications
            </Typography>
            <div className="contacts">
              <ul>
                <li>AWS Cloud Developer associates</li>
                <li>Linux Foundation training</li>
              </ul>
            </div>
          </Box>
          <Box
            className="pages"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box className="general">
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "sans_bold",
                  paddingTop: "12px",
                }}
              >
                Reference{" "}
              </Typography>
              <div>
                <ul>
                  <li>Engr. Uzor Henry - SEDI Enugu</li>
                  <p>Staff Electrical Research and Development</p>
                  <p>uzorhenry@gmail.com</p>
                  <p>08035445454</p>
                </ul>
              </div>
              <br />
              <div>
                <ul>
                  <li>Engr. Chidera Anioke - University of Nigeria Nsukka</li>
                  <p>Senior Lecturer</p>
                  <p>chidera.anioke@unn.edu.ng</p>
                  <p>08038702995</p>
                </ul>
              </div>
            </Box>
            <Box className="projects">
              <h4>Education</h4>
              <Typography component="div">
                <ul>
                  <li>University of Nigeria Nsukka (2017)</li>
                </ul>
                <p>Electronics Engineering</p>
                <p>B.Eng</p>
              </Typography>
              <Typography component="div">
                <ul>
                  <li>Boys' Secondary School Mgbowo (2012)</li>
                </ul>
                <p>WASSCE</p>
              </Typography>
            </Box>
          </Box>
        </Box>
        <br />
        <Box>
          <Typography
            color="inherit"
            variant="h5"
            sx={{
              textAlign: "center",
              textTransform: "capitalize",
              fontFamily: "sans_BoldItalic",
              fontSize: "16px",
              color: "white",
            }}
          >
            Last Updated 2023.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
