export function Options({option, click}){
    return(
        <div>
            <button onClick={click}><img src={option} alt="" className={`img h-28 hover:translate-y-4 duration-500 shadow-lg mb-6`}/></button>
        </div>
    )
}