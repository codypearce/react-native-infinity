import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Button } from 'material-bread';

export default class CLICard extends React.Component {
  state = {
    copySuccess: false,
  };

  copyToClipboard = () => {
    const { appName, starter, uilibrary } = this.props;
    let library = '';
    if (uilibrary.length > 0) {
      library = `--uilibrary ${uilibrary}`;
    }
    var textField = document.createElement('textarea');
    textField.innerHTML = `npx react-native-infinity init ${appName} --starter ${starter} ${library}`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    this.setState({ copySuccess: true }, () => {
      setTimeout(() => this.setState({ copySuccess: false }), 1000);
    });
  };

  renderContent() {
    const { appName, starter, pageWidth, uilibrary } = this.props;
    const { copySuccess } = this.state;
    let library = '';
    if (uilibrary.length > 0) {
      library = `--uilibrary ${uilibrary}`;
    }
    return (
      <Fragment>
        <Text style={styles.text}>
          {`npx react-native-infinity init ${appName} --starter ${starter} ${library}`}
        </Text>
        <Button
          text={copySuccess ? 'Copied' : 'Copy'}
          type="flat"
          color={'#D81B60'}
          style={[
            styles.copyButton,
            {
              position: pageWidth < 570 ? 'relative' : 'absolute',
              marginTop: pageWidth < 570 ? 8 : 0,
            },
          ]}
          dense
          onPress={this.copyToClipboard}
        />
      </Fragment>
    );
  }

  renderError = () => {
    const { appName, starter } = this.props;
    const noAppName = appName.length < 1;
    const noStarter = starter.length < 1;

    let errorText = noStarter
      ? 'Your app needs to target at least one platform'
      : '';
    errorText = noAppName ? 'App name is required' : errorText;
    return (
      <Fragment>
        <Text style={styles.text}>{errorText}</Text>
      </Fragment>
    );
  };
  render() {
    const { appName, starter, pageWidth } = this.props;
    const hasError = appName.length < 1 || starter.length < 1;
    return (
      <Card
        style={[
          styles.cliCard,

          {
            backgroundColor: hasError ? '#B71C1C' : '#212121',
          },
        ]}>
        {hasError ? this.renderError() : this.renderContent()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cliCard: {
    padding: 12,
    marginTop: 10,
    backgroundColor: '#212121',
    position: 'relative',
  },
  copyButton: {
    position: 'absolute',
    right: 8,
    top: 4,
  },
  text: {
    color: 'white',
  },
});
