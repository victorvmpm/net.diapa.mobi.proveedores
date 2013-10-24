(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",

        onLogin: function () {
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();

            if (username === "" || password === "") {
                navigator.notification.alert("Se ocupa llenar ambos campos!",
                    function () { }, "Fracaso En Obtención De Credenciales", 'OK');

                return;
            }

            that.set("isLoggedIn", true);
            that._add_Margin_After_LogIn();
            app.application.navigate("views/Main_Menu.html");    
        },
        
        _add_Margin_After_LogIn : function(){
            $("span.logo").css("margin-top", "20px");
        },

        onLogout: function () {
            var that = this;

            that.clearForm();
            that.set("isLoggedIn", false);
        },

        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        }
    });

    app.loginService = {
        viewModel: new LoginViewModel()
    };
})(window);