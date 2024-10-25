export interface SetNameAction {
    type: 'SET_NAME';
    payload: string;
}

export interface SetClassAction {
    type: 'SET_CLASS';
    payload: string;
}

export type ActionTypes = SetNameAction | SetClassAction