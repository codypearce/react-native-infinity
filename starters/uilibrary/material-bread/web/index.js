import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/App';

const materialFont = new FontFace(
  'MaterialIcons',
  'url(../node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf)',
);
document.fonts.add(materialFont);

ReactDOM.render(<App />, document.getElementById('app'));
