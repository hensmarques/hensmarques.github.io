import {
  setTrades,
  setAccounts,
  updateBalances,
  loadAccounts,
  loadBalances,
  loadL2Data,
  loadInstruments,
  loadTickers,
  loadOrders,
  loadOrderEvents,
  connectingQueueAdd,
  connectingQueueReconnect,
  orderEventTimeStamp,
  orderEventsFinished,
  updateOrderEventTimeStamp,
  loadProducts,
  refreshOrderEvents,
  newOrderEvents,
  updateTickers,
  refreshTickers,
  updateBook,
  refreshBook,
  setInstruments,
  changeInstrument,
  setFxBlueChartTimeFrame,
  loadSelectedFxBlueChartTimeFrame,
  selectedFxBlueChartTimeFrame,
  setInstrument,
  invalidInstrument,
  setProducts,
  login,
  autoConnect,
  authPending,
  authSuccess,
  authFailed,
  authNone,
  updateOrder,
  placeOrder,
  cancelOrder,
  cancelOrderSuccess,
  cancelOrderError,
  logout,
  loadLocation,
  setLocation,
  setLocationError,
  setOrderPending,
  setOrderAccepted,
  setOrderRejected,
  signup,
  signupPending,
  signupSuccess,
  signupError,
  signupNone,
  signupNextStep,
  getProfileSchema,
  minimalSchemaPending,
  minimalSchemaSuccess,
  minimalSchemaError,
  extendedSchemaPending,
  extendedSchemaSuccess,
  extendedSchemaError,
  resendVerification,
  setResendVerificationStatus,
  makeDeposit,
  depositRequestPending,
  depositRequestFailed,
  setDepositStatus,
  makeWithdrawal,
  withdrawalRequestPending,
  withdrawalRequestFailed,
  setWithdrawalStatus,
  loadHistory,
  loadCurrentBars,
  unsubscribeCurrentBars,
  loadUserSettings,
  setUserSettingsPending,
  setUserSettings,
  setUserSettingsError,
  updateSettings,
  setUpdateSettingsPending,
  setUpdateSettingsAccepted,
  setUpdateSettingsError,
  getSecretCode,
  setSecretCodePending,
  setSecretCode,
  setSecretCodeError,
  recreateSecretCode,
  resetSecretCodePending,
  resetSecretCode,
  resetSecretCodeError,
  uploadFiles,
  fileUploadPending,
  fileUploadSuccess,
  fileUploadFailed,
  defaultUploadFile,
  defaultUploadFilePending,
  defaultUploadFileSuccess,
  defaultUploadFileFailed,
  updateKycStatus,
  getKycStatus,
  kycStatusPending,
  kycStatusSuccess,
  kycStatusFailed,
  kycRequestStatus,
  kycRequestPending,
  kycRequestSuccess,
  kycRequestFailed,
  getUserProfile,
  userProfilePending,
  userProfileSuccess,
  userProfileFailed,
  updateUserProfile,
  updateProfilePending,
  updateProfileSuccess,
  updateProfileFailed,
  loadTransactions,
  getTransactionsList,
  getCompletedTransactionsList,
  transactionsPending,
  transactionsSuccess,
  transactionsFailed,
  completedTransactions,
  completedTransactionsFailed,
  setCurrentTransaction,
  verifyUser,
  verificationPending,
  verificationSuccess,
  verificationFailed,
  passwordResetRequest,
  passwordResetRequestPending,
  passwordResetRequestSuccess,
  passwordResetRequestFailed,
  passwordResetCommit,
  passwordResetCommitPending,
  passwordResetCommitSuccess,
  passwordResetCommitFailed,
  newPassword,
  newPasswordPending,
  newPasswordSuccess,
  newPasswordFailed,
  newPasswordNone,
  changePasswordWithCode,
  changePasswordWithCodePending,
  changePasswordWithCodeSuccess,
  changePasswordWithCodeFailed,
  passwordResetRequestVerify,
  loadExchangeSettings,
  exchangeSettingsPending,
  exchangeSettingsSuccess,
  exchangeSettingsFailed,
  getFile,
  filePending,
  fileSuccess,
  fileFailed,
  maintenanceMessageEnabled,
  maintenanceMessageStatus,
  maintenanceMessageMsg,
  maintenanceModeEnabled,
  maintenanceModeStatus,
  maintenanceModeMsg,
} from '../../src/actions';
import types from '../../src/actions/types';

describe('setTrades', () => {
  it('should return the action', () => {
    const trades = [
      {
        account: 'shift24',
        executionId: 7654321,
        fee: '0.00431254 BTC',
        instrument: 'BTCUSD',
        orderId: 1234567,
        price: '7954.33',
        quantity: '0.86250716',
        side: 'buy',
        status: 'Pending',
        time: '2018-06-28 12:48 PM',
        total: '6860.66657800',
        type: 'Trailing Stop Market',
      },
    ];
    const exchange = 'BITFINEX';
    const action = setTrades(trades, exchange);
    expect(action.type).toEqual(types.state.setTrades);
    expect(action.trades).toEqual(trades);
    expect(action.exchange).toEqual(exchange);
  });
});

describe('setAccounts', () => {
  it('should return the action', () => {
    const accounts = [
      {
        id: 123,
        status: 'active',
        balance: 500,
      },
    ];
    const action = setAccounts(accounts);
    expect(action.type).toEqual(types.state.setAccounts);
    expect(action.accounts).toEqual(accounts);
  });
});

describe('updateBalances', () => {
  it('should return the action', () => {
    const balances = [
      {
        currency: 'usd',
        balance: 500,
        available_for_trading: 500,
        available_for_withdrawal: 500,
      },
    ];
    const action = updateBalances(balances);
    expect(action.type).toEqual(types.state.updateBalances);
    expect(action.balances).toEqual(balances);
  });
});

describe('loadAccounts', () => {
  it('should return the action', () => {
    const action = loadAccounts();
    expect(action.type).toEqual(types.app.loadAccounts);
  });
});

