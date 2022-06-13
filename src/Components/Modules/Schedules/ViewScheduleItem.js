import React, { useState } from 'react';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import { Stack, Checkbox } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ViewScheduleItem(props) {
  const { item, scheduleItems, handleItemCompleteChange } = props;
  const [complete, setComplete] = useState(item.complete);

  return (
    <Stack key={item.id + 50} display="flex" alignItems="center" justify="center">
      <ImageListItem
        sx={{
          opacity: complete ? '0.4' : '',
        }}
      >
        <img
          alt={item.altText}
          src={item.imageSrc}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.imageLabel}
          actionIcon={(
            <Checkbox
              size="medium"
              checked={complete}
              onChange={(event) => {
                handleItemCompleteChange(event, item.id);
                setComplete(event.target.checked);
              }}
              sx={{
                color: 'rgba(255, 255, 255, 0.54)',
                '&.Mui-checked': {
                  color: 'rgba(255, 255, 255, 0.54)',
                },
              }}
              aria-label="mark as complete"
            />
                    )}
        />
      </ImageListItem>
      {item !== scheduleItems[scheduleItems.length - 1]
            && (<KeyboardDoubleArrowDown sx={{ marginTop: 1 }} />)}
    </Stack>
  );
}
