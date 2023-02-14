import { useSelector } from "react-redux";


export function RecentlyAdded (){

    const recentlyAddedAccounts = useSelector((state) => state.accounts.recentlyAdded)

    return (
        <div>
           
        </div>
    )

}