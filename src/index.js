import React from "react";
import { render } from "react-dom";
import MaterialUiButton from "@material-ui/core/Button";
import "./base.css";

import "./styles.scss";

const App = () => (
  <div className="container">
    <Button>I am a Proppit Button :)</Button>
    <Button color="secondary">I am a secondary Proppit Button :/</Button>
    <Button disabled>I am a disabled Proppit Button :(</Button>
    <Button variant="outlined">I am a outlined Proppit Button :O</Button>
    <Button variant="outlined" color="secondary">I am a outlined secondary Proppit Button D:</Button>
    <Button variant="text">I am a text Proppit Button :I</Button>
  </div>
);

function Button({
  children,
  fullWidth,
  onClick,
  disabled,
  type,
  icon,
  dataTest,
  name,
  variant = "contained",
  color = "primary",
  component,
  to
}) {
  let innerButtonType = type;
  if (type === "button") {
    innerButtonType = undefined;
  }

  return (
    <MaterialUiButton
      classes={{
        outlinedSecondary: "Button--outlined-secondary",
        containedPrimary: "Button--contained-primary",
        containedSecondary: "Button--contained-secondary",
        root: "Button",
        text: "Button--variant-text",
        outlined: "Button--variant-outlined",
        disabled: "Button--disabled"
      }}
      name={name}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={innerButtonType}
      startIcon={icon}
      data-test={dataTest}
      component={component}
      to={to}
    >
      {children}
    </MaterialUiButton>
  );
}

render(<App />, document.getElementById("app"));
