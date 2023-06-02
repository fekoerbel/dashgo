import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
    //controlled components
    // const [search, setSearch] = useState('')


    //uncontrolled components
    const searchInputRef = useRef<HTMLInputElement>(null)

    return (
        <Flex
        as="label"
        flex={"1"}
        py={"4"}
        px={"8"}
        ml={"6"}
        maxW={400}
        position={"relative"}
        alignSelf={"center"}
        color={"gray.200"}
        bg={"gray.800"}
        borderRadius={"full"}
    >
        <Input
            color={"gray.50"}
            variant={"unstyled"}
            px={"4"}
            mr={"4"}
            placeholder="Buscar na plataforma"
            _placeholder={{ color: "gray.400" }}
            //controlled components
            // value={search}
            // onChange={event => setSearch(event.target.value)}
            //uncontrolled components
            ref={searchInputRef}

        />
        <Icon as={RiSearchLine} fontSize={"20"} />
    </Flex>
    )
}