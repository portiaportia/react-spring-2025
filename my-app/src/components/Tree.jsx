import "./css/Tree.css";

function Tree(props) {
    return (
        <section className="tree">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img src={"./react-spring-2025/" +props.image} />
        </section>
    );
}

export default Tree;