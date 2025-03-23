import { Suspense } from "react";
import Checkout from "../Components/Checkout";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Checkout />
    </Suspense>
  );
}
