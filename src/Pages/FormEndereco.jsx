import * as C from "@chakra-ui/react"
import { Select } from "@chakra-ui/react"
const FormEndereco = () => {
   
    return(
        
       <C.VStack>
         <h1>Endereço</h1>
        <C.Input type="text" placeholder="CEP"/>         
        <C.Input type="text" placeholder="Bairro" />
        <C.Input type="texto" placeholder="Cidade" />
        <C.Select placeholder="UF">
        <option value='AC'>Acre</option>
        <option value='AL'>Alagoas</option>
        <option value='AP'>Amapá</option>
        <option value='AM'>Amazonas</option>
        <option value='BA'>Bahia</option>
        <option value='CE'>Ceará</option>
        <option value='DF'>Distrito Federal</option>
        <option value='ES'>Espírito Santo</option>
        <option value='GO'>Goiás</option>
        <option value='MA'>Maranhão</option>
        <option value='MT'>Mato Grosso</option>
        <option value='MS'>Mato Grosso do Sul</option>
        <option value='MG'>Minas Gerais</option>
        <option value='PA'>Pará</option>
        <option value='PB'>Paraíba</option>
        <option value='PR'>Paraná</option>
        <option value='PE'>Pernambuco</option>
        <option value='PI'>Piauí</option>
        <option value='RJ'>Rio de Janeiro</option>
        <option value='RN'>Rio Grande do Norte</option>
        <option value='RS'>Rio Grande do Sul</option>
        <option value='RO'>Rondônia</option>
        <option value='RR'>Roraima</option>
        <option value='SC'>Santa Catarina</option>
        <option value='SP'>São Paulo</option>
        <option value='SE'>Sergipe</option>
        <option value='TO'>Tocantins</option>

      
       </C.Select> 
       
       </C.VStack>
      
    )

}





export default FormEndereco