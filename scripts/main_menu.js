(function(global) {
    var MainMenuViewModel,
        app = global.app = global.app || {};
    
    MainMenuViewModel = kendo.data.ObservableObject.extend({
        isCached: false,
        menuVentas:[],
        menuFinanzas: [],
        menuInventario: [],
        menuComunicados: [],
        
        obtain_menus: function(){
            var that = this,
                isCached = that.get("isCached");
            if(!isCached){
                that._obtain_menu_ventas();
                that._obtain_menu_finanzas();
                that._obtain_menu_inventario();
                that._obtain_menu_comunicados();
                that.set("isCached", true);
            }
        },
        
        _obtain_menu_ventas: function(){
            var that = this,
                menu = [];
            menu.push(that._createMenuItem("Ventas contra presupuesto", "En este reporte se muestra la diferencia entre el objetivo de ventas contra el valor actual de lo vendido", "#"));
            menu.push(that._createMenuItem("Ventas por vendedor", "En este reporte se muestra las ventas realizadas por vendedor las cuales pueden ser filtrables por oficina de venta, grupo de articulo y vendedor", "#"));
            menu.push(that._createMenuItem("Ventas por producto", "En este reporte se muestra las ventas realizadas de acuerdo a cierto producto. Estas ventas son filtrables por Oficina de Venta, Grupo de Articulo y Articulo", "#"));
            menu.push(that._createMenuItem("Lista de precio", "En este reporte se muestra los articulos con sus precios de venta de acuerdo al tipo de cliente", "#"));
            menu.push(that._createMenuItem("Ventas principales clientes", "En este reporte se muestra por cliente el valor total realizada hacia estos", "#"));
            that.set("menuVentas", menu);
        },
        
        _createMenuItem: function(titulo_de_reporte, descripcion, direccion_vista_asociada) {
            return {
                titulo: titulo_de_reporte,
                descripcion: descripcion,
                direccion_vista_asociada: direccion_vista_asociada
            }
        },
        
        _obtain_menu_finanzas: function(){
            var that = this,
                menu = [];
            menu.push(that._createMenuItem("Programaciones de pagos", "En este reporte se muestra la programación de pagos que hace Diapa hacia el proveedor", "#"));
            menu.push(that._createMenuItem("Reportes de cargos", "En este reporte se muestra el estado financiero que tiene Diapa del proveedor", "#"));
            menu.push(that._createMenuItem("Detalles de pagos", "En este reporte se muestra los pagos realizados al proveedor basados en el código de transferencia y muestra lo que se paga en esa transferencia", "#"));
            that.set("menuFinanzas", menu);
        },
        
        _obtain_menu_inventario: function(){
            var that = this,
                menu = [];
            menu.push(that._createMenuItem("Inventario y venta", "En este reporte se muestra el inventario ", "#"));
            menu.push(that._createMenuItem("Inventario proximo a vencer", "En este reporte se muestra el inventario próximo a vencer con su fecha de caducidad filtrable por centro de distribución", "#"));
            menu.push(that._createMenuItem("Nivel de servicio", "En este reporte se muestra el nivel de servicio proveido por el proveedor", "#"));
            menu.push(that._createMenuItem("Analisis de inventario", "En este reporte se muestra ...", "#"));
            menu.push(that._createMenuItem("Analisis de inventario por rotacion", "En este reporte se muestra ...", "#"));
            that.set("menuInventario", menu);
        },
        
        _obtain_menu_comunicados: function(){
            var that = this,
                menu = [];
            
        }
    });
    
    app.Main_Menu = {
        viewModel: new MainMenuViewModel()
    }
})(window);