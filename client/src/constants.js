import { CREDS_INFO } from "./actions/types";
import sinemet from './images/medication/sinemet.jpg';
import sinemetCR from './images/medication/sinemet_cr.jpg';
import parcopa from './images/medication/parcopa.jpg';
import stalevo from './images/medication/stalevo.jpg';
import duopa from './images/medication/duopa.png';
import rytary from './images/medication/rytary.PNG';
import apokyn from './images/medication/apokyn.jpg';
import mirapex from './images/medication/mirapex.jpg';
// constants for select boxes

export const age = [
    { "value": 30, "text": 30 },
    { "value": 31, "text": 31 },
    { "value": 32, "text": 32 },
    { "value": 33, "text": 33 },
    { "value": 34, "text": 34 },
    { "value": 35, "text": 35 },
    { "value": 36, "text": 36 },
    { "value": 37, "text": 37 },
    { "value": 38, "text": 38 },
    { "value": 39, "text": 39 },
    { "value": 40, "text": 40 },
    { "value": 41, "text": 41 },
    { "value": 42, "text": 42 },
    { "value": 43, "text": 43 },
    { "value": 44, "text": 44 },
    { "value": 45, "text": 45 },
    { "value": 46, "text": 46 },
    { "value": 47, "text": 47 },
    { "value": 48, "text": 48 },
    { "value": 49, "text": 49 },
    { "value": 50, "text": 50 },
    { "value": 51, "text": 51 },
    { "value": 52, "text": 52 },
    { "value": 53, "text": 53 },
    { "value": 54, "text": 54 },
    { "value": 55, "text": 55 },
    { "value": 56, "text": 56 },
    { "value": 57, "text": 57 },
    { "value": 58, "text": 58 },
    { "value": 59, "text": 59 },
    { "value": 60, "text": 60 },
    { "value": 61, "text": 61 },
    { "value": 62, "text": 62 },
    { "value": 63, "text": 63 },
    { "value": 64, "text": 64 },
    { "value": 65, "text": 65 },
    { "value": 66, "text": 66 },
    { "value": 67, "text": 67 },
    { "value": 68, "text": 68 },
    { "value": 69, "text": 69 },
    { "value": 70, "text": 70 },
    { "value": 71, "text": 71 },
    { "value": 72, "text": 72 },
    { "value": 73, "text": 73 },
    { "value": 74, "text": 74 },
    { "value": 75, "text": 75 },
    { "value": 76, "text": 76 },
    { "value": 77, "text": 77 },
    { "value": 78, "text": 78 },
    { "value": 79, "text": 79 },
    { "value": 80, "text": 80 },
    { "value": 81, "text": 81 },
    { "value": 82, "text": 82 },
    { "value": 83, "text": 83 },
    { "value": 84, "text": 84 },
    { "value": 85, "text": 85 },
    { "value": 86, "text": 86 },
    { "value": 87, "text": 87 },
    { "value": 88, "text": 88 },
    { "value": 89, "text": 89 },
    { "value": 90, "text": 90 },
    { "value": 91, "text": 91 },
    { "value": 92, "text": 92 },
    { "value": 93, "text": 93 },
    { "value": 94, "text": 94 },
    { "value": 95, "text": 95 },
    { "value": 96, "text": 96 },
    { "value": 97, "text": 97 },
    { "value": 98, "text": 98 },
    { "value": 99, "text": 99 },
    { "value": 100, "text": 100 },
]

export const sex = [
    {
        "value" : "male",
        "text" : "Male"
    },
    {
        "value" : "female",
        "text" : "Female"
    }
]

export const raceEthnicity = [
    {
        "value" : "American Indian or Alaska Native",
        "text" : "American Indian or Alaska Native",
    },
    {
        "value": "Asian",
        "text": "Asian",
    },
    {
        "value": "Black or African American",
        "text": "Black or African American",
    },
    {
        "value": "Pacific Islander",
        "text": "Pacific Islander",
    },
    {
        "value": "White",
        "text": "White",
    },
    {
        "value": "Hispanic or Latino or Spanish Origin",
        "text": "Hispanic or Latino or Spanish Origin"
    },
    {
        "value" : "Other",
        "text": "Other"
    }
]

