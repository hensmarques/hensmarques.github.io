import { toast } from 'react-toastify';
import { orderStatus as orderStatusReducer } from '../../src/reducers';
import { setOrderPending, setOrderAccepted, setOrderRejected } from '../../src/actions';

describe('orderStatusReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = orderStatusReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({"orderEventTimeStamp": null, "orderEventsFinished": false});
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = orderStatusReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setOrderPending', () => {
    it('should set order status to pending', () => {
      let state = {};
      state = orderStatusReducer(state, setOrderPending());
      expect(state.status).toBe('pending');
    });
  });

  describe('setOrderAccepted', () => {
    it('should set order status to accepted', () => {
      const toastSpy = jest.spyOn(toast, 'success');
      const translationSpy = jest.spyOn(window, '_t').mockClear();
      const mockOrderId = '99ddc2f7-8a36-48d7-9171-db94c9ccf399';
      let state = {};
      state = orderStatusReducer(state, setOrderAccepted(mockOrderId));
      expect(state.status).toBe('accepted');
      expect(toastSpy).toHaveBeenCalledWith(`Order ${mockOrderId} placed successfully`);
      expect(translationSpy).toHaveBeenCalledWith(
        'Order {id} placed successfully',
        'TOASTS.ORDER_SUCCESS',
        { id: mockOrderId }
      );
    });
  });

  describe('setOrderRejected', () => {
    it('should set order status to rejected', () => {
      const toastSpy = jest.spyOn(toast, 'error');
      const translationSpy = jest.spyOn(window, '_t').mockClear();
      const mockMessage = '0 quantity less than minimum allowed 0.01';
      const mockStatusCode = 'INVALID_REQUEST_PARAMETERS';
      let state = {};
      state = orderStatusReducer(state, setOrderRejected(mockMessage, mockStatusCode));
      expect(state).toEqual({
        status: 'rejected',
        message: mockMessage,
      });
      expect(toastSpy).toHaveBeenCalledWith('Order Failed: Must be greater than zero');
      expect(translationSpy).toHaveBeenCalledWith('Order Failed', 'TOASTS.ORDER_GREATER_THAN_ZERO');
    });
  });
});
