
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import React, { useState } from 'react';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';




export default function BasicSpeedDial(prop) {
    console.log("props" + prop.params)
    // const [open, setOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    // setOpen(prop.open)
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


    // const [selectedImage, setSelectedImage] = useState(null);

    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     setSelectedImage(URL.createObjectURL(file));
    // };
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    // const handleImageUpload2 = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     // setSelectedImage(e.target.files[0]);
    //     setSelectedImage(reader.readAsDataURL(file))
    //   };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('image', selectedImage);

        axios.post('/upload', formData)
            .then(response => {
                // รับข้อมูลหลังจากการอัปโหลดรูปภาพสำเร็จ
                console.log(response.data);
            })
            .catch(error => {
                // จัดการเมื่อเกิดข้อผิดพลาดในการอัปโหลด
                console.error(error);
            });
    };
    const handleClear = () => {
        setSelectedImage(null)
    };
    return (
        <div>
            {/* <Tooltip title="Create New Project"> */}
            <Box >
                <IconButton aria-label="delete" >
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickOpen}
                        color="success"
                        variant="contained"
                        sx={{
                            display: 'flex', alignItems: 'center', width: 200,
                            height: 32
                        }}
                        >
                        <AddIcon/>Add Meeting
                    </Button>
                </IconButton>
                <div>
                    <Dialog
                        // fullWidth={fullWidth}
                        fullWidth={true}
                        // maxWidth={maxWidth}
                        maxWidth='md'
                        maxHeight="40px"
                        // maxWidth='sm'
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            sx: {
                                //   width: "50%",
                                maxHeight: 500
                            }
                        }}
                    >
                        <DialogTitle>Create New Mission</DialogTitle>
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
                            <div class="">
                                {/* 1 */}
                                <div class="row">
                                    <div class="col-sm-2 d-flex align-items-center">
                                        Title
                                        {/* {prop.params} */}
                                    </div>
                                    <div class="col-sm-8">
                                        <TextField value={prop.params} fullWidth id="outlined-basic" label="Title" variant="outlined" />
                                    </div>
                                </div>
                                <br></br>
                                {/* 2 */}
                                <div class="row">
                                    <div class="col-sm-2 d-flex align-items-center">
                                        Start Date
                                    </div>
                                    <div class="col-sm-4">
                                        {/* <DatePicker /> */}
                                    </div>
                                    <div class="col-sm-2 d-flex align-items-center">
                                        End Date
                                    </div>
                                    <div class="col-sm-4">
                                        {/* <DatePicker /> */}

                                    </div>
                                </div>

                                <br></br>
                                {/* 3 */}
                                <div class="row">
                                    <div class="col-sm-2 d-flex align-items-center">
                                        Details
                                    </div>
                                    <div class="col">
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="textarea"
                                            multiline
                                            rows={3}
                                            variant="outlined"
                                        />
                                    </div>
                                </div>
                                <br></br>

                                {/* 4 */}
                                <div class="row">
                                    <div class="col-sm-2 d-flex align-items-center">
                                        Image Icon
                                    </div>
                                    <div class="col">
                                        <div>
                                            <input type="file" name="file" id="my-file" accept="image/*" onChange={handleImageUpload}
                                            // style={{display: 'none'}}
                                            />
                                            {/* <label for="my-file">
                                                Nueng
                                            </label> */}

                                            {/* <button onClick={handleSubmit}>Upload</button> */}
                                            {/* <button onClick={handleClear}>clear</button> */}
                                            {/* {selectedImage && <img src={selectedImage} alt="Selected" />} */}
                                            <div className="card" style={{ width: "15rem", height: "0rem", display: `${selectedImage === null ? "none" : ""}` }}>
                                                {/* <div className="card" > */}
                                                <div className="card-body">
                                                    {/* {selectedImage && <img src={selectedImage} alt="Selected" />} */}
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item" >
                                                            {selectedImage && <img src={selectedImage} />}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancle</Button>
                            <Button variant="contained" color="success">
                                ADD
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Box>
            {/* </Tooltip> */}
        </div>

    );
}
