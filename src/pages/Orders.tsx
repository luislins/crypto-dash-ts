import React from 'react';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { DataGrid, GridColDef } from '@mui/x-data-grid';



export function Orders() {
  
  const columns: GridColDef[] = ordersGrid;

  const formatordersData = ordersData.map(p =>
    p.id  != undefined
      ? { ...p, id: Math.random() * 500, OrderID : Math.random() * 500, status: p.Status, 
        orderId: p.OrderID, location: p.Location, customerName: p.CustomerName, orderItems: p.OrderItems, image: p.ProductImage }
      : p
  );
  const rows = formatordersData;

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <DataGrid sx={{ boxShadow: 2, width:"100%" }} rowHeight={100} rows={rows} autoHeight pageSize={12} rowsPerPageOptions={[12]} disableSelectionOnClick columns={columns} />
    </div>
  );
}