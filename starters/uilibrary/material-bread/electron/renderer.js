import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

const materialFont = new FontFace(
  'MaterialIcons',
  'url(../node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf)',
);
document.fonts.add(materialFont);

const root = document.getElementById('app');

const renderApp = () => {
  const App = require('./App').default;
  if (root) render(<App />, root);
};

renderApp();

if (module && module.hot != null && typeof module.hot.accept === 'function') {
  module.hot.accept(['./App'], () =>
    setImmediate(() => {
      unmountComponentAtNode(root);
      renderApp();
    }),
  );
}
