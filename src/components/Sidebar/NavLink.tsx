import { Icon, Link as ChackraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiContactsLine } from "react-icons/ri";
import Link from 'next/link'
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType; //quando passa o nome do componente e não um node element
    children: string;
    href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChackraLink display={"flex"} alignItems={"center"} color={"pink.400"} {...rest}>
                <Icon as={RiContactsLine} fontSize={"20"} />
                <Text ml={"4"} fontWeight={"medium"}>{children}</Text>
            </ChackraLink>
        </ActiveLink>
    )
}