function AnimalComponent() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
    console.log(animalsList);

    return (
        <div>
            <h1>Animal Component</h1>
            <ul>
                {animalsList}
            </ul>
        </div>
    );
}

export default function Animal() {
    return (
        <AnimalComponent />
    );
}