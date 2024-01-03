function echoType(param) {
    console.log(typeof param);
    if (param == null) {
        console.log('Parameter is not suitable for printing');
    } else {
        console.log(param);
    }


}
echoType(null)