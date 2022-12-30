import { Content } from "./Content"
import { Pepsi } from "./Pepsi"
import tradicional from "../assets/tradicional.png"

export function Main({lata}){
    return(
        <div className="w-10/12 m-auto flex justify-between max-md:flex-col  max-sm:flex-col max-sm:justify-around h-screen items-center">
            <Content />
            <Pepsi lata={tradicional}/>
        </div>
    )
}