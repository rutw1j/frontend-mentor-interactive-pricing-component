'use client'

import { Box, Flex, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import PriceComponent from "@/components/PriceComponent";
import DetailsComponent from "@/components/DetailsComponent";

export default function Home() {
    const isMobile = useBreakpointValue({base: true, md: false});
    return (
        <Flex h={'100vh'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'var(--custom-very-pale-blue)'} bgImage={'./bg-pattern.svg'} bgRepeat={'no-repeat'}> 

            <SimpleGrid columns={[1, 1, 1, 1]} as={Flex} minW={'350px'} w={'35vw'} maxW={'35vw'} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>

                <Box textAlign={'center'} bgImage={'./pattern-circles.svg'} bgRepeat={'no-repeat'} bgPosition={'center'} py={12} mb={8}>
                    <Text fontSize={'2xl'} fontWeight={'800'} color={'var(--custom-dark-desaturated-blue)'}>Simple, traffic-based pricing</Text>
                    {
                        !isMobile ? (
                            <Text fontSize={'xs'} color={'var(--custom-grayish-blue)'}>Sign-up for our 30-day trial. No credit card required.</Text>
                        ) : (
                            <Text fontSize={'xs'} color={'var(--custom-grayish-blue)'}>Sign-up for our 30-day trial. <br></br>No credit card required.</Text>
                        )
                    }
                </Box>           

                <Box w={'100%'} boxShadow={'0 0 10px 0px var(--custom-light-grayish-blue-1)'}>
                    <PriceComponent/>
                    <DetailsComponent/>
                </Box>

            </SimpleGrid>
        </Flex>
    );
}
