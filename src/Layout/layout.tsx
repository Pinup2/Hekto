import { Container, Box, CssBaseline } from "@mui/material";
import Navbar from "../components/ui/Nav"; // Import your Navbar component
import Footer from "../components/ui/Footer"; // Import your Footer component

const Layout = ({ children, breadcrumbs }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Box sx={{ marginTop: 4, marginBottom: 5 }}>{children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
