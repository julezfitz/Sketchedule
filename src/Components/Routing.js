import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./Heading/Heading";
import { Divider } from "@mui/material";
import ScheduleList from "./Schedules/ScheduleList";

export default function Routing({ location }) {

    const [headingTitle, setHeadingTitle] = useState(null);

    const pageInfo = [
        {
            headingTitle: "Home",
            path: "/",
        },
        {
            headingTitle: "My Schedules",
            path: "/offers",
        },
    ];

    useEffect(() => {
        for (let page of pageInfo) {
            if (page.path === location.pathname) {
                setHeadingTitle(page.headingTitle);
            }
        }
    }, [location]);

    return (
        <>
            <Heading
                size="medium"
                className="page-heading"
                color="light"
                style={{
                    marginBottom: 0,
                    marginTop: "2rem",

                    overflow: "hidden",
                }}
            >
                {headingTitle}
            </Heading>
            <Divider
                sx={{ marginBottom: "5rem", marginTop: "1rem" }}
                color="white"
            />
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <ScheduleList />
                    }
                />
            </Routes>
        </>
    )
}