export const years = [
    {
        "value": "ns",
        "text": "not sure"
    },
    {
        "value": "2018",
        "text": "2018"
    },
    {
        "value": "2017",
        "text": "2017"
    },
    {
        "value": "2016",
        "text": "2016"
    },
    {
        "value": "2015",
        "text": "2015"
    },
    {
        "value": "2014",
        "text": "2014"
    },
    {
        "value": "2013",
        "text": "2013"
    },
    {
        "value": "2012",
        "text": "2012"
    },
    {
        "value": "2011",
        "text": "2011"
    },
    {
        "value": "2010",
        "text": "2010"
    },
    {
        "value": "2009",
        "text": "2009"
    },
    {
        "value": "2008",
        "text": "2008"
    },
    {
        "value": "2007",
        "text": "2007"
    },
    {
        "value": "2006",
        "text": "2006"
    },
    {
        "value": "2005",
        "text": "2005"
    },
    {
        "value": "2004",
        "text": "2004"
    },
    {
        "value": "2003",
        "text": "2003"
    },
    {
        "value": "2002",
        "text": "2002"
    },
    {
        "value": "2001",
        "text": "2001"
    },
    {
        "value": "2000",
        "text": "2000"
    },
    {
        "value": "1999",
        "text": "1999"
    },
    {
        "value": "1998",
        "text": "1998"
    },
    {
        "value": "1997",
        "text": "1997"
    },
    {
        "value": "1996",
        "text": "1996"
    },
    {
        "value": "1995",
        "text": "1995"
    },
    {
        "value": "1994",
        "text": "1994"
    },
    {
        "value": "1993",
        "text": "1993"
    },
    {
        "value": "1992",
        "text": "1992"
    },
    {
        "value": "1991",
        "text": "1991"
    },
    {
        "value": "1990",
        "text": "1990"
    },
    {
        "value": "1989",
        "text": "1989"
    },
    {
        "value": "1988",
        "text": "1988"
    },
    {
        "value": "1987",
        "text": "1987"
    },
    {
        "value": "1986",
        "text": "1986"
    },
    {
        "value": "1985",
        "text": "1985"
    },
    {
        "value": "1984",
        "text": "1984"
    },
    {
        "value": "1983",
        "text": "1983"
    },
    {
        "value": "1982",
        "text": "1982"
    },
    {
        "value": "1981",
        "text": "1981"
    },
    {
        "value": "1980",
        "text": "1980"
    },
    {
        "value": "1979",
        "text": "1979"
    }
];


export const PDADLs = [
    {key: "none", title: "I have no difﬁculty with normal day-to-day activities.", text: "For example: Your Parkinson’s disease at present is not affecting your daily living"},
    {key: "mild", title: "I have mild difﬁculties with day-to-day activities.", text: "For example: Slowness with some aspects of housework, gardening or shopping. Able to dress and manage personal hygiene completely independently but rate is slower. You may feel that your medication is not quite effective as it was."},
    {key: "moderate", title: "I have moderate difﬁculties with day-to-day activities.", text: "For example: Your Parkinson’s disease is interfering with your daily activities. It is increasinglydifﬁcult to do simple activities without some help such as rising from a chair, washing, dressing,shopping, housework. You may have some difﬁculties walking and may require assistance. Difﬁcultieswith recreational activities or the ability to drive a car. The medication is now less effective."},
    {key: "high", title: "I have a high levels of difﬁculties with day-to-day activities.", text: "For example: You now require much more assistance with activities of daily living such as washing,dressing, housework or feeding yourself. You may have greater difﬁculties with mobility and ﬁnd you are becoming more dependent for assistance from others or aids and appliances. Your medicationappears to be signiﬁcantly less effective."},
    {key: "extreme", title: "I have extreme difﬁculties with day-to-day activities.", text: "For example: You require assistance in all daily activities. These may include dressing, washing,feeding yourself or walking unaided. You may now be housebound and obtain little or no beneﬁtfrom your medication."}
]

