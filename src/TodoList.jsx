function ListItem(props){
    return <li>{props.animal}</li>
}
function List(props){
    return (
        <ul>
            {props.animals.map((animal)=>{
                return animal.startsWith("L") && <ListItem key={animal} animal={animal}/>;
            })}
        </ul>
    )
}
function TodoList(){
    const animals = ["Lion","Cow","Snake","Lizard"];
    return (
        <>
            <h1>Animals: </h1>
            <ul>
                <List animals={animals}/>
            </ul>
        </>
    );
}

export default TodoList;