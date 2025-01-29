import { Chip, List, ListItem, Typography } from "@mui/material";
import { Pokemon } from "../types";
import { memo } from "react";

const Component = ({ pokemon }: { pokemon: Pokemon }) => {
    return (
        <>
            <Typography variant="h5" component={"h3"} gutterBottom align="center">
                Moves
            </Typography>
            <List
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 1,
                }}
            >
                {pokemon.moves.map((item) => (
                    <ListItem
                        key={item.move.name}
                        sx={{
                            width: { xs: "100%", sm: "48%", md: "30%" },
                            display: "flex",
                            justifyContent: "center",
                            padding: 1,
                        }}
                    >
                        <Chip label={item.move.name} color="secondary" />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export const Moves = memo(Component, (p, n) => p.pokemon.id === n.pokemon.id);
