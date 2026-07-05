// import { createSlice } from "@reduxjs/toolkit";

// const RequestSlice = createSlice({
//   name: "connection",
//   initialState: null,

//   reducers: {
//     addRequests: (state, action) => action.payload,
//      removeRequest: (state, action) => {
//       return state.filter(
//         (request) => request._id !== action.payload
//       );
//     },

    
//   },
// });

// export const { addRequests , removeRequest} =
//   RequestSlice.actions;

// export default RequestSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,

  reducers: {
    addRequests: (state, action) => action.payload,

    removeRequest: (state, action) => {
      return state.filter(
        (request) => request._id !== action.payload
      );
    },

    removeRequests: () => null,
  },
});

export const {
  addRequests,
  removeRequest,
  removeRequests,
} = requestSlice.actions;

export default requestSlice.reducer;