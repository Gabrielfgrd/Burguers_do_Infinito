import React from 'react';
import {ScrollView, View , TextInput, TouchableOpacity,Text, Picker} from 'react-native';
import { connect } from 'react-redux';
import {styles, colors} from '../configuracao/layout';

import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import '@firebase/storage'
import { Actions } from 'react-native-router-flux';

//props: codigo
class Pedido extends React.Component {
    constructor(props){
        super(props)
        this.state={
            aberto: '',
            qtd_manopla : 0,
            qtd_alma : 0,
            qtd_realidade : 0,
            qtd_espaco : 0,
            qtd_poder : 0,
            qtd_mente : 0,
            qtd_tempo : 0
        }
    }
    componentWillMount(){
        var pedidoRef = firebase.database().ref('pedidos/'+this.props.id)
        pedidoRef.once('value', (snapshort) => {
            this.setState({
                aberto: snapshort.val().aberto,
                qtd_manopla : snapshort.val().qtd_manopla,
                qtd_alma : snapshort.val().qtd_alma,
                qtd_realidade : snapshort.val().qtd_realidade,
                qtd_espaco : snapshort.val().qtd_espaco,
                qtd_poder : snapshort.val().qtd_poder,
                qtd_mente : snapshort.val().qtd_mente,
                qtd_tempo : snapshort.val().qtd_tempo,
            })
        })
    }
    _pronto(){
        var pedidoRef = firebase.database().ref('pedidos/'+this.props.id)
        pedidoRef.once('value', (snapshort) => {
            pedidoRef.set({
                ...snapshort.val(),
                aberto: false
            })
        })
        Actions.PedidosAbertos();
    }
    render() {
        return (
            <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text  style={{fontSize: 25}}>Manopla do Infinito</Text>
                        <Text  style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_manopla}</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Alma</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_alma}</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Realidade</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_realidade}</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Espaço</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_espaco}</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Poder</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_poder}</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Mente</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_mente}</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Tempo</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_tempo}</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <TouchableOpacity  style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#rgb(43, 83, 142)'}} onPress={()=>{this._pronto()}}>
                            <Text style={{fontSize: 25, color: 'white'}}>Pronto</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    };
}
const mapStateToProps = state => ({
    codigo : state.PedidoReducer.codigo
})
export default connect(mapStateToProps, {})(Pedido)