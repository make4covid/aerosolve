import { PageHeaderProps } from 'components/PageHeader/PageHeader';

const TargetOccupancyHeader: PageHeaderProps = {
  title: '01/Target Occupancy',
  description: 'What is the target occupancy for this space',
};

const LocationHeader: PageHeaderProps = {
  title: '02/Location',
  description: 'Where is the occupied space located',
  details:
    'Different age groups of people have different risk levels in the events of an aerosol infection',
};

const TypeOfSpaceHeader: PageHeaderProps = {
  title: '03/Type Of Space',
  description: 'What is the typology of the occupied space?',
  details:
    'Why understading the room type can help determine the risk in viral transmission',
};
const AreaOfSpaceHeader: PageHeaderProps = {
  title: '04/Are of Space',
  description: "About how large is the space you're evaluation?",
  details:
    'Why understading the room type can help determine the risk in viral transmission',
};

const CeilingHeightHeader: PageHeaderProps = {
  title: '05/Ceiling Height',
  description: 'About how tall, on average, is the ceiling in the space?',
  details:
    'Ceiling height provides accurate data to the calculation of room volume in air exchange rate',
};
const OccupantAgeGroupHeader: PageHeaderProps = {
  title: '06/Occupant Age Groups',
  description: 'About how tall, on average, is the ceiling in the space?',
  details:
    'Different age groups of people have different risk levels in the event of an aerosol infection',
};

const VocalActivityHeader: PageHeaderProps = {
  title: '07/Vocal Activity',
  description: 'What types of vocal activities are typical in the space?',
  details: '',
};

const PhysicalActivityHeader: PageHeaderProps = {
  title: '08/Physical Activity',
  description: 'What types of physical activities are typical in the space?',
  details:
    'Challenging physical activity increases breathing rates, which means more aerosols are released into the air',
};

const MaskFitHeader: PageHeaderProps = {
  title: '09/Mask Types',
  description:
    'What type of masks are worn by most occupants within the space?',
  details:
    'Masks are the most important factor in keeping your space safe and preventing virus tranmission between occupants',
};

const TypeOfMaskHeader: PageHeaderProps = {
  title: '10/Mask Fit',
  description: 'Quick survey of mask compliance among the occupants',
  details:
    'Wearing masks correctly is an effective way to prevent the aerosol transmission of coronavirus',
};

const VentilationFiltrationHeader: PageHeaderProps = {
  title: '11/Ventilation+Filtration',
  description: 'Quick survey of the population of occupants in the space',
  details:
    'Different age groups of people have different risk levels in the event of an aerosol infection',
};

export const headers = {
  MaskFitHeader,
  LocationHeader,
  TypeOfMaskHeader,
  AreaOfSpaceHeader,
  TypeOfSpaceHeader,
  CeilingHeightHeader,
  VocalActivityHeader,
  TargetOccupancyHeader,
  OccupantAgeGroupHeader,
  PhysicalActivityHeader,
  VentilationFiltrationHeader,
};
