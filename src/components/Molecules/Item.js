import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItemAction } from "src/store/actions/InvoicesActions";

const Item = ({ itemm, readItem }) => {
  const dispatch = useDispatch();
  const [item] = useState({
    name: itemm.name,
    quantity: itemm.quantity,
    price: itemm.price,
    total: itemm.total,
    id: itemm.id,
  });

  const editItem = () => {
    readItem(item);
    dispatch(deleteItemAction(itemm.id));
  };

  const deleteItem = () => {
    dispatch(deleteItemAction(itemm.id));
  };
  return (
    <div className="item">
      <div onClick={editItem}>
        {window.innerWidth > 768 && <label>Item Name</label>}
        <input type="text" name="name" disabled={true} value={item.name} />
      </div>
      <div>
        <div onClick={editItem}>
          {window.innerWidth > 768 && <label>Qty</label>}
          <input
            type="number"
            name="quantity"
            disabled={true}
            value={item.quantity}
          />
        </div>
        <div onClick={editItem}>
          {window.innerWidth > 768 && <label>Price</label>}
          <input
            type="number"
            name="price"
            disabled={true}
            value={item.price}
          />
        </div>
        <div onClick={editItem}>
          {window.innerWidth > 768 && <label>Total</label>}
          <input
            type="text"
            className="total"
            name="total"
            disabled={true}
            value={itemm.total}
          />
        </div>
        <button type="button" onClick={deleteItem}></button>
      </div>
    </div>
  );
};

export default Item;
