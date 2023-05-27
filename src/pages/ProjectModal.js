import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateProjectComponent from './CreateProjectComponent';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};

export default function ProjectModal(props) {
const {handleOpen,handleClose,open,getData}=props

return (
  <div>
   
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         CREATE PROJECT
        </Typography>
       <CreateProjectComponent getData={getData}></CreateProjectComponent>
      </Box>
   
    </Modal>
  </div>
);
}


