import React from 'react'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Card} from 'bootstrap-4-react'
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import {db} from '../../services/firebaseConnection'

const EditUser = () => {


    const[nome,setNome] = useState('')
    const[vencimento,setVencimento] = useState('')
    const location = useLocation()

    const id = location?.state?.id


async function findOneUser() {

if(id!=='') {

    const userRef = doc(db, 'To-doList', id)
    await getDoc(userRef)
    .then((user)=>{
setNome(user.data().nome),
setVencimento(user.data().vencimento)

    })
.catch((erro)=> {

    alert('Erro ao buscar ${erro}')
})


}

}

useEffect(()=> {
findOneUser()

}, [])


async function handleEditSave(e){
    e.preventDefault()
    try {

const docRef = doc(db, "To-doList", id)
await updateDoc(docRef, {
nome: nome,
vencimento: vencimento

})

.then(()=> {
alert('Dados Atualizados')
})

    } catch(error) {

        alert('Erro ao Editar Dados!')
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