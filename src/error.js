export default function(err) {
    const message = err.message || 'unspecified error';
    throw (new Error(message)).stack;
}

