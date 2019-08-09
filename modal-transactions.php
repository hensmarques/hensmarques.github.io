<div id="modal-transactions" class="md-modal modal-transactions">
    <div class="modal-close-no-log md-close" onclick="$('#modal-transactions').removeClass('md-show')"></div>
    <div class="tabs-wrapper modal-content">
        <div class="tabs-nav">
            <ul class="tabs li-down-tabs-block free-tab-cabinet">
                <li class="li-down-tabs table-display-pay-tab-3 current">
                    <a tab-nav href="#tab_deposit">
                        <span class="link-text">Deposit</span>
                    </a>
                </li>
                
                <li class="li-down-tabs table-display-pay-tab-3">
                    <a tab-nav href="#tab_withdraw" class="tab-withdraw">
                        <span class="link-text">Withdraw</span>
                    </a>
                </li>
                
                <li class="li-down-tabs table-display-pay-tab-3">
                    <a tab-nav href="#tab_history" class="tab-history">
                        <span class="link-text">History</span>
                    </a>
                </li>
            </ul>
        </div>
        
        <div class="tab-content active" id="tab_deposit">
            <div class="push-text-deposit">
                <p>Make a deposit of <span>500 USD</span> or more and get <span>300 percent</span> for free to your account.                        </p>
            </div>
            
            <div class="panel">
                <form action="" method="POST" class="form-deposit">
                    <div class="col-flex-align-center col-md-2 hidden-sm">
                        <a href="#">
                            <img src="/assets/images/button-back.png" alt="Voltar" width="100" class="filtered">
                        </a>
                    </div>
                    
                    <div class="col-flex-align-center col-md-2 hidden-sm">
                        <img src="/assets/images/shield-deposit.png" alt="" width="116" class="filtered">
                    </div>
                    
                    <div class="col-flex-align-center col-md-3">
                        <div>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="depositAmount">
                                <div class="input-group-append">
                                    <span class="input-group-text" id="inputGroupPrepend">USD</span>
                                </div>
                            </div>
                            <span>= 124561.2343 <strong>WILD</strong></span>
                        </div>
                    </div>
                    
                    <div class="col-flex-align-center col-md-3">
                        <a href="#tab_pay" keep-li-active onclick="setTimeout(function() { $('#goToConfirm').trigger('click') }, 3000);" tab-nav class="button-green large block">Deposit</a>
                        <a href="#tab_confirm" tab-nav keep-li-active class="hide" id="goToConfirm"></a>
                    </div>
                </form>
            </div>
            
            
            <div class="text-center">
                <a href="#" style="margin: 20px 0;" class="button-green large outline" onclick="$('.tab-history').trigger('click')">History</a>
            </div>
        </div>
        
        <div class="tab-content" id="tab_pay">
            <div class="push-text-deposit">
                <p>Make a deposit of <span>500 USD</span> or more and get <span>300 percent</span> for free to your account.                        </p>
            </div>
            
            <div class="panel">
                <form action="" method="POST" class="row justify-content-center">
                    <div class="col-md-3">
                        <img src="/assets/images/qrcode.png" alt="" class="qrcode">
                    </div>
                    
                    <div class="col-md-5">
                        <div class="row">
                            <div class="col-md-6">
                                <p>Você precisará depositar:</p>
                                <div class="push-text-deposit ta-left"><p><span>234788.981 WILD</span></p></div>
                            </div>
                            <div class="col-md-6">
                                <p>Seu saldo será de:</p>
                                <div class="push-text-deposit ta-left"><p><span class="text-green">$ 2,850.00</span></p></div>
                            </div>
                            
                            <div class="col-md-12 mt-2">
                                <p class="mb-2">Transfira para o endereço de wallet ou scaneie o QRCode.</p>
                                <input type="text" value="4rT455yHJjgko7765sssS098mJkkjHHg789KjA" disabled class="form-control mb-3">
                                
                                <p class="mb-1">Transfira até:</p>
                                <h5 class="text-green">00:22:35</h5>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        <div class="tab-content" id="tab_confirm">
            <div class="push-text-deposit">
                <p>Make a deposit of <span>500 USD</span> or more and get <span>300 percent</span> for free to your account.                        </p>
            </div>
            
            <div class="panel">
                <div class="row justify-content-center">
                    <div class="col-md-6 tab_confirm-text">
                        <img class="filtered mr-4" src="assets/images/icon-confirm.png" alt="" width="78">
                        <h4>Transferência de WILD recebida com sucesso! <br>
                            Agora você já pode utilizar suas fichas
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tab-content" id="tab_withdraw">
            <div class="push-text-deposit">
                <p><span>Withdraw Available</span></p>
            </div>
            <div class="panel mb-5">
                <form action="" class="row justify-content-center">
                    <div class="col-md-4">
                        <p>Your current available balance</p>
                        <div class="push-text-deposit ta-left p-0"><p><span class="text-green">$ 2,850.00</span>USD</p></div>

                        <label style="margin-top: 30px;">Amount to withdraw</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="depositAmount">
                            <div class="input-group-append">
                                <span class="input-group-text" id="inputGroupPrepend"> USD</span>
                            </div>                            
                        </div>
                    </div>

                    <div class="col-md-4">
                        <label for="">WILD Withdrawal address</label>
                        <input type="text" placeholder="" class="form-control mb-4">
                        <label for="">Account password</label>
                        <input type="password" placeholder="" class="form-control">
                    </div>

                    <div class="col-md-9">
                        <hr style="border-top: 1px solid #394e61" />
                    </div>
                    <div class="col-md-4 text-center mt-3">
                        <label class="mb-0" for="">Withdrawal in WILD</label>
                        <div class="push-text-deposit mt-1 p-0"><p><span class="text-blue">0.00000056</span> WILD</p></div>
                    </div>
                    <div class="col-md-4 text-center mt-3">
                        <label class="mb-0" for="">Net Withdrawal in WILD</label>
                        <div class="push-text-deposit mt-1 p-0"><p><span class="text-blue">0.00000024</span> WILD</p></div>
                    </div>

                    <div class="col-md-12 text-center">
                        <a href="#" style="margin: 20px 0;" class="button-green large outline">Withdraw</a>
                    </div>
                </form>
            </div>
        </div>
        
        <div class="tab-content" id="tab_history">
            <div class="history-text text-center">
                If withdraw request hasn't been accepted yet you can cancel it by clicking "Cancel".<br>
                Your balance will be replenished immediately.    
            </div>
            
            <div class="history-filter d-flex">
                <label for="history_filter" class="mr-3">Filters:</label>
                <select name="history_filter" id="history_filter" class="form-control">
                    <option value="">Both</option>
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                </select>
            </div>
            
            <div class="table-responsive-sm">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Amount</th>
                            <th>Time Created</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Time Finished</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>600.00</td>
                            <td>2019-07-11 20:25</td>
                            <td>Deposit</td>
                            <td>In process</td>
                            <td> - </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>