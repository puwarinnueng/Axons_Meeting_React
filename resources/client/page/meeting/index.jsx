import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import StarIcon from "@mui/icons-material/Star";
import HdIcon from "@mui/icons-material/Hd";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ImportExportRoundedIcon from "@mui/icons-material/ImportExportRounded";
import GridTable from "../../components/table/datagrid/GridTable";
import Layout from "../../components/layouts/index";
import { NavLink, useLocation } from "react-router-dom";
import MainContainer from "../../components/container/MainContainer";
import axios from "axios";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BasicTable from '../../components/table/basictable/BasicTable'
import BaseTable from '../../components/table/basetable/index'
import TextField from '@mui/material/TextField';
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



const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        // color: 'white',
        backgroundColor: selectedColor,
    },
}));
const theme = createTheme({
    palette: {
        text: {
            primary: "#00ff00",
        },
    },
});


export default function Project() {
    //get data
    const [getalldata, SetGetalldata] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    // console.log("getalldata", getalldata);
    useEffect(
        () => {
            (async () => {
                setIsLoaded(false);
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
        // {
        //     id: 2,
        //     name: "nueng",
        //     age: "23",
        //     college: "nueng"
        // },
        // {
        //     id: 3,
        //     name: "nuessssng",
        //     age: "23",
        //     college: "nueng"
        // },
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
    const wscols = [
        { wch: Math.max(...data.map(data => data.title.length)) },
        { wch: Math.max(...data.map(data => data.id.length)) },
    ];
    function JsonExportMenuItem(props) {
        return (
            <MenuItem
            >
                <ReportXLSX
                    csvData={data}
                    fileName="Customers_Infomation_xlsx"
                    wscols={wscols}
                />
            </MenuItem>
        );
    }

    //popover
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
    // interface ISelectedFilter {
    //     [k: string]: boolean;
    // }
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
    return (
        <Layout>
            <MainContainer>
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
                                <Button
                                    variant="contained"
                                    // variant="outlined"
                                    color="success">
                                    Add Meeting
                                </Button>
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
                                    {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
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
                                        // colums={columnsFilter}
                                        colums={
                                            Object.keys(selectedFilter).length
                                                ? columnsFilter.filter((col) => selectedFilter[col.key])
                                                : columnsFilter
                                        }
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
                        {/* <div className='card ms-3 me-3 mt-3'> */}
                        <div className=''>
                            {isLoaded ? (
                                <GridTable path="comments" data={filterdata} />
                                // <BasicTable />
                            ) : (
                                <div className="px-4 py-3" style={{ width: "150px" }}>
                                    loading...
                                </div>
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel value="3" sx={{ padding: 0 }}>Item Three</TabPanel>
                </TabContext>
            </MainContainer>
        </Layout>
    );
}
