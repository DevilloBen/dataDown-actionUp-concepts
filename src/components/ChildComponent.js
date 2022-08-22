const ChildComponent = ({ number, onHandleClick }) => (
    <div>
        <h2>{number}</h2>
        <button onClick={onHandleClick}>ChildAction +</button>
    </div>
)

export default ChildComponent