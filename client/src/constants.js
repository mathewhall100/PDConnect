import sinemet from './images/medication/sinemet.jpg';
import sinemetCR from './images/medication/sinemet_cr.jpg';
import parcopa from './images/medication/parcopa.jpg';
import stalevo from './images/medication/stalevo.jpg';
import duopa from './images/medication/duopa.png';
import rytary from './images/medication/rytary.PNG';
import apokyn from './images/medication/apokyn.jpg';
import mirapex from './images/medication/mirapex.jpg';
import parlodel from './images/medication/parlodel.jpg';
import cycloset from './images/medication/cycloset.jpg';
import adartrel from './images/medication/adartrel.jpg';
import requip from './images/medication/requip.jpg';
import neupro from './images/medication/neupro.jpg';
import artane from './images/medication/artane.jpg';
import cogentin from './images/medication/cogentin.jpg';
import azilect from './images/medication/azilect.jpg';
import xadago from './images/medication/xadago.jpg';
import zelepar from './images/medication/zelepar.jpg';
import eldepryl from './images/medication/eldepryl.jpg';
import comtan from './images/medication/comtan.jpg';
import tasmar from './images/medication/tasmar.jpg';
import northera from './images/medication/northera.jpg';
import exelon from './images/medication/exelon.jpg';
import symmetrel from './images/medication/symmetrel.jpg';
import gocovri from './images/medication/gocovri.jpg';
import nuplazid from './images/medication/nuplazid.jpg';
import botox from './images/medication/botox.jpg';
import dysport from './images/medication/dysport.jpg';
import myobloc from './images/medication/myobloc.JPG';
import emsam from './images/medication/emsam.PNG';
import razadyne from './images/medication/razadyne.jpg';
import aricept from './images/medication/aricept.jpg';
import paxil from './images/medication/paxil.jpg';
import effexor from './images/medication/effexor.jpg';
// constants for select boxes

let ageArray = []
for (let i=30; i<109; i++) {
    ageArray.push({ "value": i, "text": i })
}
export const age = ageArray


export const sex = [
    {
        "value" : "male",
        "text" : "Male"
    },
    {
        "value" : "female",
        "text" : "Female"
    },
]

export const raceEthnicity = [
    {
        "value" : "american indian or alaska native",
        "text" : "American Indian or Alaska Native",
    },
    {
        "value": "asian",
        "text": "Asian",
    },
    {
        "value": "black or african american",
        "text": "Black or African American",
    },
    {
        "value": "pacific islander",
        "text": "Pacific Islander",
    },
    {
        "value": "white",
        "text": "White",
    },
    {
        "value": "hispanic or latino or spanish origin",
        "text": "Hispanic or Latino or Spanish Origin"
    },
    {
        "value" : "other",
        "text": "Other"
    }
]

let yearArray = []
for (let i=2020; i>1949; i--) {
    yearArray.push({ "value": i, "text": i })
}
export const years = yearArray


export const PDADLs = [
    {key: "none", title: "a. I have no difﬁculty with normal day-to-day activities.", text: "For example: Your Parkinson’s disease at present is not affecting your daily living"},
    {key: "mild", title: "b. I have mild difﬁculties with day-to-day activities.", text: "For example: You have some slowness with some aspects of housework, gardening or shopping. But you are able to dress and manage personal hygiene completely independently. You may feel that your medication is not quite effective as it was."},
    {key: "moderate", title: "c. I have moderate difﬁculties with day-to-day activities.", text: "For example: Your Parkinson’s disease is interfering with your daily activities. It is increasingly difﬁcult to do simple activities without some help such as rising from a chair, washing, dressing, shopping and/or housework. You may have some difﬁculties walking and may require assistance. Some recreational activities and driving a car may no lomger be possible. You find your Parkinson medication is now less effective."},
    {key: "high", title: "d. I have a high levels of difﬁculties with day-to-day activities.", text: "For example: You now require much more assistance with activities of daily living such as washing,dressing, housework or feeding yourself. You may have greater difﬁculties with mobility and ﬁnd you are becoming more dependent for assistance from others or aids and appliances. Your medication appears to be signiﬁcantly less effective than it used to be."},
    {key: "extreme", title: "e. I have extreme difﬁculties with day-to-day activities.", text: "For example: You require assistance in all daily activities. These may include dressing, washing,feeding yourself or walking unaided. You may now be housebound and obtain little or no beneﬁt from your medication."}
]

