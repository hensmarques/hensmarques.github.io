<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bett888 Poker</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="/dist/app.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css" integrity="sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E" crossorigin="anonymous">
</head>
<body>
    <header>
        <?php include ('sidebar.php'); ?>
        
        <div id="fTop" class="main-nav noreg">
            <div class="h100p">
                <div class="row align-items-center h100p">
                    <div class="col-3 col-sm-3 col-md-4 col-xl-5 col-lg-5 left-col">
                        <div class="head-item left">
                            <div id="menu-toggle" class="ssm-toggle-nav ssm-nav-visible">
                                <div id="hamburger">
                                    <span class="hm"></span>
                                    <span class="hm"></span>
                                    <span class="hm"></span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="auth-btn head-item float-right">
                            <button type="button" class="md-trigger main-btn play-btn-fill reg" onclick="openModal('#modal-transactions')" style="margin-right: 15px;">
                                <span>Deposit</span>
                            </button>
                            
                            <button style="margin-right: 10px;" type="button" class="md-trigger main-btn play-btn-fill log" onclick="openModal('#modal-transactions'); $('.tab-withdraw').trigger('click')">
                                <span>Withdraw</span>
                            </button>
                        </div>
                    </div>
                    
                    <div class="col-6 col-sm-6 col-md-4 col-xl-2 col-lg-2">
                        <a href="/" class="logo">
                            <img src="/assets/images/logo.png" height="55">
                        </a>
                    </div>
                    
                    <div class="col-3 col-sm-3 col-md-4 col-xl-5 col-lg-5 right-col">
                        <div class="lang-no-reg hidden-sm hidden-xs">
                            
                            <div class="dropdown lang-switch">
                                
                                <button class="btn btn-lang dropdown-toggle" onclick="$('.dropdown-menu').toggle();" type="button" id="dropdownMenuButton">
                                    <img src="/assets/images/en.png">
                                </button>
                                <div class="dropdown-menu" style="display: none;">
                                    <a class="dropdown-item" href="/site/language/ru-RU"><img src="/assets/images/ru.png">RU</a>
                                    <a class="dropdown-item active" href="/site/language/en-US"><img src="/assets/images/en.png">EN</a>
                                    <a class="dropdown-item active" href="/site/language/pt-PT"><img width="30" src="/assets/images/pt.png">PT</a>
                                    <a class="dropdown-item active" href="/site/language/ch-CH">
                                        <span style="border-radius: 50%; display: inline-block; overflow:hidden; float:left">
                                            <img width="30" src="/assets/images/china.jpg">
                                        </span> CH
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="#" onclick="openModal('#modal-profile')">
                            <img src="/assets//images/icon-user.png" width="35" alt="" class="float-right mt-1 mr-3">
                        </a>
                        <div class="auth-btn head-item values float-right">
                            <span class="featured">
                                <i class="fas fa-wallet"></i> &nbsp; 0.00 USD
                            </span>
                            <span>BONUS: 0 USD | 0 FS</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>