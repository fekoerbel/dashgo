import { Header } from "@/components/Header";
import { Input } from "@/components/Form/input";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUserFormData = {
    name: string
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo caracteres'),
    password_confirmation: yup.string().oneOf([
        undefined, yup.ref('password')
    ], "As senhas precisam ser iguais")
})

export default function CreateUser() {
    const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
        resolver: yupResolver(createUserFormSchema)
    })
    const { errors } = formState

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(values)
    }
    return (
        <Box>
            <Header />
            <Flex w={"100%"} my={"6"} maxWidth={1480} mx={"auto"} px={"6"}>
                <Sidebar />

                <Box as="form" flex="1" borderRadius={"8"} bg={"gray.800"} p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size={"lg"} fontWeight={"normal"}>Criar Usuário</Heading>
                    <Divider my={"6"} borderColor={"gray.700"} />
                    <VStack spacing={"8"}>
                        <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w={"100%"}>
                            <Input type="text" label="nome completo" {...register('name')} error={errors.name} />
                            <Input type="email" label="E-mail" {...register('email')} error={errors.email} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w={"100%"}>
                            <Input type="password" label="Senha" {...register('password')} error={errors.password} />
                            <Input type="password" label="Confirmação da senha" {...register('password_confirmation')} error={errors.password_confirmation} />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt={"8"} justify={"flex-end"}>
                        <HStack spacing={"4"}>
                            <Link href={"/users"} passHref>
                                <Button colorScheme="whiteAlpha">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}