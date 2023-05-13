import { ADMIN_ROUTE, CATALOG_ROUTE, SENDED_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, REQUEST_ROUTE } from "./utils/consts"
import {Main} from "./components/main/main"
import { Admin } from "./components/admin"
import Requests from "./components/requests"
import Auth from "./components/auth"
import Catalog from "./components/Catalog"
import Sended from "./components/sended"


export const authRoutes =[
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path:REQUEST_ROUTE,
        Component: Requests
    },
    {
        path:SENDED_ROUTE,
        Component: Sended
    },
]

export const publicRoutes =[
    {
        path:MAIN_ROUTE,
        Component: Main
    },
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path:CATALOG_ROUTE,
        Component: Catalog
    },
]
