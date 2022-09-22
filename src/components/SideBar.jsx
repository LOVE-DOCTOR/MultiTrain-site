import React from "react";

import Link from "@mui/material/Link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SideBar = () => {
  const [navHeight, setNavHeight] = React.useState(0);
  React.useEffect(() => {
    const headerHeight = document.querySelector("header");
    setNavHeight(headerHeight.getBoundingClientRect().height);
  }, []);
  const handleScroll = (e) => {
    e.preventDefault();
    const ref = e.target.href;
    const id = ref.split("/").at(-1);
    const element = document.querySelector(id);
    const offset = element.offsetTop - 5;
    window.scrollTo({ top: offset - navHeight, behavior: "smooth" });
  };
  return (
    <Box
      pr={4}
      pl={{ xs: 4, md: 0 }}
      sx={{ position: { xs: "static", md: "fixed" } }}
    >
      <Typography fontWeight="bold">Table of Content</Typography>
      <Box
        component="ul"
        width={{ xs: "auto", md: "100%" }}
        sx={{ listStyleType: "none", ml: { xs: -5, md: 0 } }}
      >
        <Box component="li" pl={2}>
          <Link href="#classification" underline="none" onClick={handleScroll}>
            Classification
          </Link>
        </Box>
        <Accordion
          component="li"
          disableGutters
          elevation={0}
          sx={{ "&::before": { height: 0 } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            // sx={{
            //   justifyContent: { xs: "start", md: "center" },
            //   "& .MuiAccordionSummary-content": {
            //     flexGrow: { xs: 0, md: 1 },
            //     mr: { xs: 3, md: "auto" },
            //   },
            // }}
          >
            Parameters
          </AccordionSummary>
          <AccordionDetails>
            <Box
              component="ul"
              sx={{
                mt: -2,
                ml: -6,
                listStyleType: "none",
              }}
            >
              {ids.map((id) => (
                <Typography key={id} component="li">
                  <Link
                    onClick={handleScroll}
                    href={"#" + id}
                    underline="none"
                    sx={{
                      display: "block",
                      py: "0.4rem",
                      px: 3,
                      borderRadius: "4px",
                      "&:hover": { bgcolor: "action.hover" },
                    }}
                  >
                    {id}
                  </Link>
                </Typography>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default SideBar;
const ids = [
  "cores",
  "random_state",
  "verbose",
  "target_class",
  "imbalanced",
  "strategy",
];
