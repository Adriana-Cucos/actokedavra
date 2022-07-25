const Actor = () => {
    const actor = {
        name: "Leonardo Dicaprio",
        score: 10,
        hobbies: "Music and dancing naked in the rain",
        description: "He is a good guy with a thick mustache."
    }

    return (
        <div className="App">
            <ul style={{textAlign: "left"}}>
            {Object.entries(actor).map(([key,value]) => (
                <li>{key}: {value}</li>
            ))}
            </ul>
        </div>
    );
}

export { Actor };