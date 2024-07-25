import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import reactToWebComponent from 'react-to-webcomponent';

const ButtonWebComponent = reactToWebComponent(Button, React, ReactDOM);

customElements.define('my-button', ButtonWebComponent);

export { Button, ButtonWebComponent };
