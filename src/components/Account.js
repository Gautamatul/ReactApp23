import { useState } from "react"
import {useDispatch} from 'react-redux'
import { createAccount, recentlyAdded } from "../Actions/AccountActions";
import {Form,Label,Input, Button} from 'semantic-ui-react'
import { RecentlyAdded } from "./RecentlyAdded";

export function Account(props) {

    const dispatch = useDispatch();
    const [account, setAccount] = useState({
        accountHolder: "",
        accountId: undefined,
        experience: undefined,
        salary: undefined
    })


    const addNewAccount = (event) => {
        // take action to make http request or something 
        
        dispatch(createAccount(account))
        dispatch(recentlyAdded(account))
        event.preventDefault()
        //   setAccount({accId: account.accId, accHolder: ev.target.value.name})
    }


    const updateAccount = (key, value) => {
        // using ternary operator in state 
        let acc = { ...account }
        acc[key] = value
        setAccount(acc)
    }

    return (
        <div>
            <Form onSubmit={e => addNewAccount(e)}>
                <Label>
                    Account Holder : <Input type="text" name="accHolder" value={account.accountHolder} onChange={e => updateAccount('accountHolder', e.target.value)}/>
                </Label> 
                <Label>
                    Account Id: <Input type="number" name="accId" value={account.accountId} onChange={e => updateAccount('accountId', e.target.value)}/>
                </Label>
                <Label>
                    Salary: <Input type="number" name="salary" value={account.salary} onChange={e => updateAccount('salary', e.target.value)}/>
                </Label>
                <Label>
                   Experience: <Input type="number" name="experience" account={account.experience} onChange={e => updateAccount('experience', e.target.value)}/>
                </Label>
                <Button className="primary"> Submit</Button>

            </Form >
            <RecentlyAdded/>
        </div>
    )
}