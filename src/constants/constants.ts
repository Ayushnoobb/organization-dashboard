export const API_EXPIRE_TIME = 5
export const X_API_KEY_EXPIRE = 10
export const TOKEN_EXPIRE_TIME = 10
export const S3_URL = "https://supreme-test.s3.amazonaws.com/"

export const votingcampaignTableHeading = [
  { name: "SN" },
  { name: "logo" },
  { name: "title" },
  // { name: "description" },
  // { name: "banner" },
  { name: "candidates" },
  { name: "staged" },
  { name: "coupan" },
  { name: "timeline" },
  { name: "time Zone" },
  { name: "action" },
]
// DOne
export const votingCampaignData = [
  {
    id: "vc001",
    organizationID: "dccf2183a9ff686a",
    title: "Campaign 1",
    description: "ahdfsdasd",
    logo: "/no-image.jpg",
    banner: "/no-image.jpg",
    startDateTime: "2024-4-20",
    endDateTime: "2024-5-5",
    timeZone: "ABC",
    // updated: "2024-03-29",
    // inserted: "2024-03-29",
  },
  {
    id: "vc002",
    organizationID: "dccf2183a9ff686a",
    title: "Campaign 2",
    description: "ahdfsdasd",
    logo: "/no-image.jpg",
    banner: "/no-image.jpg",
    startDateTime: "2024-3-29",
    endDateTime: "2024-4-10",
    timeZone: "ABC",
    // updated: "2024-03-29",
    // inserted: "2024-03-29",
  },
  {
    id: "vc003",
    organizationID: "dccf2183a9ff686a",
    title: "Campaign 3",
    description: "ahdfsdasd",
    logo: "/no-image.jpg",
    banner: "/no-image.jpg",
    startDateTime: "2024-4-12",
    endDateTime: "2024-06-5",
    timeZone: "ABC",
    // updated: "2024-03-29",
    // inserted: "2024-03-29",
  },
  {
    id: "vc004",
    organizationID: "dccf2183a9ff686a",
    title: "Campaign 3",
    description: "ahdfsdasd",
    logo: "/no-image.jpg",
    banner: "/no-image.jpg",
    startDateTime: "2024-4-12",
    endDateTime: "2024-06-5",
    timeZone: "ABC",
    // updated: "2024-03-29",
    // inserted: "2024-03-29",
  },
  {
    id: "vc005",
    organizationID: "dccf2183a9ff686a",
    title: "Campaign 3",
    description: "ahdfsdasd",
    logo: "/no-image.jpg",
    banner: "/no-image.jpg",
    startDateTime: "2024-4-12",
    endDateTime: "2024-06-5",
    timeZone: "ABC",
    // updated: "2024-03-29",
    // inserted: "2024-03-29",
  },
  {
    id: "vc006",
    organizationID: "dccf2183a9ff686a",
    title: "Campaign 3",
    description: "ahdfsdasd",
    logo: "/no-image.jpg",
    banner: "/no-image.jpg",
    startDateTime: "2024-4-12",
    endDateTime: "2024-06-5",
    timeZone: "ABC",
    // updated: "2024-03-29",
    // inserted: "2024-03-29",
  },
]

