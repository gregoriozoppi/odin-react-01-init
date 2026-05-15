function ListItem({ item }) {
    return <li>{item}</li>;
}

function List({ items }) {
    return (
        <ul>
            {items.map((animal) => {
                return animal.startsWith("L") ? <ListItem key={animal} item={animal} /> : null;
            })}
        </ul>
    );
}

function AnimalComponent() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    console.log(animals);

    return (
        <div>
            <h1>Animals:</h1>
            <List items={animals} />
        </div>
    );
}

export default function Animal() {
    return (
        <AnimalComponent />
    );
}