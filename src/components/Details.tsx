import { Box, Typography, styled } from "@mui/material"
import { Pokemon } from "../types"
import { Abilities } from "./Abilities"
import { Moves } from "./Moves"
import { Stats } from "./Stats"
import { Types } from "./Types"

import ImgNotAvailable from "../assets/Image_not_available.png"

type Props = { pokemon: Pokemon }

const ImgContainer = styled("div")`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Img = styled("img")`
    max-width: 100%;
`;

export const Details = ({ pokemon }: Props) => {
    return <>
        <Typography variant="h4" component="h2"># {pokemon.id}</Typography>
        <ImgContainer>
            <Img
                src={
                    pokemon.sprites.other["official-artwork"].front_default ??
                    pokemon.sprites.front_default ??
                    ImgNotAvailable
                }
            />
        </ImgContainer>
 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginBottom: "1.5rem" }}>
                <Box sx={{ flex: 1, minWidth: "250px" }}>
                    <Stats pokemon={pokemon} />
                </Box>
                <Box sx={{ flex: 1, minWidth: "250px" }}>
                    <Types pokemon={pokemon} />
                    <Abilities pokemon={pokemon} />
                </Box>
            </Box>
        <Moves pokemon={pokemon} />
    </>
}
