import { colorWidget, skewWidget } from "../store/store";

export const onSkewWidget = (val) => {
  skewWidget.set(val);
};

export const onColorWidget = (val) => {
  colorWidget.set(val);
};