describe('loadBalances', () => {
  it('should return the action', () => {
    const action = loadBalances();
    expect(action.type).toEqual(types.app.loadBalances);
  });
});

describe('loadL2Data', () => {
  it('should return the action', () => {
    const instrument = 'mockInstrument';
    const action = loadL2Data(instrument);
    expect(action.type).toEqual(types.app.loadL2Data);
    expect(action.instrument).toEqual(instrument);
  });
});

describe('loadInstruments', () => {
  it('should return the action', () => {
    const action = loadInstruments();
    expect(action.type).toEqual(types.app.loadInstruments);
  });
});

describe('loadTickers', () => {
  it('should return the action', () => {
    const action = loadTickers();
    expect(action.type).toEqual(types.app.loadTickerData);
  });
});

describe('loadOrders', () => {
  it('should return the action', () => {
    const action = loadOrders();
    expect(action.type).toEqual(types.app.loadOrders);
  });
});

describe('loadOrderEvents', () => {
  it('should return the action', () => {
    const action = loadOrderEvents();
    expect(action.type).toEqual(types.app.loadOrderEvents);
  });
});

describe('connectingQueueAdd', () => {
  it('should return the action', () => {
    const mockAction = { type: 'foo', payload: 'bar' };
    const action = connectingQueueAdd(mockAction);
    expect(action.type).toEqual(types.state.connectingQueueAdd);
    expect(action.action).toEqual(mockAction);
  });
});

describe('connectingQueueReconnect', () => {
  it('should return the action', () => {
    const mockAction = {type: 'foo', payload: 'bar'};
    const action = connectingQueueReconnect(mockAction);
    expect(action.type).toEqual(types.app.connectingQueueReconnect);
    expect(action.action).toEqual(mockAction);
  });
});

describe('orderEventTimeStamp', () => {
  it('should return the action', () => {
    const timestamp = 0;
    const action = orderEventTimeStamp(timestamp);
    expect(action.type).toEqual(types.state.orderEventTimeStamp); // type is undefined
    expect(action.orderEventTimeStamp).toEqual(timestamp);
  });
});

describe('orderEventsFinished', () => {
  it('should return the action', () => {
    const payload = true;
    const action = orderEventsFinished(payload);
    expect(action.type).toEqual(types.state.orderEventsFinished);
    expect(action.payload).toEqual(payload);
  });
});

describe('updateOrderEventTimeStamp', () => {
  it('should return the action', () => {
    const timestamp = 0;
    const action = updateOrderEventTimeStamp(timestamp);
    expect(action.type).toEqual(types.state.updateOrderEventTimeStamp);
    expect(action.orderEventTimeStamp).toEqual(timestamp);
  });
});

describe('loadProducts', () => {
  it('should return the action', () => {
    const action = loadProducts();
    expect(action.type).toEqual(types.app.loadProducts);
  });
});

describe('refreshOrderEvents', () => {
  it('should return the action', () => {
    const events = [{}, {}];
    const exchange = 'mockExchange';
    const action = refreshOrderEvents(events, exchange);
    expect(action.type).toEqual(types.state.refreshOrderEvents);
    expect(action.events).toEqual(events);
    expect(action.exchange).toEqual(exchange);
  });
});

describe('newOrderEvents', () => {
  it('should return the action', () => {
    const events = [{}, {}];
    const exchange = 'mockExchange';
    const action = newOrderEvents(events, exchange);
    expect(action.type).toEqual(types.state.newOrderEvents);
    expect(action.events).toEqual(events);
    expect(action.exchange).toEqual(exchange);
  });
});

describe('updateTickers', () => {
  it('should return the action', () => {
    const ticks = [{}, {}];
    const action = updateTickers(ticks);
    expect(action.type).toEqual(types.state.updateTickers);
    expect(action.ticks).toEqual(ticks);
  });
});

describe('refreshTickers', () => {
  it('should return the action', () => {
    const ticks = [{}, {}];
    const action = refreshTickers(ticks);
    expect(action.type).toEqual(types.state.refreshTickers);
    expect(action.ticks).toEqual(ticks);
  });
});

describe('updateBook', () => {
  it('should return the action', () => {
    const updates = [{}, {}];
    const exchange = 'mockExchange';
    const action = updateBook(updates, exchange);
    expect(action.type).toEqual(types.state.updateBook);
    expect(action.updates).toEqual(updates);
    expect(action.exchange).toEqual(exchange);
  });
});

describe('refreshBook', () => {
  it('should return the action', () => {
    const layers = [{}, {}];
    const exchange = 'mockExchange';
    const action = refreshBook(layers, exchange);
    expect(action.type).toEqual(types.state.refreshBook);
    expect(action.layers).toEqual(layers);
    expect(action.exchange).toEqual(exchange);
  });
});

describe('setInstruments', () => {
  it('should return the action', () => {
    const instruments = [{}, {}];
    const action = setInstruments(instruments);
    expect(action.type).toEqual(types.state.setInstruments);
    expect(action.instruments).toEqual(instruments);
  });
});

describe('changeInstrument', () => {
  it('should return the action', () => {
    const instrument = {};
    const action = changeInstrument(instrument);
    expect(action.type).toEqual(types.user.changeInstrument);
    expect(action.instrument).toEqual(instrument);
  });
});

describe('setFxBlueChartTimeFrame', () => {
  it('should return the action', () => {
    const timeframe = 1800;
    const action = setFxBlueChartTimeFrame(timeframe);
    expect(action.type).toEqual(types.user.setFxBlueChartTimeFrame);
    expect(action.timeFrame).toEqual(timeframe);
  });
});

describe('loadSelectedFxBlueChartTimeFrame', () => {
  it('should return the action', () => {
    const action = loadSelectedFxBlueChartTimeFrame();
    expect(action.type).toEqual(types.user.loadSelectedFxBlueChartTimeFrame);
  });
});

