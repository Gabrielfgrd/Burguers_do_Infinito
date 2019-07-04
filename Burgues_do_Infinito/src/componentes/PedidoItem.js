import React from 'react';
import {ScrollView, View , TextInput, TouchableOpacity,Text, Picker} from 'react-native';
import { connect } from 'react-redux';
import {styles, colors} from '../configuracao/layout';
import { Actions } from 'react-native-router-flux';
import {modificaId} from '../../actions/PedidoActions'
import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import '@firebase/storage'

//props: codigo
class PedidoItem extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentWillUnmount(){
        this.props.modificaId(this.props.id)
    }
    render() {
        return (
            <TouchableOpacity onPress={()=>{Actions.Pedido() }} style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{backgroundColor: '#000000' , height: 1}}/>
                <Text style={{fontSize: 25}}>Pedido:</Text>
                <Text style={{fontSize: 25}}>{this.props.codigo}</Text>
                <View style={{backgroundColor: '#000000' , height: 1}}/>
            </TouchableOpacity>
        )
    };
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, {modificaId})(PedidoItem)