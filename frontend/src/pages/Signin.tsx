import AuthSignin from "../components/AuthSignin";
import Quotes2 from "../components/Quotes2";

export default function Signin(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block">
                <Quotes2/>
            </div>
            <div>
                <AuthSignin />
            </div>
        </div>
    );
}