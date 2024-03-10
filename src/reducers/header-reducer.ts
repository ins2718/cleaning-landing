import { createSlice } from "@reduxjs/toolkit";

export const headerReducer = createSlice({
    name: "headerReducer",
    initialState: {
        isMobileMenuVisible: false,
        isOrderFormVisible: false,
        isOrderFormAgreed: false,
        isCookieConfirmed: true,
        videoGalleryVideo: false as number | false,
    },
    reducers: {
        showMobileMenu: (state) => {
            state.isMobileMenuVisible = true;
        },
        hideMobileMenu: (state) => {
            state.isMobileMenuVisible = false;
        },
        hideOrderForm: (state) => {
            state.isOrderFormVisible = false;
        },
        showOrderForm: (state) => {
            state.isOrderFormVisible = true;
        },
        toggleOrderFormAgreement: (state) => {
            state.isOrderFormAgreed = !state.isOrderFormAgreed;
        },
        openVideoGallery: (state, action) => {
            state.videoGalleryVideo = action.payload;
        },
        closeVideoGallery: (state) => {
            state.videoGalleryVideo = false;
        },
        confirmCookie: (state) => {
            window.localStorage.setItem("cookie", "1");
            state.isCookieConfirmed = true;
        },
        setIsCookieConfirmed: (state, action) => {
            state.isCookieConfirmed = action.payload;
        },
    },
});

export const { showMobileMenu, hideMobileMenu, hideOrderForm,
    showOrderForm, toggleOrderFormAgreement, openVideoGallery,
    closeVideoGallery, confirmCookie, setIsCookieConfirmed } = headerReducer.actions;

export default headerReducer.reducer;