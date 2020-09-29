import styled from "styled-components/native";
import colors from "../../styles/colors";

export const List = styled.ScrollView.attrs({
	horizontal: true,
})``;

export const CategoryContainer = styled.TouchableOpacity`
	margin-right: 10px;
`;

export const CategoryImage = styled.Image`
	width: 98px;
	height: 130px;
`;

export const CategoryName = styled.Text`
	margin-top: 5px;
	max-width: 98px;
	color: ${colors.black};
	font-family: roboto_700;
	font-size: 13.5px;
`;

export const CategoryStatus = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const RedCircle = styled.View`
	background: ${colors.red};
	width: 9px;
	height: 9px;
	border-radius: 4.5px;
`;

export const Info = styled.Text`
	margin-bottom: 1px;
	margin-left: 4px;
	color: ${colors.gray};
	font-family: roboto_500;
`;
