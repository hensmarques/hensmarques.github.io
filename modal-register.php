<div id="modal-reg" class="md-modal md-effect-2">
    <div class="md-content">
        <div class="modal-content modal-content-reg-login ">
            <div class="modal-close-no-log md-close " onclick="$('.md-modal, .ssm-overlay').removeClass('md-show').removeClass('active');" data-dismiss="modal"></div>
            <h5 class="modal-title-head" id="registerModalLabel">Join us</h5>
            <div class="container registration-block">
                <div class="registration-block-content">
                    <div class="float_left col-md-6 block-singup-banner center">
                        <div id="reg-form_js">
                            <div class="loader-overlay" id="reg-loader">
                                <div class="loader"></div>
                            </div>
                            
                            <div class="modal-body" id="reg-form_main">
                                
                                <div class="radio-container">
                                    <div class="form-item radio-btn nth-2">
                                        <input type="radio" name="exampleRadios" id="regByEmailRadio" value="option2" checked="">
                                        <label for="regByEmailRadio">
                                            <div class="label-content">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 205.996 205.996" style="enable-background:new 0 0 205.996 205.996;" xml:space="preserve" width="512px" height="512px">
                                                    <path d="M102.996,61.363c22.958,0,41.635,18.678,41.635,41.635c0,3.313,2.687,6,6,6s6-2.687,6-6   c0-29.574-24.061-53.635-53.635-53.635S49.36,73.424,49.36,102.998s24.061,53.635,53.635,53.635   c18.99,0,36.745-10.195,46.336-26.607c1.672-2.861,0.708-6.535-2.153-8.208c-2.86-1.67-6.535-0.707-8.208,2.153   c-7.448,12.745-21.233,20.662-35.976,20.662c-22.958,0-41.635-18.678-41.635-41.635S80.038,61.363,102.996,61.363z">
                                                    </path>
                                                    <path d="M205.698,95.053c-3.76-50.059-44.326-90.782-94.359-94.727C81.095-2.059,51.51,8.817,30.163,30.165   C8.815,51.513-2.061,81.1,0.324,111.341c3.931,49.847,44.483,90.399,94.329,94.329c2.747,0.217,5.484,0.323,8.214,0.323   c27.329,0,53.553-10.753,72.962-30.161c2.343-2.344,2.343-6.143,0-8.485s-6.142-2.344-8.485-0.001   c-18.862,18.861-45.012,28.47-71.747,26.361c-44.023-3.471-79.838-39.286-83.31-83.31c-2.108-26.735,7.5-52.887,26.361-71.747   c18.861-18.861,45.008-28.473,71.747-26.361c44.189,3.483,80.016,39.451,83.337,83.662c0.455,6.057,0.321,12.142-0.397,18.086   c-0.762,6.304-4.578,11.805-10.208,14.713c-5.095,2.633-10.819,2.623-15.706-0.026c-2.913-1.582-6.556-0.499-8.134,2.415   c-1.58,2.913-0.499,6.555,2.415,8.134c8.435,4.573,18.251,4.623,26.933,0.139c9.164-4.734,15.375-13.682,16.613-23.935   C206.06,108.758,206.211,101.887,205.698,95.053z">
                                                    </path>
                                                </svg>
                                                by email                                      
                                            </div>
                                        </label>
                                    </div>
                                    <div class="form-item radio-btn nth-2">
                                        <input type="radio" name="exampleRadios" id="regByPhoneRadio" value="option1">
                                        <label for="regByPhoneRadio">
                                            <div class="label-content">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 792 792" style="enable-background:new 0 0 792 792;" xml:space="preserve">
                                                    <path d="M557.75,792c0,0,71.889,0,71.889-71.997V71.997C629.639,0,557.75,0,557.75,0h-323.5c0,0-71.889,0-71.889,71.997v648.006   C162.361,792,234.25,792,234.25,792H557.75z M396,762.022c-19.841,0-35.944-16.104-35.944-35.944   c0-19.842,16.103-35.944,35.944-35.944s35.945,16.103,35.945,35.944C431.945,745.919,415.842,762.022,396,762.022z M306.139,43.888   c0-4.457,3.559-7.944,7.944-7.944h163.8c4.385,0,7.979,3.559,7.979,7.944v2.121c0,4.493-3.559,7.944-7.943,7.944H314.083   c-4.349,0-7.944-3.559-7.944-7.944V43.888z M198.306,89.861h395.389v575.111H198.306V89.861z">
                                                    </path>
                                                </svg>
                                                by phone
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="reg-form form-group">
                                    <label for="joinform-nickname">Nickname</label>
                                    <input type="text" name="name" id="joinform-nickname" class="form-control" maxlength="128" placeholder="Nickname">
                                </div>
                                
                                <div class="reg-form form-group" id="inputEmail">
                                    <label for="joinform-email">Email address</label>
                                    <input type="email" name="email" id="joinform-email" class="form-control" maxlength="128" placeholder="Email address">
                                </div>
                                
                                <div class="reg-form form-group" id="inputPhone" style="display: none;">
                                    <label for="joinform-phone">Phone number</label>
                                    <input id="joinform-phone" name="phone" class="form-control" type="tel" placeholder="Phone number">
                                    <div class="phonenumber-plus">+</div>
                                </div>
                                
                                <div class="reg-form form-group">
                                    <label for="joinform-password">Password</label>
                                    <input type="password" id="joinform-password" class="form-control password-show password" minlength="6" maxlength="32" placeholder="Password" required=""><div class="pstrength-bar" id="joinform-password_bar" style=" height: 5px; width: 0px;"></div><div class="pstrength-info" id="joinform-password_text"></div>
                                    <a class="show-password"></a>
                                </div>
                            </div>
                            <div id="reg-error" class="form-errors"></div>
                            
                            <div class="modal-footer">
                                <button type="button" style="display: block;" class="reg-login-modal-btn main-btn play-btn-fill modal-btn" id="reg-process">
                                    <span>Join</span>
                                </button>
                                
                                <div style="text-align:center;width: 100%;" class="have-an-account-block form-group">
                                    <span class="have-an-account">Do you have an account?</span>
                                    <button type="button" onclick="$('#modal-reg').removeClass('md-show'); $('#modal-login').addClass('md-show')" class="md-trigger link-reg" data-modal="modal-login">
                                        <span>Login</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</div>
