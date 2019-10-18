import { toast } from 'react-toastify';
import { cancelOrderStatus as cancelOrderStatusReducer } from '../../src/reducers/cancelOrderStatus';
import { status } from '../../src/constants';
import { cancelOrderSuccess, cancelOrderError } from '../../src/actions';

const mockOrderId = '0ae30f23-2dbc-11e8-a3b6-d017c293cd5c';
const mockErrorMessage = `Order ${mockOrderId} not found`;

jest.mock('react-toastify');
toast.success.mockImplementation(id => `Order ${id} cancelled successfully`);
toast.error.mockImplementation(message => `Unable to cancel order: ${message}`);

describe('cancelOrderStatusReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = cancelOrderStatusReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({ status: status.pending });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = { status: status.success };
    const state = cancelOrderStatusReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('cancelOrderSuccess', () => {
    it('should set status to success and fire a toast success message', () => {
      let state = { status: status.pending };
      state = cancelOrderStatusReducer(state, cancelOrderSuccess(mockOrderId));
      expect(state).toEqual({ status: status.success });
      expect(toast.success).toHaveBeenCalledWith(`Order ${mockOrderId} cancelled successfully`);
    });
  });

  describe('cancelOrderError', () => {
    it('should set status to failed and fire a toast error message', () => {
      let state = { status: status.pending };
      state = cancelOrderStatusReducer(state, cancelOrderError(mockErrorMessage));
      expect(state).toEqual({ status: status.failed });
      expect(toast.error).toHaveBeenCalledWith(`Unable to cancel order: ${mockErrorMessage}`);
    });
  });
});
