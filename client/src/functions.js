export const testBotTox = (userNonMotorSy) => {
    console.log("testBotTox")
    if (userNonMotorSy) {
        let test = null;
        test = userNonMotorSy.filter(symptom => symptom === "drooling") 
        //console.log(test.length)
        if  (test.length > 0) {return true} else {return false}
    }
}

export const testDBS= (userAbout, userMotorSy, userNonMotorSy) => {
    console.log("testDBS")
    if (userAbout && userMotorSy && userNonMotorSy) {
        let test1, test2, test3, test4, test5 

        test1 = parseInt(userAbout.yearDiagnosed) < 2014 ? true : false
        test2 = userMotorSy.filter(symptom => symptom === "suddenoff")
        test3 = userMotorSy.filter(symptom => symptom === "freezing")
        test4 = userMotorSy.filter(symptom => symptom ===  "dyskinesia")
        test5 = userNonMotorSy.filter(symptom => symptom ===  "cogdecline")

        //console.log("DBS: ", test1, test2.length, test3.length, test4.length)

        if (test1 && (test2.length > 0 || test3.length > 0 || test4.length > 0) && test5.length < 1) {return true} else {return false}
    }

}

export const testRytary = (userMeds, userMotorSy) => {
    console.log("testRytary")
    if (userMeds && userMotorSy) {
        let test1, test2, test3, test4

        test1 = userMeds.length > 0 ? true : false
        test2 = userMotorSy.filter(symptom => symptom === "suddenoff")
        test3 = userMotorSy.filter(symptom => symptom ===  "dyskinesia")
        test4 = userMotorSy.filter(symptom => symptom === "motorfluct")

        //console.log("rytary: ", test1, test2.length, test3.length)

        if (test1 && (test2.length > 0 || test3.length > 0 || test4.length > 0)) {return true} else {return false}
    }
}

export const testDuopa = (userNonMotorSy, userMotorSy, userMeds) => {
    console.log("testDuopa")
    if (userNonMotorSy && userMotorSy && userMeds) {
        let test1, test2, test3, test4, test5 

        test1 = userNonMotorSy.filter(symptom => symptom === "dysphagia")
        test2 = userNonMotorSy.filter(symptom => symptom === "slowtransit")
        test3 = userMotorSy.filter(symptom => symptom === "suddenoff")
        test4 = userMotorSy.filter(symptom => symptom ===  "dyskinesia")
        test5 = userMeds.length > 0 ? true : false

        //console.log("dupoa: ", test1.length, test2.length, test3.length, test4.length, test5)

        if ((test1.length > 0 ||  test2.length > 0) && (test3.length > 0 || test4.length > 0) && test5) {return true} else {return false}
    }
}

export const testDroxidopa = (userNonMotorSy) => {
    console.log("testDroxidopa")
    if (userNonMotorSy) {   
        let test = null;
        test = userNonMotorSy.filter(symptom => symptom === "orthostatic")

        //console.log(test.length)

        if  (test.length > 0) {return true} else {return false}
    }
}

export const testNuplazid = (userNonMotorSy) => {
    console.log("testNuplazid") 
    if (userNonMotorSy) {
        let test = null;
        test = userNonMotorSy.filter(symptom => symptom === "psychosis")
        // console.log(test.length)
        if  (test.length > 0) {return true} else {return false}
    }
}

export const testApomorphine = (userMotorSy) => {
    console.log("testApomorphine")
    if (userMotorSy) {
        let test1, test2 

        test1 = userMotorSy.filter(symptom => symptom === "freezing")
        test2 = userMotorSy.filter(symptom => symptom === "suddenoff")

       //console.log(test1.length, test2.length)

        if  (test1.length > 0 && test2.length > 1) {return true} else {return false}
    }
}

export const testSPARK = (userAbout, userMeds) => {
    console.log("testSpark")
    if (userAbout && userMeds) {
        let test1, test2, test3


        test1 = (parseInt(userAbout.age) > 40 && parseInt(userAbout.age) < 81 ) ? true : false
        test2 = parseInt(userAbout.yearDiagnosed) > 2015 ? true : false
        test3 = userMeds.length < 1 ? true : false

        //console.log("spark: ", test1, test2, test3)

        if (test1 && test2 && test3) {return true} else {return false}
    }
}


export const testNILO = (userAbout, userMeds) => {
    console.log("testNILO")
    if (userAbout && userMeds) {
        let test1, test2, test3 

        test1 = (parseInt(userAbout.age) > 40 && parseInt(userAbout.age) < 80 ) ? true : false
        test2 = parseInt(userAbout.yearDiagnosed) < 2013 ? true : false
        test3 = userMeds.length > 0 ? true : false

        //console.log("spark: ", test1, test2, test3)

        if (test1 && test2 && test3) {return true} else {return false}
    }
} 