export const candidateData = [
  {
    id: "c001",
    votingCampaignId: "vc001",
    votingCampaignStageId: "vcs001",
    code: "ABC123",
    organizationID: "ORG456",
    name: "Candidate A",
    age: 30,
    gender: "Male",
    nationality: "American",
    weight: 75,
    city: "New York",
    biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c002",
    votingCampaignId: "vc001",
    votingCampaignStageId: "vcs001",
    code: "ABC123",
    organizationID: "ORG456",
    name: "Candidate B",
    age: 30,
    gender: "Male",
    nationality: "American",
    weight: 75,
    city: "New York",
    biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c003",
    votingCampaignId: "vc001",
    votingCampaignStageId: "vcs002",
    code: "ABC123",
    organizationID: "ORG456",
    name: "Candidate C",
    age: 30,
    gender: "Male",
    nationality: "American",
    weight: 75,
    city: "New York",
    biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c004",
    votingCampaignId: "vc001",
    votingCampaignStageId: "vcs003",
    code: "ABC123",
    organizationID: "ORG456",
    name: "Candidate D",
    age: 30,
    gender: "Male",
    nationality: "American",
    weight: 75,
    city: "New York",
    biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },

  {
    id: "c005",
    code: "XYZ789",
    votingCampaignId: "vc002",
    votingCampaignStageId: "vcs001",
    organizationID: "ORG456",
    name: "Candidate E",
    age: 28,
    gender: "Female",
    nationality: "Canadian",
    weight: 60,
    city: "Toronto",
    biography:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c006",
    code: "XYZ789",
    votingCampaignId: "vc002",
    votingCampaignStageId: "vcs001",
    organizationID: "ORG456",
    name: "Candidate F",
    age: 28,
    gender: "Female",
    nationality: "Canadian",
    weight: 60,
    city: "Toronto",
    biography:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c007",
    code: "XYZ789",
    votingCampaignId: "vc002",
    votingCampaignStageId: "vcs002",
    organizationID: "ORG456",
    name: "Candidate G",
    age: 28,
    gender: "Female",
    nationality: "Canadian",
    weight: 60,
    city: "Toronto",
    biography:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c008",
    code: "XYZ789",
    votingCampaignId: "vc002",
    votingCampaignStageId: "vcs002",
    organizationID: "ORG456",
    name: "Candidate H",
    age: 28,
    gender: "Female",
    nationality: "Canadian",
    weight: 60,
    city: "Toronto",
    biography:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c009",
    code: "XYZ789",
    votingCampaignId: "vc002",
    votingCampaignStageId: "vcs002",
    organizationID: "ORG456",
    name: "Candidate I",
    age: 28,
    gender: "Female",
    nationality: "Canadian",
    weight: 60,
    city: "Toronto",
    biography:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },

  {
    id: "c010",
    code: "XYZ789",
    votingCampaignId: "vc003",
    votingCampaignStageId: "vcs001",
    organizationID: "ORG456",
    name: "Candidate J",
    age: 28,
    gender: "Female",
    nationality: "Canadian",
    weight: 60,
    city: "Toronto",
    biography:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c011",
    code: "XYZ789",
    votingCampaignId: "vc003",
    votingCampaignStageId: "vcs001",
    organizationID: "ORG456",
    name: "Candidate K",
    age: 28,
    gender: "Female",
    nationality: "Canadian",
    weight: 60,
    city: "Toronto",
    biography:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c012",
    code: "XYZ789",
    votingCampaignId: "vc003",
    votingCampaignStageId: "vcs002",
    organizationID: "ORG456",
    name: "Candidate L",
    age: 28,
    gender: "Female",
    nationality: "Canadian",
    weight: 60,
    city: "Toronto",
    biography:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
  {
    id: "c013",
    code: "XYZ789",
    votingCampaignId: "vc003",
    votingCampaignStageId: "vcs002",
    organizationID: "ORG456",
    name: "Candidate M",
    age: 28,
    gender: "Female",
    nationality: "Canadian",
    weight: 60,
    city: "Toronto",
    biography:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profilePicture: "/noavatar.jpg",
    social: {
      Facebook: "https://www.facebook.com/johndoe",
      Instagram: "https://www.instagram.com/johndoe",
      Twitter: "https://twitter.com/johndoe",
    },
    inserted: "2024-04-04",
    updated: "2024-04-04",
  },
]

export const stageCandidateData = [
  {
    id: "232893",
    candidateId: "7613c0f30540549b",
    votingCampaignStageId: "vcs001",
  },
  {
    id: "2ed2893",
    candidateId: "7613c0f30540549b",
    votingCampaignStageId: "vcs002",
  },
]

export const campaignStageData = [
  {
    id: "vcs001",
    organizationID: "ORG123",
    votingCampaignId: "vc001",
    title: "Stage 1",
    description: "Elections for the most beautiful",
    manageCandidates: "",
    startDateTime: "2024-04-10",
    endDateTime: "2024-04-15",
    smsVotingLimit: 5,
    emailVotingLimit: 3,
    inserted: "2024-04-04T12:00:00",
    updated: "2024-04-04T12:00:00",
  },
  {
    id: "vcs002",
    organizationID: "ORG123",
    votingCampaignId: "vc001",
    title: "Stage 2",
    description: "Elections for the most beautiful",
    manageCandidates: "",
    startDateTime: "2024-04-10",
    endDateTime: "2024-04-15",
    smsVotingLimit: 5,
    emailVotingLimit: 3,
    inserted: "2024-04-04T12:00:00",
    updated: "2024-04-04T12:00:00",
  },
  {
    id: "vcs003",
    organizationID: "ORG123",
    votingCampaignId: "vc001",
    title: "Stage 3",
    description: "Elections for the most beautiful",
    manageCandidates: "",
    startDateTime: "2024-04-10",
    endDateTime: "2024-04-15",
    smsVotingLimit: 5,
    emailVotingLimit: 3,
    inserted: "2024-04-04T12:00:00",
    updated: "2024-04-04T12:00:00",
  },

  {
    id: "vcs001",
    organizationID: "ORG456",
    votingCampaignId: "vc002",
    title: "Stage 1",
    description: "Vote for the most talanted",
    manageCandidates: "",
    startDateTime: "2024-04-01",
    endDateTime: "2024-04-30",
    smsVotingLimit: 2,
    emailVotingLimit: 1,
    inserted: "2024-04-02T10:00:00",
    updated: "2024-04-03T15:00:00",
  },
  {
    id: "vcs002",
    organizationID: "ORG456",
    votingCampaignId: "vc002",
    title: "Stage 2",
    description: "Vote for the most talanted",
    manageCandidates: "",
    startDateTime: "2024-04-01",
    endDateTime: "2024-04-30",
    smsVotingLimit: 2,
    emailVotingLimit: 1,
    inserted: "2024-04-02T10:00:00",
    updated: "2024-04-03T15:00:00",
  },

  {
    id: "vcs001",
    organizationID: "ORG456",
    votingCampaignId: "vc003",
    title: "Stage 1",
    description: "Vote for the most talanted",
    manageCandidates: "",
    startDateTime: "2024-04-01",
    endDateTime: "2024-04-30",
    smsVotingLimit: 2,
    emailVotingLimit: 1,
    inserted: "2024-04-02T10:00:00",
    updated: "2024-04-03T15:00:00",
  },
  {
    id: "vcs002",
    organizationID: "ORG456",
    votingCampaignId: "vc003",
    title: "Stage 2",
    description: "Vote for the most talanted",
    manageCandidates: "",
    startDateTime: "2024-04-01",
    endDateTime: "2024-04-30",
    smsVotingLimit: 2,
    emailVotingLimit: 1,
    inserted: "2024-04-02T10:00:00",
    updated: "2024-04-03T15:00:00",
  },
]

export const coupanData = [
  {
    id: "cebd420f2fdc2831",
    organizationID: "dccf2183a9ff686a",
    name: "Coupon Special2",
    votes: 20,
    eligibleCandidateCounts: 3,
    pricing: "1000.00",
    currency: "NPR",
    avaibilityPeriodStart: "2024-04-26",
    avaibilityPeriodEnd: "2024-05-26",
    votingCampaignId: "a72816728096176a",
    inserted: "2024-03-29T10:58:47.542Z",
    updated: "2024-03-29T10:58:47.542Z",
  },
  {
    id: "06f8ed08f89c7268",
    organizationID: "dccf2183a9ff686a",
    name: "Coupon Special1",
    votes: 20,
    eligibleCandidateCounts: 3,
    pricing: "1000.00",
    currency: "NPR",
    avaibilityPeriodStart: "2024-03-26",
    avaibilityPeriodEnd: "2024-03-26",
    votingCampaignId: "d03f15e115ca50c1",
    inserted: "2024-03-29T10:58:42.295Z",
    updated: "2024-03-29T10:58:42.295Z",
  },
  {
    id: "cbc96eedc083b441",
    organizationID: "dccf2183a9ff686a",
    name: "Coupon Specials",
    votes: 20,
    eligibleCandidateCounts: 3,
    pricing: "1000.00",
    currency: "NPR",
    avaibilityPeriodStart: "2024-03-26",
    avaibilityPeriodEnd: "2024-03-26",
    votingCampaignId: "d03f15e115ca50c1",
    inserted: "2024-03-29T10:51:34.068Z",
    updated: "2024-03-29T10:58:04.505Z",
  },
]

export const voteData = [
  // {
  //   id: "",
  //   method: "",
  //   deviceDetail: "",
  //   ipAddress: "",
  //   phoneNumber: "",
  //   votingCampaignStageId: "",
  //   candidateId: "",
  //   couponId: "",
  //   inserted: "",
  //   updated: "",
  // }
]