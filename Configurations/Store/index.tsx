import FourOhFour from "../../../../Components/FourOhFour";
import { FaFootballBall, FaAsterisk } from "react-icons/fa";

export default class App {
  context: any;

  constructor(context) {
    this.context = context;
  }

  getActions = () => {
    return new Promise((resolve) => {
      resolve([
        {
          key: "desktop",
          label: "Store",
          component: FourOhFour,
          icon: FaFootballBall,
        },
      ]);
    });
  };
}
