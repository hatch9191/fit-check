import React from "react";

import { CustomerFeedbackForm } from "@/organisms/Form/CustomerFeedbackForm";
import { DashboardLayout } from "@/templates/Layout/DashboardLayout";

const CustomerRequest = () => {
  return (
    <DashboardLayout>
      <CustomerFeedbackForm />
    </DashboardLayout>
  );
};

export default CustomerRequest;
