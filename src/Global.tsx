import { ChevronRight, Circle, Globe, Laugh, LaughIcon, LucideLaugh, Play, PlayIcon, SmileIcon, SmilePlusIcon } from "lucide-react";
import { Button } from "./Button";

export default function Global(){
    return(
        <div className="flex flex-col items-center mb-14 ">
             <Button types="rectangle" className="text-gray-400 font-semibold m-2 p-3 bg-white shadow-sm "><Laugh className="inline-block mx-2"/> Introducing SOTEL<Button types="rectangle" className="text-green-600 p-1 rounded-xl mx-2 bg-green-50 roun">NEW</Button></Button>
            <div ><span className="text-5xl md:text-7xl font-semibold bg-clip-text w-20 text-transparent bg-gradient-to-r from-blue-950 to-green-300">Gl
                    <Globe className="text-white rounded-full bg-gradient-to-bl from-blue-950 to-green-300 md:w-10 md:h-10 text-xl inline-block  p-1"/>bal Communication</span>
            </div>
            <p className=" text-5xl md:text-7xl font-semibold">built for growing</p>
            <p className="text-5xl md:text-7xl font-semibold"> businesses</p>
            <p className=" w-25 text-wrap m-4">From secure authentication to customer engagement, Termii makes it easy for <br /> businesses to communicate across channels and scale globally with confidence</p>
            <div>
                <Button types="rectangle" className=" bg-gradient-to-b text-white from-blue-950 to-green-300 shadow">Get Started Free<ChevronRight className="inline-block"/></Button>
                <Button types="rectangle" className="bg-white shadow"><Play className="inline-block"/>Request a Demo</Button>
            </div>
        </div>
    )
} 