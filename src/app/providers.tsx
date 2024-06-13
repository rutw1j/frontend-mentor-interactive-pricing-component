'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `'Manrope', sans-serif`,
        body: `'Manrope', sans-serif`,
    },
});

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}