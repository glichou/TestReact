import { FC } from 'react'

const List: FC<{ data: { name: string}[] }> = ({ data }) => (
    <ul>
        {data.map(item => <li>{item.name}</li>)}
    </ul>
)

export default List