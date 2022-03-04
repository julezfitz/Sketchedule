import './App.css';
import React from "react";
import Routing from "./Routing";
import { Container } from "@mui/material";
import { useLocation } from "react-router";

export default function App() {

  	//Track page changes
	const location = useLocation();

  return (
    <Container maxWidth='xl' sx={{ height: "100%" }}>
							<Routing
								location={location}
							/>
						</Container>
  );
}
