
<div id="modal-profile" class="md-modal modal-profile md-effect-2">
    <div class="modal-close-no-log md-close" onclick="$('#modal-profile').removeClass('md-show')"></div>
    <div class="tabs-wrapper modal-content">
        <div class="tabs-nav">
            <ul class="tabs li-down-tabs-block free-tab-cabinet">
                <li class="li-down-tabs table-display-pay-tab-3 current">
                    <a tab-nav href="#my_data">
                        <span class="link-text">My Data</span>
                    </a>
                </li>
                <li class="li-down-tabs table-display-pay-tab-3">
                    <a tab-nav href="#verification">
                        <span class="link-text">Verification</span>
                    </a>
                </li>
            </ul>
        </div>
        
        <div class="tab-content active" id="my_data">
            
            <div class="gardient profile-blocks">
                <div id="profileModal">
                    <div class="loader-overlay" id="profile-loader">
                        <div class="loader"></div>
                    </div>
                    
                    <form id="profileModalForm" autocomplete="off">
                        <div class="panel mt-4 row">
                            <div class="float_left input-form form-group col-md-6">
                                <label for="email">E-mail</label>
                                <div class="input-icon profile-icon-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 205.996 205.996" style="enable-background:new 0 0 205.996 205.996;" xml:space="preserve" width="512px" height="512px">
                                        <path d="M102.996,61.363c22.958,0,41.635,18.678,41.635,41.635c0,3.313,2.687,6,6,6s6-2.687,6-6   c0-29.574-24.061-53.635-53.635-53.635S49.36,73.424,49.36,102.998s24.061,53.635,53.635,53.635   c18.99,0,36.745-10.195,46.336-26.607c1.672-2.861,0.708-6.535-2.153-8.208c-2.86-1.67-6.535-0.707-8.208,2.153   c-7.448,12.745-21.233,20.662-35.976,20.662c-22.958,0-41.635-18.678-41.635-41.635S80.038,61.363,102.996,61.363z" fill="#f7ac24"></path>
                                        <path d="M205.698,95.053c-3.76-50.059-44.326-90.782-94.359-94.727C81.095-2.059,51.51,8.817,30.163,30.165   C8.815,51.513-2.061,81.1,0.324,111.341c3.931,49.847,44.483,90.399,94.329,94.329c2.747,0.217,5.484,0.323,8.214,0.323   c27.329,0,53.553-10.753,72.962-30.161c2.343-2.344,2.343-6.143,0-8.485s-6.142-2.344-8.485-0.001   c-18.862,18.861-45.012,28.47-71.747,26.361c-44.023-3.471-79.838-39.286-83.31-83.31c-2.108-26.735,7.5-52.887,26.361-71.747   c18.861-18.861,45.008-28.473,71.747-26.361c44.189,3.483,80.016,39.451,83.337,83.662c0.455,6.057,0.321,12.142-0.397,18.086   c-0.762,6.304-4.578,11.805-10.208,14.713c-5.095,2.633-10.819,2.623-15.706-0.026c-2.913-1.582-6.556-0.499-8.134,2.415   c-1.58,2.913-0.499,6.555,2.415,8.134c8.435,4.573,18.251,4.623,26.933,0.139c9.164-4.734,15.375-13.682,16.613-23.935   C206.06,108.758,206.211,101.887,205.698,95.053z" fill="#f7ac24"></path>
                                    </svg>
                                </div>
                                <input type="text" class="form-control input-profile mb-4" id="profile_email" autocomplete="off" name="ProfileAccessForm[email]" placeholder="E-mail" maxlength="128">
                                <label for="phone">Phone number</label>
                                <div class="input-icon profile-icon-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 792 792" style="enable-background:new 0 0 792 792;" xml:space="preserve">
                                        <path d="M557.75,792c0,0,71.889,0,71.889-71.997V71.997C629.639,0,557.75,0,557.75,0h-323.5c0,0-71.889,0-71.889,71.997v648.006   C162.361,792,234.25,792,234.25,792H557.75z M396,762.022c-19.841,0-35.944-16.104-35.944-35.944   c0-19.842,16.103-35.944,35.944-35.944s35.945,16.103,35.945,35.944C431.945,745.919,415.842,762.022,396,762.022z M306.139,43.888   c0-4.457,3.559-7.944,7.944-7.944h163.8c4.385,0,7.979,3.559,7.979,7.944v2.121c0,4.493-3.559,7.944-7.943,7.944H314.083   c-4.349,0-7.944-3.559-7.944-7.944V43.888z M198.306,89.861h395.389v575.111H198.306V89.861z" fill="#f7ac24"></path>
                                    </svg>
                                </div>
                                <input maxlength="19" type="text" class="form-control input-profile mb-4" id="profile_phone" autocomplete="off" name="ProfileAccessForm[phone]" placeholder="Phone number">
                            </div>
                            
                            <div class="float_left input-form form-group col-md-6">
                                <label for="phone">Password</label>
                                <div class="input-icon profile-icon-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512" width="512px" height="512px">
                                        <path d="m409.6,197.3h-18v-50.6c0-74.8-60.8-135.7-135.6-135.7s-135.6,60.9-135.6,135.6v50.6h-17.9c-17.7,0-32.1,14.4-32.1,32.1v239.6c0,17.7 14.4,32.1 32.1,32.1h307.2c17.7,0 32.1-14.4 32.1-32.1v-239.6c-0.1-17.6-14.5-32-32.2-32zm-248.4-50.7c0-52.3 42.5-94.8 94.8-94.8 52.3,0 94.8,42.5 94.8,94.8v50.5h-189.6v-50.5zm239.6,313.6h-289.6v-222.1h289.7v222.1z" fill="#f7ac24"></path>
                                        <path d="m256,429.7c11.3,0 20.4-9.1 20.4-20.4v-52.6c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v52.6c2.84217e-14,11.2 9.1,20.4 20.4,20.4z" fill="#f7ac24"></path>
                                    </svg>
                                </div>
                                <input maxlength="32" type="password" class="form-control input-profile mb-4" id="profile_pwd_old" autocomplete="off" placeholder="Old password" name="ProfileAccessForm[password_old]">
                                
                                <div class="input-icon profile-icon-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512" width="512px" height="512px">
                                        <path fill="#2e4956" d="m409.6,197.3h-18v-50.6c0-74.8-60.8-135.7-135.6-135.7s-135.6,60.9-135.6,135.6v50.6h-17.9c-17.7,0-32.1,14.4-32.1,32.1v239.6c0,17.7 14.4,32.1 32.1,32.1h307.2c17.7,0 32.1-14.4 32.1-32.1v-239.6c-0.1-17.6-14.5-32-32.2-32zm-248.4-50.7c0-52.3 42.5-94.8 94.8-94.8 52.3,0 94.8,42.5 94.8,94.8v50.5h-189.6v-50.5zm239.6,313.6h-289.6v-222.1h289.7v222.1z"></path>
                                        <path fill="#2e4956" d="m256,429.7c11.3,0 20.4-9.1 20.4-20.4v-52.6c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v52.6c2.84217e-14,11.2 9.1,20.4 20.4,20.4z"></path>
                                    </svg>
                                </div>
                                <input maxlength="32" type="password" class="form-control input-profile mb-4" id="profile_pwd_new_again" placeholder="New password" name="ProfileAccessForm[password]" autocomplete="off">
                                
                                <div class="input-icon profile-icon-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512" width="512px" height="512px">
                                        <path fill="#2e4956" d="m409.6,197.3h-18v-50.6c0-74.8-60.8-135.7-135.6-135.7s-135.6,60.9-135.6,135.6v50.6h-17.9c-17.7,0-32.1,14.4-32.1,32.1v239.6c0,17.7 14.4,32.1 32.1,32.1h307.2c17.7,0 32.1-14.4 32.1-32.1v-239.6c-0.1-17.6-14.5-32-32.2-32zm-248.4-50.7c0-52.3 42.5-94.8 94.8-94.8 52.3,0 94.8,42.5 94.8,94.8v50.5h-189.6v-50.5zm239.6,313.6h-289.6v-222.1h289.7v222.1z"></path>
                                        <path fill="#2e4956" d="m256,429.7c11.3,0 20.4-9.1 20.4-20.4v-52.6c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v52.6c2.84217e-14,11.2 9.1,20.4 20.4,20.4z"></path>
                                    </svg>
                                </div>
                                <input maxlength="32" type="password" class="form-control input-profile mb-4" id="profile_pwd" placeholder="Password confirmation" name="ProfileAccessForm[password_new_again]" autocomplete="off">
                            </div>
                        </div>
                        
                        <div class="modal-footer text-center mt-4">
                            <div id="profile-error" class="form-errors"></div>
                            <button type="submit" class="button-green large outline mb-5">Update profile</button>        
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        
        <div class="tab-content" id="verification">
            <form id="profileModalForm" autocomplete="off">
                <div class="panel mt-4 row">
                    <div class="col-md-4">
                        <input type="text" placeholder="Username" class="form-control mb-4">
                        <input type="text" placeholder="Birthdate" class="form-control mb-4">
                        <input type="text" placeholder="ZIP Code" class="form-control mb-4">
                        
                        <div class="custom-radio d-flex justify-content-center">
                            <input type="radio" id="gender_male" name="gender">
                            <label class="mr-5" for="gender_male">Male</label>
                            
                            <input type="radio" id="gender_femae" name="gender">
                            <label for="gender_femae">Female</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="text" placeholder="First name" class="form-control mb-4">
                        <input type="text" placeholder="Home address" class="form-control mb-4">
                        <input type="text" placeholder="Passport number" class="form-control mb-4">
                        
                        <div class="block-upload">
                            <div class="input-block-img">
                                <p>Documents:                            
                                    <span id="status_comment">
                                        <span id="verificationStatusCaption">Not verified</span>
                                    </span>
                                </p>
                                <i class="cabinet__box-svg cabinet__box-upload">
                                    <svg class="icon">
                                        <svg id="icon_upload" viewBox="0 0 19.2 17.5" width="100%" height="100%">
                                            <path d="M17.8 17.5H1.4c-.3 0-.5-.2-.5-.5v-5.5c0-.3.2-.5.5-.5s.5.2.5.5v5h15.4v-5c0-.3.2-.5.5-.5s.5.2.5.5V17c0 .3-.3.5-.5.5zm0 0"></path>
                                            <path d="M9.6 13.2c-.3 0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v12.2c0 .3-.2.5-.5.5zm0 0"></path>
                                            <path d="M9.6 13.4c-.1 0-.3-.1-.4-.1L3.1 6.9c-.1-.2-.1-.5.1-.7.2-.2.5-.2.7 0l5.7 5.9 5.7-5.9c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-6 6.3c-.1.1-.3.2-.4.2zm0 0"></path>
                                        </svg>
                                    </svg>
                                </i>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="text" placeholder="Last name" class="form-control mb-4">
                        <input type="text" placeholder="City" class="form-control mb-4">
                        <select id="profiledataform-country" class="form-control mb-4" name="ProfileDataForm[country]" aria-required="true" aria-invalid="false">
                            <option value="643" selected="">Russia</option>
                            <option value="112">Belarus</option>
                            <option value="398">Kazakhstan</option>
                            <option value="498">Moldova</option>
                            <option value="804">Ukraine</option>
                            <option value="4">Afghanistan</option>
                            <option value="8">Albania</option>
                            <option value="12">Algeria</option>
                            <option value="20">Andorra</option>
                            <option value="24">Angola</option>
                            <option value="660">Anguilla</option>
                            <option value="10">Antarctica</option>
                            <option value="28">Antigua and Barbuda</option>
                            <option value="32">Argentina</option>
                            <option value="51">Armenia</option>
                            <option value="533">Aruba</option>
                            <option value="36">Australia</option>
                            <option value="40">Austria</option>
                            <option value="31">Azerbaijan</option>
                            <option value="44">Bahamas</option>
                            <option value="48">Bahrain</option>
                            <option value="50">Bangladesh</option>
                            <option value="52">Barbados</option>
                            <option value="56">Belgium</option>
                            <option value="84">Belize</option>
                            <option value="204">Benin</option>
                            <option value="60">Bermuda</option>
                            <option value="64">Bhutan</option>
                            <option value="68">Bolivia</option>
                            <option value="70">Bosnia and Herzegovina</option>
                            <option value="72">Botswana</option>
                            <option value="74">Bouvet Island</option>
                            <option value="76">Brazil</option>
                            <option value="92">British Virgin Islands</option>
                            <option value="86">British Virgin Islands</option>
                            <option value="96">Brunei</option>
                            <option value="100">Bulgaria</option>
                            <option value="854">Burkina-Faso</option>
                            <option value="108">Burundi</option>
                            <option value="132">Cabo-Verde</option>
                            <option value="116">Cambodia</option>
                            <option value="120">Cameroon</option>
                            <option value="124">Canada</option>
                            <option value="136">Cayman</option>
                            <option value="140">Central African Republic</option>
                            <option value="148">Chad</option>
                            <option value="152">Chile</option>
                            <option value="156">China</option>
                            <option value="162">Christmas Region</option>
                            <option value="166">Cocos Islands</option>
                            <option value="170">Colombia</option>
                            <option value="174">Comors</option>
                            <option value="178">Congo</option>
                            <option value="180">Congo, DR</option>
                            <option value="184">Cook Islands</option>
                            <option value="188">Costa Rica</option>
                            <option value="384">Côte D'ivoire</option>
                            <option value="191">Croatia</option>
                            <option value="192">Cuba</option>
                            <option value="196">Cyprus</option>
                            <option value="203">Czech Republic</option>
                            <option value="208">Denmark</option>
                            <option value="262">Djibouti</option>
                            <option value="212">Dominica</option>
                            <option value="214">Dominican Republic</option>
                            <option value="218">Ecuador</option>
                            <option value="818">Egypt</option>
                            <option value="248">Eland Islands</option>
                            <option value="222">El Salvador</option>
                            <option value="226">Equatorial Guinea</option>
                            <option value="232">Eritrea</option>
                            <option value="233">Estonia</option>
                            <option value="231">Ethiopia</option>
                            <option value="234">Faeroe Islands</option>
                            <option value="238">Falkland Islands</option>
                            <option value="242">Fiji</option>
                            <option value="246">Finland</option>
                            <option value="250">France</option>
                            <option value="258">French Polynesia</option>
                            <option value="260">French Southern and Antarctic Lands</option>
                            <option value="266">Gabonese Republic</option>
                            <option value="270">Gambia</option>
                            <option value="268">Georgia</option>
                            <option value="276">Germany</option>
                            <option value="288">Ghana</option>
                            <option value="292">Gibraltar</option>
                            <option value="300">Greece</option>
                            <option value="304">Greenland</option>
                            <option value="308">Grenada</option>
                            <option value="312">Guadelupe</option>
                            <option value="316">Guam</option>
                            <option value="320">Guatemala</option>
                            <option value="831">Guernsey</option>
                            <option value="254">Guiana</option>
                            <option value="324">Guinea</option>
                            <option value="624">Guinea-Bissau</option>
                            <option value="328">Guyana</option>
                            <option value="332">Haiti</option>
                            <option value="334">Herd and Mcdonald</option>
                            <option value="654">Holy Elena</option>
                            <option value="340">Honduras</option>
                            <option value="344">Hong Kong</option>
                            <option value="348">Hungary</option>
                            <option value="352">Iceland</option>
                            <option value="356">India</option>
                            <option value="360">Indonesia</option>
                            <option value="364">Iran</option>
                            <option value="368">Iraq</option>
                            <option value="372">Irish Republic</option>
                            <option value="833">Isle Man</option>
                            <option value="376">Israel</option>
                            <option value="380">Italy</option>
                            <option value="388">Jamaica</option>
                            <option value="392">Japan</option>
                            <option value="832">Jersey</option>
                            <option value="400">Jordan</option>
                            <option value="404">Kenya</option>
                            <option value="296">Kiribati Republic</option>
                            <option value="410">Korea</option>
                            <option value="408">Korea, DPRK</option>
                            <option value="414">Kuwait</option>
                            <option value="417">Kyrgyzstan</option>
                            <option value="418">Laos</option>
                            <option value="428">Latvia</option>
                            <option value="422">Lebanon</option>
                            <option value="426">Lesotho</option>
                            <option value="430">Liberia</option>
                            <option value="434">Libya</option>
                            <option value="438">Liechtenstein</option>
                            <option value="440">Lithuania</option>
                            <option value="442">Luxembourg</option>
                            <option value="446">Macau</option>
                            <option value="807">Macedonia</option>
                            <option value="450">Madagascar</option>
                            <option value="454">Malawi</option>
                            <option value="458">Malaysia</option>
                            <option value="462">Maldives</option>
                            <option value="466">Mali</option>
                            <option value="470">Malta</option>
                            <option value="580">Marian Islands</option>
                            <option value="584">Marshall Islands</option>
                            <option value="474">Martinique</option>
                            <option value="478">Mauritania</option>
                            <option value="480">Mauritius</option>
                            <option value="175">Mayotte</option>
                            <option value="484">Mexico</option>
                            <option value="583">Micronesia</option>
                            <option value="492">Monaco</option>
                            <option value="496">Mongolia</option>
                            <option value="499">Montenegro</option>
                            <option value="500">Montserrat</option>
                            <option value="504">Morocco</option>
                            <option value="508">Mozambique</option>
                            <option value="104">Myanmar</option>
                            <option value="516">Namibia</option>
                            <option value="520">Nauru</option>
                            <option value="524">Nepal</option>
                            <option value="530">Netherland Antiles</option>
                            <option value="528">Netherlands</option>
                            <option value="540">New Caledonia</option>
                            <option value="554">New Zealand</option>
                            <option value="558">Nicaragua</option>
                            <option value="562">Niger</option>
                            <option value="566">Nigeria</option>
                            <option value="570">Niue Islands</option>
                            <option value="574">Norfolk</option>
                            <option value="578">Norway</option>
                            <option value="512">Oman</option>
                            <option value="586">Pakistan</option>
                            <option value="585">Palau</option>
                            <option value="275">Palestinian Territory</option>
                            <option value="591">Panama</option>
                            <option value="598">Papua New Guinea</option>
                            <option value="600">Paraguay</option>
                            <option value="604">Peru</option>
                            <option value="608">Philippines</option>
                            <option value="612">Pitkern</option>
                            <option value="616">Poland</option>
                            <option value="620">Portugal</option>
                            <option value="630">Puerto Rico</option>
                            <option value="634">Qatar</option>
                            <option value="638">Reunion</option>
                            <option value="642">Romania</option>
                            <option value="646">Rwandese Republic</option>
                            <option value="662">Saint Lucia</option>
                            <option value="666">Saint-Pierre and Michelon</option>
                            <option value="670">Saint Vincent and The Grenadines</option>
                            <option value="16">Samoa</option>
                            <option value="882">Samoa</option>
                            <option value="674">San Marino</option>
                            <option value="678">San Tome and Principes</option>
                            <option value="682">Saudi Arabia</option>
                            <option value="686">Senegal</option>
                            <option value="688">Serbia</option>
                            <option value="690">Seychelles</option>
                            <option value="144">Shri-Lanka</option>
                            <option value="694">Sierra Leone</option>
                            <option value="702">Singapore</option>
                            <option value="703">Slovak Republic</option>
                            <option value="705">Slovenia</option>
                            <option value="90">Solomon Islands</option>
                            <option value="706">Somalia</option>
                            <option value="710">South Africa</option>
                            <option value="239">South Georgia and South Sandwich Islands</option>
                            <option value="724">Spain</option>
                            <option value="744">Spitzbergen and Jan-Mayen</option>
                            <option value="659">St. Kitts and Nevis</option>
                            <option value="736">Sudan</option>
                            <option value="740">Suriname</option>
                            <option value="748">Swaziland</option>
                            <option value="752">Sweden</option>
                            <option value="756">Switzerland</option>
                            <option value="760">Syria</option>
                            <option value="158">Taiwan</option>
                            <option value="762">Tajikistan</option>
                            <option value="834">Tanzania</option>
                            <option value="796">Terx and Kaykos</option>
                            <option value="764">Thailand</option>
                            <option value="626">Timor-Leste</option>
                            <option value="768">Togo</option>
                            <option value="772">Tokelau</option>
                            <option value="776">Tonga</option>
                            <option value="780">Trinidad and Tobago</option>
                            <option value="788">Tunisia</option>
                            <option value="792">Turkey</option>
                            <option value="795">Turkmenistan</option>
                            <option value="798">Tuvalu</option>
                            <option value="800">Uganda</option>
                            <option value="784">United Arab Emirates</option>
                            <option value="826">United Kingdom</option>
                            <option value="581">United States Minor Outlying Islands</option>
                            <option value="850">United States Virgin Islands</option>
                            <option value="858">Uruguay</option>
                            <option value="840">USA</option>
                            <option value="860">Uzbekistan</option>
                            <option value="548">Vanuatu</option>
                            <option value="336">Vatican City State</option>
                            <option value="862">Venezuela</option>
                            <option value="704">Vietnam</option>
                            <option value="876">Wallis and Futuna</option>
                            <option value="732">Western Sahara</option>
                            <option value="887">Yemen</option>
                            <option value="894">Zambia</option>
                            <option value="716">Zimbabwe</option>
                        </select>
                    </div>
                    
                    <div class="col-md-12 text-center">
                        <div class="docsCountHolder">Number of uploaded documents: <span id="docsCount">0</span></div>
                        <p class="max10" id="no_more_files" style="display:block;">
                            (You can send no more than 10 files)
                        </p>
                    </div>
                </div>
                
                <div class="modal-footer text-center mt-4">
                    <div id="verify-error" class="form-errors"></div>
                    <button type="submit" class="button-green large mb-5">Verify</button>        
                </div>
            </form>
        </div>
    </div>
</div>  