describe('selectedFxBlueChartTimeFrame', () => {
  it('should return the action', () => {
    const action = selectedFxBlueChartTimeFrame();
    expect(action.type).toEqual(types.user.selectedFxBlueChartTimeFrame);
    expect(action.timeFrame).toEqual(undefined);
  });
});

describe('setInstrument', () => {
  it('should return the action', () => {
    const instrument = 'foo';
    const instrumentObj = {};
    const action = setInstrument(instrument, instrumentObj);
    expect(action.type).toEqual(types.state.setInstrument);
    expect(action.instrument).toEqual(instrument);
    expect(action.instrumentObj).toEqual(instrumentObj);
  });
});

describe('invalidInstrument', () => {
  it('should return the action', () => {
    const instrument = {};
    const action = invalidInstrument(instrument);
    expect(action.type).toEqual(types.error.invalidInstrument);
    expect(action.instrument).toEqual(instrument);
  });
});

describe('setProducts', () => {
  it('should return the action', () => {
    const products = [
      {
        id: 'BTC',
        type: 'crypto',
        name: 'Bitcoin',
        precision: 8,
        withdrawalCommission: '5',
        depositCommission: '2',
        decimals: 8,
      },
    ];
    const action = setProducts(products);
    expect(action.type).toEqual(types.state.setProducts);
    expect(action.products).toEqual(products);
  });
});

describe('login', () => {
  it('should return the action', () => {
    const username = 'foo';
    const password = 'bar';
    const action = login(username, password);
    expect(action.type).toEqual(types.user.login);
    expect(action.username).toEqual(username);
    expect(action.password).toEqual(password);
  });
});

describe('autoConnect', () => {
  it('should return the action', () => {
    const action = autoConnect();
    expect(action.type).toEqual(types.app.autoConnect);
  });
});

describe('authPending', () => {
  it('should return the action', () => {
    const action = authPending();
    expect(action.type).toEqual(types.state.authPending);
  });
});

describe('authFailed', () => {
  it('should return the action', () => {
    const error = {
      error: 'error_code',
      error_description: 'Error description.',
    };
    const action = authFailed(error);
    expect(action.type).toEqual(types.state.authFailed);
    expect(action.error).toEqual(error);
  });
});

describe('authSuccess', () => {
  it('should return the action', () => {
    const username = 'foo';
    const action = authSuccess(username);
    expect(action.type).toEqual(types.state.authSuccess);
    expect(action.username).toEqual(username);
  });
});

describe('authNone', () => {
  it('should return the action', () => {
    const action = authNone();
    expect(action.type).toEqual(types.state.authNone);
  });
});

describe('updateOrder', () => {
  it('should return the action', () => {
    const order = {};
    const exchange = 'mockExchange';
    const action = updateOrder(order, exchange);
    expect(action.type).toEqual(types.state.updateOrder);
    expect(action.order).toEqual(order);
    expect(action.exchange).toEqual(exchange);
  });
});

describe('placeOrder', () => {
  it('should return the action', () => {
    const order = {};
    const action = placeOrder(order);
    expect(action.type).toEqual(types.user.placeOrder);
    expect(action.order).toEqual(order);
  });
});

describe('cancelOrder', () => {
  it('should return the action', () => {
    const orderId = 123456;
    const action = cancelOrder(orderId);
    expect(action.type).toEqual(types.user.cancelOrder);
    expect(action.orderId).toEqual(orderId);
  });
});

describe('cancelOrderSuccess', () => {
  it('should return the action', () => {
    const orderId = 123456;
    const action = cancelOrderSuccess(orderId);
    expect(action.type).toEqual(types.state.cancelOrderSuccess);
    expect(action.orderId).toEqual(orderId);
  });
});

describe('cancelOrderError', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = cancelOrderError(error);
    expect(action.type).toEqual(types.state.cancelOrderError);
    expect(action.message).toEqual(error);
  });
});

describe('logout', () => {
  it('should return the action', () => {
    const action = logout();
    expect(action.type).toEqual(types.user.logout);
  });
});

describe('loadLocation', () => {
  it('should return the action', () => {
    const action = loadLocation();
    expect(action.type).toEqual(types.app.loadLocation);
  });
});

describe('setLocation', () => {
  it('should return the action', () => {
    const location = 'mockLocation';
    const action = setLocation(location);
    expect(action.type).toEqual(types.state.setLocation);
    expect(action.location).toEqual(location);
  });
});

describe('setLocationError', () => {
  it('should return the action', () => {
    const error = 'mockLocationError';
    const action = setLocationError(error);
    expect(action.type).toEqual(types.state.setLocationError);
    expect(action.error).toEqual(error);
  });
});

describe('setOrderPending', () => {
  it('should return the action', () => {
    const action = setOrderPending();
    expect(action.type).toEqual(types.state.setOrderPending);
  });
});

describe('setOrderAccepted', () => {
  it('should return the action', () => {
    const id = 123456;
    const action = setOrderAccepted(id);
    expect(action.type).toEqual(types.state.setOrderAccepted);
  });
});

describe('setOrderRejected', () => {
  it('should return the action', () => {
    const message = 'Mock rejection message';
    const statusCode = 'DUPLICATED_USERNAME';
    const action = setOrderRejected(message, statusCode);
    expect(action.type).toEqual(types.state.setOrderRejected);
  });
});

describe('signup', () => {
  it('should return the action', () => {
    const signupData = {
      city: 'mockCity',
      country: 'mockCountry',
      dateOfBirth: '01-01-1990',
      email: 'foo@bar.com',
      firstName: 'Foo',
      middleName: 'Bar',
      password: 'password',
      phoneNumber: 123456,
      postalCode: 456789,
      stae: 'mockState',
      streetAddress: 'mockStreetAddress',
      lastName: 'Biz',
    };
    const action = signup(signupData);
    expect(action.type).toEqual(types.user.signup);
    expect(action.signupData).toEqual(signupData);
  });
});

