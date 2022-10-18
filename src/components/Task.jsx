const Item = (props) => {
//  let check = props.state;
  return (
    <div style={{ color: props.price >= 500 ? "red" : "black" }}>
      <div>
        {props.name}
        <input
          type="checkbox"
          id="taskState"
          checked={props.state}
          onChange={(e) => {
            props.state = e.target.checked;
          }}
        />
      </div>

      {props.price >= 10000 && <div>高額商品</div>}
    </div>
  );
};
export default Item;
