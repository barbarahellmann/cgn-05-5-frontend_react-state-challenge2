export type CharacterProps = {
    id:number,
    name:string,
    status:string,
    species:string
}

export default function Character(props: Readonly<CharacterProps>){
    return(
        <>
            <h1>{props.name}</h1>
            <h2>{props.id}</h2>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
        </>
    )
}

