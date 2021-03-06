export declare const RequestHandler: {
    post: <T>(url: string, data: any) => Promise<any>;
    api_post: <T_1>(url: string, data: any) => Promise<T_1>;
    do_api_post: <T_2>(url: string, data: any, accessToken: string) => Promise<T_2>;
    handleRefreshTokenInvalid: () => Promise<void>;
    handleAccessTokenExpire: () => Promise<void>;
    refreshAccessToken: (data: any) => Promise<void>;
    refreshRefreshToken: (data: any) => Promise<void>;
};
export default RequestHandler;
