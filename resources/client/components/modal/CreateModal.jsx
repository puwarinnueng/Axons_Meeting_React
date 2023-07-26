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
            <Tooltip title="Create New Project">
                <Box sx={{ height: 320, transform: 'translateZ(opx)', flexGrow: 1 }}>
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        icon={<SpeedDialIcon openIcon={<WorkIcon />} />}
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
                            maxWidth='lg'
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
                            <DialogTitle>Create New Project</DialogTitle>
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
                                <div className="">
                                    {/* 1 */}
                                    <div className="row">
                                        <div className="col-sm-4">
                                            {/* <div class="col-4"> */}
                                            <div className='mb-2'>
                                                <span className='hiden'>1</span>
                                            </div>
                                            <TextField fullWidth id="standard-basic" label="Specify your project name" variant="standard" />
                                        </div>
                                        <div className="col-sm-4">
                                            <div className='mb-2'>
                                                <span className='hiden'>1</span>
                                            </div>
                                            <TextField fullWidth id="standard-basic" label="Short name for your project" variant="standard" />
                                        </div>
                                        <div className="col-sm-4">
                                            <DialogContentText>
                                                Choose Priority
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Choose Priority" />}
                                            />
                                        </div>
                                    </div>
                                    <br></br>
                                    {/* 2 */}
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className='mb-2'>
                                                <span className='hiden'>1</span>
                                            </div>
                                            <TextField fullWidth id="standard-basic" label="Describe your project" variant="standard" />
                                        </div>
                                        <div className="col-sm-4">
                                            <DialogContentText>
                                                Choose a project plan
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Choose a project plan" />}
                                            />
                                        </div>
                                    </div>
                                    <br></br>
                                    {/* 3 */}
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <DialogContentText>
                                                Project Template
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Simple" />}
                                            />
                                        </div>
                                        <div className="col-sm-4">
                                            <DialogContentText>
                                                Choose a workflow for task
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Default Status Workflow" />}
                                            />
                                        </div>
                                        <div className="col-sm-4">
                                            <DialogContentText>
                                                Choose a worlflow for bug
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Default Status Workflow" />}
                                            />
                                        </div>
                                    </div>

                                    {/* 4 */}
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className='mb-2'>
                                                <span className='hiden'>1</span>
                                            </div>
                                            <TextField fullWidth id="standard-basic" label="Estimated Hours" variant="standard" />
                                        </div>
                                        <div className="col-sm-4">
                                            <div className='mb-2'>
                                                <span className='hiden'>1</span>
                                            </div>
                                            <TextField fullWidth id="standard-basic" label="Date Range" variant="standard" />
                                        </div>
                                        <div className="col-sm-4">
                                            <div className='mb-2'>
                                                <span className='hiden'>1</span>
                                            </div>
                                            <TextField fullWidth id="standard-basic" label="End Date" variant="standard" />
                                        </div>
                                    </div>
                                    <br></br>
                                    {/* 5 */}
                                    <div className="row">
                                        <div class="col-sm-4">
                                            <DialogContentText>
                                                Project Manager
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Select Project Manager" />}
                                            />
                                        </div>
                                        <div className="col-sm-4">
                                            <DialogContentText>
                                                Customer
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Select Customer" />}
                                            />
                                        </div>
                                        <div className="col-sm-4">
                                            <DialogContentText>
                                                Currency
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="USD : US Dollar" />}
                                            />
                                        </div>
                                    </div>
                                    {/* 6 */}
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <DialogContentText>
                                                Choose a default task type
                                            </DialogContentText>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={mocData}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Select default task type" />}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Close</Button>
                                <Button variant="contained" color="success">
                                    Success
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Box>
            </Tooltip>
        </div>

    );
}
