// Write your types here! ✨

// type Motion = {
// 	annoyedJustice?: boolean,
// 	classification: string,
// 	deliberationHours?: number,
// 	from: string,
// 	reason: string,
// 	status: "denied" | "allowed" | "pending",
// 	step: "post-trial" | "pre-trial",
// 	estimatedDeliberationHours?: number
// }

type BaseMotion = {
	from: "defendant" | "plaintiff";
	reason: string;
};

type PreTrial = BaseMotion & {
	classification: "dismiss" | "suppress" | "venue";
	step: "pre-trial";
};

type PostTrial = BaseMotion & {
	classification: "acquittal" | "correction" | "new trial";
	step: "post-trial";
};

type TrialType = PostTrial | PreTrial;

type Allowed = TrialType & {
	deliberationHours: number;
	status: "allowed";
};

type Denied = TrialType & {
	annoyedJustice: boolean;
	deliberationHours: number;
	status: "denied";
};

type Pending = TrialType & {
	estimatedDeliberationHours: number;
	status: "pending";
};

type Motion = Allowed | Denied | Pending;

export const motions: Motion[] = [
	{
		annoyedJustice: true,
		classification: "acquittal",
		deliberationHours: 1,
		from: "defendant",
		reason: "The heretofore document had dried ink on it.",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 2.5,
		from: "plaintiff",
		reason: "The tenant has ninety days to vacate.",
		status: "denied",
		step: "post-trial",
	},
	{
		classification: "suppress",
		deliberationHours: 4,
		from: "plaintiff",
		reason: "Frank was never allowed in the house.",
		status: "allowed",
		step: "pre-trial",
	},
	{
		classification: "new trial",
		estimatedDeliberationHours: 3,
		from: "defendant",
		reason: "The duel's been accepted. There's no backing out. That's the law.",
		status: "pending",
		step: "post-trial",
	},
	{
		annoyedJustice: false,
		classification: "dismiss",
		deliberationHours: 0.5,
		from: "plaintiff",
		reason:
			"It seems like you have a tenuous grasp on the English language in general.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 1.5,
		from: "defendant",
		reason: "Fillibuster?",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "venue",
		deliberationHours: 0.25,
		from: "defendant",
		reason: "A time was never specified for the duel.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 5,
		from: "plaintiff",
		reason: "He's making a few good points!",
		status: "denied",
		step: "post-trial",
	},
];

// o que é variavel

// se é permitido 'allowed' tem essa prop a mais
// deliberationHours

// se é 'dennied' tem essa prop a mais
// annoyedJustice

// se é 'pending' tem essa prop a mais
// estimatedDeliberationHours

// pre-trial
// classification: dismiss, suppress, venue

//pos-trial
// classification: acquittal, correction, new trial
