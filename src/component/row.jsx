import { TableCell, TableRow } from "@mui/material";

function createRow(obj) {
    return (
        <TableRow>
            <TableCell>{obj.id}</TableCell>
            <TableCell>{obj.first_name + " " + obj.last_name}</TableCell>
            <TableCell>{obj.email}</TableCell>
            <TableCell>{obj.gender}</TableCell>
            <TableCell>{"$" + obj.income}</TableCell>
            <TableCell>{obj.city}</TableCell>
            <TableCell>{obj.car}</TableCell>
            <TableCell>{obj.quote}</TableCell>
            <TableCell>{obj.phone_price}</TableCell>
        </TableRow>
    )
}

export default createRow