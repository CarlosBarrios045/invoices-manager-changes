import { useSelector, useDispatch } from "react-redux";

import {
  openFormAction,
  filterInvoicesbyStatusAction,
} from "src/store/actions/InvoicesActions";

const InvoicesBar = () => {
  const dispatch = useDispatch();

  const { invoices, filter } = useSelector((state) => state.invoices);

  const openForm = () => {
    dispatch(openFormAction());
  };

  const readFilter = (e) => {
    dispatch(
      filterInvoicesbyStatusAction(
        e.target.value === filter ? "" : e.target.value
      )
    );
  };

  const openFilter = () => {
    const hiddenfilter = document.querySelector(".hiddenmenu");
    const arrow = document.querySelector(".arrow");
    if (hiddenfilter.style.opacity === "1") {
      hiddenfilter.style.opacity = "0";
      hiddenfilter.style.pointerEvents = "none";
      arrow.style.transform = "rotate(0)";
    } else {
      hiddenfilter.style.opacity = "1";
      hiddenfilter.style.pointerEvents = "all";
      arrow.style.transform = "rotate(-180deg)";
    }
  };

  return (
    <div className="invoices-bar">
      <div className="tittle-box">
        <h2>Invoices</h2>
        {invoices.length > 0 ? (
          <p>
            {window.innerWidth > 768 && "There are "}
            {invoices.length} {window.innerWidth > 768 && "total "} invoices
          </p>
        ) : (
          <p>No invoices</p>
        )}
      </div>
      <ul className="filter-box">
        <li>
          <button onClick={openFilter}>
            Filter {window.innerWidth > 768 && "by status"}
            <span className="arrow"></span>
          </button>

          <ul className="hiddenmenu">
            <li>
              <span></span>
              <input
                type="radio"
                value="draft"
                onChange={readFilter}
                name="filter"
              />
              <label htmlFor="draft">Draft</label>
            </li>
            <li>
              <span></span>
              <input
                type="radio"
                value="pending"
                onChange={readFilter}
                name="filter"
              />
              <label htmlFor="pending">Pending</label>
            </li>
            <li>
              <span></span>
              <input
                type="radio"
                value="paid"
                onChange={readFilter}
                name="filter"
              />
              <label htmlFor="paid">Paid</label>
            </li>
          </ul>
        </li>
      </ul>
      <div className="button-box">
        <button type="button" onClick={openForm}>
          New {window.innerWidth > 768 && "Invoice"}
        </button>
      </div>
    </div>
  );
};

export default InvoicesBar;
