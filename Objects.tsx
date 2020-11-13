import React from "react";
import { AppContextType } from "../../Utils/Types";

const objectSettingsMap = {
  products: { modelId: "crm-products" },
  customers: { modelId: "people", props: { disableLists: true, applyList: 'customers' } },
  orders: { modelId: "crm-orders" },
};

const AppActionObject: React.FC<{ action; context: AppContextType }> = ({
  action,
  context,
}) => {
  // Vars
  const objectSettings = objectSettingsMap[action];

  // UI
  return (
    <context.UI.Object.Overview
      context={context}
      modelId={objectSettings.modelId}
      baseUrl={`/crm/${action}`}
      {...objectSettings.props || {}}
    />
  );
};

export default AppActionObject;
