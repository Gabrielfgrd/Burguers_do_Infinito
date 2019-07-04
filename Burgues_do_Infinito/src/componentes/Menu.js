import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors } from '../configuracao/layout'


export default class Menu extends React.Component {
	render() {
		return (
            <ScrollView style={{ backgroundColor: '#rgb(43, 83, 142)' }}>
               <View style={{ paddingTop: 20, paddingBottom: 10, alignItems: 'center', justifyContent: 'center'}}>
               		<Text style={{ fontSize: 40, color: '#FFFFFF',marginLeft: 25 }}>Burges do Infinito</Text>
               </View>
               <View style={{justifyContent:'center', borderTopWidth: 1, borderColor: '#FFFFFF', marginTop: 20}}>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => {Actions.EnviaPedido() }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}>Envia Pedido</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => {   }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF'}}>Pedidos em aberto</Text>	
					</TouchableOpacity>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => {   }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF'}}>Pedidos já fechados</Text>	
					</TouchableOpacity>
				</View>
            </ScrollView>
        );
    }
}