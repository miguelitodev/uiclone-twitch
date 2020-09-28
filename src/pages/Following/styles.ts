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
`;

export const Container = styled.SafeAreaView`
	padding-left: 14px;
`;

export const Main = styled.View``;
