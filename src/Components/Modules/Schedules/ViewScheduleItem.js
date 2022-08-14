import React from 'react';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import { Stack, Checkbox } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ViewScheduleItem(props) {
  const { item, lastItem, handleItemCompleteChange } = props;

  console.log(lastItem);

  return (
    <Stack key={item.id + 50} display="flex" alignItems="center" justify="center">
      <ImageListItem
        sx={{
          opacity: item.complete ? '0.4' : '',
        }}
        onClick={() => handleItemCompleteChange(!item.complete, item.id)}
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
              checked={!!item.complete}
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
      {!lastItem && (<KeyboardDoubleArrowDown sx={{ marginTop: 1 }} />)}
    </Stack>
  );
}
