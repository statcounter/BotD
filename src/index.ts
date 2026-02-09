import BotDetector from './detector'
import { sources, WindowSizePayload, ProcessPayload, DistinctivePropertiesPayload } from './sources'
import { detectors } from './detectors'
import { BotdError, BotDetectorInterface, BotKind, BotDetectionResult } from './types'
import { collect, detect } from './api'

export async function load(): Promise<BotDetectorInterface> {
  const detector = new BotDetector()
  await detector.collect()
  return detector
}

export default { load }

// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
/** Not documented, out of Semantic Versioning, usage is at your own risk */
export {
  sources,
  detectors,
  collect,
  detect,
  BotdError,
  WindowSizePayload,
  ProcessPayload,
  DistinctivePropertiesPayload,
  BotDetectionResult,
  BotKind,
}
