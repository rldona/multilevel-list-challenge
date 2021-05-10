import { createStore } from 'redux';

import reducer from './reducers';

const initialState = {
  list: [
    {
      id: 0,
      title: 'Open List',
      sublist: [
        {
          id: 0,
          title: 'Open Sublist',
          sublist: [
            { id: 0 },
            { id: 1 },
            { id: 2 }
          ],
          visible: false,
          expand: true,
          level: 3
        }
      ],
      visible: false,
      expand: true,
      level: 2
    },
    {
      id: 1,
      title: 'Open List',
      sublist: [
        {
          id: 0,
          title: 'Open Sublist',
          sublist: [
            { id: 0 },
            { id: 1 },
            { id: 2 }

          ],
          visible: false,
          expand: true,
          level: 3
        }
      ],
      visible: false,
      expand: true,
      level: 2
    },
    {
      id: 2,
      title: 'Open List',
      sublist: [
        {
          id: 0,
          title: 'Open Sublist',
          sublist: [
            { id: 0 },
            { id: 1 },
            { id: 2 }
          ],
          visible: false,
          expand: true,
          level: 3
        }
      ],
      visible: false,
      expand: true,
      level: 2
    }
  ],
  currentParentLevel: 0
};

export const store = createStore(
  reducer,
  initialState
);
