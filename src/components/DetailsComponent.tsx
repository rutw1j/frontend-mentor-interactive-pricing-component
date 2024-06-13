import checkIcon from "@/icons/checkIcon";
import { Box, Flex, Tag, TagLeftIcon, TagLabel, Button, useBreakpointValue } from "@chakra-ui/react";

export default function DetailsComponent() {
    const isMobile = useBreakpointValue({base: true, sm: false});
    return(
        <Box as={Flex} w={'100%'} flexDir={!isMobile?'row':'column'} alignItems={'center'} justifyContent={'space-between'} bgColor={'var(--custom-white)'} borderTopWidth={1} borderTopColor={'lightgrey'} borderBottomRadius={10} p={6} rowGap={6}>
            <Box as={Flex} flexDir={'column'}>
                <Tag bgColor={'inherit'}>
                    <TagLeftIcon as={checkIcon}></TagLeftIcon>
                    <TagLabel fontSize={'2xs'} color={'var(--custom-grayish-blue)'} ml={3}>Unlimited Websites</TagLabel>
                </Tag>
                <Tag bgColor={'inherit'}>
                    <TagLeftIcon as={checkIcon}></TagLeftIcon>
                    <TagLabel fontSize={'2xs'} color={'var(--custom-grayish-blue)'} ml={3}>100% data ownership</TagLabel>
                </Tag>
                <Tag bgColor={'inherit'}>
                    <TagLeftIcon as={checkIcon}></TagLeftIcon>
                    <TagLabel fontSize={'2xs'} color={'var(--custom-grayish-blue)'} ml={3}>Email Reports</TagLabel>
                </Tag>
            </Box>
            <Box>
                <Button borderRadius={20} fontSize={'xs'} px={10} bgColor={'var(--custom-dark-desaturated-blue)'} color={'var(--custom-pale-blue)'} _hover={{bgColor: 'var(--custom-dark-desaturated-blue)', color: 'var(--custom-white)'}}>Start my trial</Button>
            </Box>
        </Box>
    )
}