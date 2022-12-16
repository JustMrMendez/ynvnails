interface Orderprops {
  title?: string;
  subtotal?: number;
  tax?: number;
  total?: number;
}

function OrderSummary({
  title = "Order Summary",
  subtotal = 0,
  tax = 0,
  total = 0,
}: Orderprops) {
  return (
    <>
      <div className="h-5 w-10">Order Summary</div>
    </>
  );
}

export default OrderSummary;
