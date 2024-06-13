'use client'

import sliderIcon from "@/icons/sliderIcon";
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

export default function PriceComponent() {
    const isMobile = useBreakpointValue({base: true, sm: false});
    const [sliderValue, setSliderValue] = useState<number>(16);
    const [pageViewValue, setPageViewValue] = useState<number>(1);
    return (
        <Box w={'100%'} as={Flex} flexDir={'column'} alignItems={'center'} bgColor={'var(--custom-white)'} borderTopRadius={10} p={6} rowGap={6}>
            {
                !isMobile ? (
                    <Box w={'inherit'}>
                        <Box as={Flex} w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                            <Box>
                                <Text fontSize={'xs'} color={'var(--custom-grayish-blue)'} letterSpacing={1.5}>{(pageViewValue*10)+100}K PAGEVIEWS</Text>
                            </Box>
                            <Box as={Flex} flexDir={'row'} alignItems={'center'}>
                                <Text fontSize={'3xl'} fontWeight={'800'} color={'var(--custom-dark-desaturated-blue)'}>${sliderValue}.00</Text>
                                <Text fontSize={'xs'} color={'var(--custom-grayish-blue)'}>&nbsp;/&nbsp;month</Text>
                            </Box>
                        </Box>
                        <Slider aria-label={'slider-1'} defaultValue={16.00} min={10.00} max={22.00} onChange={(val) => {setSliderValue(val); setPageViewValue(-16+val)}}>
                            <SliderTrack bg={'var(--custom-light-grayish-blue-1)'}>
                                <SliderFilledTrack bg={'var(--custom-soft-cyan)'}/>
                            </SliderTrack>
                            <SliderThumb boxSize={8} bgColor={'var(--custom-strong-cyan)'} boxShadow={'0 0 10px 0px var(--custom-strong-cyan)'} _hover={{boxShadow:'0 0 30px 0px var(--custom-strong-cyan)'}}>
                                <Box as={sliderIcon}></Box>
                            </SliderThumb>
                        </Slider>
                    </Box>
                ) : (
                    <Box as={Flex} w={'100%'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} rowGap={6}>
                        <Box>
                            <Text fontSize={'xs'} color={'var(--custom-grayish-blue)'} letterSpacing={1.5}>{(pageViewValue*10)+100}K PAGEVIEWS</Text>
                        </Box>
                        <Slider aria-label={'slider-1'} defaultValue={16.00} min={10.00} max={22.00} onChange={(val) => {setSliderValue(val); setPageViewValue(-16+val)}}>
                            <SliderTrack bg={'var(--custom-light-grayish-blue-1)'}>
                                <SliderFilledTrack bg={'var(--custom-soft-cyan)'}/>
                            </SliderTrack>
                            <SliderThumb boxSize={8} bgColor={'var(--custom-strong-cyan)'} boxShadow={'0 0 10px 0px var(--custom-strong-cyan)'} _hover={{boxShadow:'0 0 30px 0px var(--custom-strong-cyan)'}}>
                                <Box as={sliderIcon}></Box>
                            </SliderThumb>
                        </Slider>
                        <Box as={Flex} flexDir={'row'} alignItems={'center'}>
                            <Text fontSize={'3xl'} fontWeight={'800'} color={'var(--custom-dark-desaturated-blue)'}>${sliderValue}.00</Text>
                            <Text fontSize={'xs'} color={'var(--custom-grayish-blue)'}>&nbsp;/&nbsp;month</Text>
                        </Box>
                    </Box>
                )
            }
            <Box as={Flex} w={'100%'} flexDir={'row'} alignItems={'center'} justifyContent={'center'}>
                <Box flex={'45%'} textAlign={'right'}>
                    <Text fontSize={'2xs'} color={'var(--custom-grayish-blue)'} textAlign={'right'}>Monthly Billing</Text>
                </Box>
                <Box flex={'10%'}>
                    <Switch colorScheme={'teal'} size={'sm'} mx={2}></Switch>
                </Box>
                <Box flex={'45%'} display={'inline-flex'}>
                    <Text fontSize={'2xs'} color={'var(--custom-grayish-blue)'}>Yearly Billing</Text>
                    <Text fontSize={'2xs'} bgColor={'var(--custom-light-grayish-red)'} color={'var(--custom-light-red)'} borderRadius={14} px={1} mx={2}>{isMobile ? '-25%' : '25% discount'}</Text>
                </Box>
            </Box>
        </Box>
    )
}