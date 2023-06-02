import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align={"center"}>
            {showProfileData && (
                <Box mr={"4"} textAlign={"right"}>
                    <Text>Felipe Koerbel</Text>
                    <Text color={"gray.300"} fontSize={"small"}>
                        fekoerbel@hotmail.com
                    </Text>
                </Box>
            )}
            <Avatar size={"md"} name="Felipe Koerbel" />
        </Flex>
    )
}