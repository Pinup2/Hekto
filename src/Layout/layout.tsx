import { Container, Box, CssBaseline } from "@mui/material";
import Navbar from "../components/ui/Nav"; // Import your Navbar component
import Footer from "../components/ui/Footer"; // Import your Footer component

const Layout = ({ children, breadcrumbs }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CssBaseline />
        <Navbar />
        <Box sx={{ flexGrow: 1 }}>
          <Container>
            <Box sx={{ marginTop: 4, marginBottom: 5 }}>{children}</Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
