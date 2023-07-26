import React from "react";
// import { useHistory } from "react-router-dom";
// import AxiosInstance from "../../../utils/interceptors";
// Local Components
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';

const DeleteModal = (props) => {
    //   const history = useHistory();

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

            PaperProps={{
                sx: {
                    maxHeight: 400
                }
            }}
            fullWidth={true}
            maxWidth='xs'
            maxHeight="40px"
        >
            <DialogTitle>ยืนยันการลบข้อมูล</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={props.onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                คุณต้องการลบข้อมูลนี้หรือไม่?
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Close</Button>
                <Button variant="contained" color="error">
                    Success
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteModal;
