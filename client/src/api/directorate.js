import { sendRequest } from './index';

const getItem = async (id) => {
    const gql = `
            query GetItem($id: ID!) {
                directorate(id: $id) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { id });
    return response.directorate;
}

const getItems = async () => {
    const gql = `
            {
                directorates {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql);
    return response.directorates;
}

const createItem = async ({ title }) => {
    const gql = `
            mutation CreateItem($title: String!) {
                createDirectorate(input: {title: $title }) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { title });
    return response.createDirectorate;
}

const updateItem = async (id, { title }) => {
    const gql = `
            mutation UpdateItem($id: ID!, $title: String!) {
                updateDirectorate(id: $id, input: {title: $title }) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { id, title });
    return response.updateDirectorate;
}

const deleteItem = async (id) => {
    const gql = `
            mutation RemoveItem($id: ID!) {
                removeDirectorate(id: $id) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { id });
    return response.removeDirectorate;
}

export default {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}