import { Box } from "@chakra-ui/react";
import React from "react";
import MahasiswaForm from "../components/MahasiswaForm";
import MahasiswaTable from "../components/MahasiswaTable";

const Mahasiswa = () =>{
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    return (
        <Box textAlign="center" margin="20px auto">
            {isLoading ? <div className="loading-lazy"></div> : ""}
            <MahasiswaForm setIsLoading={setIsLoading}/>
            <MahasiswaTable />
        </Box>
    )
}

export default Mahasiswa