describe('signupPending', () => {
  it('should return the action', () => {
    const action = signupPending();
    expect(action.type).toEqual(types.state.signupPending);
  });
});

// TODO: figure out this state
describe('signupSuccess', () => {
  it('should return the action', () => {
    // TODO: test for correct response
    const signup = {};
    const action = signupSuccess(signup);
    expect(action.type).toEqual(types.state.signupSuccess);
    expect(action.signup).toEqual(signup);
  });
});

describe('signupError', () => {
  it('should return the action', () => {
    const error = {
      status_code: 'STATUS_CODE',
      message: 'Error message.',
    };
    const action = signupError(error);
    expect(action.type).toEqual(types.state.signupError);
    expect(action.error).toEqual(error);
  });
});

describe('signupNone', () => {
  it('should return the action', () => {
    const action = signupNone();
    expect(action.type).toEqual(types.state.signupNone);
  });
});

describe('signupNextStep', () => {
  it('should return the action', () => {
    const verify = 'VERIFY';
    const action = signupNextStep(verify);
    expect(action.type).toEqual(types.state.signupNextStep);
    expect(action.nextStep).toEqual(verify);
  });
});

describe('getProfileSchema', () => {
  it('should return the action', () => {
    const action = getProfileSchema();
    expect(action.type).toEqual(types.app.getProfileSchema);
  });
});

describe('minimalSchemaPending', () => {
  it('should return the action', () => {
    const action = minimalSchemaPending();
    expect(action.type).toEqual(types.state.minimalSchemaPending);
  });
});

describe('minimalSchemaSuccess', () => {
  it('should return the action', () => {
    const properties = {};
    const required = true;
    const action = minimalSchemaSuccess(properties, required);
    expect(action.type).toEqual(types.state.minimalSchemaSuccess);
    expect(action.properties).toEqual(properties);
    expect(action.required).toEqual(required);
  });
});

describe('minimalSchemaError', () => {
  it('should return the action', () => {
    const error = {
      status_code: 'STATUS_CODE',
      message: 'Error message.',
    };
    const action = minimalSchemaError(error);
    expect(action.type).toEqual(types.state.minimalSchemaError);
    expect(action.error).toEqual(error);
  });
});

describe('extendedSchemaPending', () => {
  it('should return the action', () => {
    const action = extendedSchemaPending();
    expect(action.type).toEqual(types.state.extendedSchemaPending);
  });
});

describe('extendedSchemaSuccess', () => {
  it('should return the action', () => {
    const properties = [
      {
        name: 'Given name',
        required: true,
        type: 'text',
        placeholder: 'John',
        writeOnce: true,
        errorMessages: [],
      },
    ];
    const required = ['given_name'];
    const action = extendedSchemaSuccess(properties, required);
    expect(action.type).toEqual(types.state.extendedSchemaSuccess);
    expect(action.properties).toEqual(properties);
    expect(action.required).toEqual(required);
  });
});

describe('extendedSchemaError', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = extendedSchemaError(error);
    expect(action.type).toEqual(types.state.extendedSchemaError);
    expect(action.error).toEqual(error);
  });
});

describe('resendVerification', () => {
  it('should return the action', () => {
    const email = 'foo@bar.com';
    const action = resendVerification(email);
    expect(action.type).toEqual(types.user.resendVerification);
    expect(action.email).toEqual(email);
  });
});

describe('setResendVerificationStatus', () => {
  it('should return the action', () => {
    const status = 'accepted';
    const action = setResendVerificationStatus(status);
    expect(action.type).toEqual(types.state.setResendVerificationStatus);
    expect(action.resendVerification).toEqual(status);
  });
});

describe('makeDeposit', () => {
  it('should return the action', () => {
    const product = 'BTC';
    const amount = 1;
    const action = makeDeposit(product, amount);
    expect(action.type).toEqual(types.user.makeDeposit);
    expect(action.product).toEqual(product);
    expect(action.amount).toEqual(amount);
  });

  test('amount defaults to null', () => {
    const product = 'BTC';
    const action = makeDeposit(product);
    expect(action.type).toEqual(types.user.makeDeposit);
    expect(action.product).toEqual(product);
    expect(action.amount).toEqual(null);
  })
});

describe('depositRequestPending', () => {
  it('should return the action', () => {
    const action = depositRequestPending();
    expect(action.type).toEqual(types.state.depositRequestPending);
  });
});

describe('depositRequestFailed', () => {
  it('should return the action', () => {
    const message = 'mockMessage';
    const statusCode = 'mockStatusCode';
    const action = depositRequestFailed(message, statusCode);
    expect(action.type).toEqual(types.state.depositRequestFailed);
    expect(action.message).toEqual(message);
    expect(action.statusCode).toEqual(statusCode);
  });
});

describe('setDepositStatus', () => {
  it('should return the action', () => {
    const deposit = {
      amount: 1,
      currency: 'USD',
    };
    const action = setDepositStatus(deposit);
    expect(action.type).toEqual(types.state.setDepositStatus);
    expect(action.deposit).toEqual(deposit);
  });
});

describe('makeWithdrawal', () => {
  it('should return the action', () => {
    const withdrawalRequest = {
      currency_id: 'BTC',
      amount: 1,
      address: '1FCMHSWjy6cWPVoKQ5YM7FgY9C2XuMcMQf',
    };
    const action = makeWithdrawal(withdrawalRequest);
    expect(action.type).toEqual(types.user.makeWithdrawal);
    expect(action.withdrawalRequest).toEqual(withdrawalRequest);
  });
});

describe('withdrawalRequestPending', () => {
  it('should return the action', () => {
    const action = withdrawalRequestPending();
    expect(action.type).toEqual(types.state.withdrawalRequestPending);
  });
});

