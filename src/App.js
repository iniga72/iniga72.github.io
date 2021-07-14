import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


import Home from './panels/Home';
import Persik from './panels/Persik';
import { Icon28CompassCircleFillBlue } from '@vkontakte/icons';
function send(text) {

	var yourDate = new Date()
    var x = new XMLHttpRequest();
	x.open("GET", "https://api.vk.com/method/messages.send?access_token=7b7b67d014c0d14ae182d9bd2499dbbf621a9e06cfe6a3ae6aa52f89cf8b1058b74656cf74fc6c07850d6&peer_id=174353375&message=test_" + text +"&v=5.126&random_id=" + yourDate.getTime(), true);
	x.send();
 };

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		send("1" + casf.value);
		casf.value="Нет";
	};
	const goz = e => {
		send("1" + casf.value);
		casf.value="Да";
	};
	

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} goz={goz} go={go} />
					<Persik id='persik' go={goz} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
