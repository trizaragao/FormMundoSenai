import * as C from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"
const FormProjeto = () => {
    
    return(
       <C.VStack>
        <h6>Projeto</h6>
        <C.Input type="text" placeholder="Projeto"/>         
        <C.Input type="text" placeholder="Área"/>
        <C.Input type="text" placeholder="Coordenador"/>
        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <C.Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox value='CETCC'>CETCC</Checkbox>
            <Checkbox value='CETICC'>CETICC</Checkbox>
            <Checkbox value='CETAF'>CETAF</Checkbox>
            <Checkbox value='CETAFEST'>CETAFEST</Checkbox>
        
            </C.Stack>
            </CheckboxGroup> 
        
      </C.VStack>
      
    )

}






export default FormProjeto