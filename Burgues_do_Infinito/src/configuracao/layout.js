import {StyleSheet} from 'react-native';
export const colors = {
	preto: '#000000',
	branco: '#FFFFFF',
	azul: '#rgb(43, 83, 142)'
}
export const styles = StyleSheet.create({
	fotoUsuario:{
		borderTopRightRadius: 100,
		borderTopLeftRadius: 100,
		borderBottomRightRadius: 100,
		borderBottomLeftRadius: 100,
		width: 200,
		height: 200
	},
	opcao: {
		paddingTop: 15,
		paddingBottom: 15,
		justifyContent: 'center',
    },
    botao: {
		margin: 10,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: colors.azul
    },
    textInput: {
		textAlign: 'center',
		padding: 5,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomColor: '#000',
		borderTopColor: '#000',
		borderLeftColor: '#000',
		borderRightColor: '#000',
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		marginTop: 10,
		fontSize: 20,
		height: 45,
		width: 400
	},
	textoPadrao: {
		fontSize: 20,
		color: '#000000'
	},
	textoBotao: {
		fontSize: 20,
		color: '#FFFFFF'
	},
	textoOpcao: {
		marginLeft: 30,
		fontSize: 20,
		color: '#000000'
	},
	conteinerMenu: {
		justifyContent: 'center',
		borderTopWidth: 1,
		borderColor: '#FFFFFF',
		marginTop: 20
	},
	componenteMenu: {
		justifyContent: 'center',
		marginLeft: 30,
		marginTop: 20
	},
	titulos:{
		fontSize: 20, 
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold'
},
	textArea: {
		textAlign: 'center',
		padding: 5,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomColor: '#000',
		borderTopColor: '#000',
		borderLeftColor: '#000',
		borderRightColor: '#000',
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		marginTop: 10,
		fontSize: 20,
		height: 200,
		width: 300,
		color: colors.preto,
	},
	painel: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 30
},
botaoLeis: {
	borderTopRightRadius: 10,
	borderTopLeftRadius: 10,
	borderBottomRightRadius: 10,
	borderBottomLeftRadius: 10,
	marginTop: 20,
	height: 50,
	width: 100,
	justifyContent: 'center',
	alignItems: 'center',
			backgroundColor: colors.azul
	},
	textoInformacaoValidacao: {
		alignItems: 'center',
		fontSize: 15,
		color: '#000000'
	},
	textoAviso: {
		alignItems: 'center',
		fontSize: 15,
		color: '#FF0000'
	},
	
});