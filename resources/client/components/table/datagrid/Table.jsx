
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter,
  useGridApiContext,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
  // GridToolbar,
  GridActionsCellItem,

} from '@mui/x-data-grid';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import ReportExcel from '../ExportExcel/index'
import { mockDataContacts } from "../../../data/mockData";
import React, { useState, useEffect } from "react";
import CreateModal from '../../modal/NewMissionModalNoSpeedDial'
import Test from '../../modal/test';
import { positions } from '@mui/system';

const Table = (props) => {
  const {
    columns,
    rows,
    totalRows,
    page,
    setPage,
    pageSize,
    setPageSize
  } = props;

  const handleChangeRowsPerPage = (newPageSize) => {
    setPageSize(newPageSize);
    setPage(0);
  };

  // let datasearch = sessionStorage.getItem("search")
  // const [data1, setData1] = useState('3');
  // console.log("data1", data1)
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   // document.title = `You clicked ${count} times`;
  //   setData1(sessionStorage.getItem("search"))
  // });

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarQuickFilter />
        <GridToolbarColumnsButton />
        <GridToolbarExportContainer>
          <GridCsvExportMenuItem
            options={csvOptions}
          />
          {/* <JsonExportMenuItem /> */}
        </GridToolbarExportContainer>
      </GridToolbarContainer>
    );
  }
  const wscols = [
    { wch: Math.max(...mockDataContacts.map(mockDataContacts => mockDataContacts.name.length)) },
    { wch: Math.max(...mockDataContacts.map(mockDataContacts => mockDataContacts.email.length)) },
  ];
  function JsonExportMenuItem(props) {
    return (
      <MenuItem
      >
        <ReportExcel
          csvData={mockDataContacts}
          fileName="Customers_Infomation_xlsx"
          wscols={wscols}
        />
      </MenuItem>
    );
  }

  // csv
  const csvOptions = {
    fileName: 'customerDataBase',
    utf8WithBom: true,
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
      }}
    >
      <DataGrid
        // checkboxSelection
        sx={{
          border: "none"
        }}
        rowHeight={48}
        headerHeight={48}
        columns={columns}
        rows={rows}
        pagination
        rowCount={totalRows}
        page={page}
        pageSize={pageSize}
        onPageSizeChange={handleChangeRowsPerPage}
        onPageChange={(page, details) => setPage(page)}
        rowsPerPageOptions={[1, 2, 3, 4, 5, 6]}
        // paginationMode="server"
        // disableColumnMenu
        components={{
          Toolbar: CustomToolbar,
        }}
        // componentsProps={{
        //   panel: {
        //     // anchorEl: filterButtonEl,
        //     placement: "bottom-end",
        //   },
        //   toolbar: {
        //     // setFilterButtonEl,
        //     // placement: "end",
        //   },
        // }}
      // onRowClick={(rows)=>{<Test params={rows.id} />}}
      />
    </div>

  );
};

export default Table;
