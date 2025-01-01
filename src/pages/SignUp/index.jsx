import { useNavigate, useSearchParams } from "react-router"
import Base from "../../modules/Signup/Base"
import Main from "../../modules/Signup/Main"

function SignUp(){
    let navigate = useNavigate()
    let [ searchParams ] = useSearchParams()

    let role = searchParams.get("role")

    function navigateToRole(rle){
        navigate(`/register?role=${rle}`)
    }

    return(
        <div>
            {
                role === "Agent" || role === "Buyer"
                ?
                <Main role={role} />
                :
                <Base setRole={navigateToRole} />
            }
        </div>
    )
}

export default SignUp