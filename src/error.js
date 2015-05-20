let ImgurError = err => {
    let message = err.message || 'unspecified error';
    throw (new Error(message)).stack;
};

export default ImgurError;
