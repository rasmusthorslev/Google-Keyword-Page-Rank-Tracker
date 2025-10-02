import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90,
  },
  {
    field: 'keyword',
    headerName: 'Keyword',
    width: 300,
    editable: true,
  },
  {
    field: 'rank',
    headerName: 'Rank',
    width: 100,
    editable: false,
  },
    // sortable: false,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function KeywordsGrid({keywords}) {
    const rows = keywords.map((keyword, index) => ({
      id: keyword.id || index,
      keyword: keyword.name || '',
      rank: keyword.rank || '', // if your API returns rank
    }));
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'
        }
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 100, 1000]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          '& .even-row': { backgroundColor: '#f5f5f5' }, // light gray
          '& .odd-row': { backgroundColor: '#ffffff' },  // white
        }}
      />
    </Box>
  );
}
