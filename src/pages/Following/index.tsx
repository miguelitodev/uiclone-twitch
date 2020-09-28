import React from "react";

import { Container, Main, Wrapper } from "./styles";

import Header from "./../../components/Header";

const Following: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<Header />
				<Main />
			</Container>
		</Wrapper>
	);
};

export default Following;
