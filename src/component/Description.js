import { DESCRIPTION } from '../Config'

export default function Description() {
    return (
        <>
            <h1 className="text-2xl font-bold">{DESCRIPTION.header}</h1>
            <p>{DESCRIPTION.para}</p>
        </>
    )
}