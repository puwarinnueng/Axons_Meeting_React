import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import IconButton from "@mui/material/IconButton";
import Layout from "../../components/layouts/index";
import MainContainer from "../../components/container/MainContainer";
import axios from "axios";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BaseTable from '../../components/table/basetable/index'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ReportXLSX from '../../components/table/ExportExcel/index'
import Popover from '@mui/material/Popover';
import { COLUMN_DATA } from "./columndata";
import BasicCheckbox from "../../components/checkbox/BasicCheckbox";
import { FormGroup } from "@mui/material";
import WifiIcon from '@mui/icons-material/Wifi';
import DeleteModal from "../../components/modals/DeleteModal";
import CreateMeetingModal from '../../components/modals/CreateMeetingModal'



const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        // color: 'white',
        backgroundColor: selectedColor,
    },
}));
// const theme = createTheme({
//     palette: {
//         text: {
//             primary: "#00ff00",
//         },
//     },
// });


export default function Project() {
    //get data
    const [getalldata, SetGetalldata] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(
        () => {
            (async () => {
                // setIsLoaded(false);
                try {
                    await axios
                        .get(`http://localhost:3333/api/mission/getall`, {
                            params: {
                                test: ``,
                            },
                        })
                        .then(
                            (res) => {
                                // console.log('data1', res.data)
                                if (res.data.status == 200) {
                                    // SetGetalldata(res.data.data)
                                    SetGetalldata(
                                        res.data.data.map((el, index) => {
                                            return { ...el, id: index + 1 };
                                        })
                                    );
                                    setIsLoaded(true);
                                } else {
                                    console.log(error);
                                }
                            },
                            (err) => {
                                console.log(err);
                            }
                        );
                } catch (e) {
                    console.log(e);
                }
            })();
        },
        [
            // Params
        ]
    );

    //data mock
    const data = [
        {
            title: "nueng",
            id: 1,
            status: "true",
            task: "true",
            date: "true",
            time: "true",
            location: "true",
        },
        {
            title: "nano",
            id: 2,
            status: "true",
            task: "true",
            date: "true",
            time: "true",
            location: "true",
        },
    ];

    //tabs
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Search
    const [filterdata, setfilterData] = useState(data);
    const searchJobs = (searchKey) => {
        const text = data.filter((obj) =>
            Object.keys(obj).some((key) =>
                // obj[key].toLowerCase().includes(searchKey.toLowerCase())
                obj[key].toString().toLowerCase().includes(searchKey.toString().toLowerCase())
            )
        );
        setfilterData(text);
        if (searchKey !== "") {
            return text;
        } else {
            setfilterData(data);
        }
    };

    //export dropdown
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //export xlsx
    // const wscols = [
    //     { wch: Math.max(...data.map(data => data.title.length)) },
    //     { wch: Math.max(...data.map(data => data.id.length)) },
    // ];
    function JsonExportMenuItem(props) {
        return (
            <MenuItem
            >
                <ReportXLSX
                    csvData={data}
                    fileName="Customers_Infomation_xlsx"
                // wscols={wscols}
                />
            </MenuItem>
        );
    }

    //popover filter
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const open2 = Boolean(anchorEl2);
    const id = open2 ? 'simple-popover' : undefined;

    //filter data
    let columnsFilter = COLUMN_DATA
    const [selectedFilter, setSelectedFilter] = useState({
        title: true,
        id: true,
        status: true,
        task: true,
        date: true,
        time: true,
        location: true,
    });
    const handleFilterChange = (key, value) => {
        selectedFilter[key] = value;
        setSelectedFilter({ ...selectedFilter });
    };
    const cleardata = () => {
        setSelectedFilter({
            title: true,
            id: true,
            status: true,
            task: true,
            date: true,
            time: true,
            location: true,
        });
    };

    //delete with id
    const [openDeleteModal, setopenDeleteModal] = useState({ open: false, id: "" });
    const handleCloseDeleModal = () => {
        setopenDeleteModal({ open: false, id: "" })
    }
    function openDeleteModalwithID(targetId) {
        setopenDeleteModal({ open: true, id: targetId })
    }
    return (
        <Layout>
            <MainContainer>
                <DeleteModal
                    open={openDeleteModal.open}
                    getId={openDeleteModal.id}
                    onClose={handleCloseDeleModal}
                    redirectTo=""
                    deleteUrl=""
                />
                <TabContext value={value}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" color="">
                            <Toolbar>
                                <div className="AxonsTitle2">Meeting</div>
                                <div className="circle-singleline">12</div>
                                <Box
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: "divider",
                                        border: "none",
                                    }}
                                >
                                    {/* <ThemeProvider theme={theme}> */}
                                    <ToggleButtonGroup
                                        size="small"
                                        value={value}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Small sizes"
                                    >
                                        <ToggleButton
                                            value="1"
                                        // selectedColor="#00abc0"
                                        >
                                            list
                                        </ToggleButton>
                                        <ToggleButton
                                            value="2"
                                        // selectedColor="#00abc0"
                                        >
                                            grid
                                        </ToggleButton>
                                        <ToggleButton
                                            value="3"
                                        // selectedColor="#00abc0"
                                        >
                                            calendar
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>&nbsp;&nbsp;&nbsp;
                                <Box sx={{ flexGrow: 1 }} />
                                <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>

                                {/* add task */}
                                <CreateMeetingModal />
                                &nbsp;&nbsp;&nbsp;

                                {/* search */}
                                <Paper
                                    component="form"
                                    sx={{
                                        p: '2px 4px',
                                        border: 1,
                                        display: 'flex', alignItems: 'center', width: 200,
                                        height: 32
                                    }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={(e) => searchJobs(e.target.value.toString())}
                                    />
                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>&nbsp;

                                {/* import export */}
                                <IconButton aria-label="delete" >
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        color="primary" variant="outlined"><ImportExportIcon />Export / Import</Button>
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}><JsonExportMenuItem /></MenuItem>
                                    <MenuItem onClick={handleClose}>Import</MenuItem>
                                </Menu>

                                {/* filter checkbox */}
                                <Button
                                    aria-describedby={id}
                                    color="primary" variant="outlined" onClick={handleClick2}>
                                    <WifiIcon />
                                    filter
                                </Button>
                                <Popover
                                    id={id}
                                    open={open2}
                                    anchorEl={anchorEl2}
                                    onClose={handleClose2}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <div className="px-4 py-3" style={{ minWidth: "280px" }}>
                                        <div className="d-flex justify-content-between">
                                            <span className="font-bold mb-3">จัดการคอลัมน์</span>
                                            <span
                                                className="clear1"
                                                onClick={() => {
                                                    cleardata();
                                                    handleClose2();
                                                }}
                                                style={{ color: "#376aed" }}
                                            >คืนค่า</span>
                                        </div>
                                        <FormGroup>
                                            {columnsFilter.map((e, index) => {
                                                return (
                                                    <BasicCheckbox
                                                        label={e.title}
                                                        key={e.key}
                                                        checked={!!selectedFilter[e.key]}
                                                        onChange={(value) => handleFilterChange(e.key, value)}
                                                    />
                                                )
                                            })}
                                        </FormGroup>

                                    </div>
                                </Popover>
                            </Toolbar>
                        </AppBar>
                    </Box>

                    <TabPanel value="1" sx={{ padding: 0 }}>
                        <div className=''>
                            {isLoaded ? (
                                <div>
                                    <BaseTable
                                        rows={filterdata}
                                        colums={
                                            Object.keys(selectedFilter).length
                                                ? columnsFilter.filter((col) => selectedFilter[col.key])
                                                : columnsFilter
                                        }
                                        manageBtn={
                                            Object.values(selectedFilter).reduce(
                                                (old, val) => old + Number(val),
                                                0
                                            ) > 0
                                        }
                                        editBtn={true}
                                        deleteBtn
                                        toggleState={(e, id) => openDeleteModalwithID([id])}
                                        path=""
                                    />
                                </div>
                            ) : (
                                <div className="px-4 py-3" style={{ width: "150px" }}>
                                    loading...
                                </div>
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel value="2" sx={{ padding: 0 }}>
                        asdsa
                    </TabPanel>
                    <TabPanel value="3" sx={{ padding: 0 }}>Item Three</TabPanel>
                </TabContext>
            </MainContainer>
        </Layout>
    );
}
