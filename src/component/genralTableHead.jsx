import { TableCell, TableRow } from "@mui/material";

function GenralTableHead() {
    return (
        <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Income</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Car</TableCell>
            <TableCell>Quote</TableCell>
            <TableCell>Phone Price</TableCell>
        </TableRow>
    )
}

export default GenralTableHead