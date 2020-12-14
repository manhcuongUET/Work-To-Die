import react, {useContext} from 'react'
import authCtx from "../../context/auth"

export const Profile = () => {
    const {authUser, setAuthUser} = useContext(authCtx)
    return(

        <div>This is profile page</div>
    )
}