import React from 'react'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Card} from 'bootstrap-4-react'
import {db} from '../../services/firebaseConnection'
import axios from 'axios'

const EditUser = () => {


    const[nome,setNome] = useState('')
    const[vencimento,setVencimento] = useState('')
    const location = useLocation()
    const [idEdit, setIdEdit] = useState()


    let id = location?.state?.id
    const api = location?.state?.api


async function findOneUser() {

if(id!=='') {
    try {
        console.log(api + '/' + id);
        await axios.get(api + '/' + id)
.then(response => {
    setNome(response.data.nome)
    setVencimento(response.data.vencimento)
})
id = ''
    } catch (error) {
        alert(error)
    }

}

}

useEffect(()=> {
findOneUser()
setIdEdit(id)

}, [])


async function handleEditSave(e){
    e.preventDefault()
    

try {
    
axios.put(api + '/' + idEdit, {
    id: idEdit,
    nome: nome, 
    vencimento: vencimento
}) .then((response)=> {

alert('Dados Atualizados')
setNome(response.data.nome)
setVencimento(response.data.vencimento)

})


} catch (error) {
    alert(error)
}



}



return(

<>

<div className="container" w="90">
<form> 
                <Form.Group>

                    <Row>
                        <Col col="sm-6">
                            <label>Nome</label>
                            <Form.Input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                        </Col>

                    </Row>

                </Form.Group>

                <Form.Group>

                    <Row>
                        <Col col="sm-6">
                            <label>Vencimento</label>
                            <Form.Input type="text" value={vencimento} onChange={(e)=>setVencimento(e.target.value)}/>
                        </Col>

                    </Row>

                </Form.Group>

                <Button onClick={(e)=> handleEditSave(e)} primary type="submit">Atualizar</Button>
            </form>

</div>


</>

)

}

export default EditUser