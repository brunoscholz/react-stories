import { combineReducers, Reducer } from 'redux';

export interface TAction {
  type: string;
  payload: any;
}

export interface CancelState {
  baggageCountChanged: number;
}

export const initialCancelState: CancelState = {
  baggageCountChanged: 0,
}

export interface AppState {
  cancel: Reducer<CancelState> | null;
}

export const initialState: AppState = {
  cancel: null,
}

export const cancelReducer: Reducer<CancelState> = (state: CancelState = initialCancelState, action: any): CancelState => {
  //(state: AppState, action: TAction) => {
  switch (action.type) {
    case '@@cancel/BAGGAGE_COUNT_CHANGED':
      return {
        ...state,
        baggageCountChanged: action.payload
      }
    default:
      return state
  }
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
  cancel: cancelReducer,
});
