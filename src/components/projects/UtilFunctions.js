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

// this function returns texts that are used in the page display, 
// depending on which language is selected in the portfolio state
export const getLangText = (text, pt_text, en_text) => {
    switch (text) {
        case "PT":
            return pt_text;
        default:
            return en_text;
    }
}
