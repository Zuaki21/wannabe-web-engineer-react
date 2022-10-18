const Item = (props) => {
  return (
    <div>
      {props.name}
      <input type="checkbox" id="taskState" defaultChecked={props.state} />
    </div>
  );
};
export default Item;
