import React from "react";

import { CustomerFeedbackForm } from "@/organisms/Form/CustomerFeedbackForm";
import { Meta } from "@/templates/Meta";

const CustomerRequest = () => {
  return (
    <>
      <Meta subtitle="Request" />
      <CustomerFeedbackForm />
    </>
  );
};

export default CustomerRequest;
