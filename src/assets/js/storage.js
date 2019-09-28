const storage = window.localStorage;

const serialize = (value) => {
    return JSON.stringify(value);
};

const deserialize = (value) => {
    if (typeof value !== 'string') {
        return undefined;
    }
    try {
        return JSON.parse(value);
    } catch (e) {
        return value || undefined;
    }
};

export default {
    set(key, value) {
        if (value === undefined) {
            return;
        }
        storage.setItem(key, serialize(value));
    },
    get(key, def) {
        const value = deserialize(storage.getItem(key));
        return value === undefined ? def : value;
    },
    remove(key) {
        storage.removeItem(key);
    },
    clear() {
        storage.clear();
    }
};