export const medGroups = [
    {class: "carbidopa/levodopa", target: "motor symptoms", text: "Carbidopa/levodopa preparations"},
    {class: "dopamine agonist", target: "motor symptoms", text: "Dopamine agonists"},
    {class: "anticholinergic", target: "motor symptoms", text: "Anticholinergic medications"},
    {class: "maob inhibitor", target: "motor symptoms", text: "MAOB inhinitors"},
    {class: "comt inhibitor", target: "motor symptoms", text: "COMT inhibitors"},
    {class: "other", target: "non-motor symptoms", text: "Other drugs used in Parkinson disease"},
    {class: "antidepressant/anxiety", target: "non-motor symptoms", text: "Antidepressants and anti-anxiety medications used in Parkinon disease"},
    {class: "cognitive", target: "non-motor symptoms", text: "Concentration enhancing medications"},
]

export const meds = [
    {key: "cldopa", generic: "Carbidopa-levodopa", trade: ["Sinemet", "Sinemet plus", "Sinemet CR", "Parcopa"], class: "carbidopa/levodopa", target: "motor", description: "CARBIDOPA/LEVODOPA is used to treat the symptoms of Parkinson's disease. It is sold as Sinemet, Sinemet plus, as extended release form Sinemet CR and as Parcopa", images: [sinemet, sinemetCR, parcopa] },
    {key: "stalevo", generic: "Carbidopa-levodopa-entacapone", trade: ["Stalevo"], class: "carbidopa/levodopa", target: "motor", description: "CARBIDOPA/LEVODOPA/ENTACAPONE is a combination of carbidopa/levodopa and entacapone used to treat the motor symptoms of parkinson disease. The carbidopa and entacapone help levodopa to work better. It is sold under the name STALEVO.", images: [stalevo]},
    {key: "duopa", generic: "Doupa therapy",  trade: ["Duopa"], class: "carbidopa/levodopa", target: "motor", description: "DUOPA is a carbidopa/levodapa enteral suspension. That means it is given through a special tube directly into the stomach or intestine. It is used to treat certain symptoms of advanced Parkinson's disease, such as motor fluctuations.", images: [duopa]},
    {key: "rytary", generic: "Rytary",  trade: ["Rytary"], class: "carbidopa/levodopa", target: "motor", description: "RYTARY is an extended release preparation of carbidopa/levodopa used to treat the motor symptoms of Parkinson's disease.", images: [rytary]},

    
    {key: "apomorphine", generic: "Apomorphine", trade: ["Apokyn"], class: "dopamine agonist", target: "motor", description: "APOMORPHINE is used to treat 'off' episodes in advanced Parkinson's disease", images: [apokyn]},
    {key: "bromocriptine", generic: "Bromocriptine", trade: ["Parlodel", "Cycloset"], class: "dopamine agonist", target: "motor", description: "BROMOCRIPTINE is used together with other Parkinson drugs and helps reduces stiffness and with walking", images: [parlodel, cycloset]},
    {key: "pramipexole", generic: "Pramipexole", trade: ["Mirapex", "Mirapex ER"], class: "dopamine agonist", target: "motor", description: "PRAMIPEXOLE is used to treat the symptoms of Parkinson's disease. It helps to improve muscle control and movement difficulties.", images: [mirapex]},
    {key: "ropinirole", generic: "Ropinirole", trade: ["Requip", "Requip XL", "Adartrel"], class: "dopamine agonist",target: "motor", description: "ROPINIROLE is used to treat the symptoms of Parkinson's disease. It helps to improve muscle control and movement difficulties.",  images: [requip, adartrel]},
    {key: "rotigotine", generic: "Rotigotine", trade: ["Neupro transdermal"], class: "dopamine agonist", target: "motor", description: "ROTIGOTINE is used to treat symptoms of parkinson disease such as as stiffness and bradykinesia", images: [neupro]},

    {key: "benztropine", generic: "Benztropine", trade: ["Cogentin"], target: "motor", class: "anticholinergic", description: "", images: [cogentin]},
    {key: "trihexyphenidyl", generic: "Trihexphenidyl", trade: ["Artane, Tremin"], target: "motor", class: "anticholinergic", description: "", images: [artane]},

    {key: "rasagline", generic: "Rasagline", trade: ["Azilect"], class: "maob inhibitor", target: "motor", description: "", images: [azilect]},
    {key: "safinamide", generic: "Safinamide", trade: ["Xadago"], class: "maob inhibitor", target: "motor", description: "", images: [xadago]},
    {key: "selegiline", generic: "Selegiline", trade: ["Eldepryl, Zelepar, Emsam transdermal, anipryl"], class: "maob inhibitor", description: "", images: [eldepryl, zelepar, emsam]},

    {key: "entacapone", generic: "Entacapone", trade: ["Comtan"], class: "comt inhibitor", target: "motor", description: "", images: [comtan]},
    {key: "tolcapone", generic: "Tolcapone", trade: ["Tasmar"], class: "comt inhibitor", target: "motor", description: "", images: [tasmar]},

    {key: "amantadine", generic: "Amantadine", trade: ["Symmetrel"], class: "other", target: "motor", description: "", images: [symmetrel]},
    {key: "amantadineer", generic: "Amantadine extended release", trade: ["Gocovri"], class: "other", target: "motor", description: "", images: [gocovri]},
    {key: "bottox", generic: "Botulinum Toxin injection", trade: ["Botox, Dysport, Myobloc, Xeomin"], class: "other", description: "", images: [botox, dysport, myobloc]},
    {key: "droxidopa", generic: "Droxidopa", trade: ["Northera"], class: "other", target: "non-motor", description: "", images: [northera]},
    {key: "Pimavanserin", generic: "Nuplazid", trade: ["Nuplazid"], class: "other", target: "non-motor", description: "", images: [nuplazid]},

    {key: "rivastigmine", generic: "Rivastigmine", trade: ["Exelon"], class: "cognitive", target: "non-motor", description: "Rivastigmine is indcated for the treatment of mild to mederate dementia (cognitive impairment and memory loss) associated with Parkinson disease.", images: [exelon]},
    {key: "donepezil", generic: "Donepezil", trade: ["Aricept"], class: "cognitive", target: "non-motor", description: " Aricdept is used to treat dementia (cognitive impairment and memory loss) in some patients with Parkinson disease, particularly those with overlapping Alzheimer disease. ", images: [aricept]},
    {key: "galantamine", generic: "Galantamine", trade: ["Razadyne, Razadyne ER"], class: "cognitive", target: "non-motor", description: "Galantamine is used to treat mild to mederate dementia (cognitive impairment and memory loss) in some patients with Parkinson disease", images: [razadyne]},

    {key: "paroxetine", generic: "Paroxetine", trade: ["Paxil"], class: "antidepressant/anxiety", target: "non-motor", description: "Commonly used antidepressant medication used to treat depressive symptoms in Parkinson disease. ", images: [paxil]},
    {key: "venlafaxine", generic: "Venlafaxine", trade: ["Effexor XR"], class: "antidepressant/anxiety", target: "non-motor", description: "Commonly used antidepressant medication used to treat symptoms of depression and anxiety in Parkinson disease", images: [effexor]},
]

