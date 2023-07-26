import { Box } from "@mui/material";
import {
  // DataGrid,
  // GridToolbarContainer,
  // GridToolbarColumnsButton,
  // GridToolbarFilterButton,
  // GridToolbarExport,
  // GridToolbarDensitySelector,
  // GridToolbarQuickFilter,
  // useGridApiContext,
  // GridToolbarExportContainer,
  // GridCsvExportMenuItem,
  // GridToolbar,
  GridActionsCellItem,

} from '@mui/x-data-grid';
import { tokens } from "../../../theme";
import { mockDataContacts } from "../../../data/mockData";
import { useTheme } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import ReportExcel from '../ExportExcel/index'
import React, { useState, useEffect } from "react";
import TableData2 from './Table'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
// import EditModal from '../../modal/EditModal'
import DeleteModalNotext from '../../modal/DeleteModalNotext'
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom"
import CreateModal from '../../modal/NewMissionModalNoSpeedDial'

const Contacts = (props) => {
  const {
    path,
    data,
    // getRowId
    // rows,
    // totalRows,
    // page,
    // setPage,
    // pageSize,
    // setPageSize
  } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // console.log("data1", data)
  // // console.log("data1", data)
  // console.log('mockDataContacts',mockDataContacts)

  // const [rows, setRows] = useState(mockDataContacts);
  // const [rows, setRows] = useState(data);
  // var rows = data
  const [totalRows, setTotalRows] = useState(11);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const columns = [
    // { field: "getRowId", headerName: "ID", flex: 0.5 },
    { field: "localName", headerName: "Title" },
    { field: "name", headerName: "Detail" },
    { field: "type", headerName: "Test" },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      // cellClassName: "name-column--cell",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      renderCell: (params) => {
        const onClickID = (e) => {
          const currentRow = params.row;
          const editid = params.row.id
          // return navigate(`/mission/table/${editid}`)
          return navigate(`/${path}/${editid}`)
        };
        return (
          <div className="">
            <div className="row">
              &nbsp;
              &nbsp;
              <div className="col-sm-4">
                {/* <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={onClickID2}
                  color="inherit"
                /> */}
                {/* <CreateModal  params={params.row.id}/> */}
              </div>
              <div className="col-sm-4">
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={onClickID}
                  color="inherit"
                />
              </div>
              &nbsp;
              {/* <div className="col-sm-4">
                <DeleteModalNotext />
              </div> */}
            </div>
          </div>
        );
      },
    }
  ];

  return (
    <Box m="10px">
      <Box
        m="1px 0 0 0"
        // height="75vh"
        height="400px"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            // color: colors.greenAccent[300],
            color: null,
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#ffffff",
            borderBottom: "none",
            // backgroundColor: null,
            // borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: colors.primary[400],
            backgroundColor: null,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#ffffff",
            // borderTop: "none",
            // backgroundColor: null,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[300]} !important`,
          },

        }}
      >
        <TableData2
          columns={columns}
          rows={data}
          totalRows={totalRows}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        // onRowClick={(rows)=>{selectComponents(rows.id)}}
        />
      </Box>
    </Box>
  );
};

export default Contacts;