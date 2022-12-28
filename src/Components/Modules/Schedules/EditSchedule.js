import React, { useRef, useState, useEffect } from 'react';
import {
  Edit, Delete, Add, PlayCircleFilledRounded,
} from '@mui/icons-material';
import {
  IconButton, Card, CardActionArea, Box, Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../../db';

const titleStyle = {
  width: '70%',
  border: 'none',
  marginBottom: '5%',
};

export default function EditSchedule() {
  const location = useLocation();
  const scheduleID = location.state?.scheduleID;

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [title, setTitleValue] = useState(location.state?.scheduleName);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!disabled) {
      inputRef.current.focus();
    }
  }, [disabled]);

  const scheduleItems = useLiveQuery(
    () => db.scheduleItems
      .where('scheduleID')
      .equals(scheduleID)
      .toArray(),
  );
  if (!scheduleItems) return null;

  const handleTitleChange = async (titleScheduleID) => {
    try {
      await db.schedules.update(titleScheduleID, { name: title });
    } catch (error) {
      console.log(`Failed to update title: ${error}`);
    }
  };

  const toggleEdit = () => {
    if (disabled) {
      setDisabled(false);
      inputRef.current.focus();
    } else {
      setDisabled(true);
      handleTitleChange(scheduleID);
    }
  };

  const handleDeleteItem = async (itemID) => {
    try {
      await db.scheduleItems.delete(itemID);
    } catch (error) {
      console.log(`Failed to delete: ${error}`);
    }
  };

  return (
    <Box>
      <Box>
        <TextField
          id="title-display-field"
          sx={titleStyle}
          ref={inputRef}
          value={title}
          inputRef={inputRef}
          disabled={disabled}
          onChange={(e) => setTitleValue(e.target.value)}
          variant="standard"
          InputProps={{ style: { fontSize: 22 } }}
          onBlur={() => { toggleEdit(); }}
        />
        <IconButton
          size="large"
          color="inherit"
          style={{ marginLeft: 2.5, paddingBottom: 1 }}
          onClick={() => { toggleEdit(); }}
        >
          <Edit />
        </IconButton>
        <IconButton
          color="success"
          style={{ marginLeft: 2.5 }}
          onClick={() => { navigate('/view', { state: { ...location.state } }); }}
        >
          <PlayCircleFilledRounded sx={{ fontSize: '2rem' }} />
        </IconButton>
      </Box>
      <ImageList
        sx={{
          maxWidth: '100%',
          img: {
            minHeight: '80%',
          },
          div: {
            minHeight: '20%',
          },
        }}
        cols={2}
        rowHeight={150}
        gap={8}
      >
        <ImageListItem key="10">
          <Card
            sx={{ paddingLeft: '20%' }}
            style={{ minHeight: '80%', justifyContent: 'center', display: 'flex' }}
            variant="outlined"
            onClick={() => navigate('/new', { state: { ...location.state } })}
          >
            <CardActionArea>
              <Add
                sx={{ fontSize: 100, color: 'gray', justifyContent: 'center' }}
              />
            </CardActionArea>
          </Card>
        </ImageListItem>

        {scheduleItems?.map((item) => (
          <ImageListItem key={item.id + 50}>
            <img
              alt={item.altText}
              src={item.imageSrc}
              loading="lazy"
            />
            <ImageListItemBar
              title={(
                <Box sx={{ maxWidth: '8.5rem', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  <Typography sx={{ overflow: 'hidden', display: 'inline' }}>
                    {item.imageLabel}
                    {' '}
                    Hello this is really long now
                  </Typography>
                  <IconButton
                    size="medium"
                    sx={{
                      display: 'inline', color: 'black', marginTop: '-0.6rem', right: 0, position: 'absolute',
                    }}
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
            )}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
