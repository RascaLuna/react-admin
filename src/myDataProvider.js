import { fetchUtils } from "react-admin";
import jsonServerProvider from 'ra-data-json-server';

const servicesHost = 'http://localhost:8000';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // const token = localStorage.getItem('token');
    // options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(servicesHost, httpClient);

const myDataProvider = {
    ...dataProvider,
    create: (resource, params) => {
        if (!params.data.file) {
            // fallback to the default implementation
            return dataProvider.create(resource, params);
        }

        const uploadFile = params.data.file[0];
        const blobUrl = uploadFile.url;

        // 画像URLの取得
        const blobObject = fetch(blobUrl);

        const fileName = uploadFile.name;

        // Blob -> Fileへ変換
        const imageFile = new File([blobObject], fileName, {type: "application/octet-stream"});

        const formData = new FormData();
        // Form Dataへバイナリデータを格納
        formData.append('file', imageFile);

        // Query Parameterの取得
        const urlParams = new URLSearchParams();
        urlParams.set('product_name', params.data.product_name);
        urlParams.set('detail', params.data.detail);

        // stringへ変換
        const queryParams = '?' +  urlParams.toString();

        return httpClient(`${servicesHost}/${resource}/${queryParams}`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()); // TODO バグ修正
    }
};

export default myDataProvider;
