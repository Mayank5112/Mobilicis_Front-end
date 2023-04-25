import { TableCell, TableRow } from "@mui/material";

function CreateAggRow(obj, index) {
    return (
        <TableRow>
            <TableCell>{obj._id}</TableCell>
            <TableCell>{obj.count}</TableCell>
            <TableCell>{obj.avg_income}</TableCell>
        </TableRow>
    )
}

export default CreateAggRow