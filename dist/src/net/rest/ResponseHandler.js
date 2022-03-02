import { ResponseCode } from "./ResponseCode";
import BaseMethods from "../../utils/data/BaseMethods";
export var ResponseHandler = {
    responseSuccess: function (response) {
        if (BaseMethods.isNull(response)) {
            return false;
        }
        if (response.statusCode === "200" && response.resultCode === "200") {
            return true;
        }
        return false;
    },
    handleCommonFailure: function (response) {
        if (response.statusCode === ResponseCode.ACCESS_TOKEN_EXPIRED) {
            var params = {};
            // AuthHandler.handleAccessTokenExpire(0,params);
        }
    }
};
export default ResponseHandler;