export const medGroups = [
    {class: "carbidopa/levodopa", target: "motor symptoms"},
    {class: "dopamine agonist", target: "motor symptoms"},
    {class: "anticholinergic", target: "motor symptoms"},
    {class: "maob inhibitor", target: "motor symptoms"},
    {class: "comt inhibitor", target: "motor symptoms"},
    {class: "other", target: "non-motor symptoms"}
]

export const meds = [
    {key: "cldopa", generic: "Carbidopa-levodopa", trade: ["Sinemet", "Sinemet plus", "Sinemet CR", "Parcopa"], class: "carbidopa/levodopa", target: "motor", images: [sinemet, sinemetCR, parcopa] },
    {key: "stalevo", generic: "Carbidopa-levodopa-entacapone", trade: ["Stalevo"], class: "carbidopa/levodopa", target: "motor", images: [stalevo]},
    {key: "duopa", generic: "Doupa therapy",  trade: ["Duopa"], class: "carbidopa/levodopa", target: "motor", images: [duopa]},
    {key: "rytary", generic: "Rytary",  trade: ["Rytary"], class: "carbidopa/levodopa", target: "motor", images: [rytary]},

    
    {key: "apomorphine", generic: "Apomorphine", trade: ["Apokyn"], class: "dopamine agonist", target: "motor", images: [apokyn]},
    {key: "bromocriptine", generic: "Bromocriptine", trade: ["Parlodel", "Cycloset"], class: "dopamine agonist", target: "motor", description: ""},
    {key: "pramipexole", generic: "Pramipexole", trade: ["Mirapex", "Mirapex ER"], class: "dopamine agonist", target: "motor", images: [mirapex]},
    {key: "ropinirole", generic: "Ropinirole", trade: ["Requip", "Requip XL", "Adartrel"], class: "dopamine agonist",target: "motor",  description: ""},
    {key: "rotigotine", generic: "Rotigotine", trade: ["Neupro"], class: "dopamine agonist", target: "motor", description: ""},

    {key: "benztropine", generic: "Benztropine", trade: ["Cogentin"], target: "motor", class: "anticholinergic", description: ""},
    {key: "trihexyphenidyl", generic: "Trihexphenidyl", trade: ["Artane, Tremin"], target: "motor", class: "anticholinergic", description: ""},

    {key: "rasagline", generic: "Rasagline", trade: ["Azilect"], class: "maob inhibitor", target: "motor", description: ""},
    {key: "safinamide", generic: "Safinamide", trade: ["Xadago"], class: "maob inhibitor", target: "motor", description: ""},
    {key: "selegiline", generic: "Selegiline", trade: ["Eldepryl, Zelepar, Emsam, L-deprenyl"], class: "maob inhibitor", description: ""},

    {key: "entacapone", generic: "Entacapone", trade: ["Comtan"], class: "comt inhibitor", target: "motor", description: ""},
    {key: "tolcapone", generic: "Tolcapone", trade: ["Tasmar"], class: "comt inhibitor", target: "motor", description: ""},

    {key: "amantadine", generic: "Amantadine", trade: ["Gocovri", "Symadine", "Symmetrel"], class: "other", target: "motor", description: ""},
    {key: "bottox", generic: "Botulinum Toxin", trade: ["Botox, Dysport, Myobloc, Xeomin"], class: "other", description: ""},
    {key: "droxidopa", generic: "Droxidopa", trade: ["Northera"], class: "other", target: "non-motor", description: ""},
    {key: "Pimavanserin", generic: "Nuplazid", trade: ["Nuplazid"], class: "other", target: "non-motor", description: ""},
    {key: "rivastigmine", generic: "Rivastigmine", trade: ["Exelon"], class: "other", target: "non-motor", description: ""},
]

