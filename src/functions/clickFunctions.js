import {
  colorWidget,
  filterWidget,
  resizeWidget,
  skewWidget,
  textWidget,
  shadowStrokeWidget,
} from "../store/store";

export const onSkewWidget = (val) => {
  skewWidget.set(val);
};

export const onColorWidget = (val) => {
  colorWidget.set(val);
};

export const onResizeWidget = (val) => {
  resizeWidget.set(val);
};

export const onTextWidget = (val) => {
  textWidget.set(val);
};

export const onFilterWidget = (val) => {
  filterWidget.set(val);
};

export const onShadowStrokeWidget = (val) => {
  shadowStrokeWidget.set(val);
};
