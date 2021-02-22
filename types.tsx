export type RootStackParamList = {
  Dashboard: undefined;
  NotFound: undefined;
  "My Driver Score": undefined;
  "My Trips": undefined;
  About: undefined;
};

export type ScoreCardData = {
  title: string;
  score: number;
  recommendation: string;
};

export type TripCardData = {
  type: string;
  startTrip: number;
  endTrip: number;
};
