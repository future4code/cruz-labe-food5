export const goToInitialPage = (history) => {
    history.push("/")
}

export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push("/signup")
}

export const goToHomePage = (history) => {
    history.push("/home")
}

export const goToRestaurantPage = (history, id) => {
    history.push(`/restaurant/${id}`)
}

export const goToCartPage = (history) => {
    history.push("/cart")
}

export const goToProfilePage = (history) => {
    history.push("/profile")
}

export const goToEditProfilePage = (history) => {
    history.push("/edit-profile")
}

export const goToEditAddressPage = (history) => {
    history.push("/edit-address")
}