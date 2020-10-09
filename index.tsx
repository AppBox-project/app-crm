import FourOhFour from "../../Components/FourOhFour";
import { FaDashcube, FaPeopleCarry } from "react-icons/fa";
import Objects from "./Objects";

export default class App {
  context: any;

  constructor(context) {
    this.context = context;
  }

  appConfig = {
    actions: {
      mobile: { displayAs: "menu" },
    },
  };

  getActions = () => {
    return new Promise((resolve) => {
      resolve([
        {
          key: "overview",
          label: "Overview",
          component: FourOhFour,
          icon: FaDashcube,
        },
        {
          key: "products",
          label: "Products",
          component: Objects,
          icon: FaPeopleCarry,
        },
      ]);
    });
  };
}
