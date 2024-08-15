import * as C from"@chakra-ui/react"
import { Radio, RadioGroup } from "@chakra-ui/react"
    const FormPessoal = () => {
        
        return(
          <RadioGroup defaultValue='2'>
           <C.VStack spacing={4}>
           <h2>Informações pessoais</h2>
            <C.Input type="text" placeholder="Nome"/>         
            <C.Input type="text" placeholder="CPF" />
            <C.Input type="email" placeholder="Email" />

            <Radio colorScheme='red' value='1'>
             F
             </Radio>
            <Radio colorScheme='blue' value='2'>
              M
             </Radio>
             </C.VStack>
            </RadioGroup>
           
        
            
          
        )

    }





export default FormPessoal