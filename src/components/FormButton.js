import React from 'react';

const FormButton = (props) => (
  <div id="button" className="row">
    <button type="submit">{props.title}</button>
  </div>
);

export default FormButton;
