import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'



const MahasiswaTable = () => {
    
    
    return (
        <TableContainer maxWidth="800px" m="30px auto">
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Data </TableCaption>
                <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Avatar</Th>
                    <Th> action</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>Name</Td>
                    <Td>Avatar</Td>
                    <Td> action </Td>
                </Tr>
                </Tbody>
                <Tfoot>
                <Tr>
                    <Th>Name</Th>
                    <Th>Avatar</Th>
                    <Th>action</Th>
                </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default MahasiswaTable