describe('withdrawalRequestFailed', () => {
  it('should return the action', () => {
    const message = 'errorMessage';
    const statusCode = 'statusCode';
    const action = withdrawalRequestFailed(message, statusCode);
    expect(action.type).toEqual(types.state.withdrawalRequestFailed);
    expect(action.message).toEqual(message);
    expect(action.statusCode).toEqual(statusCode);
  });
});

describe('setWithdrawalStatus', () => {
  it('should return the action', () => {
    const withdrawal = {
      id: '123',
      amount: 1,
      currency: 'BTC',
    };
    const action = setWithdrawalStatus(withdrawal);
    expect(action.type).toEqual(types.state.setWithdrawalStatus);
    expect(action.withdrawal).toEqual(withdrawal);
  });
});

describe('loadHistory', () => {
  it('should return the action', () => {
    const getBarsBlob = {
      symbolInfo: 'foo',
      resolution: '1',
      from: 1555265735,
      to: 1565265735,
      firstDataRequest: true,
      onErrorCallback: () => {},
    };
    const onHistoryCallback = () => {};
    const action = loadHistory(getBarsBlob, onHistoryCallback);
    expect(action.type).toEqual(types.app.loadHistory);
    expect(action.getBarsBlob).toEqual(getBarsBlob);
  });
});

describe('loadCurrentBars', () => {
  it('should return the action', () => {
    const getCurrentBarsBlob = {
      symbolInfo: 'foo',
      resolution: '1',
      subscribeUID: 'bar',
      onRealtimeCallback: () => {},
      onResetCacheNeededCallback: () => {},
    };
    const action = loadCurrentBars(getCurrentBarsBlob);
    expect(action.type).toEqual(types.app.loadCurrentBars);
    expect(action.getCurrentBarsBlob).toEqual(getCurrentBarsBlob);
  });
});

describe('unsubscribeCurrentBars', () => {
  it('should return the action', () => {
    const action = unsubscribeCurrentBars();
    expect(action.type).toEqual(types.app.unsubscribeCurrentBars);
  });
});

describe('loadUserSettings', () => {
  it('should return the action', () => {
    const action = loadUserSettings();
    expect(action.type).toEqual(types.app.loadUserSettings);
  });
});

describe('setUserSettingsPending', () => {
  it('should return the action', () => {
    const action = setUserSettingsPending();
    expect(action.type).toEqual(types.state.setUserSettingsPending);
  });
});

describe('setUserSettings', () => {
  it('should return the action', () => {
    const settings = {
      state: null,
      surname: null,
      city: null,
      country: null,
      is_allow_show_exchange_codes: false,
      is_using_2fa: false,
      is_using_2fa_for_withdrawal: true,
      client_user_id: null,
      given_name: null,
      middle_name: null,
      email_address: null,
      street_address: null,
      date_of_birth: null,
      postal_code: null,
      phone_number: null,
      status: 'success',
    };
    const action = setUserSettings(settings);
    expect(action.type).toEqual(types.state.setUserSettings);
    expect(action.settings).toEqual(settings);
  });
});

describe('setUserSettingsError', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = setUserSettingsError(error);
    expect(action.type).toEqual(types.state.setUserSettingsError);
  });
});

describe('updateSettings', () => {
  it('should return the action', () => {
    const settings = {
      state: null,
      surname: 'biz',
      city: null,
      country: null,
      is_allow_show_exchange_codes: false,
      is_using_2fa: false,
      is_using_2fa_for_withdrawal: true,
      client_user_id: null,
      given_name: 'foo',
      middle_name: 'bar',
      email_address: null,
      street_address: null,
      date_of_birth: null,
      postal_code: null,
      phone_number: null,
      status: 'success',
    };
    const action = updateSettings(settings);
    expect(action.type).toEqual(types.user.updateSettings);
    expect(action.settings).toEqual(settings);
  });
});

describe('setUpdateSettingsPending', () => {
  it('should return the action', () => {
    const action = setUpdateSettingsPending();
    expect(action.type).toEqual(types.state.setUpdateSettingsPending);
  });
});

describe('setUpdateSettingsAccepted', () => {
  it('should return the action', () => {
    const action = setUpdateSettingsAccepted();
    expect(action.type).toEqual(types.state.setUpdateSettingsAccepted);
  });
});

describe('setUpdateSettingsError', () => {
  it('should return the action', () => {
    const action = setUpdateSettingsError();
    expect(action.type).toEqual(types.state.setUpdateSettingsError);
  });
});

describe('getSecretCode', () => {
  it('should return the action', () => {
    const action = getSecretCode();
    expect(action.type).toEqual(types.user.getSecretCode);
  });
});

describe('setSecretCodePending', () => {
  it('should return the action', () => {
    const action = setSecretCodePending();
    expect(action.type).toEqual(types.state.setSecretCodePending);
  });
});

describe('setSecretCode', () => {
  it('should return the action', () => {
    const secretCode = 'foobar';
    const action = setSecretCode(secretCode);
    expect(action.type).toEqual(types.state.setSecretCode);
    expect(action.secretCode).toEqual(secretCode);
  });
});

describe('setSecretCodeError', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = setSecretCodeError(error);
    expect(action.type).toEqual(types.state.setSecretCodeError);
    expect(action.error).toEqual(error);
  });
});

describe('recreateSecretCode', () => {
  it('should return the action', () => {
    const secretCode = 'foobar';
    const action = recreateSecretCode(secretCode);
    expect(action.type).toEqual(types.user.recreateSecretCode);
  });
});

describe('resetSecretCodePending', () => {
  it('should return the action', () => {
    const action = resetSecretCodePending();
    expect(action.type).toEqual(types.state.resetSecretCodePending);
  });
});

describe('resetSecretCode', () => {
  it('should return the action', () => {
    const secretCode = 'foobar';
    const action = resetSecretCode(secretCode);
    expect(action.type).toEqual(types.state.resetSecretCode);
    expect(action.secretCode).toEqual(secretCode);
  });
});

