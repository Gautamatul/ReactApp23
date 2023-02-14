import DataTable from 'react-data-table-component';
import { React, useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { deleteAccount, getAccounts } from '../Actions/AccountActions';
import {useSelector} from 'react-redux'
import {Form,Label,Input, Button} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
export function Accounts(props) {

    const accounts = useSelector((state) => state.accounts.accounts)
    const loading = useSelector((state) => state.accounts.loading)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // single click event use later for overlay. 
    const handleRowClicked = (row) => {
        console.log("ROW CLICKED")
    }

    // double click user later for edit 
    const handleRowDoubleClicked = (row) => console.log("ROW Double CLICKED" + row)


   const handleEditClick = (e) => {
    console.log("BUTTON " + JSON.stringify(e))
    navigate("/editAccount", {state: {account: e}})
   }

   const handleDeleteClick = (row) => {
    dispatch(deleteAccount(row.id))

   }

    const [columns, setColumns] = useState([]);

    useEffect(() => {
        dispatch(getAccounts())
            setColumns([
                {
                    name: 'ACCOUNT ID',
                    selector: row => row.accountId,
                    sortable: true,
                    // sortFunction: caseInsensitiveSort
                },
                {
                    name: 'ACCOUNT HOLDER',
                    selector: row => row.accountHolder,
                },
                {
                    name: 'SALARY',
                    selector: row => row.salary,
                    sortable: true,
                    // sortFunction: caseInsensitiveSort
                },
                {
                    name: 'EXPERIENCE',
                    selector: row => row.experience,
                    sortable: true,
                    // sortFunction: caseInsensitiveSort
                },
                {
                    name: 'EDIT',
                    cell: (row) => <i onClick={() => handleEditClick (row)} class="edit icon"></i>,
                    ignoreRowClick: true,
                    allowOverflow: true,
                    button: true,
                },
                {
                    name: 'DELETE',
                    cell: (row) =>  <i onClick={() => handleDeleteClick (row)} class="trash icon"></i>,
                    ignoreRowClick: true,
                    allowOverflow: true,
                    button: true,
                }
            ])
        }, []);

    return <DataTable columns={columns}
        data={accounts}
        progressPending={loading}
        pagination
        onRowClicked={(e) => handleRowClicked(e)}
        onRowDoubleClicked={(e) => handleRowDoubleClicked(e)}
    />;
};