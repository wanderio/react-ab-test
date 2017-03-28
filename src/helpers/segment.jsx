import emitter from "../emitter";
import {canUseDOM} from 'fbjs/lib/ExecutionEnvironment';

let identifySubscription;

export default {
  enable(){
    if(canUseDOM) {
      if(typeof analytics === "undefined") {
        const error = new Error("React A/B Test Segment Helper: 'analytics' global is not defined.");
        error.type = "PUSHTELL_HELPER_MISSING_GLOBAL";
        throw error;
      }
      identifySubscription = emitter.addIdentifyListener((experimentName, variantName) => {
        analytics.identify({[experimentName]: variantName}, () =>
          emitter.emit('analytics-identify', experimentName, variantName)
        )
      })
    }
  },
  disable(){
    if(canUseDOM) {
      if(!playSubscription || !winSubscription) {
        const error = new Error("React A/B Test Segment Helper: Helper was not enabled.");
        error.type = "PUSHTELL_HELPER_INVALID_DISABLE";
        throw error;
      }
      identifySubscription.remove()
    }
  }
}
