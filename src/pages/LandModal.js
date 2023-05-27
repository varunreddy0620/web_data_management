import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateLand from './CreateLand';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:400,
  overflow:'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// { Land_Id : “1201” , location : “UTA” , Area : “50 Acres” , Projects completed : “2” ,expenses : “$100,000” , income : “$130,000”, Trails : “0” ,  Market Value : “$1,000,000” } 

export default function LandModal(props) {
const {handleOpen,handleClose,open,logoutfunction}=props

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
         ADD YOUR LAND
        </Typography>
       <CreateLand></CreateLand>
      </Box>
   
    </Modal>
  </div>
);
}


