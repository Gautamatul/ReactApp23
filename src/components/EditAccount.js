
import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import {  updateAccount } from "../Actions/AccountActions";
import {Form,Label,Input, Button} from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
export function EditAccount(props) {
    const location = useLocation()
    const [account, setAccount] = useState({})
    const dispatch = useDispatch()

    const addNewAccount = (event) => {
        // take action to make http request or something 
        
        dispatch(updateAccount(account))
        event.preventDefault()
        //   setAccount({accId: account.accId, accHolder: ev.target.value.name})
    }


    const handleOnAccountChange = (key, value) => {
        // using ternary operator in state 
        let acc = { ...account }
        acc[key] = value
        setAccount(acc)
    }


    useEffect(()=>{
        setAccount(location.state.account)
    }, {})
    return (
        <div>
            {location.state.account.accountHolder}

            <Form onSubmit={e => addNewAccount(e)}>
                <Label>
                    Account Holder : <Input type="text" name="accHolder" value={account.accountHolder} onChange={e => handleOnAccountChange('accountHolder', e.target.value)}/>
                </Label> 
                <Label>
                    Account Id: <Input type="number" name="accId" value={account.accountId} onChange={e => handleOnAccountChange('accountId', e.target.value)}/>
                </Label>
                <Label>
                    Salary: <Input type="number" name="salary" value={account.salary} onChange={e => handleOnAccountChange('salary', e.target.value)}/>
                </Label>
                <Label>
                   Experience: <Input type="number" name="experience" value={account.experience} onChange={e => handleOnAccountChange('experience', e.target.value)}/>
                </Label>
                <Button className="primary"> Submit</Button>

            </Form >
        </div>
    )
}