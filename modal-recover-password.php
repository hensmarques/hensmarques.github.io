<div id="modal-recover-password" class="md-modal md-effect-2">
    <div class="md-content">
        <div class="modal-close-no-log md-close " onclick="$('.md-modal, .ssm-overlay').removeClass('md-show').removeClass('active');" data-dismiss="modal"></div>
        <h5 class="modal-title-head" id="registerModalLabel">Password recovery</h5>
        <div class="container">
            <form action="/cabinet/auth/restore" method="POST" class="row justify-content-center">
                <div class="panel col-md-6">
                    <input type="hidden" name="_csrf" value="lEbMQgY36_rbrXGrfFl3FFZlvYbvNFh4LiBYU3br-NrTDr0jdmGOzo_uKPEMHx5uCQvV97sDHDdDWitgM4eUiQ==">
                    
                    <div style="width: 100%;" class="form-group promocod-value">
                        <input type="text" class="form-control" name="RestoreForm[login]" value="" placeholder="Phone or email">        
                    </div>
                </div>
                <div class="col-md-7 text-center mt-4">
                    <button type="submit" class="button-green large" style="margin: auto; display: block;">Restore</button>        
                </div>
            </form>
        </div>
    </div>  
</div>  
