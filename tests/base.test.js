import {readJson} from "../src/base/readJson.js";
import {postTo} from "../src/base/postTo.js";

test('Read a json file', () => {
    const result = readJson('./tests/example-json.json');

    expect(result).toBeDefined();
    expect(result).toHaveProperty('lines');
    expect(result.lines[0].line).toBe(1);
    expect(result.lines[0].desc).toBe('item 1');
})

test('Post to an API', async () => {
    const payload = {
        data: {
            entities: [{id: '123'}]
        }, ratio: 0.7
    }

    const response = await postTo('https://koqoy.wiremockapi.cloud/dummy-endpoint', 'xyzabcd123123', payload)

    expect(response).toBeDefined();
    expect(response).toHaveProperty('items');
    expect(response.items).toHaveLength(3);
    expect(response.items[0].id).toBe(1)
    expect(response.items[0].name).toBe('item 1')
})