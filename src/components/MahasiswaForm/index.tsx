import { Box, Flex, Input, Button, FormLabel, Image, Center } from "@chakra-ui/react";
import React from "react";
// import Button from "../../Example/Button";

const MahasiswaForm = ({setIsLoading} : any) => {
    const [avatar, setAvatar] = React.useState<any>(null);
    const [imgPreview, setimgPreview] = React.useState<any>(null);
    

    //img preview

    const handleImgPreview = (event: any) => {

        const fileSelected = event.target.files[0];

        setAvatar(fileSelected);

        let reader = new FileReader();

        reader.onloadend = () => {
            setimgPreview(reader.result);
        }
        reader.readAsDataURL(fileSelected);
    }
    return (
        <Box maxWidth="800px" m="auto" borderWidth={1} p={3} boxShadow="lg">
            <form encType="multipart/data">
                <Flex alignItems="center" gap="1rem">
                    <Input type="text" placeholder="name" name="name" />
                    <FormLabel 
                        htmlFor="avatar"
                        textAlign="center"
                        width="300px"
                        
                        p={2}
                        cursor="pointer"
                        borderRadius="lg"
                        background="gray"
                    >Choose file</FormLabel>
                    <Input type="file" onChange={ handleImgPreview } name="avatar" id="avatar" hidden/>
                    <Button background="teal">Add</Button>
                </Flex>
            </form>
            <Center>
                <Image src={ imgPreview } w="200px" borderRadius="50px"/>
            </Center>
        </Box>
    )

}

export default MahasiswaForm