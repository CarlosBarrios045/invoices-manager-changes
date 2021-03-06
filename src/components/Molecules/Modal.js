import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteInvoiceAction,
  getInvoiceAction,
} from "src/store/actions/InvoicesActions";

const Modal = ({ open, children, onClose, selectedinvoice }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteInvoice = (invoice) => {
    dispatch(deleteInvoiceAction(invoice));
    history.push("/");
    dispatch(getInvoiceAction());
  };

  if (!open) return null;

  return (
    <>
      <div className="transparent-background" />
      <div className="modal">
        {children}
        <div>
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={() => {
              deleteInvoice(selectedinvoice);
              onClose();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
