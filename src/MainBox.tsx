import { BarChart, Bell, Bubbles, Calendar, ChevronDown,  ChevronRight, Key,  LeafIcon, Menu, Send, Shield, Wallet, X } from "lucide-react";
import { Button } from "./Button";
import { useState, type ComponentProps } from "react";



type MainBoxProps=ComponentProps<"div">
export default function MainBox({className}:MainBoxProps){
     const [isMenuVisible,setIsMenuVisible]=useState(false)

    return(
        <div className=" relative">
        <div className={`grid grid-cols-[auto,1fr] justify-self-center mt-0 mb-2 rounded-3xl w-[70%] overflow-hidden border border-black ${className}`}>
            <div className={` ${isMenuVisible?"absolute ":"hidden "}md:static md:flex h-full flex-col items-center`} style={{backgroundColor:"rgb(30,50,60)"}}>
                <X className="md:hidden pt-2 text-white flex justify-self-end" onClick={()=>setIsMenuVisible(false)}/>
                <p className="text-white font-semibold p-4 justify-self-center">Termii</p>
                <Button types="circle" className="bg-white flex justify-self-center"><LeafIcon className="text-green-400"/></Button>
                <p className="m-2 text-white justify-self-center">Nydii <ChevronDown className="inline-block"/></p>
                <div className="flex flex-col h-full  w-40"> 
                    <p className="bg-blue-500 flex text-white items-center py-2">
                        <span className="">.nnnnnnn</span>
                        <ChevronRight className="inline-block ml-auto  text-white"/>
                    </p>
                    <p className=" flex text-white py-2">
                        <span className="">.nnnnnnn</span>
                        <ChevronRight className="inline-block ml-auto  text-white"/>
                    </p>
                    <p className=" flex text-white py-2 ">
                        <span className="">.nnnnnnn</span>
                        <ChevronRight className="inline-block ml-auto  text-white"/>
                    </p>
                    <p className=" flex text-white py-2">
                        <span className="">.nnnnnnn</span>
                        <ChevronRight className="inline-block ml-auto text-white"/>
                    </p>
                    
                </div>
            </div>
            <div className="text-xs md:text-lg">
                <div className="flex bg-white p-3 justify-between items-center shadow-sm">
                    <Menu className="md:hidden flex w-4" onClick={()=>setIsMenuVisible(!isMenuVisible)}/>
                    <p>Select Language<ChevronDown className="inline-block pl-3"/></p>
                    <div className="flex items-center ">
                        <Button types="rectangle" className="text-white bg-gradient-to-r mr-2 from-blue-950 to-green-300 rounded-md"><Send className="inline-block px-2 md:w-9"/>Send Message</Button>
                        <LeafIcon className=" mr-2 text-green-400"/>
                        <p>Quick Menu<ChevronDown className="mr-2 inline-block"/></p>
                        <Bell/>
                    </div>
                </div> 
                {/* Header ends */}
                <div className="flex justify-between gap-6">
                    <div className="flex flex-col">
                        {/* left */}
                        <div className="flex flex-col p-6 pl-5 md:pl-10 shadow-sm">
                            <p><Wallet className="inline-block mb-2"/>Hi, Nydii Welcome to Your Dashboard</p>
                            <div className="flex mb-2">
                                <p className="mr-10">N<span className="text-blue-950 font-bold text-4xl md:text-6xl">10</span></p>
                                <Button className="text-white bg-gradient-to-r mr-2 rounded-md from-blue-950 to-green-300"><Wallet className="inline-block w-4 md:w-6"/> Fund Wallet <ChevronRight className="inline-block w-4 md:w-6"/></Button>
                            </div>
                            <p><BarChart className="inline-block mr-2"/>All Channels Performance in August </p>
                        </div>
                        <div className="ml-[10rem] md:ml-auto ">
                            <p className="font-bold text-4xl text-black">0</p>
                            <p>Messages in</p>
                            <p>August</p>
                        </div>
                    </div>
                    <div>
                        {/* right */}
                            <p className="mt-6"><Calendar className="inline-block"/> Transaction History</p>
                            <p className=" ml-10 mt-10">No Recent Transaction Recorded</p>
                            <p className="mt-10"><Key className="inline-block "/>API Key</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="justify-self-center flex gap-2 text-xs md:text-lg">
                <div className="md:absolute top-[39%] left-[3%] bg-green-300 rounded-xl w-[16rem] md:w-[20rem]  text-wrap p-2 pb-5 shadow-white shadow-inner">        
                    <Shield className="text-white rounded-full bg-gray-700 p-1 text-md w-10 h-10 "/>
                    <p className="font-semibold text-lg md:text-3xl mb-2 mr-5">Secure Verifications</p>
                    <p>Power OTPs and authentication <br/> with 99% delivery rate</p>
                </div>
                <div className="md:absolute top-[30%] right-[3%] bg-blue-700 rounded-xl p-2 text-white shadow-white shadow-inner w-[16rem] md:w-[20rem] text-wrap">        
                    <Bubbles className="text-white rounded-full bg-blue-500 p-1 mt-2 text-md w-10 h-10 "/>
                    <p className="font-semibold text-lg md:text-3xl mb-2 mr-5">Multi-Channel Messaging</p>
                    <p>Reach Customers via SMS,voice email and whatsapp</p>
                </div>
            </div>
        </div>
    )
}