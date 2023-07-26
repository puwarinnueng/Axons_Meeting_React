import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import { NavLink, Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable(props) {
    const {
        rows,
        colums,
        manageBtn,
        editBtn,
        deleteBtn,
        toggleState,
        path
    } = props;
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{
                    minWidth: 500,
                }} aria-label="custom pagination table">
                    <TableHead sx={{ backgroundColor: "#DCDCDC" }}>
                        <TableRow >
                            {colums.map((v, index) => {
                                return (
                                    <TableCell key={index} align='center' sx={{
                                        fontWeight: 600
                                    }}>
                                        {v.title}
                                    </TableCell>
                                )
                            })}
                            {manageBtn && (
                                <TableCell key={1000} align='center' sx={{
                                    fontWeight: 600
                                }}>
                                    action
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((r, index) => {
                            return (
                                <TableRow key={index}
                                    // onClick={() => alert("nueng" + r.id)}
                                    hover >
                                    {(rowsPerPage > 0 ? colums : colums).map(
                                        (c, index) => {
                                            if (index == 0
                                                // && props.pagination.beSelected == true
                                            ) {
                                                return (
                                                    <React.Fragment key={index}>
                                                        {/* <TableCell key={index} sx={{ paddingRight: '0px', paddingLeft: '20px' }}>
                                                            <div style={{ float: 'right' }}>
                                                                <SingleCheckbox
                                                                    key={index}
                                                                    onClick={() => pushData(r.bookingCode)}
                                                                />
                                                            </div>
                                                        </TableCell> */}
                                                        <TableCell
                                                            key={c.key}
                                                            // align={isEmpty(c.align) ? "left" : c.align}
                                                            align='center'
                                                        >
                                                            {c.type == "image" ? (
                                                                <img src={r[c.key]} style={{ width: "30px" }} />
                                                            ) : (
                                                                r[c.key]
                                                            )}
                                                        </TableCell>
                                                    </React.Fragment>
                                                );
                                            } else {
                                                return (
                                                    <TableCell
                                                        key={c.key}
                                                        // align={isEmpty(c.align) ? "left" : c.align}
                                                        align="center"
                                                    >
                                                        {c.type == "image" ? (
                                                            <img src={r[c.key]} style={{ width: "30px" }} />
                                                        ) : (
                                                            r[c.key]
                                                        )}
                                                    </TableCell>
                                                );
                                            }
                                        }
                                    )}
                                    {manageBtn && (
                                        <TableCell
                                            key="manage-btn"
                                            align='center'
                                            sx={{ minWidth: "150px" }}
                                        >
                                            {editBtn && (
                                                <Link
                                                    to={`${path}/login`}
                                                    className="px-2 navlink"
                                                >
                                                    <EditIcon />
                                                </Link>
                                            )}

                                            {deleteBtn && (
                                                <a
                                                    className='px-2 navlink'
                                                    style={{ cursor: "pointer" }}
                                                    onClick={(e) => toggleState(e, r.id)}
                                                >
                                                    <DeleteIcon />
                                                </a>
                                            )}
                                        </TableCell>
                                    )}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                // colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>

    );
}
