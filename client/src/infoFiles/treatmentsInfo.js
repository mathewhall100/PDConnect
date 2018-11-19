
// treatment information constants

export const treatmentsInfo = [

    {   key: "apomorph",
        type: "med",
        name: "apomorphine",
        summary: "Apomorphine is a medication used to treat 'off' episodes that occur when other medications wear off or that occur sudeenly and unexpectedly. It is given as an injection or continuous infusion just under the skin (subcutaneous). It is sold under the name Apokyn.",
        mediaLnk1: "https://www.youtube.com/embed/4RTAAkA9cG8",
        description: "Apomorphine (also known as Apokyn) is used to treat 'off' episodes when patients with Parkinson disease (PD) have difficulty moving, walking or talking normally.  Apomorphine helps with both 'off' periods that occur as other medications wear off or that occur at random. It does not prevent 'off' periods but does help reduce symptoms when they occur. Apomorphine is a class of drug called a dopamine agonist and works by mimicking the action of dopamine in the brain, the natural substance that is lacking in patients with PD.",
        administration: "Apomorphine is given as an injection just under the skin (subcutaneously) using a special injector pen. It can be used as needed according to your doctors instructions and you can inject yourself or have a friend or relative perform the injections if this is difficult for you. In some cases it can be given continuously via an infusion pump.",
        benefits: "Patients with early or sudden unpredictable 'off' symptoms that occur depsite taking other Parkinson medications. Usually doctors will try to control 'off' symptoms by using other medicactions first but if this is not possible, or the other drugs are no longer working, then apomorphine can be a helpful treatment.",
        patient: "Apomorphine has been in clinical use for over 10 years and has helped many hundreds of patient with disabling motor fluctuations and 'off periods not responsive to other medications. Click on the videos to hear about patient's experiences taking apomorphine.",
        mediaLnk2: ["https://www.youtube.com/embed/AYmk9mKjiTA"],
        evidence: [
            {   name: "Clinical Trial",
                text: "Since apomorphine was introduced for Parkinson disease in 2005, a number of clinical trials have been carried out investigating the effect of apomorphine on patients with uncontrolled wearing 'off' symptoms. These trials have shown a positive benefit in symptom control in those patienst taking apomorphine in addition to other Parkinsons medications. ",
            media:  "apomorphineGraph",
            source: "www/apomorphinestudies.com"
        }],
        riskText: "Apomorphine often causes nausea and sickness, particularly at the start of treatment. To prevent this, it is often given together with another anti-sickness medication. Less often, apomorphine can cause diarrhea, headaches or dizziness on standing up.  Skin soreness and nodules may occur from repeat injections.",
        riskBullets: ["nausea & sickness", "diarrhea", "dizziness and feeling faint when standing", "daytime drowsiness", "headache", "soreness and infection of the skin around injection sites"],
        askDoctor: "Apomorphine is not a treatment appropriate for all Parkinson patients but if you are having regular or sudden, unpredictable wear off symptoms not controlled by other medications, then it might be an option for you. Discuss with your doctor whether apomorphine is appropriate for you and particularly whether changes to your other Parkinson medications should be tried first to improve symptoms before considering apomorphine. Also discuss with your doctor the side effects oF apomorphine and how easy it will be for you to inject yourself or have a caregiver or family member do it for you.",
        more: "Apomorphine is made by xyz pharmaceutical and more information can be found on their website: xyzpharma.com"
    },
    

    {  key: "dbs",
        type: "proc",
        name: "Deep Brain Stimulation",
        summary: "Deep Brain Stimulation (DBS) is the most commonly performed surgical treatment for parkinson disease. It delivers electrical impulses to the affected part of the brain to decrease symptoms such as stiffness, tremor and trouble walking. ",
        mediaLnk1: "https://www.youtube.com/embed/2wvj7XJrQW4",
        description: "Deep brain Stimulation (DBS) is a surgical procedure where electrodes are inserted into the area of the brain affected by Parkinons disease and which controls movement. These eletrodes send electrical signals into the brain to supress the abnormal nerve signals that give rise to Parkinson symptoms. DBS is an effective treatment for patients with disabling tremor, uncontrolled wearing off spells and medication-induced dyskinesia. While DBS is not a cure, many patients see considerable improvement in their motor symptoms and are able to reduce the amount of Parkinon medication they need to take. The benefits of DBS are known to last at least five years.",
        administration: " DBS surgery is performed by neurosurgeons and is only offered at specialist centers. Before and during surgery magnetic resonance imaging and direct recording of brain cell activity are used to locate the optimal site in the brain for electrode insertion.  A small batttery powered impulse generator is also placed under the skin of the chest or abdomen from where it delivers the electrical impulses to the electrodes. A hand held controller switches the impulse generator on or off allowing the patient to activate and de-activate the deep brain stimulation as needed to suppress symptoms.",
        benefits: "Currently evidence supports DBS surgey for those patients with diagnosed Parkinson disease for four or more years and who have disabling tremor, wearing off spells that are difficult to control with medications alone and for those with medication-induced dyskinesia. It is also suitable for patients with advanced Parkinson disease, but not those with significant memory or cognitive impairment. Improvement in symptoms from DBS varies from person to person and it cannot be predicted in advance how much any one patient will benefit. ",
        patient: "The results of DBS do vary from patient to patient. For some it is life changing but for others there may be little benefit. Though as a rule, DBS will improve symtoms for most patinets and the device can always be removed if it doesn't",
        mediaLnk2: ["https://www.youtube.com/embed/7-NKUbsT6Y0"],
        evidence: [
            {   name: "Clinical Trial",
                text: "Since introduction in 1997 to treat Parkinson tremor, successive clnical trials have shown benefit of DBS to broader groups of Parkinson patients until in 2016 DBS surgery was approved for patients in the earlier stages of disease but who still had uncontrolled symptoms.   ",
            media:  "apomorphineGraph",
            source: "www/dbsstudies.com"
        }],
        riskText: "As with any operation there are risks. In the case of DBS there is around a 3% chance (per side of the brain operated) of infection, bleeding and seizures. Cognitive decline is also seen in a small number of patients following DBS.",
        riskBullets: ["infection", "seizures", "cognitove decline"],
        askDoctor: "DBS is not offered to all patients and is currently only recommended for patients with poorly controlled motor symptoms  that cannot be controlled by medications. Check with your doctor that you have been diagnosed with Parkinson disease for more than four years and whether your symptoms can be improved with medications before considering DBS. Deciding an individual patients suitability for DBS usually requires specialist assessment and, if necessary, your doctor can refer you to a movement disorder specialist for this.",
        more: "DBS is a prodcut of Medtronic  and more information can be found on their website: medtronic.com"
    },

    {  key: "droxidopa",
        type: "med",
        name: "Droxidopa",
        summary: "Droxidopa is a drug used to treat orthostatis hypotension due to Parkinson disease. Orthostatic hypotension causes sufferers to feel faint, dizzy or lightheaded when they stand up. ",
        mediaLnk1: "https://www.youtube.com/embed/tpvxz6wbjVY",
        description: "Feeling suddenly dizzy, lightheaded or feeling you might faint (black out) when standing up affects around 1 in 5 patients with Parkinson disease. It is caused by a sudden drop in blood pressure when changing position which is in turn due to the damage to the nervous system caused by the Parkibnson disease and is called neurogenec orthostatic hypotension.  Droxidopa (also known as Northera) is a FDA approved medication for treating neurogenic orthostatic hypotension in Parkinson disease and related conditions.",
        administration: "Droxidopa is a tablet that is usually taken three times a day. Initially patients are started on a low dose but this is increased until an improvement in symptoms is achieved or a maximum dose is reached. Patients taking droxidopa also need their blood pressure checked regularly to ensure it does not get too high.",
        benefits: "Droxidopa treats patienst with dizziness, lightheadedness or feeling they may faint (black out) when changing position and standing up and where this is thought to be caused by their Parkinson disease. It does not treat any of the motor or other symptoms of Parkinson disease.",
        patient: "Click on the video opposite to hear a patient's experince of taking Droxidopa",
        mediaLnk2: ["https://www.youtube.com/embed/"],
        evidence: [
            {   name: "Clinical Trial",
                text: "Clinical trials have shown Droxidopa to be effective in short term treatment of patients with symptomatic neurogenic orthostatic hypotension with reduction in symptoms and less impact of symptoms of daily life. The longer term usefulness of Droxidopa is not yet established, however.",
            media:  "apomorphineGraph",
            source: "www/droxidopastudies.com"
        }],
        riskText: "Most common unwanted effects are headache, nausea and hypertension when lying down (supine hypertension). ",
        riskBullets: ["headache", "nausea & sickness", "hypertension lying down"],
        askDoctor: "If you experience symptoms of dizziness, lightheadedness or feeling faint on standing talk to your doctor about whether these are due to your Parkinson disease or whether you need investigation for another cause. If these symptoms are thought to be caused by your Parkinson disease then discuss with your doctor whether Droxidopa may be a suitable drug for you. If Droxidopa is being considered you will need to discuss a strategy monitoring of your blood pressure to ensure it does not become too high.",
        more: "Droxidopa (Northera) is made by Lunbeck. More information can be found on their website: www.northera.com"
    },

    {  key: "duopa",
        type: "proc",
        name: "Duopa Therapy",
        summary: "Duopa is the same type of medication as sinemet (carbidopa/levodopa) but instead of being taken as a pill, duopa is a liquid gel that is delivered directly into the intestine via a tube placed through the stomach wall.",
        mediaLnk1: "https://www.youtube.com/embed/GaCiXlXwBp8",
        description: "Duopa is the same type of medication as sinemet (carbidopa/levodopa) but instead of being taken as a pill, duopa is a liquid gel that is delivered directly into the intestine via a tube placed through the stomach wall. This allows duopa to be delivered continuosly to the body using an external pump. Advantages include better absoprtion, more even delivery of drug over time and reduction in 'off' times.  ",
        administration: "Duopa therapy requires a short surgical procedure to make a small hole ion the abdominal wall (a stoma) through which a thin tube is passed into the intestine (a PEG-J tube). An external pump loaded with Duopa gel cartridges is connected to the tube and is worn by the patient at their side. The pump weighs about 3 lbs and requires daily cartridge changes. The pump is programmed to continously deliver Duopa to the intestine at doses tailored to individual needs and symptoms. For example it is common to deliver a higher dose in the mornings to quickly achieve an ideal 'on state' then taper to a lower dose for the rest of the day.",
        benefits: "Duopa therapy is approved for patients with advanced Parkinson disease who respond well to levodopa. You may be a good candidate for Duopa if your motor symptoms fluctuate during the day with 3 or more  hours of 'off' time per day and you have tried but failed to control these symptoms with other oral Parkinson disease medications. Duopa is not a cure, but does offer any patients better, more even control over their motor symptoms. "
,       patient: "Click on the link opposite to hear a patient's experince of Duopa therapy. ",
        mediaLnk2: ["https://www.youtube.com/embed/FnhEQdzmX3s"],
        evidence: [
            {   name: "Clinical Trial",
                text: "Many patients experince reduction in 'off' time and reduction in motor fluctuation on Duopa therapy. ",
            media:  "apomorphineGraph",
            source: "www/dupoastudies.com"
        }],
        riskText: "Similar to other carbidopa/levodopa preparations (e.g. sinemet) duopa can cause nausea, dizziness and feeling faint on standing (orthostatic hypotension), dyskinesia especially at higher doses, dry mouth, constipation and hallucinations. In addition, although placing such tubes directly into the stomach is a low risk surgical procedure, it can cause infection and pain around the tube insertion site and rarely infection in the abdomen.   ",
        riskBullets: ["orthostatic hypotension", "dyskinesias", "hallucinations", "constipation"],
        askDoctor: "In general Duopa is only appropriate for patients with advanced Parkinson disease and and poorly controlled motor symptoms depite oral medication. Discuss with your doctor whether you fit this patient description and in particular whether it would be better to try to improve your symptoms with further oral medication before considering Duopa. To be considered for Duopa therapy a full assessment by a movement disoder specialist is required and your doctor can refer you for this if necessary. ",
        more: "Duopa is made by xyz pharmaceutical and more information can be found on their website: xyzpharma.com"
    },

    {  key: "nuplazid",
        type: "med",
        name: "Nuplazid",
        summary: "Nuplazid (also known as pimavaserin) is an FDA approved treatment for hallucinations and delusions associated with Parkinson disease. ",
        mediaLnk1: "https://www.youtube.com/embed/ZDbxEZP2qDY",
        description: "Nuplazid (also known as pimavaserin) is an FDA approved treatment for hallucinations and delusions associated with Parkinson disease.",
        administration: "Nuplazid is a once a day tablet. It does not work immediately, usually taking 4-6 weeks to reach full effect of reducing hallucinations and delusions. ",
        benefits: "Hallucinations an delusions are a common symptom of advanced Parkinson disease and can be distressing. If you are troubled by hallucinations or delusions, or your caregiver sees this as troubling you, then Nuplazid may help reduce these symptoms to a tolerable level.  "
,       patient: "Click on the link opposite to hear a patient's experince of taking Nuplazid. ",
        mediaLnk2: ["https://www.youtube.com/embed/"],
        evidence: [
            {   name: "Clinical Trial",
                text: "In a clinical trial the majority of patients taking Nuplazid experienced fewer and/or less severe hallucinations and delusions. After 6 weeks a proportion of patinets no longer had these symptoms at all. each patient responds differently, however, and some also did not respond at all to Nuplazid. ",
            media:  "apomorphineGraph",
            source: "www/nuplazidstudies.com"
        }],
        riskText: "Nuplazid hs been linkd to an increase in death for patients with psychosis realted to cognitive impairment (dementia) and should be avoided in patints with dementia-related psychosis unrelated Parkinsons hallucinations and delusions. Nuplazid may also increase the risk of certain heart rhythm chnages, limb swelling and confusion. ",
        riskBullets: ["heart arrythmia", "limb swelling", "confusion"],
        askDoctor: "If you experience fluctuating motor symptoms and/or early waering off of medication effects or are taking your parkison's medications very frequently to control symptoms then discuss Nuplazid may be appropriate for you and it is worth discissing this with your doctor. ",
        more: "Nuplazid is made by XYZ laboratories. More information can be found on their website: Nuplazid.com"
    },

    {  key: "rytary",
        type: "med",
        name: "Rytary",
        summary: "Rytary is an extended release form of carbidopa-levodopa giving better control over Parkinson symptoms, specifically less 'off' time and more 'on' time without troublesome dyskinesia.  It also results in fewer overall tablets being needed each day.",
        mediaLnk1: "https://www.youtube.com/embed/uPjnpKth40o",
        description: "Rytary is an extended release form of carbidopa-levodopa. While carbidopa-levodopa preparations such as sinemet are the most commonly prescibed drug for Parkinson disease, they release their drug into the body very quickly after being taken and this can lead to a need for frequent dosing and early wear 'off' of medication effects. Extended release form (rytary) is designed to release carbidopa-levodopa slowly and over a longer period of time after being taken so that the effects of the drug last longer, up to 4-5 hours, before declining. This maintains levopdopa concentrations longer in the body giving better control over Parkinson symptoms, specifically less 'off' time and more 'on'  time without troublesome dyskinesia.  It also results in fewer overall tablets being needed each day.",
        administration: "Rytary is a tablet that you swallow or capsules that can be broken and the drug sprinkled on soft foods if swallowing is a problem.",
        benefits: "Rytary is licensed for use all stages of Parkinson disease but is of most benefit to those patients experiencing motor fluctuations and/or early wear off of medication effects during the day. Patients needing to take medications very frequently, every one to two hours for example, to control symptoms then Rytary may be an better treatment. "
,       patient: "Click opposite to hear a patient's experience of taking Rytary",
        mediaLnk2: ["https://www.youtube.com/embed/fAf4k8uCRwc"],
        evidence: [
            {   name: "Clinical Trial",
                text: "In a clinical study of patients with early Parkinson disease, Rytary was shown to significantly improve movement and the ability to perfom activities during the day. A different study in advanced Parkinson disease, patients taking Rytary experienced significantly less 'of' time and more 'on' time without troublesome dyskinesia. ",
            media:  "apomorphineGraph",
            source: "www/rytarystudies.com"
        }],
        riskText: "Possible unwanted effects of taking Rytary include daytime drowsiness, hallucinations and increased urges. Along with other carbidopa-levodopa preparations, Rytary ccan cause dyskinesias (uncontrolled movements) and dizziness or lightheadedness on standing up.",
        riskBullets: ["dyskinesia (uncontrollable movements", "increased urges (e.g. sexual, gambling)", "dizziness on standing (orthostatic hypotension)" ],
        askDoctor: "If you experience fluctuating motor symptoms and/or early waearing off of medication effects or are taking your Parkison medications very frequently to control symptoms then Rytary may be appropriate for you and it is worth disciussing this with your doctor.",
        more: "Rytary is made by Impax laboratories. more information can be found on their website: rytary.com"
    },
   
    {   key: "bottox",
        type: "proc",
        name: "Botulinum Toxin Injections",
        summary: "Botulinum toxin is a toxin that can paralyse muscles and which can be used to treat a number of troublesome problems in Parkinson disease such as dystonia (involuntary twisting of body parts), drooling, urinary incontinence and in certain cases, tremor.",
        mediaLnk1: "https://www.youtube.com/embed/_srtcmeaDf8",
        description: "Botulinum toxin is a toxin that can paralyse muscles and which can be used to treat a number of troublesome problems in Parkinson disease such as dystonia (involuntary twisting of body parts), drooling and urinary incontinence. It is given as an injection into the muscle. There are a number of different variants of botulinum toxin, but the most well known is Botox® (others are Dysport®, Xeomin® and Myobloc®",
        administration: "Botulinum toxin is given by injection ofa tiny amount of drug into the affected muscles. It takes between 3 and 10 days to have an effect but then this lasts typically for 3 to 4 months. The effects of botulinum toxin do always wear off, however, and repeat injections are required avery few months to maintin symptom control. ",
        benefits: "Only patients with specific symptoms benefit from botulinum toxin. Exact degree of symptom reief may vary between patienst and even between treatments.",       
        patient: "Botulinum toxin has been used for several years to treat certain parkinson symptoms. Click the videos opposite to hear patients stories with botulinum toxin.",
        mediaLnk2: ["https://www.youtube.com/embed/GTtk5KELxME","https://www.youtube.com/embed/OU53IR_b-c8"],
        evidence: [
            {   name: "Clinical Trial",
                text: "Botulinum toxin is proven to be of benefit for patients with drooling and pedal dystonia and is under evaluation for use in tremor as well. ",
            media:  "apomorphineGraph",
            source: "www/botulinumtoxinstudies.com"
        }],
        riskText: "In general, side effects of Botulinum toxin can be due to over-weakening of the injected muscle, which, if done on leg and foot muscles, for example, could interfere with walking.Uncommonly, Botulinum toxin can diffuse to neighboring muscles and cause more widespread side effects. Since the effects of botulinum toxin do always wear off, such side effects are not permanent",
        riskBullets: ["overweakening (complete paralysis) of injected muscles", ],
        askDoctor: "Ask your doctor about botulinum toxin if you are troubled by drooling or painful foot and toe curling as botulinum toxin may be able to help with these symptoms. While many doctors can inject botulinum toxin for cosmetic purposes, as a treamtent for Parkinson disease it must be given by a neurologist and your doctor can refer you if needed",
        more: ""
    },

    {  key: "",
    type: "med",
    name: "",
    summary: "",
    mediaLnk1: "",
    description: "",
    administration: "",
    benefits: ""
,       patient: "",
    mediaLnk2: [""],
    evidence: [
        {   name: "Clinical Trial",
            text: "",
        media:  "apomorphineGraph",
        source: "www/apomorphinestudies.com"
    }],
    riskText: "",
    riskBullets: [],
    askDoctor: "",
    more: ""
}


]
