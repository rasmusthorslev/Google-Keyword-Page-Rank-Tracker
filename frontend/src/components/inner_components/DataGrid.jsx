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

export default function KeywordsGrid({keywords}) {
    const rows = keywords.map((keyword, index) => ({
      id: keyword.id || index,
      keyword: keyword.name || '',
      rank: keyword.rank || '', 
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
