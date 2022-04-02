/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";
import {
  BadmintonTricksThumbnail,
  GoldMedalMatchThumbnail,
  BadmintonBegineersThumbnail,
  BadmintonTechniquesThumbnail,
  WorlcupInterviewThumbnail,
  LinDanChongThumbnail,
  SindhuInterviewThumbnail,
  BiomechanicsTricksThumbnail,
  SindhuMatchThumbnail,
  BachpanPlaySchoolProfile,
  BadmintonFamilyProfile,
  BGBadmintonAcademyProfile,
  NatWeerasakProfile,
  OlympicsProfile,
  ShuttleAmazingProfile,
  VisitLondonProfile,
} from "assets";

export const videos = [
  {
    _id: uuid(),
    title:
      "Badminton Player PV Sindhu Unique Talk Show With Ajay Gupta | AHPS Mega Competition",
    description:
      "PV Sindhu, 2016 Rio Olympics silver medalist, Talkshow with Ajay Gupta (CEO- Bachpan & AHPS Group) about how they prepared for the glorious journey to an Olympics final. Watch the full Talkshow at 5th Annual AHPS Mega Competition 2018-19.",
    creator: {
      profile: BachpanPlaySchoolProfile,
      name: "Bachpan Play School",
    },
    views: "5k",
    category: "Players Interview",
    videoID: "RAnyZRnPE3I",
    thumbnail: SindhuInterviewThumbnail,
  },
  {
    _id: uuid(),
    title: "PV Sindhu's FULL Bronze Medal Match 🥉 | Tokyo Replays",
    description:
      " World champion and Rio 2016 silver medallist India's PV Sindhu took home the bronze after beating China's HE Bing Jao by two sets: 21-13, 21-15. Enjoy watching the full women's singles bronze medal match in women's badminton! ",
    creator: {
      profile: OlympicsProfile,
      name: "Olympics",
    },
    views: "6M",
    category: "Match Highlights",
    videoID: "JRF8mECyOJY",
    thumbnail: SindhuMatchThumbnail,
  },
  {
    _id: uuid(),
    title: "Men's Badminton 🏸 Gold Medal Match | Tokyo Replays",
    description:
      "Viktor Axelsen of Denmark took the gold medal in the men's singles Badminton at the Tokyo2020 Olympic Games, denying a repeat title to the People's Republic of China's Chen Long in certain fashion (2-0) on 2nd August, at the Musashino Forest Sport Plaza. Relive the FULL match!",
    creator: {
      profile: OlympicsProfile,
      name: "Olympics",
    },
    views: "2.5M",
    category: "Match Highlights",
    videoID: "uIj03RsGrJA",
    thumbnail: GoldMedalMatchThumbnail,
  },
  {
    _id: uuid(),
    title: "Yonex BWF World Badminton Championships 2011 - Player Interviews",
    description:
      "Viktor Axelsen of Denmark took the gold medal in the men's singles Badminton at the Tokyo2020 Olympic Games, denying a repeat title to the People's Republic of China's Chen Long in certain fashion (2-0) on 2nd August, at the Musashino Forest Sport Plaza. Relive the FULL match!",
    creator: {
      profile: VisitLondonProfile,
      name: "Visit London",
    },
    views: "13k",
    category: "Players Interview",
    videoID: "X4Uu_0xwU7g",
    thumbnail: WorlcupInterviewThumbnail,
  },
  {
    _id: uuid(),
    title: "Last Match Between 2 Legends | Lin Dan vs Lee Chong Wei ",
    description:
      "Last Match Between 2 Legends | Lin Dan vs Lee Chong Wei. The Lee-Lin rivalry was a rivalry between two professional badminton players, Lee Chong Wei and Lin Dan whose careers were almost exactly contemporaneous. The rivalry is often considered the greatest in the history of badminton",
    creator: {
      profile: ShuttleAmazingProfile,
      name: "Shuttle Amazing",
    },
    views: "110k",
    category: "Match Highlights",
    videoID: "tFpGjB678Ak",
    thumbnail: LinDanChongThumbnail,
  },
  {
    _id: uuid(),
    title: "12 Basic Badminton Techniques that you MUST Know - Introduction ",
    description:
      "This video is meant to be a quick intro to the different techniques and the jargon. For in-depth guides on each skill, search them up on Youtube, the names of them are  Remember, keep practicing the skills that you're weaker in, and in time you'll be able to use it effectively in a competitive match! Train hard!",
    creator: {
      profile: BGBadmintonAcademyProfile,
      name: "BG Badminton Academy",
    },
    views: "1M",
    category: "Badminton Tutorials",
    videoID: "S2-G_tbIj80",
    thumbnail: BadmintonTechniquesThumbnail,
  },
  {
    _id: uuid(),
    title: "Basic of Badminton for Beginners.",
    description:
      "This video covers - Proper Rocket Crip in Badminton, Badminton Swing for Beginners, Basic Footwork for Badminton Beginners, Sort Serve in Badminton, Long Serve in Badminton.",
    creator: {
      profile: NatWeerasakProfile,
      name: "Nat Weerasak",
    },
    views: "8M",
    category: "Badminton Tutorials",
    videoID: "1UIhKZCPMYM",
    thumbnail: BadmintonBegineersThumbnail,
  },
  {
    _id: uuid(),
    title: "10 Amazing Badminton Trickshots - Made By A World Champion",
    description:
      "10 amazing badminton trickshots, learn them here, some very cool badminton trick shots for you to learn. These 10 trickshots are all made by World Champion Thomas Laybourn, some of them for fun, but also some you can use in a match.",
    creator: {
      profile: BadmintonFamilyProfile,
      name: "Badminton Famly",
    },
    views: "2M",
    category: "Badminton Trick Shots",
    videoID: "sJPBuUDGqGg",
    thumbnail: BadmintonTricksThumbnail,
  },
  {
    _id: uuid(),
    title: "How to use the wrist in badminton - 5 shots biomechanics",
    description:
      "How to use the wrist in badminton - 5 shots biomechanics. I will show you how not to use the wrist, and also how to use it correctly. In badminton the wrist biomechanics is really important to get more power in your shots, and to avoid injuries in the wrist. With the correct badminton grip, it is easier to learn the right technique, and to use the wrist the right way, with forearm rotation.",
    creator: {
      profile: BadmintonFamilyProfile,
      name: "Badminton Famly",
    },
    views: "1.7M",
    category: "Badminton Trick Shots",
    videoID: "07x6-qippgo",
    thumbnail: BiomechanicsTricksThumbnail,
  },
];