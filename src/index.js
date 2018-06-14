import { AppRegistry } from "react-native";
import App from "./App";
import LazyLoadImage from './components/LazyLoadImage.jsx';
import LazyLoadComponent from './components/LazyLoadComponent.jsx';
import trackWindowScroll from './hoc/trackWindowScroll.js';

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
export { LazyLoadImage, LazyLoadComponent, trackWindowScroll };
