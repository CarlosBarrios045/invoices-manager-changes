import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "src/assets/logo.svg";
import Form from "./Form";
import { resetSelectedInvoiceAction } from "src/store/actions/InvoicesActions";

const Bar = () => {
  const open = useSelector((state) => state.invoices.openform);
  const doc = document.body;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      doc.classList.add(theme);
    } else {
      doc.classList.add("light");
    }
  }, []);

  const backToHome = () => {
    history.push("/");
    dispatch(resetSelectedInvoiceAction());
  };

  const themeToggle = () => {
    if (doc.classList.contains("light")) {
      doc.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      doc.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="bar-container">
      <div className="bar">
        <div className="logo-box" onClick={backToHome}>
          <img src={logo} alt="logo" />
          <div></div>
        </div>
        <div className="theme-box">
          <div onClick={themeToggle} />
        </div>
        <div className="picture-box">
          <div></div>
        </div>
      </div>
      {open ? <Form /> : null}
    </div>
  );
};

export default Bar;
