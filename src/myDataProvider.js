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

        let formData = new FormData();

        formData.append('product_name', params.data.product_name);
        formData.append('detail', params.data.detail);
        console.log(params.data.file[0].url)
        formData.append('file', params.data.file.rawFile);

        return httpClient(`${servicesHost}/${resource}`, {
            method: 'POST',
            body: formData,
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }));
    }
};

export default myDataProvider;
