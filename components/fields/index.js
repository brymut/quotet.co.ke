import React from "react";
import cx from "classnames";

const getValidityClassName = meta => {
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return "invalid";
  }
  if (meta.touched && meta.valid) {
    return "valid";
  }
};

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div
      className={cx(
        "custom-input-container",
        { "flex-row-reverse": type === "checkbox" },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      {type === "textbox" ? (
        <textarea {...input} />
      ) : (
        <input {...input} type={type} />
      )}
      <label>{label}</label>
      {meta.error && meta.touched && !meta.active && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
      <style global jsx>{`
        textarea {
          width: 100%;
          min-height: 100px;
          border: 3px solid;
        }
      `}</style>
    </div>
  );
};
