import {
  ADD_ITEM,
  ADD_SUB_ITEM,
  EMPTY_SUB_ITEMS,
  TOGGLE_VISIBLE_ITEM,
  TOGGLE_EXPAND_ITEM,
  TOGGLE_EXPAND_ALL_ITEMS,
  SET_CURRENT_PARENT_LEVEL
} from './types';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const addSubItem = (id, level) => ({
  type: ADD_SUB_ITEM,
  payload: {
    id,
    level
  }
});

export const emptySubItems = () => ({
  type: EMPTY_SUB_ITEMS
});

export const toggleVisibleItem = (id, level, parent) => ({
  type: TOGGLE_VISIBLE_ITEM,
  payload: {
    id,
    level,
    parent
  }
});

export const toggleExpandItem = (id, level, parent) => ({
  type: TOGGLE_EXPAND_ITEM,
  payload: {
    id,
    level,
    parent
  }
});

export const toggleExpandAllItems = () => ({
  type: TOGGLE_EXPAND_ALL_ITEMS
});

export const setCurrentParentLevel = (id) => ({
  type: SET_CURRENT_PARENT_LEVEL,
  payload: id
});