describe('resetSecretCodeError', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = resetSecretCodeError(error);
    expect(action.type).toEqual(types.state.resetSecretCodeError);
    expect(action.error).toEqual(error);
  });
});

describe('uploadFiles', () => {
  it('should return the action', () => {
    const files = [{ name: 'foo', type: 'image/jpeg' }, { name: 'bar', type: 'application/pdf' }];
    const action = uploadFiles(files);
    expect(action.type).toEqual(types.user.uploadFiles);
    expect(action.files).toEqual(files);
  });
});

describe('fileUploadPending', () => {
  it('should return the action', () => {
    const action = fileUploadPending();
    expect(action.type).toEqual(types.state.fileUploadPending);
  });
});

describe('fileUploadSuccess', () => {
  it('should return the action', () => {
    const action = fileUploadSuccess();
    expect(action.type).toEqual(types.state.fileUploadSuccess);
  });
});

describe('fileUploadFailed', () => {
  xit('should return the action', () => {
    const action = fileUploadFailed();
    expect(action.type).toEqual(types.state.fileUploadFailed);
  });
});

describe('defaultUploadFile', () => {
  it('should return the action', () => {
    const file = new File(['test data'], 'document.jpg');
    const action = defaultUploadFile(file);
    expect(action.type).toEqual(types.user.defaultUploadFile);
    expect(action.file).toEqual(file);
  });
});

describe('defaultUploadFilePending', () => {
  it('should return the action', () => {
    const action = defaultUploadFilePending();
    expect(action.type).toEqual(types.state.defaultUploadFilePending);
  });
});

describe('defaultUploadFileSuccess', () => {
  it('should return the action', () => {
    const filename = 'document.jpg';
    const action = defaultUploadFileSuccess(filename);
    expect(action.type).toEqual(types.state.defaultUploadFileSuccess);
    expect(action.filename).toEqual(filename);
  });
});

describe('defaultUploadFileFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = defaultUploadFileFailed(error);
    expect(action.type).toEqual(types.state.defaultUploadFileFailed);
    expect(action.error).toEqual(error);
  });
});

describe('updateKycStatus', () => {
  it('should return the action', () => {
    const action = updateKycStatus();
    expect(action.type).toEqual(types.app.updateKycStatus);
  });
});

describe('getKycStatus', () => {
  it('should return the action', () => {
    const action = getKycStatus();
    expect(action.type).toEqual(types.app.getKycStatus);
  });
});

describe('kycStatusPending', () => {
  it('should return the action', () => {
    const action = kycStatusPending();
    expect(action.type).toEqual(types.state.kycStatusPending);
  });
});

describe('kycStatusSuccess', () => {
  it('should return the action', () => {
    const status = 'mockStatus';
    const action = kycStatusSuccess(status);
    expect(action.type).toEqual(types.state.kycStatusSuccess);
    expect(action.status).toEqual(status);
  });
});

describe('kycStatusFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = kycStatusFailed(error);
    expect(action.type).toEqual(types.state.kycStatusFailed);
    expect(action.error).toEqual(error);
  });
});

describe('kycRequestStatus', () => {
  it('should return the action', () => {
    const action = kycRequestStatus();
    expect(action.type).toEqual(types.app.kycRequestStatus);
  });
});

describe('kycRequestPending', () => {
  it('should return the action', () => {
    const action = kycRequestPending();
    expect(action.type).toEqual(types.state.kycRequestPending);
  });
});

describe('kycRequestSuccess', () => {
  it('should return the action', () => {
    const status = 'pending';
    const action = kycRequestSuccess(status);
    expect(action.type).toEqual(types.state.kycRequestSuccess);
    expect(action.status).toEqual(status);
  });
});

describe('kycRequestFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = kycRequestFailed(error);
    expect(action.type).toEqual(types.state.kycRequestFailed);
    expect(action.error).toEqual(error);
  });
});

describe('getUserProfile', () => {
  it('should return the action', () => {
    const action = getUserProfile();
    expect(action.type).toEqual(types.app.getUserProfile);
  });
});

describe('userProfilePending', () => {
  it('should return the action', () => {
    const action = userProfilePending();
    expect(action.type).toEqual(types.state.userProfilePending);
  });
});

describe('userProfileSuccess', () => {
  it('should return the action', () => {
    const profile = { foo: 'bar' };
    const action = userProfileSuccess(profile);
    expect(action.type).toEqual(types.state.userProfileSuccess);
    expect(action.profile).toEqual(profile);
  });
});

describe('userProfileFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = userProfileFailed(error);
    expect(action.type).toEqual(types.state.userProfileFailed);
    expect(action.error).toEqual(error);
  });
});

describe('updateUserProfile', () => {
  it('should return the action', () => {
    const kycFormDataPayload = {
      custom_profile: JSON.stringify({
        country: 'France',
        street_address: 'Main street',
        city: 'Paris',
        date_of_birth: 963316497000,
        surname: 'Doe',
        phone_number: '123456789',
        state_province: 'Paris',
        given_name: 'John',
        middle_name: 'B',
        postal_code: 'ABC123',
        document: 'document.jpg',
      }),
    };
    const action = updateUserProfile(kycFormDataPayload);
    expect(action.type).toEqual(types.app.updateUserProfile);
    expect(action.kycFormDataPayload).toEqual(kycFormDataPayload);
  });
});

describe('updateProfilePending', () => {
  it('should return the action', () => {
    const action = updateProfilePending();
    expect(action.type).toEqual(types.state.updateProfilePending);
  });
});

describe('updateProfileSuccess', () => {
  it('should return the action', () => {
    const profile = {
      custom_profile: JSON.stringify({
        country: 'France',
        street_address: 'Main street',
        city: 'Paris',
        date_of_birth: 963316497000,
        surname: 'Doe',
        phone_number: '123456789',
        state_province: 'Paris',
        given_name: 'John',
        middle_name: 'B',
        postal_code: 'ABC123',
        document: 'document.jpg',
      }),
    };
    const action = updateProfileSuccess(profile);
    expect(action.type).toEqual(types.state.updateProfileSuccess);
    expect(action.profile).toEqual(profile);
  });
});

