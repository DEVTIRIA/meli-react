export const conditionTranslate = (text) => {
    switch (text) {
        case 'new':
            text = 'Nuevo';
            break;
        case 'used':
            text = 'Usado';
            break;
        default:
            text = '';
            break;
    }

    return text;
};
