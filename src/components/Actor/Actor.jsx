const Actor = ({name, score, hobbies, description}) => {

    return (
        <div className="App">
            <ul style={{textAlign: "left"}}>
                <li>Name: {name}</li>
                <li>Score: {score}</li>
                <li>Hobbies: {hobbies}</li>
                <li>Description: {description}</li>
            </ul>
        </div>
    );
}

export { Actor };