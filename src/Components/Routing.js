import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Divider } from '@mui/material';
import Heading from './Heading/Heading';
import ScheduleList from './Modules/Schedules/ScheduleList';
import EditSchedule from './Modules/Schedules/EditSchedule';
import ImageSearch from './Modules/Schedules/ImageSearch';
import UseSchedule from './Modules/Schedules/UseSchedule';
import NewScheduleItem from './Modules/Schedules/NewScheduleItem';
import useCreateNewSchedule from '../Hooks/useCreateNewSchedule';

export default function Routing() {
  const location = useLocation();
  const { createNew } = useCreateNewSchedule();

  const pageInfo = [
    {
      headingTitle: 'My Sketchedules',
      path: '/',
    },
    {
      headingTitle: 'New Sketchedule',
      clickEvent: createNew,
    },
  ];

  return (
    <>
      <Heading
        sx={{
          marginBottom: 0,
          marginTop: '2rem',
        }}
        settings={pageInfo}
      />
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
            <NewScheduleItem />
                    }
        />
        <Route
          path="/"
          element={
            <ScheduleList />
                    }
        />
        <Route
          path="/search"
          element={
            <ImageSearch />
                    }
        />
        <Route
          path="/view"
          element={
            <UseSchedule />
                    }
        />
      </Routes>
    </>
  );
}
