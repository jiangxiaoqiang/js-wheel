var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import LocalStorage from "../utils/data/LocalStorage";
import BaseMethods from "../utils/data/BaseMethods";
import { WheelGlobal } from "../model/immutable/WheelGlobal";
export var ConfigHandler = {
    init: function (config) { return __awaiter(void 0, void 0, void 0, function () {
        var keysOfProps;
        return __generator(this, function (_a) {
            keysOfProps = ["appId", "baseAuthUrl", "userLoginUrlPath", "accessTokenUrlPath", "refreshTokenUrlPath"];
            keysOfProps.forEach(function (item) { return __awaiter(void 0, void 0, void 0, function () {
                var cacheKey, configValue, setValue;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cacheKey = item.replace(/[A-Z]/g, function (m) { return "-" + m.toLowerCase(); });
                            return [4 /*yield*/, LocalStorage.readLocalStorage(cacheKey)];
                        case 1:
                            configValue = _a.sent();
                            setValue = config[item];
                            if (!(BaseMethods.isNull(configValue) || configValue !== setValue)) return [3 /*break*/, 3];
                            return [4 /*yield*/, LocalStorage.setLocalStorage(cacheKey, setValue.toString())];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); },
    stupidInit: function (config) { return __awaiter(void 0, void 0, void 0, function () {
        var appId, authUrl, userLoginUrlPath, userAccessUrlPath, userRefreshUrlPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, LocalStorage.readLocalStorage(WheelGlobal.REDDWARF_APP_ID_KEY)];
                case 1:
                    appId = _a.sent();
                    if (!(BaseMethods.isNull(appId) || Number(appId) !== config.appId)) return [3 /*break*/, 3];
                    return [4 /*yield*/, LocalStorage.setLocalStorage(WheelGlobal.REDDWARF_APP_ID_KEY, config.appId.toString())];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, LocalStorage.readLocalStorage(WheelGlobal.BASE_AUTH_URL)];
                case 4:
                    authUrl = _a.sent();
                    if (!(BaseMethods.isNull(authUrl) || authUrl !== config.baseAuthUrl)) return [3 /*break*/, 6];
                    return [4 /*yield*/, LocalStorage.setLocalStorage(WheelGlobal.BASE_AUTH_URL, config.baseAuthUrl.toString())];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, LocalStorage.readLocalStorage(WheelGlobal.USER_LOGIN_URL_PATH)];
                case 7:
                    userLoginUrlPath = _a.sent();
                    if (!(BaseMethods.isNull(userLoginUrlPath) || userLoginUrlPath !== config.userLoginUrlPath)) return [3 /*break*/, 9];
                    return [4 /*yield*/, LocalStorage.setLocalStorage(WheelGlobal.USER_LOGIN_URL_PATH, config.userLoginUrlPath.toString())];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [4 /*yield*/, LocalStorage.readLocalStorage(WheelGlobal.USER_LOGIN_URL_PATH)];
                case 10:
                    userAccessUrlPath = _a.sent();
                    if (!(BaseMethods.isNull(userAccessUrlPath) || userAccessUrlPath !== config.accessTokenUrlPath)) return [3 /*break*/, 12];
                    return [4 /*yield*/, LocalStorage.setLocalStorage(WheelGlobal.ACCESS_TOKEN_URL_PATH, config.accessTokenUrlPath.toString())];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12: return [4 /*yield*/, LocalStorage.readLocalStorage(WheelGlobal.USER_LOGIN_URL_PATH)];
                case 13:
                    userRefreshUrlPath = _a.sent();
                    if (!(BaseMethods.isNull(userRefreshUrlPath) || userRefreshUrlPath !== config.refreshTokenUrlPath)) return [3 /*break*/, 15];
                    return [4 /*yield*/, LocalStorage.setLocalStorage(WheelGlobal.REFRESH_TOKEN_URL_PATH, config.refreshTokenUrlPath.toString())];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15: return [2 /*return*/];
            }
        });
    }); }
};
export default ConfigHandler;
