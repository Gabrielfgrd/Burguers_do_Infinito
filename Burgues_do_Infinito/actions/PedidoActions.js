import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';
import { Disposable } from 'rx';

export const modificaId = (valor) => {
    return {
        type: 'modificaId',
        payload: valor
    }
}