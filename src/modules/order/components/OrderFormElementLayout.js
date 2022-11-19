function OrderFormElementLayout({ children, title }) {
  return (
    <div className="box">
      <h3 className="my-title-form">| {title}</h3>
      {children}
    </div>
  );
}

export default OrderFormElementLayout;
