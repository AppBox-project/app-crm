import React from "react";
import { AppContextType } from "../../Utils/Types";

const AppActionObject: React.FC<{ action; context: AppContextType }> = ({
  action,
  context,
}) => {
  const modelId = action === "products" ? "crm-products" : "people";
  return (
    <context.UI.Object.Overview
      context={context}
      modelId={modelId}
      baseUrl="/crm/products"
    />
  );
};

export default AppActionObject;
