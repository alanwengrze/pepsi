import { Header } from "./Header"
import { Main } from "./Main"
import { Options } from "./Options"


import tradicional from '../assets/tradicional.png'
import diet from '../assets/diet.png'
import zero from '../assets/zero.png'

const clickDiet = ()=>{   
    let bg = document.querySelector('.body')
    bg.style.backgroundColor = 'rgb(220 38 38 / var(--tw-bg-opacity))'
    let lata = document.querySelector('.pepsi')
    lata.setAttribute('src', diet)
}
const clickTrad = ()=>{   
    let bg = document.querySelector('.body')
    bg.style.backgroundColor = 'rgb(29 78 216 / var(--tw-bg-opacity))'
    let lata = document.querySelector('.pepsi')
    lata.setAttribute('src', tradicional)
}

const clickZero = (e)=>{   
    let bg = document.querySelector('.body')
    bg.style.backgroundColor = 'rgb(0 0 0 / var(--tw-bg-opacity))'
    let lata = document.querySelector('.pepsi')
    lata.setAttribute('src', zero)
}


export function Body(){
    return(
        <div className="w-screen h-screen m-auto flex flex-col gap-10 justify-between max-md:h-full ">
            <Header />
            <Main />
            <div className="flex gap-6 justify-center">
                <Options option={tradicional} click={clickTrad}/>
                <Options option={diet} click={clickDiet}/>
                <Options option={zero} click={clickZero}/>
            </div>
        </div>
    )
}