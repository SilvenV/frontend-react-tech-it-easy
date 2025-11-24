// opdracht 2.2a

function brandLister(array) {
    return (
        <ul>
            {array.map(tv => (
                <li key={tv.type}>
                    {tv.brand}
                </li>
            ))}
        </ul>
    )
}

export default brandLister;