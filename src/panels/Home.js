import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, FormItem, Textarea, FixedLayout, Checkbox, MiniInfoCell } from '@vkontakte/vkui';

const Home = ({ id, goz, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Заказ плагина Minecraft</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
			<Textarea id="casf" placeholder="Описание плагина"> </Textarea>
			
			</Div>
			<Div>
			<Button size="s" mode="primary" onClick={go}>Отправить</Button>
			<Checkbox defaultChecked>zz</Checkbox>
			

			</Div>
			
		</Group>
		
		
	</Panel>
	
);


Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};
//indicator={<Counter size="s" mode="prominent">3</Counter>}
export default Home;
