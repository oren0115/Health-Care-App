import React from "react";
import AppNavbar from "../src/components/Navbar";
import Jumbotron from "../src/components/Jumbotron";
import Services from "../src/components/Services";
import Leadinghealth from "./components/LeadingHealth";
import "../src/css/Style.css";
import DownloadsApps from "./components/DownloadsApps";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div>
      <AppNavbar />
      <Jumbotron />
      <Services />
      <Leadinghealth />
      <DownloadsApps />
      <Testimonials />
    </div>
  );
}

export default App;
