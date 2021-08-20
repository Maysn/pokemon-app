const IN_FIGHT = "IN_FIGHT";
const DONE_FIGHT = "DONE_FIGHT";

export const inFight = () => ({
  type: IN_FIGHT,
});

export const doneFight = () => ({
  type: DONE_FIGHT,
});

const initialState = {
  fighting: false,
};

export default function fightStatus(state = initialState, action) {
  switch (action.type) {
    case IN_FIGHT:
      return { ...state, fighting: true };

    case DONE_FIGHT:
      return { ...state, fighting: false };

    default:
      return state;
  }
}
