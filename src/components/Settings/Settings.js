import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import './Settings.module.css';

const Settings = (props) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('');

  const colorHandler = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setColor('');
  };
  const saveProfile = () => {
    localStorage.setItem('color', color);
    setOpen(false);
    props.setOpenSnackBar(true);
    setColor('');
    document.location.reload();
  };

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <Container maxWidth={'md'} sx={{ mt: '6rem' }}>
      <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
        <DialogTitle>Primary color</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <DialogContentText sx={{ mb: 1 }}>Choose color.</DialogContentText>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Color primary</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Color primary"
              onChange={handleChange}>
              <MenuItem value={'#8efa8e'} sx={{ background: '#8efa8e' }}>
                Green
              </MenuItem>
              <MenuItem value={'#f3f372'} sx={{ background: '#f3f372' }}>
                Yellow
              </MenuItem>
              <MenuItem value={'#c796f5'} sx={{ background: '#c796f5' }}>
                Violet
              </MenuItem>
              <MenuItem value={'#0072E5'} sx={{ background: '#0072E5' }}>
                Standart
              </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="warning">
            Cancel
          </Button>
          <Button onClick={saveProfile} variant="contained" color="success">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Button variant="contained" onClick={colorHandler}>
        Change primary color
      </Button>
    </Container>
  );
};
export default Settings;
