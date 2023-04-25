import './App.css';
import { Table, TableHead, TableBody, Button, Box, AppBar, Toolbar, Typography } from "@mui/material";
import createRow from './component/row';
import { allUser, queryOne, queryTwo, queryThree, queryFour, queryFive } from './services/api';
import { useState, useEffect } from 'react';
import GenralTableHead from './component/genralTableHead';
import AggTableHead from './component/aggTableHead';
import CreateAggRow from './component/aggRow';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllUser()
  }, [])
  const [toggle, setToggle] = useState(true)
  async function getAllUser() {
    const response = await allUser();
    setData(response.data)
    setToggle(true)
  }
  async function getQueryOne() {
    const response = await queryOne();
    setData(response.data)
    setToggle(true)
  }
  async function getQueryTwo() {
    const response = await queryTwo();
    setData(response.data)
    setToggle(true)
  }
  async function getQueryThree() {
    const response = await queryThree();
    setData(response.data)
    setToggle(true)
  }
  async function getQueryFour() {
    const response = await queryFour();
    setData(response.data)
    setToggle(true)
  }
  async function getQueryFive() {
    const response = await queryFive();
    const agg = response.data;
    console.log(agg);
    setData(response.data)
    setToggle(false)
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mobilics
            </Typography>
            <Button color="inherit" onClick={getAllUser}>All User</Button>
            <Button color="inherit" onClick={getQueryOne}>Query One</Button>
            <Button color="inherit" onClick={getQueryTwo}>Query Two</Button>
            <Button color="inherit" onClick={getQueryThree}>Query Three</Button>
            <Button color="inherit" onClick={getQueryFour}>Query Four</Button>
            <Button color="inherit" onClick={getQueryFive}>Query Five</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Table>
        <TableHead>
          {toggle ? <GenralTableHead /> : <AggTableHead />}
        </TableHead>
        <TableBody>
          {data.map((element) => {
            if (toggle)
              return createRow(element)
            else
              return CreateAggRow(element)
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default App;
