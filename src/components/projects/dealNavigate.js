// Customize user return user to main webpage 

export const dealNavigate = (redirect, navigate) => {
    if (redirect) {
        navigate(-1)
    } else {
        navigate("/", { replace: true });
    }
}