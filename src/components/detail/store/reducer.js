import * as actionType from './actionType.js';
import { fromJS } from 'immutable';

const clientList = [
    {
      key: '1',
      name: 'John',
      prenom: " Brown",
      address: 'Address_111111111',
    },
    {
      key: '2',
      name: 'Jim',
      prenom: " Green",
      address: 'Address_22222222',
    },
    {
      key: '3',
      name: 'Joe',
      prenom: " Black",
      address: 'Address_33333333',
    },
    {
      key: '4',
      name: 'Li',
      prenom: "Loic",
      address: 'Address_44444444',
    },
    {
        key: '5',
        name: 'Qiu',
        prenom: "Paul",
        address: 'Address_55555555',
      },
      {
        key: '6',
        name: 'Du',
        prenom: "Delphine",
        address: 'Address_666666666',
      },
      {
        key: '7',
        name: 'Yan',
        prenom: "Issac",
        address: 'Address_777777777',
      },
      {
        key: '8',
        name: 'Zhn',
        prenom: "Alice",
        address: 'Address_88888888',
      },
      {
        key: '9',
        name: 'Kong',
        prenom: "Alexendre",
        address: 'Address_999999999',
      },
  ];

const defaultState = fromJS({
    list : clientList,
    currentIndex : 1
});


export default (prevState = defaultState,action)=>{
	switch (action.type) {
        case actionType.SET_CURRENT:
            return prevState.set("currentIndex",action.key);
		default:
			return prevState;
	}
}