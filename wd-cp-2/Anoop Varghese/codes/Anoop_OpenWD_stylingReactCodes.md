# React Component Styling codes

## RADIUM
#### Install:
```
yarn add radium
# or 
npm install --save radium
```

#### Usage:

```
<Button kind="primary">Radium Button</Button>
import Radium from 'radium';
import React from 'react';
import color from 'color';

class Button extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf(['primary', 'warning']).isRequired
  };

  render() {
    // Radium extends the style attribute to accept an array. It will merge
    // the styles in order. We use this feature here to apply the primary
    // or warning styles depending on the value of the `kind` prop. Since its
    // all just JavaScript, you can use whatever logic you want to decide which
    // styles are applied (props, state, context, etc).
    return (
      <button style={[styles.base, styles[this.props.kind]]}>
        {this.props.children}
      </button>
    );
  }
}

Button = Radium(Button);

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
  base: {
    color: '#fff',
```
    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: color('#0074d9')
        .lighten(0.2)
        .hexString()
    }
  ```},

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};
```

## CSS MODULES
```
// From 
import "./App.css"; 
// To 
import styles from "./App.module.css";
```
#### Usage:
```
import React from "react";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.customClass}>
      Hello React!
    </div>
  );
}

export default App;
```

## SASS/LESS

```
import './styles.less';
```

#### Usage:

```
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}
```

```
import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

import './styles.less';

render(
    <App />,
    document.getElementById('app')
);
```

**Author:**

Anoop Varghese

Website:  [www.anoopv.me](http://www.anoopv.me)

LinkedIn:  [Connect](https://www.linkedin.com/in/anoopv1234/)

