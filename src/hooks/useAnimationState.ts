import {useEffect, useState} from 'react';
import {AnimationState} from 'constants/animation';

function useAnimationState(defaultState: string, zeroToOneTransitionTime: number, oneToZeroTransitionTime: number) {
  const [animationState, setAnimationState] = useState(defaultState);
  useEffect(() => {
    let stateOneTimer: ReturnType<typeof setTimeout>;
    let stateZeroTimer: ReturnType<typeof setTimeout>;

    if (animationState === AnimationState.ONE) {
      stateZeroTimer = setTimeout(() => {
        setAnimationState(AnimationState.ZERO);
      }, oneToZeroTransitionTime);
    } else {
      stateOneTimer = setTimeout(() => {
        setAnimationState(AnimationState.ONE);
      }, zeroToOneTransitionTime);
    }
    return () => {
      if (stateOneTimer) clearTimeout(stateOneTimer);
      if (stateZeroTimer) clearTimeout(stateZeroTimer);
    };
  }, [animationState, oneToZeroTransitionTime, zeroToOneTransitionTime]);
  return animationState;
}

export default useAnimationState;
