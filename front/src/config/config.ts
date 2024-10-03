import {environment} from "../environments/environment";

export const URL_API = environment.URL_API
export const URL_BACKEND = environment.URL_BACKEND
export const URL_FRONTEND = environment.URL_FRONTEND

export const SIDEBAR: any = [
    {
        'name': 'Roles',
        'permissions': [
            {
                name: 'Registrar',
                permission: 'register_role',
            },
            {
                name: 'Editar',
                permission: 'edit_role',
            },
            {
                name: 'Eliminar',
                permission: 'delete_role',
            }
        ]
    },
    {
        'name': 'Usuarios',
        'permissions': [
            {
                name: 'Registrar',
                permission: 'register_user',
            },
            {
                name: 'Editar',
                permission: 'edit_user',
            },
            {
                name: 'Eliminar',
                permission: 'delete_user',
            }
        ]
    },
    {
        'name': 'Productos',
        'permissions': [
            {
                name: 'Registrar',
                permission: 'register_product',
            },
            {
                name: 'Editar',
                permission: 'edit_product',
            },
            {
                name: 'Eliminar',
                permission: 'delete_product',
            },
            {
                name: 'Ver billetera de precios',
                permission: 'show_wallet_price_product',
            },
            {
                name: 'Nuevo precio',
                permission: 'register_wallet_price_product',
            },
            {
                name: 'Editar precio',
                permission: 'edit_wallet_price_product',
            },
            {
                name: 'Eliminar precio',
                permission: 'delete_wallet_price_product',
            },
        ]
    },
    {
        'name': 'Clientes',
        'permissions': [
            {
                name: 'Registrar',
                permission: 'register_clientes',
            },
            {
                name: 'Editar',
                permission: 'edit_clientes',
            },
            {
                name: 'Eliminar',
                permission: 'delete_clientes',
            },
        ]
    },
    {
        'name': 'Caja',
        'permissions': [
            {
                name: 'Validar pagos',
                permission: 'valid_payments',
            },
            {
                name: 'Reporte de caja',
                permission: 'reports_caja',
            },
            {
                name: 'Historial de contratos procesados',
                permission: 'record_contract_process',
            },
            {
                name: 'Egreso (Salida de efectivo)',
                permission: 'egreso',
            },
            {
                name: 'Ingreso',
                permission: 'ingreso',
            },
            {
                name: 'Cierre de caja',
                permission: 'close_caja',
            },
        ]
    },
    {
        'name': 'Proforma',
        'permissions': [
            {
                name: 'Registrar',
                permission: 'register_proforma',
            },
            {
                name: 'Editar',
                permission: 'edit_proforma',
            },
            {
                name: 'Eliminar',
                permission: 'delete_proforma',
            },
        ]
    },
    {
        'name': 'Cronograma',
        'permissions': [
            {
                name: 'Disponible',
                permission: 'cronograma',
            },
        ]
    },
    {
        'name': 'Comisiones',
        'permissions': [
            {
                name: 'Disponible',
                permission: 'comisiones',
            },
        ]
    },
    {
        'name': 'Compras',
        'permissions': [
            {
                name: 'Registrar',
                permission: 'register_compra',
            },
            {
                name: 'Editar',
                permission: 'edit_compra',
            },
            {
                name: 'Eliminar',
                permission: 'delete_compra',
            },
        ]
    },
    {
        'name': 'Transporte',
        'permissions': [
            {
                name: 'Registrar',
                permission: 'register_transporte',
            },
            {
                name: 'Editar',
                permission: 'edit_transporte',
            },
            {
                name: 'Eliminar',
                permission: 'delete_transporte',
            },
        ]
    },
    {
        'name': 'Despacho',
        'permissions': [
            {
                name: 'Disponible',
                permission: 'despacho',
            },
        ]
    },
    {
        'name': 'Movimientos',
        'permissions': [
            {
                name: 'Disponible',
                permission: 'movimientos',
            },
        ]
    },
    {
        'name': 'Kardex',
        'permissions': [
            {
                name: 'Disponible',
                permission: 'kardex',
            },
        ]
    },
];
