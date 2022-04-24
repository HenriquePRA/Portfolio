// Customize user return user to main webpage 

export const dealNavigate = (redirect, navigate) => {
    if (redirect) {
        navigate(-1)
    } else {
        navigate("/", { replace: true });
    }
}

    // function responsable for showing an image
export const showImg = (target, setShowPic, setSelpic, orientation) => {
        setShowPic(true)
        setSelpic([
            <img 
                src={target.src} 
                alt={target.alt + " onViewMode"}
                className={orientation === "vertical" ? "selpic vertical_selpic" : "selpic horizontal_selpic"}
                key={target.alt}
            />
        ])
    }

    // function responsible for hiding an image
export const hideImg = (target,  setShowPic) => {
        let clsTarget = target.target.className
        if (!(clsTarget === "selpic")) {
            setShowPic(false)
        }
    }