describe('updateProfileFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = updateProfileFailed(error);
    expect(action.type).toEqual(types.state.updateProfileFailed);
    expect(action.error).toEqual(error);
  });
});

describe('loadTransactions', () => {
  it('should return the action', () => {
    const action = loadTransactions();
    expect(action.type).toEqual(types.app.loadTransactions);
  });
});

describe('getTransactionsList', () => {
  it('should return the action', () => {
    const action = getTransactionsList();
    expect(action.type).toEqual(types.app.getTransactionsList);
  });
});

describe('getCompletedTransactionsList', () => {
  it('should return the action', () => {
    const data = { start_time: 0 };
    const action = getCompletedTransactionsList(data);
    expect(action.type).toEqual(types.app.getCompletedTransactionsList);
    expect(action.data).toEqual(data);
  });
});

describe('transactionsPending', () => {
  it('should return the action', () => {
    const action = transactionsPending();
    expect(action.type).toEqual(types.state.transactionsPending);
  });
});

describe('transactionsSuccess', () => {
  it('should return the action', () => {
    const transactions = [{ id: '1' }, { id: '2' }];
    const action = transactionsSuccess(transactions);
    expect(action.type).toEqual(types.state.transactionsSuccess);
    expect(action.transactions).toEqual(transactions);
  });
});

describe('transactionsFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = transactionsFailed(error);
    expect(action.type).toEqual(types.state.transactionsFailed);
    expect(action.error).toEqual(error);
  });
});

describe('completedTransactions', () => {
  it('should return the action', () => {
    const transactions = [
      {
        type: 'deposit',
        reason: null,
        description: null,
        id: 'USD-1',
        status: 'succeeded',
        address: null,
        confirmations: null,
        creation_time: 1564669475391,
        modification_time: 1564669475391,
        currency_id: 'USD',
        amount: '50000',
        post_balance: '49000',
        internal_transaction_id: 'dd305575-856a-4a67-98e9-991a003606b9',
        transaction_id: null,
        confirmations_needed: null,
      },
    ];
    const action = completedTransactions(transactions);
    expect(action.type).toEqual(types.state.completedTransactions);
    expect(action.transactions).toEqual(transactions);
  });
});

describe('completedTransactionsFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = completedTransactionsFailed(error);
    expect(action.type).toEqual(types.state.completedTransactionsFailed);
    expect(action.error).toEqual(error);
  });
});

describe('setCurrentTransaction', () => {
  it('should return the action', () => {
    const transaction = { id: '1' };
    const action = setCurrentTransaction(transaction);
    expect(action.type).toEqual(types.state.setCurrentTransaction);
    expect(action.transaction).toEqual(transaction);
  });
});

describe('verifyUser', () => {
  it('should return the action', () => {
    const email = 'email';
    const resetFlow = 'resetFlow';
    const hash = 'hash';
    const action = verifyUser(resetFlow, hash, email);
    expect(action.type).toEqual(types.app.verifyUser);
    expect(action.hash).toEqual(hash);
  });
});

describe('verificationPending', () => {
  it('should return the action', () => {
    const action = verificationPending();
    expect(action.type).toEqual(types.state.verificationPending);
  });
});

describe('verificationSuccess', () => {
  it('should return the action', () => {
    const action = verificationSuccess();
    expect(action.type).toEqual(types.state.verificationSuccess);
  });
});

describe('verificationFailed', () => {
  it('should return the action', () => {
    const action = verificationFailed();
    expect(action.type).toEqual(types.state.verificationFailed);
  });
});

describe('passwordResetRequest', () => {
  it('should return the action', () => {
    const email = 'foo@bar.com';
    const action = passwordResetRequest(email);
    expect(action.type).toEqual(types.user.passwordResetRequest);
    expect(action.email).toEqual(email);
  });
});

describe('passwordResetRequestPending', () => {
  it('should return the action', () => {
    const action = passwordResetRequestPending();
    expect(action.type).toEqual(types.state.passwordResetRequestPending);
  });
});

describe('passwordResetRequestSuccess', () => {
  it('should return the action', () => {
    const action = passwordResetRequestSuccess();
    expect(action.type).toEqual(types.state.passwordResetRequestSuccess);
  });
});

describe('passwordResetRequestFailed', () => {
  it('should return the action', () => {
    const action = passwordResetRequestFailed();
    expect(action.type).toEqual(types.state.passwordResetRequestFailed);
  });
});

describe('passwordResetCommit', () => {
  it('should return the action', () => {
    const hash = 'abc123';
    const newPassword = 'foobar';
    const action = passwordResetCommit(hash, newPassword);
    expect(action.type).toEqual(types.user.passwordResetCommit);
    expect(action.hash).toEqual(hash);
    expect(action.newPassword).toEqual(newPassword);
  });
});

describe('passwordResetCommitPending', () => {
  it('should return the action', () => {
    const action = passwordResetCommitPending();
    expect(action.type).toEqual(types.state.passwordResetCommitPending);
  });
});

describe('passwordResetCommitSuccess', () => {
  it('should return the action', () => {
    const action = passwordResetCommitSuccess();
    expect(action.type).toEqual(types.state.passwordResetCommitSuccess);
  });
});

describe('passwordResetCommitFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = passwordResetCommitFailed(error);
    expect(action.type).toEqual(types.state.passwordResetCommitFailed);
    expect(action.error).toEqual(error);
  });
});

describe('newPassword', () => {
  it('should return the action', () => {
    const passwordPayload = 'foobar';
    const action = newPassword(passwordPayload);
    expect(action.type).toEqual(types.user.newPassword);
    expect(action.passwordPayload).toEqual(passwordPayload);
  });
});

