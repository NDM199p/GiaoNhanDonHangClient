import OrderForm from "../components/order-form";
import OrderDetailForm from "../components/OrderDetailForm";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Alert, Form, Spinner } from "react-bootstrap";
import OrderActions from "../ThunkActions";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import createScss from "./styles/create.module.scss";

const CreateOrderPage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let areaSelector = useSelector((state) => state.area);
  let orderSelector = useSelector((state) => state.order);
  let transitAgentSelector = useSelector((state) => state.transitAgent);
  let [error, setError] = useState({ status: false, message: "" });
  let [priceService, setPriceService] = useState(0);

  const onSubmit = async (values) => {
    try {
      await dispatch(OrderActions.add({ orderObject: values })).unwrap();
      setTimeout(() => navigate("/order/list"), 1000);
    } catch (error) {
      setError({ status: true, message: error });
    }
  };

  const validationSchema = Yup.object({
    senderArea: Yup.number().required("Required"),
    receiverPhone: Yup.string().required("Required"),
    receiverFullName: Yup.string().required("Required"),
    receiverArea: Yup.number().required("required"),
    receiverAddress: Yup.string().required("required"),
    packageName: Yup.string().required("required"),
    packageMass: Yup.number().required("require"),
  });

  const formik = useFormik({
    initialValues: {
      senderArea: null,
      senderTransitAgent: null,

      receiverPhone: "",
      receiverFullName: "",
      receiverAddress: "",
      receiverArea: null,

      packageName: null,
      packageMass: 0,
      packageUnitMass: "",
      packageLong: 0,
      packageWidth: 0,
      packageHeight: 0,
      packageCod: 0,
      packageUnitCod: "",
      packagePrice: 0,

      paymentPriceService: 0,

      freight: null,

      noteTransport: null,
      noteCode: "",
      noteMsg: "",
      weight: 0,
    },
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    formik.values.packageMass !== 0 &&
      axios
        .get("http://localhost:3000/price-service", {
          params: {
            weight: formik.values.packageMass,
          },
        })
        .then(({ data: { price } }) => {
          setPriceService(price);
        });
  }, [formik.values.packageMass]);

  return (
    <>
      {orderSelector.isLoading && (
        <div className={`${createScss.loading} w-100 d-flex`}>
          <Spinner animation="border" variant="light" />
        </div>
      )}

      {error.status && <Alert variant="danger">{orderSelector.error.message}</Alert>}

      <Form className="d-flex" onSubmit={formik.handleSubmit}>
        <div style={{ width: "80%", float: "left" }}>
          <div style={{ width: "600px", margin: "auto" }}>
            <br />
            <OrderForm
              formik={formik}
              areas={areaSelector.areas}
              transitAgents={transitAgentSelector.transitAgents}
            />
          </div>
        </div>
        <div style={{ width: "20%" }}>
          <div className="p-3 border">
            <OrderDetailForm formik={formik} priceService={priceService} />
          </div>
        </div>
      </Form>
    </>
  );
};

export default CreateOrderPage;
