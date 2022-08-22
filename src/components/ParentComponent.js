import ChildComponent from './ChildComponent'

const ParentComponent = ({ number, onHandleClick }) => (
    <div>
        <h3>Hello App Incrementer ParentComponent</h3>
        <ChildComponent number={number} onHandleClick={onHandleClick} />
    </div>
)

export default ParentComponent