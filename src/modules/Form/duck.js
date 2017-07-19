// Action Type

export const initialState = {
  formsa: {}
};

export const GET_IMAGESFORM = 'GET_IMAGESFORM'
export const ON_IMAGESFORM = 'ON_IMAGESFORM'

// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGESFORM:
      return {
        formsa: action.payload.reduce((acc, form) => ({ ...acc, [form.id]: form }), {})
      }
    default:
      return state;
  }
}

// Action Creators


export const onimageform = () => {
  return ({
    type: ON_IMAGESFORM,
  })
}