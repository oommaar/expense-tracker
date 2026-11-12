"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/dashboard/route";
exports.ids = ["app/api/dashboard/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Froute&page=%2Fapi%2Fdashboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Froute.ts&appDir=C%3A%5CUsers%5COmar%5CDesktop%5Creact.js%20project%5Cexpense-tracker%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5COmar%5CDesktop%5Creact.js%20project%5Cexpense-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Froute&page=%2Fapi%2Fdashboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Froute.ts&appDir=C%3A%5CUsers%5COmar%5CDesktop%5Creact.js%20project%5Cexpense-tracker%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5COmar%5CDesktop%5Creact.js%20project%5Cexpense-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Omar_Desktop_react_js_project_expense_tracker_app_api_dashboard_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/dashboard/route.ts */ \"(rsc)/./app/api/dashboard/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/route\",\n        pathname: \"/api/dashboard\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Omar\\\\Desktop\\\\react.js project\\\\expense-tracker\\\\app\\\\api\\\\dashboard\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Omar_Desktop_react_js_project_expense_tracker_app_api_dashboard_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/dashboard/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmRhc2hib2FyZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmRhc2hib2FyZCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNPbWFyJTVDRGVza3RvcCU1Q3JlYWN0LmpzJTIwcHJvamVjdCU1Q2V4cGVuc2UtdHJhY2tlciU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDT21hciU1Q0Rlc2t0b3AlNUNyZWFjdC5qcyUyMHByb2plY3QlNUNleHBlbnNlLXRyYWNrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBDO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZW5zZS10cmFja2VyLz9jZWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXE9tYXJcXFxcRGVza3RvcFxcXFxyZWFjdC5qcyBwcm9qZWN0XFxcXGV4cGVuc2UtdHJhY2tlclxcXFxhcHBcXFxcYXBpXFxcXGRhc2hib2FyZFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGFzaGJvYXJkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZGFzaGJvYXJkXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9kYXNoYm9hcmQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxPbWFyXFxcXERlc2t0b3BcXFxccmVhY3QuanMgcHJvamVjdFxcXFxleHBlbnNlLXRyYWNrZXJcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2Rhc2hib2FyZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Froute&page=%2Fapi%2Fdashboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Froute.ts&appDir=C%3A%5CUsers%5COmar%5CDesktop%5Creact.js%20project%5Cexpense-tracker%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5COmar%5CDesktop%5Creact.js%20project%5Cexpense-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\",\n        newUser: \"/signup\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const passwordMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials.password, user.password);\n                if (!passwordMatch) return null;\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDWTtBQUM1QjtBQUNSO0FBRXRCLE1BQU1JLGNBQStCO0lBQzFDQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBQ0FDLFdBQVc7UUFDVFQsMkVBQW1CQSxDQUFDO1lBQ2xCVSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVUsT0FBTztnQkFFMUQsTUFBTUUsT0FBTyxNQUFNaEIsK0NBQU1BLENBQUNnQixJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQ3BDO2dCQUVBLElBQUksQ0FBQ0ssTUFBTSxPQUFPO2dCQUVsQixNQUFNRyxnQkFBZ0IsTUFBTWxCLHVEQUFjLENBQUNTLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFDOUUsSUFBSSxDQUFDSyxlQUFlLE9BQU87Z0JBRTNCLE9BQU87b0JBQ0xFLElBQUlMLEtBQUtLLEVBQUU7b0JBQ1hWLE9BQU9LLEtBQUtMLEtBQUs7b0JBQ2pCRixNQUFNTyxLQUFLUCxJQUFJO2dCQUNqQjtZQUNGO1FBQ0Y7S0FDRDtJQUNEYSxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVSLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSUSxNQUFNSCxFQUFFLEdBQUdMLEtBQUtLLEVBQUU7WUFDcEI7WUFDQSxPQUFPRztRQUNUO1FBQ0EsTUFBTXJCLFNBQVEsRUFBRUEsT0FBTyxFQUFFcUIsS0FBSyxFQUFFO1lBQzlCLElBQUlyQixRQUFRYSxJQUFJLEVBQUU7Z0JBQ2hCYixRQUFRYSxJQUFJLENBQUNLLEVBQUUsR0FBR0csTUFBTUgsRUFBRTtZQUM1QjtZQUNBLE9BQU9sQjtRQUNUO0lBQ0Y7QUFDRixFQUFDO0FBRUQsTUFBTXNCLFVBQVUzQixnREFBUUEsQ0FBQ0k7QUFDaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbnNlLXRyYWNrZXIvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCcsXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2xvZ2luJyxcbiAgICBuZXdVc2VyOiAnL3NpZ251cCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHJldHVybiBudWxsXG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG51bGxcblxuICAgICAgICBjb25zdCBwYXNzd29yZE1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgIGlmICghcGFzc3dvcmRNYXRjaCkgcmV0dXJuIG51bGxcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkIGFzIHN0cmluZ1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9LFxuICB9LFxufVxuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH1cbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwibmV3VXNlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwicGFzc3dvcmRNYXRjaCIsImNvbXBhcmUiLCJpZCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/dashboard/route.ts":
/*!************************************!*\
  !*** ./app/api/dashboard/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var _barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=endOfMonth,startOfMonth,subDays,subMonths!=!date-fns */ \"(rsc)/./node_modules/date-fns/startOfMonth.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=endOfMonth,startOfMonth,subDays,subMonths!=!date-fns */ \"(rsc)/./node_modules/date-fns/endOfMonth.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=endOfMonth,startOfMonth,subDays,subMonths!=!date-fns */ \"(rsc)/./node_modules/date-fns/subMonths.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=endOfMonth,startOfMonth,subDays,subMonths!=!date-fns */ \"(rsc)/./node_modules/date-fns/subDays.mjs\");\n\n\n\n\n\nconst GUEST_USER_ID = \"guest-demo-user\";\nasync function getUserId() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (session?.user?.id) return session.user.id;\n    } catch (error) {\n        console.error(\"Dashboard session error:\", error);\n    }\n    return GUEST_USER_ID;\n}\nasync function ensureGuestUser() {\n    try {\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.upsert({\n            where: {\n                id: GUEST_USER_ID\n            },\n            update: {},\n            create: {\n                id: GUEST_USER_ID,\n                email: \"guest@xpense.demo\",\n                name: \"Guest\",\n                password: \"guest-no-password\"\n            }\n        });\n    } catch (error) {\n        console.error(\"Guest user ensure error:\", error);\n    }\n}\nasync function GET(req) {\n    try {\n        await ensureGuestUser();\n        const userId = await getUserId();\n        const now = new Date();\n        const monthStart = (0,_barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfMonth)(now);\n        const monthEnd = (0,_barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_5__.endOfMonth)(now);\n        const lastMonthStart = (0,_barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfMonth)((0,_barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_6__.subMonths)(now, 1));\n        const lastMonthEnd = (0,_barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_5__.endOfMonth)((0,_barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_6__.subMonths)(now, 1));\n        const thirtyDaysAgo = (0,_barrel_optimize_names_endOfMonth_startOfMonth_subDays_subMonths_date_fns__WEBPACK_IMPORTED_MODULE_7__.subDays)(now, 30);\n        const [thisMonth, lastMonth, trend, recent] = await Promise.all([\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.expense.findMany({\n                where: {\n                    userId,\n                    date: {\n                        gte: monthStart,\n                        lte: monthEnd\n                    }\n                },\n                select: {\n                    amount: true,\n                    category: true\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.expense.findMany({\n                where: {\n                    userId,\n                    date: {\n                        gte: lastMonthStart,\n                        lte: lastMonthEnd\n                    }\n                },\n                select: {\n                    amount: true\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.expense.findMany({\n                where: {\n                    userId,\n                    date: {\n                        gte: thirtyDaysAgo\n                    }\n                },\n                select: {\n                    amount: true,\n                    date: true\n                },\n                orderBy: {\n                    date: \"asc\"\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.expense.findMany({\n                where: {\n                    userId\n                },\n                orderBy: {\n                    date: \"desc\"\n                },\n                take: 8\n            })\n        ]);\n        const totalThisMonth = thisMonth.reduce((sum, expense)=>sum + expense.amount, 0);\n        const totalLastMonth = lastMonth.reduce((sum, expense)=>sum + expense.amount, 0);\n        const categoryBreakdown = thisMonth.reduce((acc, expense)=>{\n            const existing = acc.find((item)=>item.category === expense.category);\n            if (existing) {\n                existing.total += expense.amount;\n                existing.count += 1;\n            } else {\n                acc.push({\n                    category: expense.category,\n                    total: expense.amount,\n                    count: 1\n                });\n            }\n            return acc;\n        }, []);\n        const dailyTrend = trend.reduce((acc, expense)=>{\n            const day = expense.date.toISOString().split(\"T\")[0];\n            const existing = acc.find((item)=>item.date === day);\n            if (existing) {\n                existing.total += expense.amount;\n            } else {\n                acc.push({\n                    date: day,\n                    total: expense.amount\n                });\n            }\n            return acc;\n        }, []);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            totalExpensesThisMonth: totalThisMonth,\n            totalExpensesLastMonth: totalLastMonth,\n            categoryBreakdown,\n            dailyTrend,\n            recentExpenses: recent\n        });\n    } catch (error) {\n        console.error(\"Dashboard API error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to load dashboard data\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3JvdXRlLnRzP2ViNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZSdcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IHN0YXJ0T2ZNb250aCwgZW5kT2ZNb250aCwgc3ViTW9udGhzLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmNvbnN0IEdVRVNUX1VTRVJfSUQgPSAnZ3Vlc3QtZGVtby11c2VyJ1xuXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VySWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBzZXNzaW9uLnVzZXIuaWRcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdEYXNoYm9hcmQgc2Vzc2lvbiBlcnJvcjonLCBlcnJvcilcbiAgfVxuICByZXR1cm4gR1VFU1RfVVNFUl9JRFxufVxuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVHdWVzdFVzZXIoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnVzZXIudXBzZXJ0KHtcbiAgICAgIHdoZXJlOiB7IGlkOiBHVUVTVF9VU0VSX0lEIH0sXG4gICAgICB1cGRhdGU6IHt9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIGlkOiBHVUVTVF9VU0VSX0lELFxuICAgICAgICBlbWFpbDogJ2d1ZXN0QHhwZW5zZS5kZW1vJyxcbiAgICAgICAgbmFtZTogJ0d1ZXN0JyxcbiAgICAgICAgcGFzc3dvcmQ6ICdndWVzdC1uby1wYXNzd29yZCcsXG4gICAgICB9LFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignR3Vlc3QgdXNlciBlbnN1cmUgZXJyb3I6JywgZXJyb3IpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlR3Vlc3RVc2VyKClcbiAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKVxuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IG1vbnRoU3RhcnQgPSBzdGFydE9mTW9udGgobm93KVxuICAgIGNvbnN0IG1vbnRoRW5kID0gZW5kT2ZNb250aChub3cpXG4gICAgY29uc3QgbGFzdE1vbnRoU3RhcnQgPSBzdGFydE9mTW9udGgoc3ViTW9udGhzKG5vdywgMSkpXG4gICAgY29uc3QgbGFzdE1vbnRoRW5kID0gZW5kT2ZNb250aChzdWJNb250aHMobm93LCAxKSlcbiAgICBjb25zdCB0aGlydHlEYXlzQWdvID0gc3ViRGF5cyhub3csIDMwKVxuXG4gICAgY29uc3QgW3RoaXNNb250aCwgbGFzdE1vbnRoLCB0cmVuZCwgcmVjZW50XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHByaXNtYS5leHBlbnNlLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkLCBkYXRlOiB7IGd0ZTogbW9udGhTdGFydCwgbHRlOiBtb250aEVuZCB9IH0sXG4gICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIGNhdGVnb3J5OiB0cnVlIH0sXG4gICAgICB9KSxcbiAgICAgIHByaXNtYS5leHBlbnNlLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkLCBkYXRlOiB7IGd0ZTogbGFzdE1vbnRoU3RhcnQsIGx0ZTogbGFzdE1vbnRoRW5kIH0gfSxcbiAgICAgICAgc2VsZWN0OiB7IGFtb3VudDogdHJ1ZSB9LFxuICAgICAgfSksXG4gICAgICBwcmlzbWEuZXhwZW5zZS5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZCwgZGF0ZTogeyBndGU6IHRoaXJ0eURheXNBZ28gfSB9LFxuICAgICAgICBzZWxlY3Q6IHsgYW1vdW50OiB0cnVlLCBkYXRlOiB0cnVlIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgZGF0ZTogJ2FzYycgfSxcbiAgICAgIH0pLFxuICAgICAgcHJpc21hLmV4cGVuc2UuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfSxcbiAgICAgICAgdGFrZTogOCxcbiAgICAgIH0pLFxuICAgIF0pXG5cbiAgICBjb25zdCB0b3RhbFRoaXNNb250aCA9IHRoaXNNb250aC5yZWR1Y2UoKHN1bSwgZXhwZW5zZSkgPT4gc3VtICsgZXhwZW5zZS5hbW91bnQsIDApXG4gICAgY29uc3QgdG90YWxMYXN0TW9udGggPSBsYXN0TW9udGgucmVkdWNlKChzdW0sIGV4cGVuc2UpID0+IHN1bSArIGV4cGVuc2UuYW1vdW50LCAwKVxuXG4gICAgY29uc3QgY2F0ZWdvcnlCcmVha2Rvd24gPSB0aGlzTW9udGgucmVkdWNlKChhY2MsIGV4cGVuc2UpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gYWNjLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT09IGV4cGVuc2UuY2F0ZWdvcnkpXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgZXhpc3RpbmcudG90YWwgKz0gZXhwZW5zZS5hbW91bnRcbiAgICAgICAgZXhpc3RpbmcuY291bnQgKz0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnB1c2goeyBjYXRlZ29yeTogZXhwZW5zZS5jYXRlZ29yeSwgdG90YWw6IGV4cGVuc2UuYW1vdW50LCBjb3VudDogMSB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIFtdIGFzIHsgY2F0ZWdvcnk6IHN0cmluZzsgdG90YWw6IG51bWJlcjsgY291bnQ6IG51bWJlciB9W10pXG5cbiAgICBjb25zdCBkYWlseVRyZW5kID0gdHJlbmQucmVkdWNlKChhY2MsIGV4cGVuc2UpID0+IHtcbiAgICAgIGNvbnN0IGRheSA9IGV4cGVuc2UuZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gYWNjLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZGF0ZSA9PT0gZGF5KVxuICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIGV4aXN0aW5nLnRvdGFsICs9IGV4cGVuc2UuYW1vdW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2MucHVzaCh7IGRhdGU6IGRheSwgdG90YWw6IGV4cGVuc2UuYW1vdW50IH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwgW10gYXMgeyBkYXRlOiBzdHJpbmc7IHRvdGFsOiBudW1iZXIgfVtdKVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHRvdGFsRXhwZW5zZXNUaGlzTW9udGg6IHRvdGFsVGhpc01vbnRoLFxuICAgICAgdG90YWxFeHBlbnNlc0xhc3RNb250aDogdG90YWxMYXN0TW9udGgsXG4gICAgICBjYXRlZ29yeUJyZWFrZG93bixcbiAgICAgIGRhaWx5VHJlbmQsXG4gICAgICByZWNlbnRFeHBlbnNlczogcmVjZW50LFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRGFzaGJvYXJkIEFQSSBlcnJvcjonLCBlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBsb2FkIGRhc2hib2FyZCBkYXRhJyB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJzdGFydE9mTW9udGgiLCJlbmRPZk1vbnRoIiwic3ViTW9udGhzIiwic3ViRGF5cyIsIkdVRVNUX1VTRVJfSUQiLCJnZXRVc2VySWQiLCJzZXNzaW9uIiwidXNlciIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwiZW5zdXJlR3Vlc3RVc2VyIiwidXBzZXJ0Iiwid2hlcmUiLCJ1cGRhdGUiLCJjcmVhdGUiLCJlbWFpbCIsIm5hbWUiLCJwYXNzd29yZCIsIkdFVCIsInJlcSIsInVzZXJJZCIsIm5vdyIsIkRhdGUiLCJtb250aFN0YXJ0IiwibW9udGhFbmQiLCJsYXN0TW9udGhTdGFydCIsImxhc3RNb250aEVuZCIsInRoaXJ0eURheXNBZ28iLCJ0aGlzTW9udGgiLCJsYXN0TW9udGgiLCJ0cmVuZCIsInJlY2VudCIsIlByb21pc2UiLCJhbGwiLCJleHBlbnNlIiwiZmluZE1hbnkiLCJkYXRlIiwiZ3RlIiwibHRlIiwic2VsZWN0IiwiYW1vdW50IiwiY2F0ZWdvcnkiLCJvcmRlckJ5IiwidGFrZSIsInRvdGFsVGhpc01vbnRoIiwicmVkdWNlIiwic3VtIiwidG90YWxMYXN0TW9udGgiLCJjYXRlZ29yeUJyZWFrZG93biIsImFjYyIsImV4aXN0aW5nIiwiZmluZCIsIml0ZW0iLCJ0b3RhbCIsImNvdW50IiwicHVzaCIsImRhaWx5VHJlbmQiLCJkYXkiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwianNvbiIsInRvdGFsRXhwZW5zZXNUaGlzTW9udGgiLCJ0b3RhbEV4cGVuc2VzTGFzdE1vbnRoIiwicmVjZW50RXhwZW5zZXMiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/dashboard/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBS0MsS0FBeUIsR0FBZ0I7UUFBQztRQUFTO0tBQU8sR0FBRyxDQUFTO0FBQzdFLEdBQUU7QUFFSixJQUFJQSxJQUF5QixFQUFjSixnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEUsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbnNlLXRyYWNrZXIvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBbJ2Vycm9yJywgJ3dhcm4nXSA6IFsnZXJyb3InXSxcbiAgfSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWFcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/date-fns","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Froute&page=%2Fapi%2Fdashboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Froute.ts&appDir=C%3A%5CUsers%5COmar%5CDesktop%5Creact.js%20project%5Cexpense-tracker%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5COmar%5CDesktop%5Creact.js%20project%5Cexpense-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();