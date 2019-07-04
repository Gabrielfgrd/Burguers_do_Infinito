import React from 'react';
import {ScrollView, View , TextInput, TouchableOpacity,Text, Picker} from 'react-native';
import { connect } from 'react-redux';
import {styles, colors} from '../configuracao/layout';

import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import '@firebase/storage'

export default class EnviaPedido extends React.Component {
    constructor(props){
        super(props)
        this.state={
            qtd_manopla : 0,
            qtd_alma : 0,
            qtd_realidade : 0,
            qtd_espaco : 0,
            qtd_poder : 0,
            qtd_mente : 0,
            qtd_tempo : 0,
            qtd_trufa : 0,
            totalPedido : 0,
            tipoPagamento: 0,
        }
    }
    _enviarPedido(){
        if(this.state.tipoPagamento!=0){
            
            var novoPedido = firebase.database().ref('pedidos/').push(), codigoGeral = firebase.database().ref('codigoGeral'), codigoGeralValor;
            codigoGeral.once('value', (snapshort) => {
                if(snapshort.val()==null || snapshort.val()==''){     
                    codigoGeralValor = 001;
                }else{
                    codigoGeralValor=snapshort.val();
                }
                codigoGeral.set(codigoGeralValor++);
            })
            novoPedido.set({
                id: novoPedido.key,
                codigo: codigoGeralValor,
                aberto: true,
                qtd_manopla: this.state.qtd_manopla,
                qtd_alma: this.state.qtd_alma,
                qtd_realidade: this.state.qtd_realidade,
                qtd_espaco: this.state.qtd_espaco,
                qtd_poder: this.state.qtd_poder,
                qtd_mente: this.state.qtd_mente,
                qtd_tempo: this.state.qtd_tempo,
                qtd_trufa: this.state.qtd_trufa,
                tipoPagamento: this.state.tipoPagamento,
                totalPedido: this.state.totalPedido
            })
            .then(() => {
                alert('Pedido enviado!')
                this.setState({
                    qtd_manopla : 0,
                    qtd_alma : 0,
                    qtd_realidade : 0,
                    qtd_espaco : 0,
                    qtd_poder : 0,
                    qtd_mente : 0,
                    qtd_tempo : 0,
                    qtd_trufa : 0,
                    totalPedido : 0,
                    tipoPagamento: 0,
                })
            })
            .catch(erro => {
                alert('Erro ao enviar pedido, ' + erro.message)
            })
        }else{
            alert('Esqueceu o tipo de pagamento!')
        }
    }
    render() {
        return (
            <View>
                 <ScrollView>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text  style={{fontSize: 25}}>Manopla do Infinito</Text>
                        <Text  style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_manopla}</Text>
                        <TouchableOpacity style={styles.botao} onPress={()=>{ this.state.qtd_manopla>0 ? this.setState({qtd_manopla: this.state.qtd_manopla -1, totalPedido: this.state.totalPedido -35.0}): null ;}}>
                            <Text style={{fontSize: 25, color: 'white'}}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.setState({qtd_manopla: this.state.qtd_manopla +1, totalPedido: this.state.totalPedido +35.0})}}>
                            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Alma</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_alma}</Text>
                        <TouchableOpacity style={styles.botao} onPress={()=>{ this.state.qtd_alma>0 ? this.setState({qtd_alma: this.state.qtd_alma -1, totalPedido: this.state.totalPedido -5.0}):null;}}>
                            <Text style={{fontSize: 25, color: 'white'}}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.setState({qtd_alma: this.state.qtd_alma +1, totalPedido: this.state.totalPedido + 5.0})}}>
                            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Realidade</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_realidade}</Text>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.state.qtd_realidade>0 ? this.setState({qtd_realidade: this.state.qtd_realidade -1, totalPedido: this.state.totalPedido - 5.0}): null;}}>
                            <Text style={{fontSize: 25, color: 'white'}}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.setState({qtd_realidade: this.state.qtd_realidade +1, totalPedido: this.state.totalPedido + 5.0})}}>
                            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Espaço</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_espaco}</Text>
                        <TouchableOpacity  style={styles.botao} onPress={()=>{this.state.qtd_espaco>0 ? this.setState({qtd_espaco: this.state.qtd_espaco -1, totalPedido: this.state.totalPedido - 5.0}): null;}}>
                            <Text style={{fontSize: 25, color: 'white'}}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.setState({qtd_espaco: this.state.qtd_espaco +1, totalPedido: this.state.totalPedido + 5.0})}}>
                            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Poder</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_poder}</Text>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.state.qtd_poder>0 ? this.setState({qtd_poder: this.state.qtd_poder -1, totalPedido: this.state.totalPedido - 5.0}):null;}}>
                            <Text style={{fontSize: 25, color: 'white'}}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.setState({qtd_poder: this.state.qtd_poder +1, totalPedido: this.state.totalPedido + 5.0})}}>
                            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Mente</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_mente}</Text>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.state.qtd_mente>0 ? this.setState({qtd_mente: this.state.qtd_mente -1, totalPedido: this.state.totalPedido -5.0}):null;}}>
                            <Text style={{fontSize: 25, color: 'white'}}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.setState({qtd_mente: this.state.qtd_mente +1, totalPedido: this.state.totalPedido + 5.0})}}>
                            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Burger Tempo</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_tempo}</Text>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.state.qtd_tempo>0 ? this.setState({qtd_tempo: this.state.qtd_tempo -1, totalPedido: this.state.totalPedido -5.0}):null;}}>
                            <Text style={{fontSize: 25, color: 'white'}}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.setState({qtd_tempo: this.state.qtd_tempo +1, totalPedido: this.state.totalPedido + 5.0})}}>
                            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25}}>Trufa</Text>
                        <Text style={{fontSize: 25, paddingHorizontal:10, borderColor: 'black'}}>{this.state.qtd_trufa}</Text>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.state.qtd_trufa>0 ? this.setState({qtd_trufa: this.state.qtd_trufa -1, totalPedido: this.state.totalPedido -2.0}):null;}}>
                            <Text style={{fontSize: 25, color: 'white'}}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={()=>{this.setState({qtd_trufa: this.state.qtd_trufa +1, totalPedido: this.state.totalPedido +2.0})}}>
                            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Picker
                            selectedValue ={this.state.tipoPagamento} 
                            onValueChange={(itemValue) => {this.setState({ tipoPagamento: itemValue})}}
                            style={{ height: 60, width: 200, color: colors.preto, fontSize: 30 }}>
								<Picker.Item
									label={"SELECIONE GABRIEL"}
									value={0}
								/>
                                <Picker.Item
									label={"Dinheiro"}
									value={1}
								/>
                                <Picker.Item
									label={"Cartão"}
									value={2}
								/>
						</Picker>
                    </View>
                    <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 25, paddingHorizontal: 25}}>Total: R$ {this.state.totalPedido}</Text>
                        <TouchableOpacity  style={styles.botao} onPress={()=>{this._enviarPedido()}}>
                            <Text style={{fontSize: 25, color: 'white'}}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    };
}