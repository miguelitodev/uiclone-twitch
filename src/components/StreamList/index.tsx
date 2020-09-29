import React from "react";

import stremThumbnail from "../../images/stream_thumbnail.jpg";

import {
	List,
	StreamContainer,
	StreamThumbnail,
	StreamColumn,
	StreamRow,
	StreamHeader,
	StreamAvatar,
	StreamUserName,
	StreamCategory,
	StreamDescription,
	TagRow,
	TagView,
	TagText,
} from "./styles";

const StreamList: React.FC = () => {
	const StreamItem: React.FC = () => (
		<StreamContainer>
			<StreamThumbnail source={stremThumbnail} />
			<StreamColumn>
				<StreamRow>
					<StreamHeader>
						<StreamAvatar />
						<StreamUserName numberOfLines={1}>miguelrisquelme</StreamUserName>
					</StreamHeader>
					<StreamDescription numberOfLines={1}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</StreamDescription>
					<StreamCategory numberOfLines={1}>
						Science & Technology
					</StreamCategory>
				</StreamRow>
				<TagRow>
					<TagView>
						<TagText>Portuguese</TagText>
					</TagView>
					<TagView>
						<TagText>Web Development</TagText>
					</TagView>
				</TagRow>
			</StreamColumn>
		</StreamContainer>
	);
	return (
		<List>
			<StreamItem />
			<StreamItem />
			<StreamItem />
			<StreamItem />
		</List>
	);
};

export default StreamList;