export const motorSy = [
    {display: "main", key: "tremor", symptom: "Tremor", shortDescription: "You have rhythmic shaking that bothers you or prevents you doing normal things.", description: "Tremors are rhythmic, shaking like, movements of any part of the body which you cannot control. Parkinson patients most commonly experince tremors in the arm and/or leg and these can interfere with normal activities like doing up buttons or using a computer keyboard!"},
    {display: "main", key: "rigidity", symptom: "Stiffness", shortDescription: "Your arms and legs feel stiff and are difficult to move.", description: "Stiffness in Parkinson disease is a feeling that the arms and legs are stiff or rigid and are really difficult to get moving at times"},
    {display: "main", key: "bradykinesia", symptom: "Slowness of movement", shortDescription: "Moving around and walking is now much slower and takes longer than it should.", description: "You may experience unusual slowness getting out of chairs, moving around normally and are noticeably slow ewhen you are walking. You and others may notice thant when you walk you take small steps as if you are shuffling along. This may vary with throughout the day with your Parkinon medication."}, 
    {display: "main", key: "micrographia", symptom: "Small handwriting (called micro-graphia)", shortDescription: "You have noticed your handwriting is now much smaller than normal .", description: "Many patients with Parkinson notice thier handwriting becoming smaller and can become difficult to read. This is called micrographia."},
    {display: "main", key: "motorfluct", symptom: "Motor fluctuations", shortDescription: "You experience fluctuating or varying degrees of Parkinson symptoms throughout the day.", description: "You notice that your Parkinson symptoms, for example tremor, stiffness and slowness, actually vary with time during the day. The variations can be slight but have a noticeable affect on what yoi can do at diffr=erent times or large and you feel you swing from 'on' to 'off' and back as the day goes on. The fluctuations may follow a predicatble pattern, be associated with when you take your parkinson medications or appear to be randm and unpredictable. "},
    {display: "sub", key: "morningbrady", symptom: "Slowness of movement in the morning", shortDescription: "You feel very slow and stiff in the morning, when you aare trying to get up.", description: "You feel very slow and stiff in the morning, when you trying to get up up such that going through the normal morning routine takes a lot longer and is difficult. The symptoms wear off as the day goes on and/or after taking Parkinson medication "},
    {display: "sub", key: "earlyoff", symptom: "Early wearing off", shortDescription: "You medications wear off and Parkinson symptoms return before the next dose is due.", description: "You find that your Parkinson medication is effective, but that it doesn't last long enough and symptoms of Parkinson disease return before the next dose of Parkinson medication is due. This is known as early 'wearing off'. "},
    {display: "sub", key: "suddenoff", symptom: "Unpredictable wear off", shortDescription: "You experience sudden or unpredicatble return of Parkinson symptoms.", description: "While you are taking your medications as normal, you have times when your Parkinson symptoms (for example, tremor, stiffness and slowness) return very suddenly and without warning."},
    {display: "sub", key: "freezing", symptom: "Freezing", shortDescription: "Sometimes your feet feel 'stuck to the ground' and you can't move, walk or rise from a chair.", description: "Sudden episodes of inability to move, walk or rise from a chair due to legs your feet feeling 'frozen' or 'stuck' to the ground. Some patients can overcome freezing episodes using certain visual tricks or sounds."},
    {display: "main", key: "dyskinesia", symptom: "Troubling dyskinesia", shortDescription: "You suffer with involuntary dance-like movements affecting part or all of the body.", description: "Dyskinesias are involuntary dance like movements, involving part or the whole body and can make it look or feel like you are in a constant state of jerking or writhing. They are different from tremor. Dyskinesia are associated with Parkinson medications and are not a symptom of the disease itself.  "},
    // {display: "main", key: "fall", symptom: "Falls", shortDescription: "Falling over due to increased difficulty with balance and walking.", description: "Falling over due to increased difficulty with balance and walking can be a serious symptom of Parkinson disease and may result in injury and/or ED attendances."}, 
    {display: "main", key: "footcurl", symptom: "Foot spasm / toe curling", shortDescription: "You suffer with painful twisting of the foot, and/or curling of toes which you cannot undo.", description: "Some parkinson patients suffer with involuntary contraction of leg/foot muscles causing twisting of the leg, foot, or curling of toes, causing pain and difficulty walking."},
]