export const motorSy = [
    {key: "motorfluct", symptom: "Motor fluctuations", shortDescription: "Fluctuating or varying Parkinson symptoms and dyskinesia during the day.", description: "After a number of years taking Parkinson medications, they can become less effective and their effects last for shorter periods of time. As this happens, it becomes more difficult to maintain a steady dose of medication in the body and, as medication levels go up and down, patients experience fluctuating or varying Parkinson symptoms. This is commonly experienced as a return of Parkinson symptoms such as tremor, stiffness, slowness and gait freezing when medication levels drop, usually before the next medication dose, and dyskinesia or involuntary movements when medications levels are highest."},
    {key: "earlyoff", symptom: "Early wear off", shortDescription: "Return of Parkinson symptoms before next dose of medication is due.", description: "After a number of years taking Parkinson medications, they can become less effective and their effects last for shorter periods of time. Many patients at this stage in their disease experience early 'wear off', where the sypmtoms of Parkinson disease (e.g. tremor, stiffness, slowness and/or gait freezing) return before the next dose of parkinson medication is due."},
    {key: "suddenoff", symptom: "Unpredictable wear off", shortDescription: "The sudden or unpredicatble return of Parkinson symptoms.", description: "After a number of years taking Parkinson medications, they can become less effective and their effects last for shorter periods of time. In some patients, this can lead to sudden or unpredictable 'wear off' and the abrupt return of Parkinson symptoms (e.g. tremor, stiffness, slowness and/or gait freezing) without warning or at unpredictable times."},
    {key: "freezing", symptom: "Freezing", shortDescription: "Sudden episodes of inability to move, walk or rise from a chair.", description: "Sudden episodes of inability to move, walk or rise from a chair due to legs your feet feeling 'frozen' or 'stuck' to the ground. Some patients can overcome freezing episodes using certain visual tricks or sounds."},
    {key: "tremor", symptom: "Tremor", shortDescription: "Rhythmic shaking that bothers you or prevents you doing normal things.", description: "Tremors are rhythmic, shaking like, movements of any part of the body  which you cannot control. parkinson patients most commonly experince tremors in the arm and/or leg and these can interfere with normal activities like doing up buttons or usig a keyboard!"},
    {key: "dyskinesia", symptom: "Troubling dyskinesia", shortDescription: "Involuntary dance-like movements related to effects of Parkinson medications.", description: "Dyskinesias are invlontary dance like movements, involving the whole body causing the patient to appear in a constant state of jerky movement or writhing. They are different from tremor. Dyskinesia are associated with Parkinson medications and are not a symptom of the disease itself.  "},
    {key: "micrographia", symptom: "Small handwriting ", shortDescription: "Very small handwriting (micrographia), which is not usual for you.", description: "Many patients with Parkinson notice thier handwriting becoming smaller. This is micrographia. "},
    {key: "bradykinesia", symptom: "Slowness walking", shortDescription: "Unusually slow walking, sometimes with a shuffling gait.", description: "Unusually slow walking, sometimes with a shuffling gait. This may vary with throughout the day with Parkinons medication."},
    {key: "fall", symptom: "Falls", shortDescription: "Falling over due to increased difficulty with balance and walking.", description: "Falling over due to increased difficulty with balance and walking can be a serious symptom of Parkinson disease and may result in injury and/or ED attendances."},
    {key: "dysphagia", symptom: "Difficulty swallowing known as dysphagia", shortDescription: "Difficulty swallowing food, liquid or pills. Choking episodes.", description: "In the advanced stages of Parkinson disease, swallowing may be affected and this is experienced as difficulty swallowing food and liquids and may lead to choking episodes when eating or drinking."},
]

