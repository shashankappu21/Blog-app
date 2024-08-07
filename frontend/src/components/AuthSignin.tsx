import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export default function AuthSignin(){
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState({
        email:"",
        password:""
    });

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInputs);
            console.log(response.data);
            const jwt = response.data;
            localStorage.setItem("token",jwt.jwt);
            navigate("/blogs");
        }
        catch(e){
            alert('Error while signin');
            console.log("Some error: ",e);
        }
    }
    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-4xl font-bold">
                            Signin to Access
                        </div>
                        <div className="text-slate-500 text-lg mt-3 text-center">
                            Don't have an account? <Link to={"/signup"} className="underline">Signup</Link>
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="pt-5">
                            <LabelInputs label="Email" placeholder="Enter your email" onChange={(e) => {
                                setpostInputs(c => ({
                                    ...c,
                                    email: e.target.value
                                }))
                            }} />
                        </div>
                        <div className="pt-5">
                            <LabelInputs label="Password" placeholder="*****" onChange={(e) => {
                                setpostInputs(c => ({
                                    ...c,
                                    password: e.target.value
                                }))
                            }} type="password" />
                        </div>
                    </div>
                    <button onClick={sendRequest} className="bg-black text-white w-full p-2 rounded-lg text-md mt-7 hover:bg-gray-900 ease-linear duration-150">Submit</button>
                </div>
            </div>
            
        </div>
    );
}

interface LabelInputsType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function LabelInputs({label, placeholder, onChange, type}: LabelInputsType){
    return (
        <div>
            <label className="block mb-2 text-md font-semibold text-black">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    );
}