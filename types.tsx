export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Dashboard: undefined;
  "My Driver Score": undefined;
  "My Trips": undefined;
  About: undefined;
};

export type TabOneParamList = {
  Dashboard: undefined;
};

export type TabTwoParamList = {
  "My Driver Score": undefined;
};

export type TabThreeParamList = {
  "My Trips": undefined;
};

export type TabFourParamList = {
  About: undefined;
};

export type ScoreCardData = {
  id: string;
  title: string;
  score: number;
  recommendation: string;
};

export type TripCardData = {
  id: string;
  type: "business" | "personal";
  startTrip: Date;
  endTrip: Date;
};