export const MOTOR_FLUCT_KEYS = ["earlyoff", "suddenoff", "morningbrady", "freezing"]

export const nonMotorSy= [
    {key: "depression", symptom: "Depression", shortDescription: "Your mood is low and you have feelings of hopelessness.", description: "Feelings or low mood, inability to enjoy anything and feelings of hopelessness are all signs of depression."}, 
    {key: "anxiety", symptom: "Anxiety", shortDescription: "You often feel anxious, apprehensive or very stressed.", description: "Feelings of anxiousness, apprehension or stress often accompanied by physical symptoms such as palpitationsand sweating."},
    {key: "apathy", symptom: "Apathy", shortDescription: "You feel disinterested in life and don't really want to do anything.", description: "Absence or lack of emotion or excitement about things other people would find emotional or exciting. Lack of interest in doing things or in the environment. "},
    {key: "insomnia", symptom: "Poor sleep", shortDescription: "You have difficulty getting to sleep or often wake in the night and can't get back to sleep.", description: "Difficulty getting to sleep or waking in the night and unable to get back to sleep."},
    {key: "orthostatic", symptom: "Dizziness, lightheadedness or feeling faint", shortDescription: "You get dizzy, lightheaded or feel faint, particularly after standing or changing position.",description: "Dizziness, lightheadedness or feeling faint, particularly after standing or changing position can be a symptom of parkinson disease which can be minor for some but troubling for others. It is due to a sudden, abnormal drop in blood pressure on postural change and is known medically as orthostatic hypotension. Patients adjust by rising slowly from lying or a chair and waiting a couple of minutes for the feeling to go before strating walking."},
    {key: "slowtransit", symptom: "Nausea and bloating", shortDescription: "You feel nauseous, sick and often get a bloated stomach.", description: "A reduction in gut motility affects some Parkinson patients and this is experienced as feelings of nausea and stomach bloating. Though not serious it can mean a slower digestion and therefore slower absorbance into the body of oral medications."},
    {key: "constipation", symptom: "Constipation", shortDescription: "You have infrequent, or difficulty with, bowel movements.", description: "Infrequent and or difficulty with bowel movements."},   
    {key: "drooling", symptom: "Drooling", shortDescription: "You drool saliva from the mouth which you have difficulty controlling.", description: "Drooling of saliva from the mouth which you have difficulty controlling."},
    {key: "psychosis", symptom: "Hallucination or delusion", shortDescription: "You or others notice that you sometimes see or believe things that are not really there or true.", description: "Hallucinations are seeing things that are not actually there. Parkinson patients with hallucinations often see shadows, shapes, people or animals but it can be anything. Delusions are unshakable beliefs in something that is not true. Common delusions are thinking that people are out to steal from you, or to harm or poison you, or even that a spouse is being unfaithful when it is not true, but again they can be about anything. Delusions may occur on their own or together with hallucinations."},
    {key: "dysphagia", symptom: "Difficulty swallowing (called dysphagia)", shortDescription: "You have difficulty swallowing food, liquid or pills and may have choking episodes.", description: "In the advanced stages of Parkinson disease, swallowing may be affected and this is experienced as difficulty swallowing food and liquids and may lead to choking episodes when eating or drinking."},
    {key: "cogdecline", symptom: "Poor cognition", shortDescription: "You or others around you notice you have difficulty thinking and/or remembering things. ", description: "From time to time it is common to have difficulty thinking or remembering things, especially with older age, but if thinking through normal activities or remembering day-to-day events has become a significant problem for you in your life or that others around you notice, then it would be appropriate to tick this box."},
]

export const procedures  = [
    {key: "dbs", procedure: "Deep brain stimulation", shortDescription: "Implanting of small elecrodes into the brain to control Parkinson disease symptoms by electrical stimulation", description: "Deep Brain Stimulation (DBS) involves a neurosurgical operation to place two small electrodes into a part of the brain associated with Parkinson disease. These electrodes are then used to send elctrical signals to the brain via a patient controlled device to suppress Parkinson symptoms when required. "},
    {key: "pegj", procedure: "Placement of a feeding tube", shortDescription: "Placement of a feeding tube through the stomach wall to deliver drugs such as Duopa directly into the intestine.", description: "Placement of a feeding tube through the stomach wall (called a PEG-J tube)to deliver drugs such as Duopa directly into the intestine."},
    {key: "othernuerosurg", procedure: "Other neurosurgery", shortDescription: "An operation to remove a part of the brain (pallidotomy or thalamotomy)", description: "Palidotomy and thalamotomy are now very rarely carried out having been superceeded over the past 10 years by deep brain stimulation,  but a small number of older Parkinson patients may have had these surgeries in the past."},
]