<div id="modal-login" class="md-modal md-effect-2" style="overflow: hidden;">
    <div class="md-content">
        <div class="modal-content modal-content-reg-login">
            <div class="modal-close-no-log md-close" onclick="$('#modal-login').removeClass('md-show')"></div>
            <h5 class="modal-title-head" id="loginModalLabel">Login</h5>
            <div class="container">
                
                <div class="loader-overlay" id="login-loader">
                    <div class="loader"></div>
                </div>
                
                <div style="margin: auto" class="col-md-6 modal-login-block">
                    <div id="login-form_js">
                        <div class="modal-body" id="login-form_main">
                            <div class="login-form form-group">
                                <label for="phone">Login</label>
                                <input type="text" id="loginform-account" class="form-control" name="account" required="" placeholder="Login" autofocus="" aria-required="true">
                            </div>
                            
                            <div class="login-form form-group">
                                <label for="phone">Password</label>
                                <input type="password" id="loginform-password" class="form-control password-show" name="password" required="" placeholder="Password" aria-required="true">
                                <a class="show-password"></a>
                            </div>
                        </div>
                        
                        <div id="loginform-error" class="form-errors"></div>
                        
                        <div class="text-center mb-3">
                            <a href="#" onclick="$('.md-modal').removeClass('md-show'); $('#modal-recover-password').addClass('md-show')" class="text-white">Forgot password?</a>                        
                        </div>
                        
                        <div class="modal-footer">
                            
                            <button type="button" style="display: block;" class="main-btn reg-login-modal-btn play-btn-fill modal-btn" id="login-process">
                                <span>Login</span>
                            </button>
                            
                            <div style="text-align:center;width: 100%;" class=" have-an-account-block form-group">
                                <span class="have-an-account">Not registered yet?</span>
                                <button type="button" onclick="$('#modal-login').removeClass('md-show'); $('#modal-reg').addClass('md-show')" class="md-trigger link-reg " data-modal="modal-reg">
                                    <span>Join</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
