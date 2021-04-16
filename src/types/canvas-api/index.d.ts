declare module '@kth/canvas-api' {
    class CanvasAPI {
        constructor(apiUrl: str, apiToken: str, options?: {});
        gotClient: any;
        requestUrl(endpoint: str, method: any, body?: {}, options?: {}): Promise<any>;
        get(endpoint: any, queryParams?: {}): Promise<any>;
        _listPaginated(endpoint: str, queryParams?: {}, options?: {}): AsyncGenerator<any, void, unknown>;
        _list(endpoint: str, queryParams?: {}, options?: {}): AsyncGenerator<any, void, unknown>;
        sendSis(endpoint: str, attachment: any, body?: {}): Promise<any>;
        listPaginated(endpoint: str, queryParams?: {}, options?: {}): str[];
        list(endpoint: str, queryParams?: {}, options?: {}): str[];
    }
    export = CanvasAPI;
}
