import { TableCell, TableRow } from "@mui/material";

function AggTableHead() {
    return (
        <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Average Income</TableCell>
            <TableCell>count</TableCell>
        </TableRow>
    )
}

export default AggTableHead