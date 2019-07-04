import React from 'react';
import {ScrollView, View , TextInput, TouchableOpacity,Text, Picker} from 'react-native';
import { connect } from 'react-redux';
import {styles, colors} from '../configuracao/layout';
import PedidoItem from '../componentes/PedidoItem'
import _ from 'lodash';
import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import '@firebase/storage'

export default class PedidosAbertos extends React.Component {
    constructor(props){
        super(props)
        this.state={
            pedidos: [],
        }
    }
    componentWillMount(){
        firebase.database().ref('pedidos').on('value', (snapshort) => {
            this.setState({pedidos: _.values(snapshort.val())});
        })
    }
    render() {
        return (
            <ScrollView>
                {this.state.pedidos.map(pedido => {
                    if(pedido.aberto==true){
                        <PedidoItem codigo={pedido.codigo} id={pedido.id}/>
                    }
                })}
            </ScrollView>
        )
    };
}