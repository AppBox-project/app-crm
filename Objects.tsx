import React from "react";
import { AppContextType } from "../../Utils/Types";

const objectSettingsMap = {
  products: { modelId: "crm-products" },
  customers: { modelId: "people" },
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
    />
  );
};

export default AppActionObject;
