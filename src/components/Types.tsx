import { Chip, List, ListItem, Typography } from "@mui/material";
import { Pokemon } from "../types";

interface Props {
    pokemon: Pokemon
}
export function Types(params: Props) {
    return <>
    <Typography variant="h5" component={"h3"} gutterBottom align="center">
        Types
    </Typography>
    <List>
        {params.pokemon.types.map((item) => (
            <ListItem key={item.type.name}>
                <Chip label={item.type.name} color="secondary"/>
            </ListItem>
        ))}
    </List>
    </>
}