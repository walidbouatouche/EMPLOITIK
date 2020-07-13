 
export const validateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}

export const required = (text: string) => {
    if (text.length == 0) {
        return false;
    }
    return true;
}

export const goodPassword = (passWord: string) => {
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    if (mediumRegex.test(passWord)) {
        return true;
    }
    return false;
}
export const dowloadPdfBlob = (data, title) => {

    const file = new Blob([data], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL)

}


export const onlyNmbrAlph = (text) => {
    // function for remove bad letter 
    return text.replace(/[^A-Za-z-1-2 _]/ig, '')
}

export const  dataURLtoFile=(dataurl) =>{
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr],  "cv.pdf", {type:mime});
}

 
 
