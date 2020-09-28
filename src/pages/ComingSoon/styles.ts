import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";

import colors from "./../../styles/colors";

const StatusBarWeight =
	Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.View`
	background: ${colors.primary};
	flex: 1;
	padding-top: ${StatusBarWeight + "px"};

	justify-content: center;
	align-items: center;
`;

export const Heading = styled.Text`
	color: ${colors.purple};
	font-family: roboto_500;
	font-size: 30px;
`;
