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
        const blobObject = fetch(blobUrl);

        const fileName = uploadFile.name;

        // Blob -> Fileへ変換
        const imageFile = new File([blobObject], fileName, {type: "application/octet-stream"});

        const formData = new FormData();

        formData.append('product_name', params.data.product_name);
        formData.append('detail', params.data.detail);
        formData.append('file', imageFile);

        return httpClient(`${servicesHost}/${resource}`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
    }
};

export default myDataProvider;
