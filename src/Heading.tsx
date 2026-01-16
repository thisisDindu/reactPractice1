import {  ChevronDown, Languages } from "lucide-react";
import { Button } from "./Button";
import { ourButton } from "./Button";

export default function Heading(){
    return(
        <div className="pt-8 px-8 flex flex-col items-center md:items-start  md:flex-row justify-between">

            <h1 className="text-2xl font-bold bg-clip-text w-20 text-transparent bg-gradient-to-r from-blue-950 to-green-300">Termii</h1>
            <div className="flex ">
                <p className="p-2">Why Termii <ChevronDown className="text-black inline-block"/> </p>
                <p  className="p-2">Products<ChevronDown className="text-black inline-block"/> </p>
                <p  className="p-2">Solutions <ChevronDown className="text-black inline-block"/> </p>
                <p className="p-2">Resources <ChevronDown className="text-black inline-block"/> </p>
                <p  className="p-2">Pricing</p>
            </div>
            <div className="flex mb-3" >
                <p className={ourButton({types:"rectangle"})+ "bg-gray-300 m-2 rounded-full p-1 md:p-3" }><Languages className="inline-block"/> English<ChevronDown className="text-black inline-block"/></p>
                {/* <p className="text-white m-2 rounded-full p-3 bg-blue-900">Get started</p> */}
                <Button types="rectangle" className="text-white  text-md md:text-md m-2 rounded-full p-1 md:p-3 bg-blue-900">Get started</Button>
                {/* <Button types="circle" className="bg-red-800 text-white">1</Button> */}
            </div>
        </div>
    
    )
}