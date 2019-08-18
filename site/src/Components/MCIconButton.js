import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IconButton } from "material-bread";

const MCIcon = ({ ...rest }) => {
  return <IconButton iconComponent={MaterialCommunityIcons} {...rest} />;
};

export default MCIcon;
