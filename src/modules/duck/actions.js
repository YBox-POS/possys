import qwe from "./types";

  

const quack = () => ({
    type: qwe.QUACK
} );

const swim = () => ( {
    type:qwe.SWIM
} );

const reset = () =>({
    type:qwe.RESET
});

export default {
    swim,
    quack,
    reset
};