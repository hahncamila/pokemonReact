import { capitalize, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { Pokemon } from "../types"

type Props = {
    pokemon: Pokemon
}
export const Stats = ({pokemon}: Props ) => (
    <> 
    <Typography> Stats </Typography>
        <TableContainer component={Paper}>
        <Table aria-label="Pokemon stats table" size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Stat</TableCell>
                    <TableCell>Value</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pokemon.stats.map(stat => (
                    <TableRow key = {stat.stat.name} sx = {{
                        "&:last-child td, &:last-child th": {
                            border: 0
                        }
                    }}>
                        <TableCell component={"th"} scope="row">
                            {capitalize(stat.stat.name)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
    </TableContainer>   
    </>
)