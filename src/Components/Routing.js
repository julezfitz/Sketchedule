import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Divider } from '@mui/material';
import { useLocation } from 'react-router';
import Heading from './Heading/Heading';
import ScheduleList from './Schedules/ScheduleList';
import EditSchedule from './Schedules/EditSchedule';
import NewSchedule from './Schedules/NewSchedule';

export default function Routing() {
  const [headingTitle, setHeadingTitle] = useState(null);
  const location = useLocation();

  const pageInfo = [
    {
      headingTitle: 'Sketchedule',
      path: '/',
    },
    {
      headingTitle: 'My Schedules',
      path: '/schedules',
    },
    {
      headingTitle: 'Sketchedule',
      path: '/edit',
    },
    {
      headingTitle: 'Sketchedule',
      path: '/new',
    },
  ];

  useEffect(() => {
    pageInfo.forEach((page) => {
      if (page.path === location.pathname) {
        setHeadingTitle(page.headingTitle);
      }
    });
  }, [location]);

  return (
    <>
      <Heading
        size="medium"
        className="page-heading"
        color="light"
        style={{
          marginBottom: 0,
          marginTop: '2rem',
        }}
      >
        {headingTitle}
      </Heading>
      <Divider
        sx={{ marginBottom: '2rem', marginTop: '1rem' }}
        color="white"
      />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/edit"
          element={
            <EditSchedule />
                    }
        />
        <Route
          path="/new"
          element={
            <NewSchedule />
                    }
        />
        <Route
          path="/"
          element={
            <ScheduleList />
                    }
        />
      </Routes>
    </>
  );
}
