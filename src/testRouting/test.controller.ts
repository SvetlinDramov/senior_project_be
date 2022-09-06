import * as helper from './test.helper';

function getExampleText(req,res,next) {
    try{
        return helper.getExampleText().then(response => {
            return res.status(200).send(response);
        })
    }
    catch(err) {
        return next(err);
    }
}

export {
    getExampleText,
}