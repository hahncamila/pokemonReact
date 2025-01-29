import { Container, styled, Typography, Box } from "@mui/material";
import React from "react";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import { PokemonCard } from "../components/PokemonCard";

const CustonLink = styled(Link)`
    text-decoration: none;
    height: 100%;
    display: block;
`

export function HomePage() {
    const { pokemons, next } = useLoaderData() as { pokemons: any[], next: string };

    const [pokemonList, setPokemonList] = React.useState(pokemons)
    const [nextPage, setNextPage] = React.useState(next)

    const fetchNextPage = async () => {
        const data = await fetch(nextPage).then(res => res.json()).catch(console.error)
        setPokemonList(prev => [...prev, ...data.results])
        setNextPage(data.next)
    }
    
    return (
        <>
            <ScrollRestoration />
            <Header title="PokeDex"/>
            <Container maxWidth="lg" sx={{padding: "1.5rem"}}>
                <InfiniteScroll
                    dataLength={pokemonList.length}
                    next={fetchNextPage}
                    hasMore={!!nextPage}
                    loader={<Typography>Carregando...</Typography>}
                >
                   <Box
                        display="flex"
                        flexWrap="wrap"
                        gap={2}
                        justifyContent="space-between"
                    >
                        {pokemonList.map((item, index) => (
                            <Box key={item.name} sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}>
                                <CustonLink to={`/pokemon/${index + 1}`}>
                                    <PokemonCard pokemonName={item.name} pokemonNumber={index + 1} />
                                </CustonLink>
                            </Box>
                        ))}
                    </Box>
                </InfiniteScroll>
            </Container>
        </>
    )
}
