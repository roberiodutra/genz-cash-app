// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import nodeFetch from 'node-fetch';
import '@testing-library/jest-dom';
import server from '../__tests__/mocks/server';

global.fetch = nodeFetch;
global.Request = nodeFetch.Request;

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
