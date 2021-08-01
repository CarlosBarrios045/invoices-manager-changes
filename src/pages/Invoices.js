import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import InvoicesBar from "src/components/Molecules/InvoicesBar";
import Empty from "src/components/Molecules/Empy";
import InvoicesList from "src/components/Molecules/InvoicesList";

// Actions
import { getInvoiceAction } from "src/store/actions/InvoicesActions";

const Invoices = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.invoices);

  useEffect(() => {
    dispatch(getInvoiceAction());
  }, []);

  return (
    <div className="invoices-list">
      <InvoicesBar />
      {invoices.length > 0 ? <InvoicesList /> : <Empty />}
    </div>
  );
};

export default Invoices;