export const nonMotorSy= [
    {key: "psychosis", symptom: "Hallucination or delusion", shortDescription: "Seeying or believing things that you know are not really there or true.", description: "Hallucinations are seeing things that are not actually there. Parkinson patients with hallucinations often see shadows, shapes, people or animals but it can be anything. Delusions are unshakable beliefs in something that is not true. Common delusions are thinking that people are out to steal from you, or to harm or poison you, or even that a spouse is being unfaithful when it is not true, but again they can be about anything. Delusions may occur on their own or together with hallucinations."},
    {key: "orthostatic", symptom: "Dizziness, lightheadedness or feeling faint", shortDescription: "Dizziness, lightheadedness or feeling faint, particularly after standing or changing position.", description: "Dizziness, lightheadedness or feeling faint, particularly after standing or changing position can be a symptom of parkinson disease which can be minor for some but troubling for others. It is due to a sudden, abnormal drop in blood pressure on postural change and is known medically as orthostatic hypotension. Patients adjust by rising slowly from lying or a chair and waiting a couple of minutes for the feeling to go before strating walking."},
    {key: "drooling", symptom: "Drooling", shortDescription: "Drooling of saliva from the mouth which you have difficulty controlling.", description: "Drooling of saliva from the mouth which you have difficulty controlling."},
    {key: "slowtransit", symptom: "Nausea and bloating", shortDescription: "Nausea, sickness and bloated stomach.", description: "A reduction in gut motility affects some Parkinson patients and this is experienced as feelings of nausea and stomach bloating. Though not serious it can mean a slower digestion and therefore slower absorbance into the body of oral medications."},
    {key: "footcurl", symptom: "Foot spasm or toe curling", shortDescription: "Involuntary muscle contraction causing twisting of the leg and/or foot, or curling of toes.", description: "Involuntary contraction of leg/foot muscles causing twisting of the leg, foot, or curling of toes, causing pain and difficulty walking."},
    {key: "constipation", symptom: "Constipation", shortDescription: "Infrequent and or difficulty with bowel movements.", description: "Infrequent and or difficulty with bowel movements."},
    {key: "insomnia", symptom: "Poor sleep", shortDescription: "Difficulty getting to sleep or waking in the night and unable to get back to sleep.", description: "Difficulty getting to sleep or waking in the night and unable to get back to sleep."},
    {key: "depression", symptom: "Depression", shortDescription: "Low mood and feelings of hopelessness.", description: "Feelings or low mood, inability to enjoy anything and feelings of hopelessness are all signs of depression."},
    {key: "cogdecline", symptom: "Poor cognition", shortDescription: "Difficulty thinking and/or remembering things which adversely affects your life.", description: "From time to time it is common to have difficulty thinking or remembering things, especially with older age, but if thinking through normal activities or remembering day-to-day events has become a significant problem for you in your life or that others around you notice, then it would be appropriate to tick this box."},
]

export const procedures  = [
    {key: "dbs", procedure: "Deep brain stimulation", shortDescription: "Implanting of small elecrodes into the brain to control Parkinson disease symptoms by electrical stimulation", description: "Deep Brain Stimulation (DBS) involves a neurosurgical operation to place two small electrodes into a part of the brain associated with Parkinson disease. These electrodes are then used to send elctrical signals to the brain via a patient controlled device to suppress Parkinson symptoms when required. "},
    {key: "pegj", procedure: "Placement of a feeding tube", shortDescription: "Placement of a feeding tube through the stomach wall to deliver drugs such as Duopa directly into the intestine.", description: "Placement of a feeding tube through the stomach wall (called a PEG-J tube)to deliver drugs such as Duopa directly into the intestine."},
    {key: "othernuerosurg", procedure: "Other neurosurgery", shortDescription: "An operation to remove a part of the brain (pallidotomy or thalamotomy)", description: "Palidotomy and thalamotomy are now very rarely carried out having been superceeded over the past 10 years by deep brain stimulation,  but a small number of older Parkinson patients may have had these surgeries in the past."},
]