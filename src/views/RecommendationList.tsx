import { AppContext, ModelParams, ProgressType, UserInputs } from 'context'
import { FunctionComponent, SVGProps, useContext, useState } from 'react'
import * as Images from 'assets/images'
import { ArrowDown, Checkmark, Pause, Plus } from 'assets/svg'
import { abstractParticles } from 'assets/models'
import pluralize from 'pluralize'

const timeString = (hours: number) => {
  let label = 'hour'
  let total = hours

  if (total < 2) {
    total = Math.round(total * 60)
    label = 'minute'
  } else if (total > 72) {
    total = total / 24
    label = 'day'
  }

  total = total > 10 ? Math.round(total) : Math.round(total * 10) / 10

  return `${total} ${pluralize(label, total)}`
}

export const RecommendationList: React.FC<{}> = () => {
  const [context] = useContext(AppContext)

  const [recommendations] = useState(() =>
    getRecommendations(context.userInputs, context.model, context.progress)
  )
  const room = abstractParticles

  return (
    <div className="xl:w-2/3 relative flex flex-col w-full gap-5 overflow-visible">
      <img
        src={room}
        alt="rendering of a generic room"
        className="xl:block translate-x-1/4 h-2/3 top-1/4 fixed right-0 z-0 hidden max-h-screen transform pointer-events-none"
      />
      {recommendations.map((rec: Recommendation, i) => (
        <div
          key={rec.header}
          className={`border-${rec.color}-500 z-10 flex flex-row items-center p-3 bg-white border-2 rounded-lg`}
        >
          <div className="relative flex-grow-0 flex-shrink-0 w-24 h-24">
            <rec.icon
              className={`text-${rec.color}-500 -top-1.5 -right-2 absolute w-5 h-5 fill-current`}
            />
            <img src={rec.image} alt="" className="object-cover w-24 h-24 rounded-full" />
          </div>
          <div className="pr-4 ml-8">
            <div className="mb-2 text-xl font-semibold text-gray-800">
              {i + 1}. {rec.Header ? <rec.Header {...context.progress} /> : rec.header}
            </div>
            <div className="font-light text-gray-800">
              {rec.Description ? <rec.Description {...context.progress} /> : rec.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
type Recommendation = {
  key?: string
  header: string
  description: string
  Header?: FunctionComponent<ProgressType>
  Description?: FunctionComponent<ProgressType>
  image: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  color: 'red' | 'blue' | 'light-blue' | 'purple'
  rank: number
}

type Recommendations = {
  exercise: Recommendation
  singing: Recommendation
  speaking: Recommendation
  ventilation: Recommendation
  filtration: Recommendation
  requireMasks: Recommendation
  provideMasks: Recommendation
  occupancy: Recommendation
  duration: Recommendation
}

const DurationDescription: React.FC<ProgressType> = ({
  safeHours,
  targetHours,
  targetOccupancy,
}) => {
  return (
    <span>
      The space is safe for {targetOccupancy} {pluralize('person', targetOccupancy)} for{' '}
      {timeString(safeHours)}. After that, you can make the space safe again by clearing out most or
      all occupants and allowing the space to fully ventilate.
    </span>
  )
}
const DurationHeader: React.FC<ProgressType> = (props) => {
  return <span>Fully ventilate the space every {timeString(props.safeHours)}</span>
}
const OccupancyHeader: React.FC<ProgressType> = (props) => {
  return <span>Reduce max occupancy</span>
}
const OccupancyDescription: React.FC<ProgressType> = (props) => {
  return (
    <span>
      This space is safe for {Math.floor(props.safeOccupancy)}{' '}
      {pluralize('person', Math.floor(props.safeOccupancy))} for your target of {props.targetHours}{' '}
      hours. Consider limiting max occupancy in the space to {Math.floor(props.safeOccupancy)}{' '}
      {pluralize('person', Math.floor(props.safeOccupancy))}.
    </span>
  )
}

const recs: Recommendations = {
  exercise: {
    key: 'exercise',
    header: 'Discourage or prohibit physical exercise',
    description:
      "When we exercise, we breathe heavily, projecting far more aerosols into the air than when we're at rest, making it much easier to transmit COVID-19 between occupants.",
    image: Images.physicalHeavy,
    color: 'red',
    icon: Pause,
    rank: 0,
  },
  singing: {
    header: 'Discourage or prohibit singing',
    description:
      'When we sing, vocal resonance breaks down saliva droplets into aerosols, which we project into the air, greatly increasing the risk of transmitting COVID-19 and other airborne diseases.',
    image: Images.vocalSinging,
    color: 'red',
    icon: Pause,
    rank: 0,
  },
  speaking: {
    header: 'Encourage quiet conversations',
    description:
      "Loud, animated speech releases more aerosols in the breath, leading to a greater risk of transmission. People speak louder to overcome ambient noise. Consider reducing background noise and music volumes so people aren't as likely to raise their voices.",
    image: Images.vocalNormal,
    color: 'blue',
    icon: Plus,
    rank: 0,
  },
  ventilation: {
    header: 'Open doors and windows to increase ventilation',
    description:
      'Outdoor air is almost entirely free of airborne viruses, so ventilating indoor spaces with outdoor air is one of the most effective ways to reduce the risk of aerosol transmission between occupants. Open doors and windows as often as possible, and use fans to increase the airflow in and out of the space.',
    image: Images.window,
    color: 'blue',
    icon: Plus,
    rank: 0,
  },
  filtration: {
    header: 'Upgrade to high efficiency filters',
    description:
      'Filters rated at MERV 13 or higher trap tiny airborne particles, including most viruses. These high efficiency filters are particularly effective in filtration systems with very high recirculation rates.',
    image: Images.hepa,
    color: 'light-blue',
    icon: Checkmark,
    rank: 0,
  },
  provideMasks: {
    header: 'Provide occupants with free disposable masks',
    description:
      'Disposable masks are inexpensive and effectively preventing the spread of COVID-19 indoors. Consider providing free disposable masks, especially if you decide to make masks mandatory in your space.',
    image: Images.maskDisposable,
    color: 'light-blue',
    icon: Checkmark,
    rank: 0,
  },
  requireMasks: {
    header: 'Require or encourage occupants to wear masks',
    description:
      "Properly worn face masks are one of the most effective ways of limiting the spread of COVID-19. However, mask requirements for unvaccinated occupants only are not effective, since it's difficult to verify that unmasked occupants have been vaccinated. Consider enforcing a mask requirement for all occupants in your space.",
    image: Images.maskCloth,
    color: 'blue',
    icon: Plus,
    rank: 0,
  },
  duration: {
    header: 'duration',
    description: '',
    Description: DurationDescription,
    Header: DurationHeader,
    image: Images.window,
    color: 'light-blue',
    icon: Checkmark,
    rank: 0,
  },
  occupancy: {
    header: 'occupancy',
    description: '',
    Description: OccupancyDescription,
    Header: OccupancyHeader,
    image: Images.adults,
    color: 'purple',
    icon: ArrowDown,
    rank: 0,
  },
}

const getRecommendations = (
  userInputs: UserInputs,
  model: ModelParams,
  progress: ProgressType
): Recommendation[] => {
  const heavyExercise = userInputs.physicalActivity.includes(3)
  const moderateExercise = userInputs.physicalActivity.includes(2)

  recs.exercise.rank = heavyExercise ? 8 : moderateExercise ? 5 : 0

  const singing = userInputs.vocalActivity.includes(3)
  recs.singing.rank = singing ? 9 : 0

  const loudTalking = userInputs.vocalActivity.includes(2)
  recs.speaking.rank = loudTalking ? 7 : 0

  // Filtration and ventilation have the smallest impacts
  recs.filtration.rank = userInputs.filtration < 3 ? 1 : 0
  recs.ventilation.rank = userInputs.ventilation < 4 ? 2 : 0

  const maskRank = model.mask_eff * model.mask_fit
  recs.provideMasks.rank = maskRank < 0.6 ? 6 : maskRank < 0.9 ? 4 : 1
  recs.requireMasks.rank = maskRank < 0.6 ? 6 : maskRank < 0.9 ? 4 : 1

  recs.occupancy.rank = progress.safeHours < progress.targetHours ? 1 : 0
  recs.duration.rank = progress.safeHours < progress.targetHours ? 1 : 0

  return Object.values(recs)
    .filter((rec) => rec.rank !== 0)
    .sort((a: Recommendation, b: Recommendation) => b.rank - a.rank)
}

// Impact Significance

/**
 * -- Dependant on Values --
 * 1. No Singing
 * 2. No Heavy exercise
 * 3. No loud talking
 * 4. Increase mask quality & compliance (none to some) (more important the fewer people are doing it)
 * 5. No moderate exercise
 * 6. Increase mask quality & compliance (some to most/all)
 * 7. Increase Ventilation
 * 8. Increase Filtration
 * --- When below target --
 * 9. Occupancy Limit
 * -- Always --
 * 9. Encourage local vaccination
 * 9. Occupancy Duration + ventilate
 */
