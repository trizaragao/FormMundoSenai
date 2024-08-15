import * as C from "@chakra-ui/react"
import { useState } from "react"
import Step from "./Components/step"
import FormPessoal from "./Pages/FormPessoal"
import FormEndereco from "./Pages/FormEndereco"
import FormProjeto from "./Pages/FormProjeto"





function App() {
  const [step, setStep] = useState(1)
  const Steps = [1,2,3]
  const GetStep= () => {
    switch (step) {
      case 1:
        return <FormPessoal/>
      case 2:
        return <FormEndereco/>
      case 3:
        return <FormProjeto/>  
    
      default:
        return <FormPessoal/>
    }
  }


  return (
    < C.Flex h="100vh" align="center" justify="center">
      <C.Center maxW={700} w="100%" py={9} flexDirection="column" border="1px" borderColor="black" borderRadius="20px">
     
        
       <C.HStack spacing={4} >
        {Steps.map((item) =>(
          <Step key = {item} index={item} active={step===item} />
        
        ))}
       </C.HStack>

       <C.Divider my={4} borderColor="black.400" ></C.Divider>
        <C.Box w="80%">{GetStep()}</C.Box>

       <C.HStack mt={4} spacing={10}>
        



        <C.Button bg="gray.200" onClick={() =>step !==1 && setStep(step-1) } >
          voltar
        </C.Button>
    
       
        <C.Button bg="green" onClick={() =>step !==3 && setStep(step+1)}  
        > {step ===3 ? "enviar": "próximo"}
        </C.Button>

        </C.HStack>
      </C.Center>
    </C.Flex>
  )
  
}
export default App
