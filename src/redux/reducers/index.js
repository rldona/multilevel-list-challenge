import {
  ADD_ITEM,
  ADD_SUB_ITEM,
  EMPTY_SUB_ITEMS,
  TOGGLE_VISIBLE_ITEM,
  TOGGLE_EXPAND_ITEM,
  TOGGLE_EXPAND_ALL_ITEMS,
  SET_CURRENT_PARENT_LEVEL
} from '../actions/types';

const listReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload]
      }

    case ADD_SUB_ITEM:
      let sublist;

      if(action.payload.level === 2) {
        sublist = state.list[action.payload.id].sublist;
        sublist.push({
          id: sublist.length,
          title: 'Open Sublist',
          sublist: [
            { id: 0 }
          ],
          visible: false,
          expand: true,
          level: 3
        });
      } else {
        sublist = state.list[action.payload.id].sublist[action.payload.id].sublist;
        sublist.push({
          id: sublist.length
        });
      }

      return {
        ...state,
        list: [...state.list]
      }

    case EMPTY_SUB_ITEMS:
      state.list.forEach(element => {
        element.sublist = [];
      });

      return {
        ...state,
        list: [...state.list]
      }

    case TOGGLE_VISIBLE_ITEM:
      if (typeof action.payload.level === 'undefined') {
        state.list[action.payload.id].visible = !state.list[action.payload.id].visible;
      } else {
        state.list[action.payload.parent].sublist[action.payload.id].visible = !state.list[action.payload.parent].sublist[action.payload.id].visible;
      }

      return {
        ...state,
        list: [...state.list]
      }

    case TOGGLE_EXPAND_ITEM:
      if (typeof action.payload.level === 'undefined') {
        state.list[action.payload].expand = !state.list[action.payload].expand;
      } else {
        if (state.list[action.payload.parent].sublist) {
          state.list[action.payload.parent].sublist[action.payload.id].expand = !state.list[action.payload.parent].sublist[action.payload.id].expand;
        }
      }

      return {
        ...state,
        list: [...state.list]
      }

    case TOGGLE_EXPAND_ALL_ITEMS:
      state.list.forEach(element => {
        element.expand = !element.expand;
      });

      state.list.forEach(element => {
        element.sublist.forEach(element => {
          element.expand = !element.expand;
        });
      });

      return {
        ...state,
        list: [...state.list]
      }

    case SET_CURRENT_PARENT_LEVEL:
      return {
        ...state,
        currentParentLevel: action.payload
      }

    default:
      return state;
  }
}

export default listReducer;
