import React from 'react';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';
//Inportações das interface
import EnviaPedido from './src/componentes/EnviaPedido'
import Pedido from './src/componentes/Pedido'
import PedidosAbertos from './src/componentes/PedidosAbertos'
import Menu from './src/componentes/Menu'

export default class routes extends React.Component {
	render() {
		return (
			<Router 
			navigationBarStyle={{ backgroundColor: 'rgb(43, 83, 142)' }}>
				<Scene
					key="root"
					navBarButtonColor={'#FFFFFF'}
					headerLayoutPreset='center'>
					<Drawer
						hideNavBar
						key="Menu"
						contentComponent={Menu}
						drawerWidth={300}
						drawerPosition="left"
						disableGestures={false}
						type={ActionConst.RESET}>
						<Scene
							title="Envia Pedido"
							key='EnviaPedido'
							component={EnviaPedido} />
					</Drawer>
					<Drawer
						hideNavBar
						key="Menu"
						contentComponent={Menu}
						drawerWidth={300}
						drawerPosition="left"
						disableGestures={false}
						type={ActionConst.RESET}>
						<Scene
							title="Pedidos Abertos"
							key='PedidosAbertos'
							component={PedidosAbertos} />
					</Drawer>
					<Scene
							title="Pedido"
							key='Pedido'
							component={Pedido} />
				</Scene>
			</Router>
		);
	}
}
