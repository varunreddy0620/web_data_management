import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ParentModal(props) {
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
         Are  you sure want to Logout ?????
        </Typography>
        <div style={{display:"flex",justifyContent:"end"}}>
      <button style={{margin:'5px',paddingLeft:'5px',paddingRight:'5px'}} onClick={()=>logoutfunction(true)}>Yes</button>
      <button style={{margin:'5px',paddingLeft:'5px',paddingRight:'5px'}} onClick={()=>logoutfunction(false)}>No</button>
    </div>
      </Box>
   
    </Modal>
  </div>
);
}


