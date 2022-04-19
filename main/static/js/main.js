// this is the function for submit the question;
function handleReplyButton(responseId) {
    const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`);
    if (replyFormContainer) {
      replyFormContainer.className = 'reply-form-container enabled'
    }
  }
  //this function for canceling the response
  function handleCancelReply(responseId) {
    const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`);
    if (replyFormContainer) {
      replyFormContainer.className = 'reply-form-container'
    }
  }
  