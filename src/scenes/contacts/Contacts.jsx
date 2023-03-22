// data grid with mui
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from './../../data/mockData';
import Header from '../../components/Header';

const Contacts= () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

   const columns = [
       { field: "id", headerName: "ID", flex: 0.5 },
       {
           field: "registrarId",
           headerName:"注册ID"
        
    },
    {
      field: "name",
      headerName: "名字",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "年龄",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "电话",
      flex: 1,
    },
    {
      field: "email",
      headerName: "邮箱",
      flex: 1,
       },
       {
        field: "address",
        headerName: "地址",
        flex: 1,
       },
       {
        field: "city",
        headerName: "城市",
        flex: 1,
       },
       {
        field: "zipCode",
        headerName: "邮编",
        flex: 1,
      },
  ];

  return (
    <Box>
      <Header title='联系' subTitle='未来供联系的人选' />
      <Box m='40px 0 0 0' height='75vh'
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Box>
  )
}

export default Contacts