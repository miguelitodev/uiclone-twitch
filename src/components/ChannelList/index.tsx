import React from "react";
import { Text } from "react-native";

import {
	List,
	ChannelContainer,
	LeftSide,
	Avatar,
	Username,
	Info,
	Column,
	RightSide,
	WhiteCircle,
} from "./styles";

const ChannelList: React.FC = () => {
	const ChannelItem: React.FC = () => (
		<ChannelContainer>
			<LeftSide>
				<Avatar />
				<Column>
					<Username>miguelrisquelme</Username>
					<Info>29 new videos</Info>
				</Column>
			</LeftSide>
			<RightSide>
				<WhiteCircle />
			</RightSide>
		</ChannelContainer>
	);

	return (
		<List>
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
			<ChannelItem />
		</List>
	);
};

export default ChannelList;
