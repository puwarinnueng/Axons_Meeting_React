import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import WorkIcon from '@mui/icons-material/Work';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { mocData } from '../testdata/dataAutocomplete'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Modal from '@mui/material/Modal';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




export default function BasicSpeedDial() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };
    const Label = styled('label')({
        display: 'block',
    });
    return (
        <div>
            {/* <Tooltip title="Create New Project"> */}
                <Box >
                    {/* <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        icon={<SpeedDialIcon openIcon={<WorkIcon />} />}
                        // onClick={handleOpen}
                        onClick={handleClickOpen}
                    >

                    </SpeedDial> */}
                    <div onClick={handleClickOpen}> 
                    <DeleteIcon />
                     
                    </div>
                    <div>
                        <Dialog
                            // fullWidth={fullWidth}
                            fullWidth={true}
                            // maxWidth={maxWidth}
                            maxWidth='xs'
                            maxHeight="40px"
                            // maxWidth='md'
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                sx: {
                                    //   width: "50%",
                                    maxHeight: 400
                                }
                            }}
                        >
                            <DialogTitle>ยืนยันการลบข้อมูล</DialogTitle>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
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
                                <Button onClick={handleClose}>Close</Button>
                                <Button variant="contained" color="error">
                                    Success
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Box>
            {/* </Tooltip> */}
        </div>

    );
}
