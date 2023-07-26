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
import { bgcolor } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import PeopleIcon from '@mui/icons-material/People';




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
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <Tooltip title="Add New User">
                <Box sx={{ height: 320, transform: 'translateZ(opx)', flexGrow: 1 }}>
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        icon={<SpeedDialIcon openIcon={<PeopleIcon />} />}
                        // onClick={handleOpen}
                        onClick={handleClickOpen}
                        FabProps={{
                            // size: "medium", 
                            style: { backgroundColor: "#1680ff" }
                        }}
                    >

                    </SpeedDial>
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
                            <DialogTitle>Add New User</DialogTitle>
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
                                <Button variant="contained" color="error">
                                    <GoogleIcon />&nbsp;
                                    Import Google Contact
                                </Button>

                                <div className="">

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <TextField fullWidth id="standard-basic" label="Specify your project name" variant="standard" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <TextField fullWidth id="standard-basic" label="Short name for your project" variant="standard" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            {/* <DialogContentText>
                                                Choose Priority
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                // sx={{ width: auto }}
                                                renderInput={(params) => <TextField {...params} label="Choose Priority" />}
                                            /> */}
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                options={mocData}

                                                // disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Select Role" variant="standard" />
                                                )}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>cancel</Button>
                                <Button variant="contained" color="info">
                                    Add
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Box>
            </Tooltip>
        </div>

    );
}
