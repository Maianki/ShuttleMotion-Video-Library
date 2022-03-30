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
  SaniaMatchThumbnail,
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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: {
      profile: BachpanPlaySchoolProfile,
      name: "Bachpan Play School",
    },
    views: "5k",
    category: "Players Interview",
    thumbnail: SindhuInterviewThumbnail,
  },
  {
    _id: uuid(),
    title:
      "Saina Nehwal Wins Badminton Women's Singles Bronze - IND v CHN | London 2012 Olympics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: {
      profile: OlympicsProfile,
      name: "Olympics",
    },
    views: "6M",
    category: "Match Highlights",
    thumbnail: SaniaMatchThumbnail,
  },
  {
    _id: uuid(),
    title: "Men's Badminton 🏸 Gold Medal Match | Tokyo Replays",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: {
      profile: OlympicsProfile,
      name: "Olympics",
    },
    views: "2.5M",
    category: "Match Highlights",
    thumbnail: GoldMedalMatchThumbnail,
  },
  {
    _id: uuid(),
    title: "Yonex BWF World Badminton Championships 2011 - Player Interviews",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: {
      profile: VisitLondonProfile,
      name: "Visit London",
    },
    category: "Players Interview",
    views: "13k",
    thumbnail: WorlcupInterviewThumbnail,
  },
  {
    _id: uuid(),
    title: "Last Match Between 2 Legends | Lin Dan vs Lee Chong Wei ",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: {
      profile: ShuttleAmazingProfile,
      name: "Shuttle Amazing",
    },
    category: "Match Highlights",
    views: "110k",
    thumbnail: LinDanChongThumbnail,
  },
  {
    _id: uuid(),
    title: "12 Basic Badminton Techniques that you MUST Know - Introduction ",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: {
      profile: BGBadmintonAcademyProfile,
      name: "BG Badminton Academy",
    },
    category: "Badminton tutorials",
    views: "1M",
    thumbnail: BadmintonTechniquesThumbnail,
  },
  {
    _id: uuid(),
    title: "Basic of Badminton for Beginners.",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: {
      profile: NatWeerasakProfile,
      name: "Nat Weerasak",
    },
    category: "Badminton Tutorials",
    views: "8M",
    thumbnail: BadmintonBegineersThumbnail,
  },
  {
    _id: uuid(),
    title: "10 Amazing Badminton Trickshots - Made By A World Champion",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: {
      profile: BadmintonFamilyProfile,
      name: "Badminton Famly",
    },
    category: "Badminton Trick Shots",
    views: "2M",
    thumbnail: BadmintonTricksThumbnail,
  },
  {
    _id: uuid(),
    title: "How to use the wrist in badminton - 5 shots biomechanics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: {
      profile: BadmintonFamilyProfile,
      name: "Badminton Famly",
    },
    category: "Badminton Trick Shots",
    views: "1.7M",
    thumbnail: BiomechanicsTricksThumbnail,
  },
];