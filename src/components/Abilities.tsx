import { Pokemon } from "../types"
import {Chip, List, ListItem, Typography} from "@mui/material";

type Props = {
    pokemon: Pokemon
}

export const Abilities = ({pokemon}: Props) => 
    <>
    <Typography variant="h5" component={"h3"} gutterBottom align="center">
        Abilities
    </Typography>
    <List>
        {pokemon.abilities.map((item) => (
            <ListItem key={item.ability.name}>
                <Chip label={item.ability.name} color="secondary"/>
            </ListItem>
        ))}
    </List>
    </>