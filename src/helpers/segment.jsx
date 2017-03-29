import emitter from '../emitter'
import {canUseDOM} from 'fbjs/lib/ExecutionEnvironment'

let playSubscription, winSubscription

export default {
  enable() {
    if (canUseDOM) {
      if (typeof analytics === 'undefined') {
        const error = new Error('React A/B Test Segment Helper: "analytics" global is not defined.')
        error.type = 'PUSHTELL_HELPER_MISSING_GLOBAL'
        throw error
      }
      
      playSubscription = emitter.addPlayListener(
        (experimentName, variationName) => {
          analytics.identify(
            {[experimentName]: variationName}, 
            () => emitter.emit('segment-play', experimentName, variationName),
          )
          
          analytics.track(
            'Experiment Viewed', 
            {experimentName, variationName}, 
            () => emitter.emit('segment-play', experimentName, variationName),
          )
        }
      )
      
      winSubscription = emitter.addWinListener(
        (experimentName, variationName) =>
          analytics.track(
            'Experiment Won', 
            {experimentName, variationName}, 
            () => emitter.emit('segment-win', experimentName, variationName)
          )
      )
    }
  },
  disable() {
    if (canUseDOM) {
      if (!playSubscription || !winSubscription) {
        const error = new Error('React A/B Test Segment Helper: Helper was not enabled.')
        error.type = 'PUSHTELL_HELPER_INVALID_DISABLE'
        throw error
      }
      playSubscription.remove()
      winSubscription.remove()
    }
  }
}