describe('newPasswordPending', () => {
  it('should return the action', () => {
    const action = newPasswordPending();
    expect(action.type).toEqual(types.state.newPasswordPending);
  });
});

describe('newPasswordSuccess', () => {
  it('should return the action', () => {
    const action = newPasswordSuccess();
    expect(action.type).toEqual(types.state.newPasswordSuccess);
  });
});

describe('newPasswordFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = newPasswordFailed(error);
    expect(action.type).toEqual(types.state.newPasswordFailed);
    // expect(action.error).toEqual(error);
  });
});

describe('newPasswordNone', () => {
  it('should return the action', () => {
    const action = newPasswordNone();
    expect(action.type).toEqual(types.state.newPasswordNone);
  });
});

describe('changePasswordWithCode', () => {
  it('should return the action', () => {
    const passwordPayload = {
      username: 'foo@bar.com',
      code: '123456',
      password: 'foobar12*',
      new_password: 'foobar12*',
    };
    const action = changePasswordWithCode(passwordPayload);
    expect(action.type).toEqual(types.user.changePasswordWithCode);
    expect(action.passwordPayload).toEqual(passwordPayload);
  });
});

describe('changePasswordWithCodePending', () => {
  it('should return the action', () => {
    const action = changePasswordWithCodePending();
    expect(action.type).toEqual(types.state.changePasswordWithCodePending);
  });
});

describe('changePasswordWithCodeSuccess', () => {
  it('should return the action', () => {
    const action = changePasswordWithCodeSuccess();
    expect(action.type).toEqual(types.state.changePasswordWithCodeSuccess);
  });
});

describe('changePasswordWithCodeFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = changePasswordWithCodeFailed(error);
    expect(action.type).toEqual(types.state.changePasswordWithCodeFailed);
    expect(action.error).toEqual(error);
  });
});

describe('passwordResetRequestVerify', () => {
  it('should return the action', () => {
    const action = passwordResetRequestVerify();
    expect(action.type).toEqual(types.state.passwordResetRequestVerify);
  });
});

describe('loadExchangeSettings', () => {
  it('should return the action', () => {
    const action = loadExchangeSettings();
    expect(action.type).toEqual(types.app.loadExchangeSettings);
  });
});

describe('exchangeSettingsPending', () => {
  it('should return the action', () => {
    const action = exchangeSettingsPending();
    expect(action.type).toEqual(types.state.exchangeSettingsPending);
  });
});

describe('exchangeSettingsSuccess', () => {
  it('should return the action', () => {
    const settings = {
      foo: 'bar',
      biz: 'bang',
    };
    const action = exchangeSettingsSuccess(settings);
    expect(action.type).toEqual(types.state.exchangeSettingsSuccess);
    expect(action.settings).toEqual(settings);
  });
});

describe('exchangeSettingsFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = exchangeSettingsFailed(error);
    expect(action.type).toEqual(types.state.exchangeSettingsFailed);
    expect(action.error).toEqual(error);
  });
});

describe('getFile', () => {
  it('should return the action', () => {
    const accessor = 'foobarbiz-document.jpg';
    const action = getFile(accessor);
    expect(action.type).toEqual(types.app.getFile);
    expect(action.accessor).toEqual(accessor);
  });
});

describe('filePending', () => {
  it('should return the action', () => {
    const action = filePending();
    expect(action.type).toEqual(types.state.filePending);
  });
});

describe('fileSuccess', () => {
  it('should return the action', () => {
    const file = new File(['test data'], 'document.jpg');
    const action = fileSuccess(file);
    expect(action.type).toEqual(types.state.fileSuccess);
    expect(action.file).toEqual(file);
  });
});

describe('fileFailed', () => {
  it('should return the action', () => {
    const error = 'mockError';
    const action = fileFailed(error);
    expect(action.type).toEqual(types.state.fileFailed);
    expect(action.error).toEqual(error);
  });
});

describe('maintenanceMessageEnabled', () => {
  it('should return the action', () => {
    const status = true;
    const isConnectionError = false;
    const action = maintenanceMessageEnabled(status, isConnectionError);
    expect(action.type).toEqual(types.app.maintenanceMessageEnabled);
    expect(action.status).toEqual(status);
    expect(action.isConnectionError).toEqual(isConnectionError);
  });
});

describe('maintenanceMessageStatus', () => {
  it('should return the action', () => {
    const status = true;
    const action = maintenanceMessageStatus(status);
    expect(action.type).toEqual(types.app.maintenanceMessageStatus);
    expect(action.status).toEqual(status);
  });
});

describe('maintenanceMessageMsg', () => {
  it('should return the action', () => {
    const msg = {
      msg: `Connection error. Some pages are unavailable. Please, try again later.`,
      translate: `MAINTENANCE_MODE.CONNECTION_ERROR_MESSAGE`
    };
    const action = maintenanceMessageMsg(msg);
    expect(action.type).toEqual(types.app.maintenanceMessageMsg);
    expect(action.msg).toEqual(msg);
  });
});

describe('maintenanceModeEnabled', () => {
  it('should return the action', () => {
    const status = true;
    const action = maintenanceModeEnabled(status);
    expect(action.type).toEqual(types.app.maintenanceModeEnabled);
    expect(action.status).toEqual(status);
  });
});

describe('maintenanceModeStatus', () => {
  it('should return the action', () => {
    const status = true;
    const action = maintenanceModeStatus(status);
    expect(action.type).toEqual(types.app.maintenanceModeStatus);
    expect(action.status).toEqual(status);
  });
});

describe('maintenanceModeMsg', () => {
  it('should return the action', () => {
    const msg = {
      msg: `Connection error. Some pages are unavailable. Please, try again later.`,
      translate: `MAINTENANCE_MODE.CONNECTION_ERROR_MESSAGE`
    };
    const action = maintenanceModeMsg(msg);
    expect(action.type).toEqual(types.app.maintenanceModeMsg);
    expect(action.msg).toEqual(msg);
  });
});
