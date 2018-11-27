import {
    BACK_TO_REVIEW
} from './types';


export const submitReview = (review) => {
    console.log("submitting review : ", review);

    return (dispatch) => {
        console.log(review);
        dispatch({
            type: BACK_TO_REVIEW,
            payload: {redirect : review}
        })
    }
}