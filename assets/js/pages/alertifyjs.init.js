$(function() {
  $("#alert").click(function() {
    alertify.alert("Alert Title", "Alert Message!", function() {
      alertify.success("Ok");
    });
  }),
    $("#alert-confirm").click(function() {
      alertify.confirm(
        "This is a confirm dialog.",
        function() {
          alertify.success("Ok");
        },
        function() {
          alertify.error("Cancel");
        }
      );
    }),
    $("#alert-prompt").click(function() {
      alertify.prompt(
        "This is a prompt dialog.",
        "Default value",
        function(e, r) {
          alertify.success("Ok: " + r);
        },
        function() {
          alertify.error("Cancel");
        }
      );
    }),
    $("#alert-success").click(function() {
      alertify.success("Success message");
    }),
    $("#alert-error").click(function() {
      alertify.error("Error message");
    }),
    $("#alert-warning").click(function() {
      alertify.warning("Warning message");
    }),
    $("#alert-message").click(function() {
      alertify.message("Normal message");
    });
});
