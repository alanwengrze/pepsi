import { Content } from "./Content"
import { Pepsi } from "./Pepsi"
import tradicional from "../assets/tradicional.png"

export function Main({lata}){
    return(
        <div className="min-w-full flex justify-between max-sm:flex-col h-screen items-center">
            <Content />
            <Pepsi lata={tradicional} />
        </div>
    )
}